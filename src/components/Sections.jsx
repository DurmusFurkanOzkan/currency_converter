import React, { useState } from "react";
import Button from "./Button";


var items=[];
var flag=false;


function Comp(props){
    

    return <div className="comp_full">
        <p className="comp_text">{props.name}</p>
        {props.name!="Amount"?<select className="select_class"></select>:<input type="text" className="select_class" id="amount"></input>}
        
    </div>
    
}
//   console.log(props.items[0]);
//{flag ? Object.entries(props.items[0]).map(([k, v])=><option value={k}>{k}</option>):"0"}
       

//  {Object.entries(props.items[0]).map(([k, v])=><option value={k}>{k}</option>)}
//{items.map((item)=> Object.keys(item).map(([k, v]) => console.log(k) ))}
function Convert(props) {
    return <div className="total_convert">
    <div className="convert">
        <Comp name="Amount" />
        <Comp name="From" items={props.items}/>
        <img className="change" src="../images/change.svg"/>
        <Comp name="To" items={props.items}/>
    </div>
    <div className="convert_footer">
        <div className="convert_footer_left">
            <i class="fa fa-info-circle" id="info_icon"></i>
            <p id="convert_footer_id">We use the mid-market rate for our Converter. This is for informational purposes only. You won’t receive this rate when sending money. <a id="convert_a" href="">Check send rates</a> </p>
        </div>
        <div className="convert_footer_right">
            <button className="convert_button">Convert</button>
        </div>
    </div>
    
    </div>
}
function Send() {

    return <><p>Send Section</p></>
}
function Charts() {
    return <><p>Charts Section</p></>
}
function Alerts() {
    return <><p>Alerts Section</p></>
}

function Section_Button(props) {
    var auto="";
    if (props.id=="first_bottom"){
        auto="autofocus";
    }
   
    return <div className="section_top" onClick={props.onClick}>
         <button id={props.id} className="section_button" >
        <i class={props.class} ></i>
        <p class="button_text" style={{fontWeight:props.weight}} >{props.name}</p>
        </button> 
    </div>
   
    
    

}
function Sections() {
    

    const [sect, setSect] = useState("Convert");
    const [title, setTitle] = useState("The World's Trusted Currency Authority");
    const [subtitle, setSubTitle] = useState("Check exchange rates, send money internationally, and free currency tools");
    const [font1,setFont]=useState("700");
    const [font2,setFont2]=useState("400");
    const [font3,setFont3]=useState("400");
    const [font4,setFont4]=useState("400");

    const [location,setLocation]=useState("first_bottom");
    
    /*
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function () { 
        const test=JSON.parse(this.responseText)
       
        items.push(test.data);
        

        
        for (var key1 in test.data){
            for (var key2 in test.data[key1]){
                
                if(key2=="code"){
                    items["code"]=test.data[key1][key2];
                }
                if(key2=="value"){
                    console.log(test.data[key1][key2])
                }
            }
        }
        
    });
    oReq.open("GET", "https://api.currencyapi.com/v3/latest?apikey=nH0IAv73kaX3CGKtx9fkeD187JaGSGIDyarpr5TB");

    oReq.send();
    */

    function changeSection(e){
        flag=true;
        if(e.target.id=="first_bottom" || e.target.parentNode.id=="first_bottom"){
            setTitle("Xe Currency Converter");
            setFont(700);
            setFont2(400);
            setFont3(400);
            setFont4(400);
            setSubTitle("Check live foreign currency exchange rates");
            setLocation("first_bottom" );
        }else if(e.target.id=="second_bottom" || e.target.parentNode.id=="second_bottom"){
            setFont(400);
            setFont2(700);
            setFont3(400);
            setFont4(400);
            setTitle("International Money Transfer");
            setSubTitle("Send money globally with Xe, the world's trusted currency authority");
            setLocation("second_bottom" );
        }else if(e.target.id=="third_bottom" || e.target.parentNode.id=="third_bottom"){
            setFont(400);
            setFont2(400);
            setFont3(700);
            setFont4(400);
            setTitle("Xe Currency Charts");
            setSubTitle("Review historical currency rates");
            setLocation("third_bottom");
        }else if(e.target.id=="last_bottom" || e.target.parentNode.id=="last_bottom"){
            setFont(400);
            setFont2(400);
            setFont3(400);
            setFont4(700);
            setTitle("Currency Exchange Rate Alerts");
            setSubTitle("Sign-in (or sign-up!) now to get free exchange rate alerts from Xe");
            setLocation("last_bottom");
        }else{
            console.log(e.target.parentNode.id);
        }
    }
    
    return <>
        <h1 id="top_h1">{title}</h1>
        <p id="top_p">{subtitle}</p>
        <div className="Section" style={{height:location=="first_bottom"?"350px":location=="second_bottom"?"800px":location=="third_bottom"?"350px":"500px"}}>
            <div className="section_buttons_div" >
                <Section_Button id="first_bottom" weight={font1} class="fa fa-btc" name="Convert" onClick={changeSection} />
                <Section_Button id="second_bottom" weight={font2} class="fa fa-send-o" name="Send" onClick={changeSection}/>
                <Section_Button id="third_bottom" weight={font3} class="fa fa-bar-chart" name="Charts" onClick={changeSection}/>
                <Section_Button id="last_bottom" weight={font4} class="fa fa-bell" name="Alerts" onClick={changeSection}/>
            </div>
            <div className="Content">
                {location=="first_bottom"?<Convert items={items}/>:location=="second_bottom"?<Send />:location=="third_bottom"?<Charts/>:<Alerts/>}
            </div>
          
        </div>

    </>


}

export default Sections;