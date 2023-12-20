import React from 'react';
import './Skills.css';
import html from '../../assets/icons/html-5.svg';
import css from '../../assets/icons/css3.svg';
import javascript from '../../assets/icons/javascript.svg';
import python from '../../assets/icons/python.svg';
import java from '../../assets/icons/java.png';
import cPlusPlus from '../../assets/icons/c++.png';
import cSharp from '../../assets/icons/cSharp.png';
import flet from '../../assets/icons/flet.webp';
import react from '../../assets/icons/React.png';
import node from '../../assets/icons/node js.png';
import mysql from '../../assets/icons/mysql.png';
import firebase from '../../assets/icons/Firebase.png';
import webpack from '../../assets/icons/webpack.svg';
import tailwind from '../../assets/icons/tailwind.png';
import bootstrap from '../../assets/icons/bootstrap.png';
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
            name: 'Java',
            image: java
        },
        {
            name: 'C++',
            image: cPlusPlus
        },
        {
            name: 'C#',
            image: cSharp
        },
        {
            name: 'Python',
            image: python
        },
        {
            name: 'Flet',
            image: flet
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
            name: 'MySQL',
            image: mysql
        },
        {
            name: 'Firebase',
            image: firebase
        },
        {
            name: 'Tailwind',
            image: tailwind
        },
        {
            name: 'Bootstrap',
            image: bootstrap
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
            <figure class="img-skills py-10">
                {imageSkills.map(skill =>{
                    return(
                        <Tooltip showArrow={true} content={skill.name} key={skill.name}>
                            <img src={skill.image} alt={skill.name} className='mx-1.5'/>
                        </Tooltip>
                    )

                })}
            </figure>
        </section>
    );
}

export default Skills;
