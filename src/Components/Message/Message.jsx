import React, { useState } from "react";
import "./Message.css"
import check1 from '../../assets/check-1.png'
import check2 from '../../assets/check-2.png'
// import "../../index.css"

export const Message = (props) => { 
    const [variable, setVariable] = useState(false);

    function onMouseOver(){
        setVariable(true)
    }

    function onMouseOut(){
        setVariable(false)
    }       
    // La forma correcta de aplicar una clase condicional:
    // Creamos la clase CSS directamente sin usar un estado.
    // Esto evita el bucle infinito de renderizado.
    const messageClass = props.emisor === 'Yo' ? 'message__content-mine' : 'message__content-other';

    return (
        // Aplicamos la clase calculada directamente al div del mensaje.
        <div onMouseOver={onMouseOver} onMouseOut={onMouseOut} className="message__content">

            <div className={messageClass}>

                <span className="message-text">
                    {props.texto}
                </span>

                <div className="message-info">
                    { props.status === 'visto' ? <span className="message-status"> <img src={check2} alt="check2" /> </span> : <span className="message-status"> <img src={check1} alt="check" /> </span> }
                    
                    <span className="message-hour">
                        {props.hora}
                    </span>
                </div>

                {variable && <button className="message-buttom" onClick={() => props.deleteMessageById(props.id)} aria-label="Delete"> <i className="bi bi-trash"></i> </button> }
            </div>

                
        </div>
    );
};

export default Message;