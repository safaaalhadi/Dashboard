import React from "react";
import { Container, Row } from "reactstrap";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const isAdminFromRedux = useSelector((state) => state.isAdmin);
  const logout = () => {
    removeCookie("token", { path: "/" });
    navigate("/");
  };
  return (
    <div className={style.contenar}>
      <nav className={style.nav}>
        <div className={style.logo}>
          <img src={require("../images/logo.svg").default} alt="logo" />
          {isAdminFromRedux.allow ? (
            <Link to="/" className={style.link}>
              Go Home
            </Link>
          ) : (
            <Link to="https://www.focal-x.com" className={style.link}>
              Go Home
            </Link>
          )}
          <span>
            {isAdminFromRedux.allow && (
              <Link to="add" className={style.linkAdd}>
                add member
              </Link>
            )}
          </span>
          <span>
            {isAdminFromRedux.allow && (
              <Link to="user" className={style.linkEdit}>
                Members
              </Link>
            )}
          </span>
          <span>{isAdminFromRedux.allow && <button onClick={logout}>Logout</button>}</span>
        </div>
        <div className={style.contact}>
          <p>
            <span>
              <b>Sales :</b> contact@focal-x.com{" "}
            </span>{" "}
            | <span className={style.spans}> +963 935 033 139</span>
          </p>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
