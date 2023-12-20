import React from 'react';
import githubIcon from '../../assets/icons/github.svg';

const Cards = ({ name, image, url, urlSourceCode }) => {
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
            <div className="cardImg">
                <img src={image} alt=""/>
            </div>
                <div className="cardLinks py-2 flex w-full">
                    <a className="btn-projects w-full m-1" href={url} target='_blank'>
                        <p>Web Site</p>
                        <i class="fa-solid fa-globe text-black"></i>
                    </a>
                    <a className="btn-projects w-full m-1" href={urlSourceCode} target='_blank'>
                        <p>Source Code</p>
                        <img src={githubIcon} alt="github" className="github"/>
                    </a>
                </div>
        </div>
    );
}

export default Cards;
