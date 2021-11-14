import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import React from "react";
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={style.skillsBlock}>
         <div className={style.skillsContainer}>
             <h2 className={style.title}>My skills</h2>
             <div className={style.skills}>
                 <Skill title={'Js'} description={'dfsdf'}/>
                 <Skill title={'React'} description={'fdsfds'}/>
                 <Skill title={'Typescript'} description={'fdsfda'}/>
             </div>
         </div>
        </div>
    );
}

export default Skills;
