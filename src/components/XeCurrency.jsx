import React from "react";
import Container from "./Container";

function XeCurrency(){

    return <>
    <h3 id="tools_h2" className="tools_titles">Xe Currency Tools</h3>
    <div className="tools">
        
    <Container 
        classIcon="fa fa-clock-o"
        subTitle="Historical Currency Rates"
         />

         <Container 
        classIcon="fa fa-address-card"
        subTitle="Travel Expenses Calculator"
        />

         <Container 
        classIcon="fa fa-check"
        subTitle="Currency Email Updatess"
         />

    </div>
    <button className="convert_button">More tools</button>
    </>
}

export default XeCurrency;