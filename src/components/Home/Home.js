import React, { useState } from "react";
import style from "./Home.module.css";
import Footer from "../Footer/Footer";
import axios from "axios";

const Home = () => {

  const [url, setUrl] = useState("");
  const [state,setState] = useState({});

  
    const handleChange = (text) =>{
     const type = text.includes(" ");
     if (type === true){
      const arr = text.split(" ")
      setUrl(`member?firstName=${arr[0]}&lastName=${arr[1]}`)
     }else{
      setUrl(text)
    }
    console.log(url);
       
    }
    const fetch = async()=>{
      await axios.get(`https://focalx-cert-generator.herokuapp.com/v1/members/${url}`)
      .then((res)=>{
        console.log(res);
        setState(res.data)
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    
  return ( 
  <div className={style.contenar}>
    <div className={style.content}>
      <div className={style.pattren}>
        <img src={require('../images/pattren.svg').default} alt="logo"/>
      </div>
      <p className={style.logo}>
        <img src={require('../images/logo.svg').default} alt="logo"/>
      </p>
      <p className={style.paragraph}>Search By Name Or Certificate ID Number</p>
      <div>
        <div className={style.input}>
          <input type="search" placeholder="Search For Employee's Or Intern's"  onChange={(e) => handleChange(e.target.value)} className="input" />
          <p>|</p>
          <span onClick={fetch} className={style.search}><img src={require('../images/search.svg').default} alt="safaa"/></span>
        </div>
       
      
      </div>
      </div>
      <Footer />
    
    </div>
  );
};

export default Home;
