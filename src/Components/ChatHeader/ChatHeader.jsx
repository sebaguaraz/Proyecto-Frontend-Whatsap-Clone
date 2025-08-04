import React from "react";
import "./ChatHeader.css";
import { Link } from "react-router";
import { useState } from "react";
import more from '../../assets/more.png';
import arrow_direction from '../../assets/arrow_direction-1.png';

export const ChatHeader = ({ contact }) => {
    const [flash, setFlash] = useState('#161717')

    const onMouseOver = () => {
        setFlash('#8088882f')
    }

    const onMouseOut = () => {
        setFlash('#161717')
    }


    return (
        <div className="content__chat__header">

            <div className="content__chat__header-left">

                <div className="content__chat__header-info">

                    <div className="content__chat__header-img">
                        <img className="contact-avatar" src={contact.avatar} alt={contact.name} ></img>
                    </div>

                    <div className="content__chat__header-name">{contact.name}</div>
                </div>

                <Link to={`/`} className="content__chat__header-arrow" onMouseOver={onMouseOver} onMouseOut={onMouseOut} style={{ backgroundColor: flash }}>
                    <i className="bi bi-arrow-left"></i>

                </Link>

            </div>

            <div className="content__chat__header-right">
                <button type="button" className="content__chat__header-camera" aria-label="Camera">

                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" fill="none"><title>Obtener la aplicación para hacer llamada</title><path d="M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H16C16.55 4 17.0208 4.19583 17.4125 4.5875C17.8042 4.97917 18 5.45 18 6V10.5L21.15 7.35C21.3167 7.18333 21.5 7.14167 21.7 7.225C21.9 7.30833 22 7.46667 22 7.7V16.3C22 16.5333 21.9 16.6917 21.7 16.775C21.5 16.8583 21.3167 16.8167 21.15 16.65L18 13.5V18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20H4ZM4 18H16V6H4V18Z" fill="currentColor"></path></svg>

                    <svg viewBox="0 0 20 20" height="20" width="20" preserveAspectRatio="xMidYMid meet" className="" fill="none"><title>Obtener la aplicación para hacer llamada</title><path d="M9.99971 12.1L14.8997 7.2C15.083 7.01667 15.3164 6.925 15.5997 6.925C15.883 6.925 16.1164 7.01667 16.2997 7.2C16.483 7.38333 16.5747 7.61667 16.5747 7.9C16.5747 8.18333 16.483 8.41667 16.2997 8.6L10.6997 14.2C10.4997 14.4 10.2664 14.5 9.99971 14.5C9.73304 14.5 9.49971 14.4 9.29971 14.2L3.69971 8.6C3.51637 8.41667 3.42471 8.18333 3.42471 7.9C3.42471 7.61667 3.51637 7.38333 3.69971 7.2C3.88304 7.01667 4.11637 6.925 4.39971 6.925C4.68304 6.925 4.91637 7.01667 5.09971 7.2L9.99971 12.1Z" fill="currentColor"></path></svg>
                </button>

                <button type="button" className="content__chat__header-search" aria-label="Search"> <i className="bi bi-search" title="Buscar"></i> </button>

                <button className="content__chat__header-setting" type="button" aria-label="Setting"><img src={more} alt="config" title="Menú" /></button>

            </div>
        </div>
    );
};