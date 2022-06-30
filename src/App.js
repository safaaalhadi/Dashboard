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


function App() {
  const dispatch = useDispatch();
  
  const employeesFromRed = useSelector((state) => state.allMembers);
  const fetchEmployees = async () => {
    await axios
      .get("https://focalx-certgenerator.herokuapp.com/v1/members")
      .then((res) => dispatch(setEmployees(res.data)))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchEmployees();
  }, []);
  const employees = employeesFromRed.filter((emp) => emp.isEmployee === true);
  const inters = employeesFromRed.filter((inters) => inters.isIntern === true);
  console.log(employeesFromRed);
  return ( 
    <div className="App">
      <BrowserRouter basename="/dashboard">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/add" element={<Add />}/>
          <Route path="/user" element={<User />}/>
          <Route path="/edit/:id" element={<Edit />}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
