import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import style from "./Login.module.css";
import { useDispatch } from "react-redux";
import { setAdmin } from "../../redux/action/employeesAction";
import {useNavigate} from "react-router-dom";
import { useCookies } from 'react-cookie';

export default function Login() {
  const [cookies,setCookie] = useCookies(['token']);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [data, setData] = useState({
    username: "admin",
    password: "IdV$Ju84q3360Sq",
  });
  const handleSubmet = (e) => {
    // console.log(e);
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    console.log(data);
  };
  const handleSubmition = (e) => {
    e.preventDefault();
    setFormError(validation(data));
    setIsSubmit(true);
  };
  useEffect(() => {
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log(data);
      sendData();
    }
  }, [formError]);
  const validation = (value) => {
    // console.log("vvvvv",value);
    const errors = {};
    console.log(data.username.length);
    if (!value.username) {
      errors.username = "username is required !!";
    }
    if (!value.password) {
      errors.password = "password is required !!";
    }
    return errors;
  };
  const sendData = async () => {
    let body = {
      username: data.username,
      password: data.password,
    };
    await axios
      .post("https://focalx-cert-generator.herokuapp.com/v1/auth/signin", body)
      .then((res) => {
        console.log(res);
        navigate("/");
        setCookie('token',res.data.token, {path:'/'})
        dispatch(setAdmin({isLogin: "admin"}));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <form noValidate onSubmit={handleSubmition}>
        <div className={style.Login}>
          <div className={style.card}>
            <div>
              <label>Username</label>
              <input type="text" name="username" value={data.username} onChange={(e) => handleSubmet(e)} required />
            </div>
            <span className={style.spans}>{formError.username}</span>
            <div>
              <label>Password</label>
              <input type="password" name="password" value={data.password} onChange={(e) => handleSubmet(e)} />
              <span className={style.spans}>{formError.password}</span>
            </div>
            <Link to="/signup" className={style.Link}>
              Sign up Account
            </Link>
            <input type="submit" className={style.button} value="Login" />
          </div>
        </div>
      </form>
    </>
  );
}
