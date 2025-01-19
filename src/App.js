
import './App.css';

import {Routes, Route, useNavigate  } from 'react-router-dom';
import Login from './pages/Login/Login';
import Player from './pages/Players/Player';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import Home1 from './pages/Home/Home1';
 import React from "react";

 import { ToastContainer, toast } from "react-toastify";
  




function App() {
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("logged in")
        navigate('/')
      }
      else {
        console.log('logged out')
        navigate('/login')
      }
    })
  },[])
  return (
    <div className="App">
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </div>
  );
}

export default App;
