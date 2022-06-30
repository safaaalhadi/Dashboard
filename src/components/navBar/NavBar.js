import React from "react";
import {Container, Row} from "reactstrap";
import style from "./NavBar.module.css";
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";
const NavBar = () => {
 const isAdminFromRedux= useSelector(state => state.isAdmin );
 console.log(isAdminFromRedux);
  return(
  //   <nav className={style.nav}>
     
  //   <Container fluid>
  //   <Row className="m-0">
  //  <div className="col-md-7 col-sm-12 mb-4">
  //  <div className={style.navImg} >
  //   <img  src={require('../img/img.svg').default}  alt="logo"/>
  //    <p className={style.link}>Go Home</p>
  //     </div>
  //  </div>
  //  <div className="col-md-2 col-sm-12"></div>
  //     <div className="col-md-3 col-sm-12">
      // <Link to="add" className={style.navlink}>+</Link>
      // <Link to="user"className={style.navedit}>edit</Link>
  //     </div>
  //     </Row>
  //   </Container>
  // </nav>
  <div className={style.contenar}>
      <nav className={style.nav}>
        <div className={style.logo}>
          <img  src={require('../images/logo.svg').default}  alt="logo"/>
           <p>Go Home</p>
           <span>
             {isAdminFromRedux && <Link to="add" className={style.linkAdd}>+</Link>}
          </span>
          <span>
          {isAdminFromRedux &&<Link to="user"className={style.linkEdit}>edit</Link>}
          </span>
        </div>
        <div className={style.contact}>
          <p>
            <span><b>Sales :</b> contact@focal-x.com </span> | <span> +963 935 033 139</span>
          </p>
        </div>
      </nav>
      
  </div>
  )
};

export default NavBar;
