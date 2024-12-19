import "../css/register.css";
import {
	Button,
	Grid2 as Grid,
	Paper,
	TextField,
	Typography,
} from "@mui/material";
import { registrationSchema } from "../utils/validations/AuthSchema";
import { useState } from "react";
export default function RegisterPage() {
	// TODO: Jei useris prisijungęs, redirectinti į dashboard

	// Error statai, skirti kiekvienam TextFieldui
	const [errors, setErrors] = useState({
		username: "",
		email: "",
		repeatPassword: "",
		password: "",
	});

	async function handleFormSubmit(e) {
		// Kad neišsisiųstų forma.
		e.preventDefault();
		const formData = new FormData(e.target);
		const registrationData = {
			username: formData.get("username"),
			email: formData.get("email"),
			password: formData.get("password"),
			repeatPassword: formData.get("repeatPassword"),
		};
		// Patikriname ar slaptažodžiai sutampa
		if (registrationData.password !== registrationData.repeatPassword) {
			setErrors((current) => ({
				...current,
				password: "Passwords does not match",
				repeatPassword: "Passwords does not match",
			}));
		} else {
			setErrors((current) => ({
				...current,
				password: "",
				repeatPassword: "",
			}));
		}
		// Validuojame kitus laukelius
		const validationResult = registrationSchema.safeParse(registrationData);
		console.log(validationResult);

		if (!validationResult.success) {
			//jei nepraejo validacija
			validationResult.error.issues.forEach((issue) => {
				setErrors((current) => ({
					...current,
					[issue.path[0]]: issue.message,
				}));
			});
		}

		delete registrationData.repeatPassword;
		// console.log(registrationData);
		const promise = await fetch("/server/api/auth/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(registrationData),
		});

		// Patikrinimas ar serveris atsakė teigiamai
		if (promise.ok) {
			// Perkeliame i kita puslapi naudotoja
			window.location.href = "/";
		} else {
			const response = await promise.json();
			// Jei response.error yra masyvas - tai yra validacijos klaidos
			if (response.error && Array.isArray(response.error)) {
				response.error.forEach((issue) => {
					setErrors((current) => ({
						...current,
						[issue.path[0]]: issue.message,
					}));
				});
			} else {
				//jei response.error nera masyvas, visada gauname response.message
				alert(response.message);
			}
		}
	}

	return (
		<Paper id="register">
			<Typography variant="h5">Registration form</Typography>
			<hr />
			<form onSubmit={handleFormSubmit}>
				<Grid
					spacing={2}
					container
				>
					<GridedTextField
						name="username"
						label="Username"
						error={errors.username}
					/>

					<GridedTextField
						name="email"
						type="email"
						label="Email"
						error={errors.email}
					/>
					<GridedTextField
						size={{ xs: 12, md: 6 }}
						name="password"
						type="password"
						label="Password"
						error={errors.password}
					/>
					<GridedTextField
						size={{ xs: 12, md: 6 }}
						name="repeatPassword"
						type="password"
						label="Repeat Password"
						error={errors.repeatPassword}
					/>

					<Grid size={12}>
						<Button
							type="submit"
							variant="outlined"
							fullWidth
						>
							Register
						</Button>
					</Grid>
				</Grid>
			</form>
			<a
				href="/login"
				className="link-mt"
			>
				Go to Login
			</a>
		</Paper>
	);
}

function GridedTextField({
	size = 12,
	type = "text",
	variant = "standard",
	label = "default label",
	fullWidth = true,
	name = "defaultName",
	error = "",
}) {
	const TextFieldProps = {
		type,
		variant,
		label,
		fullWidth,
		name,
		error: !!error,
		helperText: error,
	};
	return (
		<Grid size={size}>
			<TextField {...TextFieldProps} />
		</Grid>
	);
}
