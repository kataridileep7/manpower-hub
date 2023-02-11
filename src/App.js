import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import LoginTab from "./components/Login/LoginTab";
import React, { useState, useEffect } from "react";
import Profile from './components/Profile/Profile'
import Users from './components/Users/usercard'
import About  from './components/Users/About'



let loggedInUser = localStorage.getItem("user");


function requireAuth() {
  if (loggedInUser) {
    loggedInUser = loggedInUser.replace(/^"(.+)"$/, "$1");
    return true;
  }
  return false;
}

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              requireAuth() ? (
                <Home
                  username={loggedInUser}
                 
                />
              ) : (
                <LoginTab />
              )
            }
          />
          <Route
            
            path="/profile"
            element={
              requireAuth() ? (
                <Profile username={loggedInUser}
        
                 
                />
              ) : (
                <LoginTab />
              )
            }
          />
            <Route
            
            path="/users"
            element={
              requireAuth() ? (
                <Users 
        
                 
                />
              ) : (
                <LoginTab />
              )
            }
          />
        <Route path="/about" element={<About />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
