import React, { useState } from "react";
import axios from "axios";
import style from "./Home.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMember } from "../../redux/action/employeesAction";
import Modal from "../Modal/Modal";
import Footer from "../Footer/Footer";

const Home = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [url, setUrl] = useState("");

  const handleChange = (text) => {
    const type = text.includes(" ");
    if (type === true) {
      const arr = text.split(" ");
      setUrl(`member?firstName=${arr[0]}&lastName=${arr[1]}`);
    } else {
      setUrl(text);
    }
    console.log(url);
  };
  const fetch = async () => {
    await axios
      .get(`https://focalx-cert-generator.herokuapp.com/v1/members/${url}`)
      .then((res) => {
        dispatch(setMember(res.data));
        navigate("/pdf");
      })
      .catch((err) => {
        console.log(err);
        setShow(true);
      });
  };

  return (
    <div className={style.contenar}>
      <div className={style.content}>
        <div className={style.pattren}>
          <img src={require("../images/pattren.svg").default} alt="logo" />
        </div>
        <p className={style.logo}>
          <img src={require("../images/logo.svg").default} alt="logo" />
        </p>
        <p className={style.paragraph}>Search By Name Or Certificate ID Number</p>
        <div>
          <div className={style.input}>
            <input
              type="text"
              placeholder="Search For Employee's Or Intern's"
              onChange={(e) => handleChange(e.target.value)}
              className="input"
            />
            <p>|</p>
            <span onClick={fetch} className={style.search}>
              <img src={require("../images/search.svg").default} alt="safaa" />
            </span>
          </div>
        </div>
        <Link to="/login">log in</Link>
      </div>
      <Footer />
      {show && <Modal close={setShow} content="NOT FOUND" />}
    </div>
  );
};

export default Home;
