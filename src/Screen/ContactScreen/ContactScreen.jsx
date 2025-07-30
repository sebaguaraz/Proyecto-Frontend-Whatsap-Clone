import React from "react";
import { useState } from "react";
import { ContactList } from "../../Components/ContactList/ContactList";
import {getContacts} from '../../Services/ContactService'
import "./ContactScreen.css"
import "../../index.css"

export const ContactScreen = () => {
    
    const contacts = getContacts()

    

    const  [contactsList, setContactsList] = useState(contacts);
    
    return (
    <aside className="section__screen">
        <ContactList contacts={contactsList}/>

    </aside>

    );
};

