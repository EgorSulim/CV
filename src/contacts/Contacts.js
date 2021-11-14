import style from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css';

import React from "react";


function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${style.container}`}>
                <h3>Contacts</h3>
                <form className={style.form}>
                    <input type="text" placeholder={'Name'}/>
                    <input type="text" placeholder={'E-mail'}/>
                    <textarea placeholder={'Your message'} ></textarea>
                </form>
                <button>Send</button>
                <div className={style.photo}>

                </div>
            </div>
        </div>
    );
}

export default Contacts;
