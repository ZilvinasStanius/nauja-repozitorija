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

		delete registrationData.repeatPassword;
		// console.log(registrationData);
		const promise = await fetch("/server/api/auth/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(registrationData),
		});

		if (!promise.ok) {
			const issues = await promise.json();
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
					<Grid size={12}>
						<TextField
							type="text"
							name="username"
							label="Username"
							error={!!errors.username}
							helperText={errors.username}
							variant="standard"
							fullWidth
						/>
					</Grid>
					<Grid size={12}>
						<TextField
							type="text"
							name="email"
							label="Username"
							error={!!errors.email}
							helperText={errors.email}
							variant="standard"
							fullWidth
						/>
					</Grid>
					<Grid size={{ xs: 12, md: 6 }}>
						<TextField
							type="password"
							name="password"
							label="Password"
							error={!!errors.password}
							helperText={errors.password}
							variant="standard"
							fullWidth
						/>
					</Grid>
					<Grid size={{ xs: 12, md: 6 }}>
						<TextField
							type="password"
							name="repeatPassword"
							label="Repeat Password"
							error={!!errors.repeatPassword}
							helperText={errors.repeatPassword}
							variant="standard"
							fullWidth
						/>
					</Grid>
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
		</Paper>
	);
}
