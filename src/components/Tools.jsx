import React from "react";
import Container from "./Container";

function Tools(){
    return <>
    <h2 id="tools_h2" className="tools_titles">The world's most popular currency tools</h2>
    <div className="tools">
        

        <Container 
        classIcon="fa fa-paper-plane"
        subTitle="Xe International Money Transfer"
         definiton="Send money online fast, secure and easy. Live tracking and notifications + flexible delivery and payment options." 
         show={true}
         buttonName="Send money"/>

         <Container 
        classIcon="fa fa-line-chart"
        subTitle="Xe Currency Charts"
         definiton="Create a chart for any currency pair in the world to see their currency history. These currency charts use live mid-market rates, are easy to use, and are very reliable." 
         show={true}
         buttonName="View charts"/>

         <Container 
        classIcon="fa fa-bell"
        subTitle="Xe Rate Alerts"
         definiton="Need to know when a currency hits a specific rate? The Xe Rate Alerts will let you know when the rate you need is triggered on your selected currency pairs." 
         show={true}
         buttonName="Create alert"/>

       
    </div>
    </>
}

export default Tools;