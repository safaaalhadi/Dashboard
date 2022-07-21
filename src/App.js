import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/navBar/NavBar";
import Add from "./components/Add/Add"; 
import User from "./components/User/User" ;  
import Edit from "./components/Edit/Edit" ;  
import React from "react";
import { useSelector } from "react-redux";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp"
import ViewUser from "./components/User/ViewUser";
import Page404 from "./components/page404/Page404";
import CheakAllow from "./hooks/CheakAllow"


function App() {
  
const allow = useSelector((state) => state.isAdmin)  
console.log(allow.allow ? "allow" : "not allow");
console.log(allow);

  return ( 
    <div className="App">
      <BrowserRouter basename="/dashboard">
        <NavBar />
        <CheakAllow />
      </BrowserRouter>
    </div>
  );
}

export default App;
