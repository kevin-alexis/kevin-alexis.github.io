import React, {useState} from 'react';
import './Skills.css';
import html from '../../assets/icons/html-5.svg';
import css from '../../assets/icons/css3.svg';
import javascript from '../../assets/icons/javascript.svg';
import python from '../../assets/icons/python.svg';
import php from '../../assets/icons/php.webp';
import java from '../../assets/icons/java.png';
import cPlusPlus from '../../assets/icons/c++.png';
import cSharp from '../../assets/icons/cSharp.png';
import flet from '../../assets/icons/flet.webp';
import react from '../../assets/icons/React.png';
import laravel from '../../assets/icons/laravel.png';
import node from '../../assets/icons/node js.png';
import mysql from '../../assets/icons/mysql.png';
import mongodb from '../../assets/icons/mongodb.png';
import firebase from '../../assets/icons/Firebase.png';
import webpack from '../../assets/icons/webpack.svg';
import tailwind from '../../assets/icons/tailwind.png';
import bootstrap from '../../assets/icons/bootstrap.png';
import nextuiIcon from '../../assets/icons/nextui.png';
import git from '../../assets/icons/git.svg';
import vscode from '../../assets/icons/vscode.png';
import github from '../../assets/icons/github.svg';
import linux from '../../assets/icons/linux.png';
import figma from '../../assets/icons/figma.svg';
import adobeIlustrator from '../../assets/icons/Adobe_Illustrator.png';
import {Tooltip, Tabs, Tab, nextui} from "@nextui-org/react";
import { motion } from "framer-motion";



const Skills = () => {

    // ! Revisar lo de lenguaje de programación en mi portafolio, porque no todo es un lenguaje

    const [currentTab, setCurrentTab] = useState('programming');

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      }
        
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      }

    const programmingLanguages = [
        { name: 'HTML', image: html, class: 'HTML' },
        { name: 'CSS', image: css, class: 'CSS' },
        { name: 'JavaScript', image: javascript, class: 'JavaScript' },
        { name: 'Java', image: java, class: 'Java' },
        { name: 'C++', image: cPlusPlus, class: 'cPlusPlus' },
        { name: 'C#', image: cSharp, class: 'cSharp' },
        { name: 'Python', image: python, class: 'Python' },
        { name: 'PHP', image: php, class: 'PHP' },
        { name: 'Flet', image: flet, class: 'Flet' }
    ];
    
    const technologies = [
        { name: 'React JS', image: react, class: 'ReactJS' },
        { name: 'Node JS', image: node, class: 'NodeJS' },
        { name: 'Laravel', image: laravel, class: 'Laravel' },
        { name: 'MySQL', image: mysql, class: 'MySQL' },
        { name: 'MongoDB', image: mongodb, class: 'MongoDB' },
        { name: 'Firebase', image: firebase, class: 'Firebase' },
        { name: 'Tailwind', image: tailwind, class: 'Tailwind' },
        { name: 'Bootstrap', image: bootstrap, class: 'Bootstrap' },
        { name: 'NextUI', image: nextuiIcon, class: 'NextUI' },
        { name: 'Webpack', image: webpack, class: 'Webpack' }
    ];
    
    const tools = [
        { name: 'VSCode', image: vscode, class: 'VSCode' },
        { name: 'Git', image: git, class: 'Git' },
        { name: 'GitHub', image: github, class: 'GitHub' },
        { name: 'Linux', image: linux, class: 'Linux' },
        { name: 'Figma', image: figma, class: 'Figma' },
        { name: 'Adobe Ilustrator', image: adobeIlustrator, class: 'AdobeIlustrator' }
    ];
    
    

    return (
        <section class="skills">
        <h1 id="header-skills">Skills</h1>
        <Tabs key='primary' color='primary' aria-label="Tabs colors" radius="full" selectedKey={currentTab} onSelectionChange={setCurrentTab}>
            {/* <Tab key="all" title="All"/> */}
            <Tab key="programming" title="Programming Languages"/>
            <Tab key="technologies" title="Technologies"/>
            <Tab key="tools" title="Tools"/>
        </Tabs>
        <motion.div 
        className="tab-content"
        variants={container}
        initial="hidden"
        animate="visible"
        >
            {currentTab === 'programming' &&
                <motion.ul className="img-skills fig-content" variants={container} initial="hidden" animate="visible">                    {programmingLanguages.map(skill => (
                    <motion.li key={skill.name} variants={item}>
                    <Tooltip showArrow={true} content={skill.name}>
                        <img src={skill.image} alt={skill.name} className={`mx-1.5 ${skill.class}`} />
                    </Tooltip>
                    </motion.li>
                    ))}
                </motion.ul>
            }
            {currentTab === 'technologies' &&
                <motion.ul className="img-skills fig-content" variants={container} initial="hidden" animate="visible"> 
                {technologies.map(skill => (
                            <motion.li key={skill.name} variants={item}>
                                <Tooltip showArrow={true} content={skill.name}>
                                    <img src={skill.image} alt={skill.name} className={`mx-1.5 ${skill.class}`} />
                                </Tooltip>
                            </motion.li>
                        ))}
                </motion.ul>
            }
            {currentTab === 'tools' &&
            <motion.ul className="img-skills fig-content" variants={container} initial="hidden" animate="visible">
                                {tools.map(skill => (
                            <motion.li key={skill.name} variants={item}>
                                <Tooltip showArrow={true} content={skill.name}>
                                    <img src={skill.image} alt={skill.name} className={`mx-1.5 ${skill.class}`} />
                                </Tooltip>
                            </motion.li>
                        ))}
                </motion.ul>
            }
        </motion.div>
    </section>
    
    );
}

export default Skills;
