import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/navBar/NavBar";
import Add from "./components/Add/Add"; 
import User from "./components/User/User" ;  
import Edit from "./components/Edit/Edit" ;  
import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setEmployees } from "../src/redux/action/employeesAction";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp"
import ViewUser from "./components/User/ViewUser";
import Page404 from "./components/page404/Page404";


function App() {
  const dispatch = useDispatch();
const allow = useSelector((state) => state.isAdmin)  
console.log(allow.allow ? "allow" : "not allow");
console.log(allow);
  const fetchEmployees = async () => {
    await axios
      .get("https://focalx-certgenerator.herokuapp.com/v1/members")
      .then((res) => dispatch(setEmployees(res.data)))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchEmployees();
  }, []);
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
