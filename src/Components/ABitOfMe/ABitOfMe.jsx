import React, { useState, useEffect } from 'react';
import './ABitOfMe.css';
import profilePhoto from '../../assets/Imagenes/Kvn.png';

const ABitOfMe = () => {
    const [showIntro, setShowIntro] = useState('');
    const [showText, setShowText] = useState('');
    const [showCursorIntro, setShowCursorIntro] = useState(true); // Estado para el cursor del texto introductorio
    const [showCursorText, setShowCursorText] = useState(true); // Estado para el cursor del texto principal

    const introText = `Hi, my name is Kevin Bello.`;
    const mainText = `I am a Software Engineer Student, and I am passionate about technology, cybersecurity and programming.`;

    useEffect(() => {
        let introIndex = 0;
        let textIndex = 0;

        const introInterval = setInterval(() => {
            if (introIndex <= introText.length) {
                setShowIntro(introText.substring(0, introIndex));
                introIndex++;
            } else {
                clearInterval(introInterval);
                setShowCursorIntro(false); // Oculta el cursor del texto introductorio cuando termina de escribir
            }
        }, 50);

        const textInterval = setInterval(() => {
            if (textIndex <= mainText.length) {
                setShowText(mainText.substring(0, textIndex));
                textIndex++;
            } else {
                clearInterval(textInterval);
                setShowCursorText(false); // Oculta el cursor del texto principal cuando termina de escribir
            }
        }, 50);

        return () => {
            clearInterval(introInterval);
            clearInterval(textInterval);
        };
    }, [introText, mainText]);

    return (
        <section className="aBitOfMe">
            <h1 id="header-about-me">About Me</h1>
            <img src={profilePhoto} alt="Foto de perfil" className="profile-photo bg-[#314158]" />
            <h2 className='Name'>
                {showIntro}
                {showCursorIntro && <span className="cursor-animation-intro">|</span>}
            </h2>
            <div className="main-text-container" style={{ height: 'auto' }}>
                <p>
                    {showText}
                    {showCursorText && <span className="cursor-animation-text">|</span>}
                </p>
            </div>
        </section>
    );
}

export default ABitOfMe;
