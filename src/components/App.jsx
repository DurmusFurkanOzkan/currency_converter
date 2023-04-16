import React from "react";
import Back from  "./Back.jsx";
import Navbar from "./Navbar.jsx";

function App() {
  return <div className="total">
      <Navbar/>
      <Back/>
      <h1 id="top_h1">The World's Trusted Currency Authority</h1>
      <p id="top_p">Check exchange rates, send money internationally, and free currency tools</p>
  </div>
}

export default App;
