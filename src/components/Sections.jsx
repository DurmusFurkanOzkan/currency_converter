import React, { useEffect, useState } from "react";
import latest from "./latest";
import currencies from "./currencies";


function Comp(props) {
    const [symbol, setSymbol] = useState("د.إ");

    
    const [myCar1, setMyCar1] = useState('EUR-Euro');
    const [myCar2, setMyCar2] = useState('USD-US Dollar');

    const [xchildAmount,xsetChildAmount]=useState(1);
    function handleChange(e) {
        props.passChildData(e.target.value);
        setMyCar1(e.target.value);
        setMyCar2(e.target.value);
    }

    function inputChange(e) {
        
        xsetChildAmount(e.target.value);
        props.childAmount(e.target.value);
        
    }


    return <div className="comp_full">
        <p className="comp_text">{props.name}</p>
        {props.name != "Amount" ? <select className="select_class"  value={props.name === "From" ?myCar1:myCar2} onChange={handleChange} >
            {Object.entries(props.cur[0]).map(([k, v]) => <option value={k + "-" + props.cur[0][k].name} id={props.cur[0][k].symbol_native}>{k + "-" + props.cur[0][k].name}</option>) }

        </select> : <input type="text" value={xchildAmount} className="select_class" id="amount" onChange={inputChange} ></input>}
    </div>

}


function Convert(props) {
    const [selectedCurrency1, setSelectedCurrency1] = useState("EUR-Euro");
    const [selectedCurrency2, setSelectedCurrency2] = useState("USD-US Dollar");
    const [amount, setAmount] = useState(1);
    const [show,setShow]=useState(false);
    const [calculateDiv, setCalculateDiv] = useState({from:"",result:"",onefrom:"",oneto:""});

  

    function ConvertCurrency() {
        setShow(true);
        var count1 = 0;
        var count2 = 0;
        var convert1 = 0;
        var convert2 = 0;
        var total_amount=0;
        var h3From="";
        var pFirst="";
        var pSecond="";
        for (var key1 in props.items[0]) {

            if (key1 == selectedCurrency1.slice(0, 3)) {
                for (var key2 in props.items[0][key1]) {

                    if (key2 == "value") {
                        count1 = props.items[0][key1][key2];
                    }
                }
            } else if (key1 == selectedCurrency2.slice(0, 3)) {
                for (var key2 in props.items[0][key1]) {

                    if (key2 == "value") {
                        count2 = props.items[0][key1][key2];
                    }
                }
            }

        }
        
        convert1 = count2 / count1;
        convert2 = count1 / count2;
        total_amount=amount*convert1;
        h3From=amount+"  "+selectedCurrency1.slice(4)+" =";
        pFirst="1 "+selectedCurrency1.slice(0,3)+" = "+convert1.toFixed(4)+" "+selectedCurrency2.slice(0,3);
        pSecond="1 "+selectedCurrency2.slice(0,3)+" = "+convert2.toFixed(4)+" "+selectedCurrency1.slice(0,3);
        setCalculateDiv({from:h3From,result:total_amount.toFixed(4),onefrom:pFirst,oneto:pSecond});
    }

    function changeCurrencies(){


    }

    return <div className="total_convert">
        <div className="convert">
            <Comp name="Amount" childAmount={setAmount}/>
            <Comp name="From" items={props.items} cur={props.cur} passChildData={setSelectedCurrency1} />
            <img className="change" src="../images/change.svg" onClick={changeCurrencies}/>
            <Comp name="To" items={props.items} cur={props.cur} passChildData={setSelectedCurrency2} />
        </div>
        {show && <div className="convert_div">
            <h5>{calculateDiv.from}</h5>
            <h1>{calculateDiv.result}</h1>
            <p>{calculateDiv.onefrom}</p>
            <p>{calculateDiv.oneto}</p>
        </div>}
        <h2></h2>
        <div className="convert_footer">
            <div className="convert_footer_left">
                <i class="fa fa-info-circle" id="info_icon"></i>
                <p id="convert_footer_id">We use the mid-market rate for our Converter. This is for informational purposes only. You won’t receive this rate when sending money. <a id="convert_a" href="">Check send rates</a> </p>
            </div>
            <div className="convert_footer_right">
                <button className="convert_button" onClick={ConvertCurrency}>Convert</button>
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

    return <div className="section_top" onClick={props.onClick}>
        <button id={props.id} className="section_button" >
            <i class={props.class} ></i>
            <p class="button_text" style={{ fontWeight: props.weight }} >{props.name}</p>
        </button>
    </div>




}
function Sections() {


    const [title, setTitle] = useState("The World's Trusted Currency Authority");
    const [subtitle, setSubTitle] = useState("Check exchange rates, send money internationally, and free currency tools");
    const [font1, setFont] = useState("700");
    const [font2, setFont2] = useState("400");
    const [font3, setFont3] = useState("400");
    const [font4, setFont4] = useState("400");
    const [location, setLocation] = useState("first_bottom");

    const [testitems,testsetItems]=useState([]);
        
    console.log(latest);

        

      

    function changeSection(e) {

        if (e.target.id == "first_bottom" || e.target.parentNode.id == "first_bottom") {
            setTitle("Xe Currency Converter");
            setFont(700);
            setFont2(400);
            setFont3(400);
            setFont4(400);
            setSubTitle("Check live foreign currency exchange rates");
            setLocation("first_bottom");
        } else if (e.target.id == "second_bottom" || e.target.parentNode.id == "second_bottom") {
            setFont(400);
            setFont2(700);
            setFont3(400);
            setFont4(400);
            setTitle("International Money Transfer");
            setSubTitle("Send money globally with Xe, the world's trusted currency authority");
            setLocation("second_bottom");
        } else if (e.target.id == "third_bottom" || e.target.parentNode.id == "third_bottom") {
            setFont(400);
            setFont2(400);
            setFont3(700);
            setFont4(400);
            setTitle("Xe Currency Charts");
            setSubTitle("Review historical currency rates");
            setLocation("third_bottom");
        } else if (e.target.id == "last_bottom" || e.target.parentNode.id == "last_bottom") {
            setFont(400);
            setFont2(400);
            setFont3(400);
            setFont4(700);
            setTitle("Currency Exchange Rate Alerts");
            setSubTitle("Sign-in (or sign-up!) now to get free exchange rate alerts from Xe");
            setLocation("last_bottom");
        } 
    }
    
    return <>
        <h1 id="top_h1">{title}</h1>
        <p id="top_p">{subtitle}</p>
        <div className="Section">
            <div className="section_buttons_div" >
                <Section_Button id="first_bottom" weight={font1} class="fa fa-btc" name="Convert" onClick={changeSection} />
                <Section_Button id="second_bottom" weight={font2} class="fa fa-send-o" name="Send" onClick={changeSection} />
                <Section_Button id="third_bottom" weight={font3} class="fa fa-bar-chart" name="Charts" onClick={changeSection} />
                <Section_Button id="last_bottom" weight={font4} class="fa fa-bell" name="Alerts" onClick={changeSection} />
            </div>
            <div className="Content">
                {location == "first_bottom" ? <Convert items={latest} cur={currencies} /> : location == "second_bottom" ? <Send /> : location == "third_bottom" ? <Charts /> : <Alerts />}
            </div>

        </div>

    </>


}

export default Sections;