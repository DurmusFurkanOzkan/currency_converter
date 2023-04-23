import React from "react";


function Container(props){

    
    return <div className="tools_definitions">
           
                <i  class={props.classIcon} style={{fontSize:"48px"}}></i>
                <h3 className="tools_titles">{props.subTitle}</h3>
                <p className="tools_pg">{props.definiton}</p>
                {props.show&&<div> 
                    <br />
                    <br />
                    <button className="tools_button">{props.buttonName}</button>
                    </div>}
                
        </div>

}

export default Container;