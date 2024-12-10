import { useEffect, useState } from 'react';

function App() {
  const [isDarkMode, setDarkMode] = useState(() => {
    const darkMode = localStorage.getItem('isDark');
    return darkMode ? JSON.parse(darkMode) : false;
  });

  // useEffect(() => {
  //   const darkMode = localStorage.getItem('isDark');
  //   if (darkMode) {
  //     setDarkMode(JSON.parse(darkMode));
  //   } else {
  //     setDarkMode(false);
  //     localStorage.setItem('isDark', JSON.stringify(false));
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem('isDark', JSON.stringify(isDarkMode));

    if (isDarkMode === true) {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }, [isDarkMode]);

  return (
    <>
      <h1>Daug teksto.............</h1>
      <button
        onClick={() => {
          setDarkMode((previousValue) => !previousValue);
        }}
        className={`px-3 py-1 mx-2 rounded ${
          isDarkMode
            ? 'bg-gray-600 hover:bg-gray-700 text-white'
            : 'bg-gray-200 hover:bg-gray-300 text-black'
        }`}
      >
        {isDarkMode ? 'Light mode' : 'Dark mode'}
      </button>
    </>
  );
}

export default App;
