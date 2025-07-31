// import React from "react";
// import ChatScreen from "../ChatScreen/ChatScreen";
// import { ContactScreen } from "../ContactScreen/ContactScreen";
// import { useState } from "react";
// import { Route, Routes } from 'react-router';


// export const HomeScreen = () => {

//     const [contactId,setContactId] = useState(null)

//     function getContactId(contact_Id){
//         setContactId(contact_Id)
//     }

//     return(
//         <div style={{display: 'flex', flexDirection: 'row', flex: 1}}>
//             <div style={{width: '50%'}}>
//                 <ContactScreen getContactId={getContactId}/>

//             </div>
            
//             <div style={{width: '50%', backgroundColor: 'red'}  }>

//                 <Route path='/contact/:contact_id/mensajes' element={<ChatScreen/>} />
                

//             </div>

        
//         </div>
//     )
// }