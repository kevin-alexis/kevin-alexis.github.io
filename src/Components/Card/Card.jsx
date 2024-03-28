import React, { useState } from 'react';
import githubIcon from '../../assets/icons/github.svg';
import ModalProject from '../ModalProject/ModalProject'

const Cards = ({ name, image, url, urlSourceCode }) => {

    const [showModalProject, setShowModalProject] = useState(false);


    return (
        <div className="card">
            <div className="cardHeader">
                <figure>
                    <circule className="circule-red"></circule>
                    <circule className="circule-yellow"></circule>
                    <circule className="circule-green"></circule>
                </figure>
                <p>{name}</p>
            </div>
            <div className="cardImg" onClick={() => setShowModalProject(true)}>
                <img src={image} alt="" class="h-[180px]"/>
            </div>
                <div className="cardLinks py-2 flex w-full">
                    <a className="btn-projects w-full m-1 ml-0" href={url} target='_blank'>
                        <p>Web Site</p>
                        <i className="fa-solid fa-globe text-black"></i>
                    </a>
                    <a className="btn-projects w-full m-1 mr-0" href={urlSourceCode} target='_blank'>
                        <p>Source Code</p>
                        <img src={githubIcon} alt="github" className="github"/>
                    </a>
                </div>
                {showModalProject && <ModalProject setShowModalProject={setShowModalProject} name={name} image={image}/>}
        </div>
    );
}

export default Cards;
