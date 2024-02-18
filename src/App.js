import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Menu from './screens/Menu';
import Admin from './services/admin/Admin';
import Contact from './screens/Contact';

import iconZap from "./icons/icon-whatzap.png";


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <a href='https://api.whatsapp.com/send/?phone=5511989272470&text=Ol%C3%A1%2C+....&type=phone_number&app_absent=0' target='_blank'>
          <img src={iconZap} id='icon-whatzap-absolute' style={{ position: 'fixed', right: '30px', bottom: '30px', width: '60px', cursor: 'pointer' }} />
        </a>
      </div>
    </Router>
  );
};

export default App;
