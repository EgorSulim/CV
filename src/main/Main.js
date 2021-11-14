import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css';

import React from "react";


function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi there!</span>
                    <h1>I am Egor Sulim</h1>
                    <p>a front-end developer</p>
                </div>
                <div className={style.photo}>

                </div>
            </div>
        </div>
    );
}

export default Main;
