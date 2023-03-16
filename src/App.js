// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Alert from "./components/Alert";
// import About from './components/About';
import { useState } from "react";

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";

function App() {

  let show_alert=(message,type)=>{


    setAlert({
    
      msg:message,
      type:type
    })

    setTimeout(() => {

      setAlert(null);
      
    }, 2000);

    
      }

  const Enable_dark = () => {
    if (mode === "dark") {
      setMode("light");
      set_name("Enable darkmode");
      document.body.style.backgroundColor = "white";
      show_alert('dark mode is enabled','success')
      document.title='Textutils - darkmode';

    } else {
      setMode("dark");
      set_name("Enable lightmode");
      document.body.style.backgroundColor = "#142148";
      show_alert('light mode is enabled','success')
       document.title='Textutils - lightmode';
    }
  };

  const [mode, setMode] = useState("light");
  const [txt_name, set_name] = useState("Enable darkmode");
  const [alert,setAlert]=useState(null);

  

  return (
    <>
    {/* <Router> */}
      <Navbar
        title="textUtils"
        mode={mode}
        toggle_dark={Enable_dark}
        txt_name={txt_name}
      />

      <Alert alert={alert} />


      {/* <Routes> */}
          {/* <Route exact path="/about" element={<About/>}/> */}
            
          {/* <Route exact path="/" element={<Form heading="enter text to analyze below" mode={mode} show_alert={show_alert} />}/> */}

          <Form heading="enter text to analyze below" mode={mode} show_alert={show_alert} />
        
      {/* </Routes> */}

      {/* </Router> */}

    </>

  );
}

export default App;
