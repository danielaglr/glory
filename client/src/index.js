import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import { AuthProvider } from './contexts/UserContext';

import Landing from './views/landing';
import SignUp from './views/signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);