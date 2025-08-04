import React, { useState } from "react";
import "./Message.css"
import check1 from '../../assets/check-1.png'
import check2 from '../../assets/check-2.png'
// import "../../index.css"

export const Message = (props) => {
    const [variable, setVariable] = useState(false);

    function onMouseOver() {
        setVariable(true)
    }

    function onMouseOut() {
        setVariable(false)
    }

    const messageClass = props.emisor === 'Yo' ? 'message__content-mine' : 'message__content-other';

    return (
        // Aplicamos la clase calculada directamente al div del mensaje.

        <div onMouseOver={onMouseOver} onMouseOut={onMouseOut} className={messageClass} >

            <span className="message-text">
                {props.texto}
            </span>

            <div className="message-info">
                {props.status === 'visto' && messageClass === 'message__content-mine' && <span className="message-status"> <img src={check2} alt="check2" /> </span>}

                <span className="message-hour">
                    {props.hora}
                </span>
            </div>

            {variable && messageClass === 'message__content-mine' && <button className="message-buttom" onClick={() => props.deleteMessageById(props.id)} aria-label="Delete"> <i className="bi bi-trash"></i> </button>}
        </div>

    );
};

export default Message;