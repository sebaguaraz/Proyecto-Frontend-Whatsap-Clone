import React from "react";
import MessageList from "../../Components/MessageList/MessageList";
import { useState } from "react";
import { useParams } from "react-router";
import { getContactById } from "../../Services/ContactService";
import './ChatScreen.css'
import "../../index.css"

const ChatScreen = () => {
// Paso 1) Obtener el :contact_id de la url
// Paso 2) Buscar el contact por su contact_id
// Paso 3) Cargar el contact.messages al estados de mensajes


// Paso 1: obtener el :contact_id de url como propiedad de objeto

// te devuelve un objeto con el parametro de busqueda como propiedad (el valor que viene en la url) 
// el valor es de TIPO STRING
const {contact_id} = useParams()

// Paso 2: buscas el contacto en la lista
const contact = getContactById(contact_id)


// Paso 3: pasamos la lista de mensajes del objeto al estado
// lo inicializamos con un array en este caso ya viene precargado, nos devuelve una variable con el array y una funcion para actualizarlo
    const [mesages, setMessages] = useState(contact.message);
    
    const deleteMessageById = (message_id) => {
        // // logica para actualizar el estado de mensajes eliminando el mensaje con el id recibido

        // // 1. creas un array vacio inicialmente, para recorrer la lista de mensajes (estado) y agregar a los mensajes que sean de id distinto al id recibido
        // const mensajes_diferentes_al_id = []
        // for(const mensaje of mesages){
        //     // si es diferente al id del mensaje que queremos eliminar lo agregamos
        //     if(mensaje.id !== message_id){
        //         mensajes_diferentes_al_id.push(mensaje)
        //     }
        // }
        // // actualizamos el estado del componente, ahora va a contener la nueva lista actualizada 

//-------------------------------------------------------------------
    // FILTER:
    // es un metodo avanzado de arrays que permite filtrar un array 
    /*Elige ciertos elementos de un array bajo una x condicion y devuelve un array nuevo
    con los elementos que haya cumplido la condicion. */

    // devuelve un nuevo array
    // recorre cada elemento del array y ejecuta la callback, la CALLBACK es la condicion. Si devuelve verdadero se agrega el elemento, sino no se agrega
    const new_message_list = mesages.filter((elemento)=>{
      return elemento.id !== message_id
    })
        setMessages(new_message_list)
    }

    const deleteAllMessage = () => {
      setMessages([])

    }

    // recibimos el texto del mensaje
    const addNewMessage = (text_message) => {
      // va a ser un nuevo objeto
      const new_message = {
        id: mesages.length + 1,
        emisor: 'YO',
        receptor: 'El',
        texto: text_message,
        hora: new Date().toLocaleTimeString(),
        status: 'no visto'
      }

      // clonar la lista de mensajes porque mesages es un ESTADO y no podes modificar como si nada un ESTADO (para agregarlo a la lista) 
      const clon_messages_list = [...mesages]

      // agrego el objeto a la nuea lista y actualizo el estado (verse el cambio en pantalla)
      clon_messages_list.push(new_message)
      setMessages(clon_messages_list)

    }

    // maneja el evento de enviar el formulario
    const handlesubmitSendMessageForm = (event) => {
      event.preventDefault()
      const text_message = event.target.message.value
      // de que elemento se produjo el evento submit? event.target = <form></form>
      // de ese <form></form> accedo al elemento message osea <input/>
      // accedo al valor (value) de ese <input/>

      addNewMessage(text_message)
      event.target.message.value = ""


    }




    return (
        <section className="content__chat__screen">
          {/* hace una condicion, si es verdadero se agarra la segunda condicion, 
          si es falso se agarra el primer valor, pero al ser falso no se muestra en pantalla */}
          {
            mesages.length > 0 &&  <button type="button" onClick={deleteAllMessage}>Borrar todos los mensajes</button>
          }
            <MessageList message ={mesages} deleteMessageById={deleteMessageById}/>


            {/* esto podria ir en otro COMPONENTE llamado <SendMessageForm/> */}

            {/* se pone un escuchador onsubmit porque siempre un button type submit intenta enviar un FORMULARIO, por eso se le pone el escuchador en el elemento <form> */}
            <form onSubmit={handlesubmitSendMessageForm}>
              <div>
                <label htmlFor="message">Escribe un mensaje:</label>
                <input type="text" name="message" id="message" />
              </div>

              <button type="submit">Enviar mensaje</button>

            </form>
        </section>
    )
};

export default ChatScreen;