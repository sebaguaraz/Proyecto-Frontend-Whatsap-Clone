import React, { useState } from "react";
import { Link } from "react-router";
import "../../index.css"
import "./Contact.css"

export const Contact = ({propiedad}) => {

    const [flash, setFlash] = useState('#161717')

    const onMouseOver = () => {
        setFlash('#8088882f')
    }    
    
    const onMouseOut = () => {
        setFlash('#161717')
    }


    return (
        <li className="content__screen__list-contact" onMouseOver={onMouseOver} onMouseOut={onMouseOut} style={{backgroundColor: flash}}>

            <Link  className="content__screen__list__link" to={`/contact/${propiedad.id}/mensajes`}>
                <div className="contact-info-rigth">

                    <span className="contact-last-connection color--modified ">{propiedad.last_connection} </span>
                    {/* <span className="contact-status color ">{propiedad.connection_status}</span> */}
                    


                </div>

                <div className="contact-info-left">

                    <h2 className="contact-name contact-name-color">{propiedad.name}</h2>
                    <div className="content-img-contact">
                    {/* <span className="contact-description color ">{propiedad.descripcion}</span> */}
                        <img className="contact-avatar color" src={propiedad.avatar} alt="avatar"></img>
                    </div>

                </div>


            </Link>
        </li>
    )
}