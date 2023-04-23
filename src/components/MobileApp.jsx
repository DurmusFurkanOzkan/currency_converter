import React from "react";



function MobileApp(){
    return  <>
    <div className="MobileAppClass">   
    
    <div>
        <img src="../images/mobile_app.png" width={"400px"} alt="" /></div>
    

    <div className="MobileAppRight">
    <h2 id="mobile_h2" className="tools_titles">Download the Xe App</h2>
    <p className="tools_pg">Check live rates, send money securely, set rate alerts, receive notifications and more.</p>
    <div className="scan_section"> 
        <img src="../images/qr.png" width={"100px"} alt="" />
        <p id="scan_text">Scan me!</p>
    </div>
    <div className="mobile_app_icons">
        <img className ="app_icon" src="../images/app.jpg"  width={"180px"}alt="" />
        <img className ="app_icon" src="../images/play_store.jpg" width={"180px"} alt="" />
    </div>
    
    <p id="bottom_text"> Over 70 million downloads worldwide</p>
  

    

    </div>
   
    </div>
    </>
   
}

export default MobileApp;