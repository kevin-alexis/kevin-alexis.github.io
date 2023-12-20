import React from 'react';
import './Skills.css';
import html from '../../assets/icons/html-5.svg';
import css from '../../assets/icons/css3.svg';
import javascript from '../../assets/icons/javascript.svg';
import python from '../../assets/icons/python.svg';
import react from '../../assets/icons/React.png';
import node from '../../assets/icons/node js.png';
import webpack from '../../assets/icons/webpack.svg';
import git from '../../assets/icons/git.svg';
import github from '../../assets/icons/github.svg';
import linux from '../../assets/icons/linux.png';
import {Tooltip} from "@nextui-org/react";

const Skills = () => {

    const imageSkills = [
        {
            name:'HTML',
            image: html
        },
        {
            name:'CSS',
            image: css
        },
        {
            name: 'JavaScript',
            image: javascript
        },
        {
            name: 'Python',
            image: python
        },
        {
            name: 'React JS',
            image: react
        },
        {
            name: 'Node JS',
            image: node
        },
        {
            name: 'Webpack',
            image: webpack
        },
        {
            name: 'Git',
            image: git
        },
        {
            name: 'GitHub',
            image: github
        },
        {
            name: 'Linux',
            image: linux
        }
    ]

    return (
        <section class="skills">
            <h1 id="header-skills">Skills</h1>
            <figure class="img-skills">
                {imageSkills.map(skill =>{
                    return(
                        <Tooltip showArrow={true} content={skill.name} key={skill.name}>
                            <img src={skill.image} alt={skill.name}/>
                        </Tooltip>
                    )

                })}
            </figure>
        </section>
    );
}

export default Skills;
