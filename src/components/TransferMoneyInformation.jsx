import React from "react";
import Container from "./Container";

function TransferMoneyInformation(){

    return <>
    <h2 id="tools_h2" className="tools_titles">How to transfer money in 3 easy steps</h2>
    <div className="tools">
        
    <Container 
        classIcon="fa fa-user"
        subTitle="1. Create account"
         definiton="It takes just a few minutes, and all you need is an email address" 
         />

         <Container 
        classIcon="fa fa-address-card"
        subTitle="2. Enter Details"
         definiton="Add recipient (you'll need their address, bank account/IBAN, swift/BIC) and payment information." 
        />

         <Container 
        classIcon="fa fa-check"
        subTitle="3. Confirm and send"
         definiton="Check the currencies and amount are correct, get the expected delivery date, and send your money transfer." 
         />

    </div>
    <button className="convert_button">Get Started</button>
    </>
}

export default TransferMoneyInformation;