import React from "react";
import Back from  "./Back.jsx";
import Navbar from "./Navbar.jsx";
import Sections from "./Sections.jsx";
import Tools from "./Tools.jsx";

function App() {
  return <>
  <div className="top"></div>
  <div className="total">
      <Navbar/>
      <Back/>
      <Sections />
      <Tools/>
    </div>
  </>
  
}

export default App;
