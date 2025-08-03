import React from 'react';
import { Route, Routes, useLocation } from 'react-router';
import ChatScreen from './Screen/ChatScreen/ChatScreen';
import { ContactScreen } from './Screen/ContactScreen/ContactScreen';
import { HomePage } from './Components/HomePage/HomePage';
import './App.css';
import './index.css';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isChatOpen = location.pathname.includes('/contact/');

  return (
    <div className="app__content">
      <div className={`app__content__contacts ${isChatOpen ? 'hide-on-mobile' : ''}`}>
        <ContactScreen />
      </div>

      <main className={`app__content__chat ${isHomePage ? 'hide-on-mobile' : ''}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact/:contactId/mensajes" element={<ChatScreen />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
