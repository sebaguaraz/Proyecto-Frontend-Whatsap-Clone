import React, {useState} from 'react';

import ChatScreen from './Screen/ChatScreen/ChatScreen';

// import { MessageList } from './Components/MessaggeList/MessageList';
// ¡Imaginemos que ya creaste estos componentes!
// import MessageList from './Components/MessageList/MessageList'; 



// function App() {

//   const messages = [
//     {
//         id: 1,
//         emisor: 'YO',
//         texto: '¡Hola! ¿Cómo va todo por allá?',
//         hora: '10:30',
//         status: 'visto'
//     },
//     {
//         id: 2,
//         emisor: 'Ana',
//         texto: '¡Hola! Todo bien, ¿y tú? Justo terminando un reporte.',
//         hora: '10:31',
//         status: 'visto'
//     },
//     {
//         id: 3,
//         emisor: 'YO',
//         texto: '¡Qué bueno! Yo aquí, planeando la reunión de mañana. ¿Te llegó la invitación?',
//         hora: '10:31',
//         status: 'visto'
//     },
//     {
//         id: 4,
//         emisor: 'Ana',
//         texto: 'Sí, la vi. Confirmado. ¿Necesitas que prepare algo en especial?',
//         hora: '10:33',
//         status: 'visto'
//     },
//     {
//         id: 5,
//         emisor: 'YO',
//         texto: 'Perfecto. No, solo con tu presencia es suficiente. ¡Nos vemos!',
//         hora: '10:35',
//         status: 'entregado'
//     }
// ];



//   return (
//     <div>
//       <h1>Lista de mensajes</h1>
//       <MessageList message ={messages} />
//     </div>
//   )
// }


// Renderizen una lista de mensajes, cada mensaje sera un componente llamado <Message/> y la lista (el map) debe estar en componenete llamado <MessageList/>

// Por un lado el componente MEssagueList que recibe una lista de mensajes y devuelve el mapeo 


// Componente de mensajes que recibe cada uno de los mensajes como emisor y receptor, id, hora, texto y retorna el mensaje en si
// export default App


// IMPORTAMOS ESTOS COMPONENTES para Enrutar
import { Route, Routes } from 'react-router';
import { ContactScreen } from './Screen/ContactScreen/ContactScreen';


function App() {

  return (

    <div>

      {/* <Routes> es una apertura de apertura y cierre que contiene el componente Route
      y Route tiene la config de nuestra ruta*/}
      <Routes>  
        {/* Creamos 2 rutas distintas y que muestren mediante lo que haya en element={} */}


          {/*
           /:contact/ es un valor pasado por la URL para busqueda, que el valor es variable
           Es un PARAMETRO DE BUSQUEDA 
           */}
          <Route path='/contact/:contact_id/mensajes' element={<ChatScreen/>} />
          {/* cuando estemos en la ruta (path) mostra el componente (element) */}

          <Route path='/' element={<ContactScreen/>}  />
      </Routes>

    </div>
  )
}

export default App