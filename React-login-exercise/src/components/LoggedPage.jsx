import SubmitButton from "./SubmitButton";

export default function LoggedPage({ switchPage }) {
  const loggedInUser = JSON.parse(localStorage.getItem("LoggedInUsers"));

  return (
    <div>
      <p>
        Sveiki prisijungę <b>{loggedInUser[0].username}</b>.
      </p>
      <div>
        <h3>Jūsų duomenys:</h3>
        <p>Elektroninis paštas: {loggedInUser[0].email}</p>
        <p>Telefono numeris: {loggedInUser[0].phone}</p>
      </div>
      <SubmitButton
        onClick={() => {
          localStorage.removeItem("LoggedInUsers");
          switchPage("login");
        }}
      >
        Atsijungti
      </SubmitButton>
    </div>
  );
}
