import React from "react";
import { useState } from "react";
import "./Message.css"
import "../../index.css"

export const Message = (props) => { 

    const [variable, setVariable] = useState(false);

    function onMouseOver(){
        setVariable(true)
    }

    function onMouseOut(){
        setVariable(false)
    }



    return (
        <div onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
            <span>
                {props.emisor}
            </span>
            <span>
                {props.texto}
            </span>

            <span>
                {props.hora}
            </span>

            {variable &&  <button className="buttom" onClick={() => props.deleteMessageById(props.id)}> <i class="bi bi-trash"></i> </button> }
            

        </div>
    );
};

export default Message;