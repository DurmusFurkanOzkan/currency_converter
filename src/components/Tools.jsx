import React from "react";

function Tools(){
    return <>
    <h2 id="tools_h2" className="tools_titles">The world's most popular currency tools</h2>
    <div className="tools">
        
        <div className="tools_definitions">
           
                <i  class="fa fa-paper-plane" style={{fontSize:"48px"}}></i>
                <h3 className="tools_titles">Xe International Money Transfer</h3>
                <p className="tools_pg">Send money online fast, secure and easy. Live tracking and notifications + flexible delivery and payment options.</p>
                <button className="tools_button">Send Money</button>
            
        </div>
        <div  className="tools_definitions">
                <i class="fa fa-line-chart"  style={{fontSize:"48px"}}></i>
                <h3 className="tools_titles">Xe Currency Charts</h3>
                <p className="tools_pg">Create a chart for any currency pair in the world to see their currency history. These currency charts use live mid-market rates, are easy to use, and are very reliable.</p>
                <button className="tools_button">View charts</button>
        </div>
        <div  className="tools_definitions">
                <i class="fa fa-bell"  style={{fontSize:"48px"}}></i>
                <h3 className="tools_titles">Xe Rate Alerts</h3>
                <p className="tools_pg">Need to know when a currency hits a specific rate? The Xe Rate Alerts will let you know when the rate you need is triggered on your selected currency pairs.</p>
                <button className="tools_button">Create alert</button>
        </div>
    </div>
    </>
}

export default Tools;