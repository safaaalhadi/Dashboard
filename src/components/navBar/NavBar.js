import React from "react";
import {Container, Row} from "reactstrap";
import style from "./NavBar.module.css";
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";
const NavBar = () => {
 const isAdminFromRedux= useSelector(state => state.isAdmin );

  return(

  <div className={style.contenar}>
      <nav className={style.nav}>
        <div className={style.logo}>
          <img  src={require('../images/logo.svg').default}  alt="logo"/>
           <p>Go Home</p>
           <span>
             {isAdminFromRedux.allow && <Link to="add" className={style.linkAdd}>add member</Link>}
          </span>
          <span>
          {isAdminFromRedux.allow &&<Link to="user"className={style.linkEdit}>Members</Link>}
          </span>
        </div>
        <div className={style.contact}>
          <p>
            <span><b>Sales :</b> contact@focal-x.com </span> | <span className={style.spans}> +963 935 033 139</span>
          </p>
        </div>
      </nav>
  </div>
  )
};

export default NavBar;
