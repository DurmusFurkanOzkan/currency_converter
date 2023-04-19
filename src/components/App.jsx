import React from "react";
import Back from  "./Back.jsx";
import Navbar from "./Navbar.jsx";
import Sections from "./Sections.jsx";
import Tools from "./Tools.jsx";
import DataApi from "./DataApi.jsx";

function App() {
  return <>
  <div className="top"></div>
  <div className="total">
      <Navbar/>
      <Back class="dark_blue_background"/>
      <Sections />
      <Tools/>
      <Back class="data_api_back"/>
      <DataApi/>
    </div>
  </>
  
}

export default App;
