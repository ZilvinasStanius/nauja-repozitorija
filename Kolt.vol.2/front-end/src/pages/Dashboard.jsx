export default function DashboardPage() {
	// /server/api/auth/log-out
	async function logout() {
		const promise = await fetch("/server/api/auth/log-out");
		if (promise.ok) window.location.href = "/login";
		else {
			const response = await promise.json();
			alert(response.message);
		}
	}
	// TODO: Jei useris neprisijungęs, redirectinti į login
	return (
		<div>
			<h2>Dashboard</h2>
			<button onClick={logout}>Log out</button>
		</div>
	);
}
