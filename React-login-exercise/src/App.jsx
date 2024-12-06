import { useState } from "react";
import LoginForm from "./Components/LoginForm";
import RegistrationForm from "./Components/RegistrationForm";
import LoggedPage from "./components/LoggedPage";

function App() {
  const [currentlyActivePage, setCurrentlyActivePage] = useState("login");

  // Registracija.
  //username, password, password confirm, email,
  //phone + sutinku su taisyklėm ir t.t. + mygtukas formos išsiuntimui

  // Prisijungimas.
  // username/email
  // + password.

  const isPageNotFound = !(
    currentlyActivePage === "login" ||
    currentlyActivePage === "register" ||
    currentlyActivePage === "loggedPage"
  );

  return (
    <>
      {currentlyActivePage === "login" && (
        <LoginForm switchPage={setCurrentlyActivePage} />
      )}

      {currentlyActivePage === "register" && (
        <RegistrationForm switchPage={setCurrentlyActivePage} />
      )}
      {currentlyActivePage === "loggedPage" && (
        <LoggedPage switchPage={setCurrentlyActivePage} />
      )}

      {isPageNotFound && <div>Puslapis nerastas</div>}
    </>
  );
}

export default App;
