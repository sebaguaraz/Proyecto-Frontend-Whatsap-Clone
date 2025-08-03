import React from "react";
import { Contact } from "../Contact/Contact";
import "./ContactList.css"
// import "../../index.css"


export const ContactList = ({contacts}) => {
    const new_contacts = contacts.map((elemento) => {
        return (
            <Contact propiedad={elemento} key={elemento.id}/>
        )
    })

    return (
        <ul className="aside__screen__list">
            {new_contacts}
        </ul>
    );
}