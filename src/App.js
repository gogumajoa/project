import './App.css';
import Login from './component/Login';
import Join from './component/Join';
import React from 'react'
//import AuthService from './services/auth.service';
import{ BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import { useState, useEffect } from 'react';
import Star from './component/Star';
import Login2 from './component/Login2';
import Mypage from './component/Mypage';

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

  return(
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Join" element={<Join />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>



    
  );
}

export default App;
