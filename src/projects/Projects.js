import style from './Projects.module.css';
import React from "react";
import Project from "./project/Project";

function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={style.projectsContainer}>
                <h2 className={style.title}>My projects</h2>
                <div className={style.projects}>
                 <Project title={'Way of the samurai'} description={'jdlsfld'}/>
                 <Project title={'Todolist'} description={'fjlsdf'}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
