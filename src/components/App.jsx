import React from "react";
import Back from  "./Back.jsx";
import Navbar from "./Navbar.jsx";
import Sections from "./Sections.jsx";
import Tools from "./Tools.jsx";
import DataApi from "./DataApi.jsx";
import TransferMoneyInformation from "./TransferMoneyInformation.jsx";
import XeCurrency from "./XeCurrency.jsx";
import MobileApp from "./MobileApp.jsx";
import Footer from "./Footer.jsx";

function App() {
  return <>
  <div className="top"></div>
  <div className="total">
      <Navbar/>
      <Back class="dark_blue_background"/>
      <Sections />
      <TransferMoneyInformation />
      <Tools/>
      <Back class="data_api_back"/>
      <DataApi/>
      <XeCurrency />
      
      <MobileApp />
    </div>
  <Footer />
  </>
  
}

export default App;


//