import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
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


function App() {
  
const allow = useSelector((state) => state.isAdmin)  
console.log(allow.allow ? "allow" : "not allow");
console.log(allow);

  return ( 
    <div className="App">
      <BrowserRouter basename="/dashboard">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          {!allow.allow &&(
            <>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<SignUp />}/>  
            </>
          )
          
          }
          
          {allow.allow && (
            <>
          <Route path="/viewMember/:id" element={<ViewUser />}/>
          <Route path="/add" element={<Add />}/>
          <Route path="/user" element={<User />}/>
          <Route path="/edit/:id" element={<Edit />}/>
          </>
          )
          }
          <Route path="*" element={<Page404 />} />
          
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
