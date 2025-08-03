import React from "react";
import MessageList from "../../Components/MessageList/MessageList";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { addMessageToContact, deleteAllMessagesFromContact, deleteMessageFromContact, getContactById } from "../../Services/ContactService";
import { SendMessage } from "../../Components/SendMessage/SendMessage";
import './ChatScreen.css'
import "../../index.css"
import { ChatHeader } from "../../Components/ChatHeader/ChatHeader";

const ChatScreen = () => {

  const { contactId } = useParams(); // Paso 1: obtener el ID desde la URL
  const [messages, setMessages] = useState([]); // Estado para los mensajes
  const contact = getContactById(contactId); // Paso 2: buscar el contacto
  console.log(contactId)
  useEffect(() => {
    if (contact) {
      setMessages([...contact.message]); // ✅ Clonamos el array para evitar referencia compartida
    } else {
      setMessages([]);
    }
  }, [contactId]);

  if (!contact) {
    return <span>El contacto no existe</span>;
  }

    const deleteMessageById = (message_id) => {


    const new_message_list = messages.filter((elemento)=>{
      return elemento.id !== message_id
    })
        deleteMessageFromContact(contactId, message_id)
        setMessages(new_message_list)
    }

    const deleteAllMessage = () => {
      deleteAllMessagesFromContact(contactId)
      setMessages([])

    }

    // recibimos el texto del mensaje
    const addNewMessage = (text_message) => {

      const next_id = messages.length > 0 ? Math.max(...messages.map(m => m.id)) + 1 : 1;
      // va a ser un nuevo objeto
      const new_message = {
        id: next_id,
        emisor: 'Yo',
        receptor: 'El',
        texto: text_message,
        hora: new Date().toLocaleTimeString('es-AR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }),
        status: 'visto'
      }

      // clonar la lista de mensajes porque messages es un ESTADO y no podes modificar como si nada un ESTADO (para agregarlo a la lista) 
      addMessageToContact(contactId, new_message)

      setMessages([...messages, new_message])

    }

    // maneja el evento de enviar el formulario
    const handlesubmitSendMessageForm = (event) => {
      event.preventDefault()
      const text_message = event.target.message.value.trim()
      if(text_message === '') return console.log('El mensaje no puede estar vacio')
      addNewMessage(text_message)
      event.target.message.value = ""
    }

    return (
      <div style={{height:'100%', display: "flex", position:'relative', flexDirection:'column'}}>
        <header className="chat__header">
          < ChatHeader contact={contact} />
        </header>

        <section className="chat__screen">
          {/* hace una condicion, si es verdadero se agarra la segunda condicion, 
          si es falso se agarra el primer valor, pero al ser falso no se muestra en pantalla */}
          {
            messages.length > 0 &&  <button className="chat__screen-delete" type="button" onClick={deleteAllMessage} >Borrar todos los mensajes</button>
          }
            <MessageList message ={messages} deleteMessageById={deleteMessageById}/>

            <SendMessage handlesubmitSendMessageForm={handlesubmitSendMessageForm}/>
        </section>
      </div>
    )
};

export default ChatScreen;