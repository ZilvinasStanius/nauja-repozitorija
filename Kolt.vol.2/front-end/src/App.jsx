import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  // createBrowserRouter,
} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import SessionContext from './context/SessionContext';
import { useEffect, useState } from 'react';
function App() {
  const [sessionState, setSessionState] = useState({
    user: { email: '', username: '' },
    isLogged: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    async function checkSession() {
      const promise = await fetch('/server/api/auth/session/');
      const response = await promise.json();
      setSessionState(response);

      const currentPath = location.pathname;

      if (currentPath === '/' && !response.isLogged) {
        navigate('/login');
      }

      if (
        (currentPath === '/login' || currentPath === '/register') &&
        response.isLogged
      ) {
        navigate('/');
      }
    }
    checkSession();
  }, []);

  return (
    <SessionContext.Provider value={sessionState}>
      {/* <BrowserRouter> */}
      <Routes>
        <Route
          path="/"
          element={<Dashboard />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
      </Routes>
      {/* </BrowserRouter> */}
    </SessionContext.Provider>
  );
}

export default App;
