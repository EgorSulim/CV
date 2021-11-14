import style from './Header.module.css';
import React from "react";
import Nav from "../nav/Nav";

function Header() {
    return (
        <div className={style.header}>
        <Nav/>
        </div>
    );
}

export default Header;
