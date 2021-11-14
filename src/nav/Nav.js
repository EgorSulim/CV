import style from './Nav.module.css';
import React from "react";

function Nav() {
    return (
        <div className={style.nav}>
            <a href="">Home</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contacts</a>
            <a href=""></a>
        </div>
    );
}

export default Nav;
