import React from "react";;
import './SendMessage.css'
// import "../../index.css"
import { useState } from "react";



export const SendMessage = ({ handlesubmitSendMessageForm }) => {

    const [changeColor, setChangeColor] = useState('#242626');


    const onMouseOver = () => {
        setChangeColor('#21c063')
    }

    const onMouseOut = () => {
        setChangeColor('#242626')
    }

    return (
        <div className="content__send__message">

            {/* se pone un escuchador onsubmit porque siempre un button type submit intenta enviar un FORMULARIO, por eso se le pone el escuchador en el elemento <form> */}
            <form onSubmit={handlesubmitSendMessageForm} className="content__send__message__form">

                <label htmlFor="message" >Escribe un mensaje:</label>
                <input className="content__send__message__form-input" type="text" name="message" id="message" placeholder="Escribe un mensaje" />


                <button className="content__send__message__form-button" type="submit" onMouseOver={onMouseOver} onMouseOut={onMouseOut} style={{ backgroundColor: changeColor }} aria-label="Send"> <i className="bi bi-send" style={{ color: 'white' }}></i> </button>

            </form>

        </div>

    )
}
