import { useState } from "react";
import PasswordInput from "./PasswordInput";
import SubmitButton from "./SubmitButton";
import UsernameInput from "./UsernameInput";
import RepeatPassword from "./RepeatPassword";
import EmailInput from "./EmailInput";
import PhoneInput from "./PhoneInput";

export default function RegistrationForm({ switchPage }) {
	const [password, setPassword] = useState("");

	// TODO sukurti puslapį, kuris prieinamas tik prisijungus. (Prisijungimo logika naudojantis localStorage)

	function handleRegistration(e) {
		e.preventDefault();
		const formData = new FormData(e.target);
		const registrationData = {}; //

		formData.forEach((val, key) => {
			registrationData[key] = val === "on" ? true : val;
		});
		console.log(registrationData);

		// operatorius arba gaunant reikšmę
		const registeredUsers = JSON.parse(localStorage.getItem("users")) || [];
		// username ir elektroniniai paštai turi būti unikalūs

		// .some - bent vienas turi atitikti sąlygą, kad gautume true
		// .every - visi turi atitikti sąlyga, kad gautume true
		//true/false

		const uniqueValidation = uniqueFieldsValidation(
			registeredUsers,
			registrationData,
			["email", "username", "phone"]
		);
		if (!uniqueValidation) return;

		registeredUsers.push(registrationData);
		localStorage.setItem("users", JSON.stringify(registeredUsers));

		switchPage("login");
		// gauti jau esamas registracijas. Jei nėra dar apibrėžtas key, jam nustatyti [];
		// Į jau esamas registracijas pridėti nauja naudotoją.
		// Išsaugoti localStorage.

		// localStorage.setItem("key", "value");
		// localStorage.key; string/null
	}

	function uniqueFieldsValidation(
		registeredUsersArray,
		registrationData,
		validatedFields
	) {
		for (const validatedField of validatedFields) {
			const isUserByFieldNotUnique = registeredUsersArray.some(
				(user) => user[validatedField] === registrationData[validatedField]
			);
			if (isUserByFieldNotUnique) {
				alert(`Naudotojas su tokiu ${validatedField} jau egzistuoja`);
				return false;
			}
		}

		return true;
	}

	return (
		<div className="container mx-auto bg-slate-50 py-5 px-10">
			<form onSubmit={handleRegistration}>
				<div className="flex items-baseline gap-x-4">
					<h2 className="text-2xl">Register Form</h2>
					<span
						className="text-blue-500 hover:text-blue-600 hover:underline cursor-pointer"
						onClick={() => {
							switchPage("login");
						}}
					>
						Go to Log In
					</span>
				</div>
				<UsernameInput />
				<PasswordInput onPasswordChange={setPassword} />
				<RepeatPassword password={password} />
				<EmailInput />
				<PhoneInput />

				<div>
					<label htmlFor="acceptTermsInput">
						Do you accept Terms&Conditions?
					</label>
					<input
						type="checkbox"
						className="ml-4"
						name="termsCheckbox"
						id="acceptTermsInput"
						required
					/>
				</div>

				<div>
					<SubmitButton>My submit button</SubmitButton>
				</div>
			</form>
		</div>
	);
}
