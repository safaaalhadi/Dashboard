import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/navBar/NavBar";

import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setEmployees } from "../src/redux/action/employeesAction";
import CheakAllow from "./hooks/CheakAllow";

function App() {
  const dispatch = useDispatch();
  const allow = useSelector((state) => state.isAdmin);
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
        <CheakAllow />
      </BrowserRouter>
    </div>
  );
}

export default App;
