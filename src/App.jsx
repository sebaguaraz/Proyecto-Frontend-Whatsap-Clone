import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import ChatScreen from './Screen/ChatScreen/ChatScreen'
import { ContactScreen } from './Screen/ContactScreen/ContactScreen';
import './App.css';
import { HomePage } from './Components/HomePage/HomePage';
import './index.css';

// Renderizen una lista de mensajes, cada mensaje sera un componente llamado <Message/> y la lista (el map) debe estar en componenete llamado <MessageList/>

// Por un lado el componente MEssagueList que recibe una lista de mensajes y devuelve el mapeo 


// Componente de mensajes que recibe cada uno de los mensajes como emisor y receptor, id, hora, texto y retorna el mensaje en si
// export default App


// IMPORTAMOS ESTOS COMPONENTES para Enrutar


// function App() {

//   return (

//     <div>

//       {/* <Routes> es una apertura de apertura y cierre que contiene el componente Route
//       y Route tiene la config de nuestra ruta*/}
//       <Routes>  
//         {/* Creamos 2 rutas distintas y que muestren mediante lo que haya en element={} */}


//           {/*
//            /:contact/ es un valor pasado por la URL para busqueda, que el valor es variable
//            Es un PARAMETRO DE BUSQUEDA 
//            */}
//           <Route path='/contact/:contact_id/mensajes' element={<ChatScreen/>} />
//           {/* cuando estemos en la ruta (path) mostra el componente (element) */}

//           <Route path='/' element={<ContactScreen/>}  />
//       </Routes>

//     </div>
//   )
// }

// export default App


function App() {

  return (

    <div>

      <div className="app-container">
        {/* Columna izquierda usando la clase 'contacts-container' */}
        <div className="contacts-container">
          <ContactScreen />
        </div>

        {/* Columna derecha usando la clase 'chat-container' */}
        <main className="chat-container">
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/contact/:contactId/mensajes" element={<ChatScreen />} />
          </Routes>
        </main>
      </div>

    </div>
  )
}

export default App