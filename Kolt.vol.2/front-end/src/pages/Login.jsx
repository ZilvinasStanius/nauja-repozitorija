import {
	Button,
	Grid2 as Grid,
	Paper,
	TextField,
	Typography,
} from "@mui/material";
import "../css/login.css";

export default function LoginPage() {
	// TODO: Jei useris prisijungęs, redirectinti į dashboard
	async function onSubmit(e) {
		e.preventDefault();
		const formData = new FormData(e.target);

		// susiformuojame obj, kad kreiptis į API
		const loginData = {
			usernameOrEmail: formData.get("usernameOrEmail"),
			password: formData.get("password"),
		};

		//validacijos jei ju prireiks

		const promise = await fetch("/server/api/auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(loginData),
		});

		if (promise.ok) window.location.href = "/";
		else {
			const response = await promise.json();
			alert(response.message);
		}
	}

	return (
		<Paper id="login">
			<Typography variant="h5">Prisijungimas</Typography>
			<hr />
			<form onSubmit={onSubmit}>
				<Grid
					container
					spacing={2}
					sx={{ mt: "2rem" }}
				>
					<Grid size={12}>
						<TextField
							type="text"
							variant="standard"
							label="Username or Email address"
							name="usernameOrEmail"
							fullWidth
						/>
					</Grid>
					<Grid size={12}>
						<TextField
							type="password"
							variant="standard"
							label="Password"
							name="password"
							fullWidth
						/>
					</Grid>
					<Grid size={12}>
						<Button
							type="submit"
							variant="outlined"
							sx={{ mt: "1rem" }}
						>
							Prisijungti
						</Button>
					</Grid>
				</Grid>
			</form>
			<a
				href="/register"
				className="link-mt"
			>
				Go to Registration
			</a>
		</Paper>
	);
}
