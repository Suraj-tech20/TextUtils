import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Textfunctions from './components/Textfunctions';
import Alert from './components/Alert';

function App() {
  const [darkmode, setDarkMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const toggleMode = (name) => {
    if (name === 'light') {
      setDarkMode('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black"
      // how to change titles
      // document.title = "TextUtils - Light Mode"
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
      showalert("Light mode enabled", "success");
    } else {
      if (name === 'info') {
        document.body.style.backgroundColor = "#171238";
        setDarkMode('info');
        showalert("Dark mode enabled", "success");
      } else if (name === 'success') {
        document.body.style.backgroundColor = "#104516";
        setDarkMode('success');
        showalert("Green mode enabled", "success");
      } else {
        setDarkMode('danger');
        document.body.style.backgroundColor = "#762020";
        showalert("Red mode enabled", "success");
      }
      document.body.style.color = "white"
    }
  };

  const showalert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1400);
  }

  return (
    <>
      <Navbar toggleMode={toggleMode} mode={darkmode} />
      <Alert alert={alert} />
      <Textfunctions mode={darkmode} showalert={showalert} />
    </>
  );
}

export default App;