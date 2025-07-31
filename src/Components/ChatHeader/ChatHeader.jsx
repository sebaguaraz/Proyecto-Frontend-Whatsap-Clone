import React from "react";
import "./ChatHeader.css";

export const ChatHeader = ({ contact }) => {
    return (
        <div className="content__chat__header">
            <div className="content__chat__header-img">
                <img  className="contact-avatar" src={contact.avatar} alt={contact.name} ></img>
            </div>

            <div className="content__chat__header-name">{contact.name}</div>


            <div className="content__chat__header-button">

                <button type="button" className="content__chat__header-search"> <i className="bi bi-search"></i> </button>
                
                <button className="content__chat__header-setting" type="button"><i className="bi bi-gear-fill"></i></button>

            </div>
        </div>
    );
};