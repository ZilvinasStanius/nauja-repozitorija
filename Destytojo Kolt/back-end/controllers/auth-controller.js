import {
  generateSalt,
  hashPassword,
  isValidCredentials,
} from '../utils/security.js';
import { registrationSchema } from '../utils/validations/AuthSchema.js';
import UserModel from '../models/UserModel.js';
import { Op } from 'sequelize';

export async function register(req, res) {
  // Patikrinimas ar naudotojas yra prisijunges
  if (req.session.isLogged)
    return res.status(403).json({
      message: 'You are already logged in. Please log out to create a new User',
    });

  // Gauname duomenis iš kliento
  const { username, email, password } = req.body;

  try {
    // Įvykdome validacijas
    const validationResult = registrationSchema.safeParse(req.body);
    if (!validationResult.success)
      return res.status(400).json({ message: validationResult.error.issues });

    // Slaptažodžio užhašavimas (užšifravimas)
    const salt = generateSalt();
    const hashedPassword = hashPassword(password, salt);

    // Sukuriamas useris duomenų bazėje
    const user = await UserModel.create({
      username,
      email,
      hashedPassword,
      salt,
    });

    //Sudarome sesijos duomenis
    req.session.user = {
      email,
      username,
    };
    req.session.isLogged = true;

    //Registracija buvo sėkminga, atiduodame sėkmingą atsakymą
    res
      .status(201)
      .json({ message: 'Registration was successful', session: req.session });
  } catch (err) {
    // Sequelize errorai turi unikalų objekto laukelį pavadinimu .original
    if (err?.original && err.original.errno === 1062) {
      return res
        .status(400)
        .json({ message: 'username or email field was not unique' });
    }
    res
      .status(500)
      .json({ message: 'internal server error', err: err.message });
  }
}
export async function login(req, res) {
  // Jei naudotojas prisijungęs, neleidžiame
  if (req.session.isLogged)
    return res.status(403).json({
      message: 'You are already logged in',
    });

  // Priimame duomenis iš kliento
  const { password, usernameOrEmail } = req.body;
  try {
    // Ieškome jau egzistuojančio naudotojo pagal username, arba email
    const existingUser = await UserModel.findOne({
      where: {
        [Op.or]: {
          username: usernameOrEmail,
          email: usernameOrEmail,
        },
      },
    });

    // Jei naudotojas neatrastas, anksti returniname ir sakome, kad useris nerastas
    if (!existingUser)
      return res.status(404).json({ message: 'User was not found' });

    // Patikrinimas ar slaptažodis šiam useriui yra tinkamas
    if (
      !isValidCredentials(
        password,
        existingUser.salt,
        existingUser.hashedPassword
      )
    )
      return res.status(400).json({ message: 'Invalid credentials' });

    //Sudarome sesijos duomenis
    req.session.user = {
      email: existingUser.email,
      username: existingUser.username,
    };
    req.session.isLogged = true;

    // Returniname sėkmingą atsakymą
    return res
      .status(200)
      .json({ message: 'Logged in successfully', session: req.session });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
}
export async function logout(req, res) {
  // Jei naudotojas neprisijungęs, neleidžiame atsijungti
  if (!req.session.isLogged)
    return res.status(403).json({
      message: 'You are already logged out',
    });
  // Jei prisijungęs, tada jį atjungiame
  req.session.destroy();
  res.status(200).json({ message: 'You logged out successfully' });
}
