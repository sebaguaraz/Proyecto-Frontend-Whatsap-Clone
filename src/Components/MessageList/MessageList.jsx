import React from "react";
import Message from "../Message/Message";
import "../../index.css"



export const MessageList = (props) => {

    if(props.message.length === 0){
        return <span>No hay mas mensajes</span>
    }
    const deleteMessageById = props.deleteMessageById
    const lista = props.message.map((message) => {
                return (
                        <Message
                            key={message.id}
                            emisor={message.emisor}
                            texto={message.texto}
                            hora={message.hora}
                            status={message.status}
                            deleteMessageById={deleteMessageById}
                            id = {message.id}
                        />
                    );
                }
            
            )
    return (
        <div>
            {lista}
        </div>
    );
};

export default MessageList;