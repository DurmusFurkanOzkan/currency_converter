import React from "react"



function Button(props){
    return <button className="buttons"  style={{color:props.color,backgroundColor:props.backColor}}>{props.name}</button>
}

export default Button;