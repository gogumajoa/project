import './App.css';
import Login from './component/Login';
import Join from './component/Join';
import React from 'react'
import AuthService from './services/auth.service';
import{Route, Routes, Link} from "react-router-dom";
import { useState, useEffect } from 'react';
import Star from './component/Star';

function App() {
 // const [currentUser, setCurrentUser] = useState(undefined);

 /* useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };*/

  return (
    <div>
    
    <Login/>

  </div>
);
}

export default App;
