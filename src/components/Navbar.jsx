import React from "react";


function Button(props){
    return <button className="buttons"  style={{color:props.color,backgroundColor:props.backColor}}>{props.name}</button>
}

function Navbar(){

    return <div className="navbar">

        <div className="navbar_left_side">
            <img className="left_side_img" src="../images/xe2.png"/>
            <Button name="Personal"/>
            <hr />
            <Button name="Business" color="#A8A8A8"/>
        </div>
        <div className="navbar_middle_side">
            <Button name="Send Money"/>
            <Button name="Converter"/>
            <Button name="Currency API"/>
            <Button name="Tools"/>
            <Button name="Resources"/>
        </div>
        <div className="navbar_right_side">
            <Button name="Sign In"/>
            <Button name="Register" backColor="#1A86FA"/>
        </div>
    </div>
}
export default Navbar;