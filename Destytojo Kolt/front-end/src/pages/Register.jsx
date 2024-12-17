import '../css/register.css';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  async function sendForm(data) {
    const promise = await fetch('http://localhost/server/api/auth/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!promise.ok) {
      const errorMessage = await promise.json();
      const err = errorMessage.message.map((error) => error.message);
      console.log(err);
      setErrors(err);
    }
    return promise;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const fromValues = {};

    formData.forEach((value, key) => {
      fromValues[key] = value;
    });

    // Password validacija
    if (!(fromValues.repeatPassword === fromValues.password)) {
      console.log(errors);
      // Jei nematchina
      setMessage("Password don't match");
      return setTimeout(() => {
        setMessage('');
      }, '2000');
    }
    // Jei matchina

    const fixedValues = {
      username: fromValues.username,
      email: fromValues.email,
      password: fromValues.password,
    };
    sendForm(fixedValues).then((response) => {
      if (response.ok) {
        setMessage('Account created');
        setErrors([]);
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      }
    });
  }
  return (
    <main id="register">
      <h1
        style={
          message === 'Account created' ? { color: 'green' } : { color: 'red' }
        }
      >
        {message}
      </h1>

      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          variant="standard"
          // color="success"
          fullWidth
          name="username"
          sx={{ margin: '10px 0 ' }}
        />
        <TextField
          label="Email"
          variant="standard"
          fullWidth
          name="email"
          sx={{ margin: '10px 0 ' }}
        />
        <TextField
          label="Password"
          variant="standard"
          fullWidth
          name="password"
          sx={{ margin: '10px 0 ' }}
        />
        <TextField
          label="Repeat Password"
          variant="standard"
          fullWidth
          name="repeatPassword"
          sx={{ margin: '10px 0 ' }}
        />
        <Button
          sx={{ margin: '25px 0 ' }}
          fullWidth
          variant="outlined"
          color="Black"
          endIcon={<SendIcon />}
          type="submit"
        >
          Register
        </Button>
        <ul>
          {errors.map((err, index) => (
            <li
              key={index}
              style={{ color: 'red', fontSize: '0.8rem' }}
            >
              {err}
            </li>
          ))}
        </ul>
      </form>
    </main>
  );
}
