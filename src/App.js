// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import About from './components/About';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark Mode has been set", "success");
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#092950';
      showAlert("Light Mode has been set", "success");
    }
  }

  return (
    <>
      {/* <Navbar title="TextUtils" about="About TextUtils"/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container my-3">
            <Textform heading="Enter text to analyze below" mode={mode} showAlert={showAlert} />
          </div>

      {/* <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <Routes>
      
        <Route path="/" element={<div className="container my-3">
            <Textform heading="Enter text to analyze below" mode={mode} showAlert={showAlert} />
          </div>} />
        <Route path="/about" element={<About/>} />
      </Routes>

    </Router> */}
    </>
  );
}

export default App;
