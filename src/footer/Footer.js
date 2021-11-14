import style from './Footer.module.css';
import React from "react";


function Footer() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${style.container}`}>
                <h3>Egor Sulim</h3>
                <div className={style.form}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                </div>
                <button>Send</button>
                <div className={style.photo}>

                </div>
            </div>
        </div>
    );
}

export default Footer;
