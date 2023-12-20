import React from 'react';
import './Projects.css'
import Card from '../Card/Card';
import imageEncriptador from '../../assets/Imagenes/Encriptador.png';
import imageToDoApp from '../../assets/Imagenes/To-Do-App.png';
import imageYardSale from '../../assets/Imagenes/Yard-Sale.png';
import imageBarberShop from '../../assets/Imagenes/Barbershop.png';
import imageAsincronismoLanding from '../../assets/Imagenes/Asincronismo-Landing.png';
import imageTarjetaPresentacion from '../../assets/Imagenes/Tarjeta-de-presentacion.png';
import imageMaquetadoWeb from '../../assets/Imagenes/Maquetado-de-sitio-web.png';
import imageMixMap from '../../assets/Imagenes/mix-map-clon.jpeg';

const Projects = () => {

    const projects = [
        {
            name: 'Encryptor',
            image: imageEncriptador,
            url: 'https://kevin-alexis.github.io/Encriptador/',
            urlSourceCode: 'https://github.com/kevin-alexis/Encriptador'
        },
        {
            name: 'To-Do App',
            image: imageToDoApp ,
            url: 'https://kevin-alexis.github.io/To-Do-App/',
            urlSourceCode: 'https://github.com/kevin-alexis/To-Do-App'
        },
        {
            name: 'Yard Sale',
            image: imageYardSale,
            url: 'https://kevin-alexis.github.io/Yard-Sale/',
            urlSourceCode: 'https://github.com/kevin-alexis/Yard-Sale'
        },
        {
            name: 'Barber Shop',
            image: imageBarberShop,
            url: 'https://kevin-alexis.github.io/Barbershop/',
            urlSourceCode: 'https://github.com/kevin-alexis/Barbershop'
        },
        {
            name: 'Landing Asynchronism',
            image: imageAsincronismoLanding,
            url: 'https://kevin-alexis.github.io/async-landing/src/',
            urlSourceCode: 'https://github.com/kevin-alexis/async-landing'
        },
        {
            name: 'Business card',
            image: imageTarjetaPresentacion,
            url: 'https://kevin-alexis.github.io/Tarjeta-de-presentacion/',
            urlSourceCode: 'https://github.com/kevin-alexis/Tarjeta-de-presentacion'
        },
        {
            name: 'Website Layout',
            image: imageMaquetadoWeb,
            url: 'https://kevin-alexis.github.io/Maquetado-de-un-sitio-web-de-compras/',
            urlSourceCode: 'https://github.com/kevin-alexis/Maquetado-de-un-sitio-web-de-compras'
        },
        {
            name: 'MixMap Clone',
            image: imageMixMap,
            url: 'https://kevin-alexis.github.io/Maquetado-de-pagina-mixmap/',
            urlSourceCode: 'https://github.com/kevin-alexis/Maquetado-de-pagina-mixmap'
        }
    ]

    return (
        <section class="projects">
                    <h1 id="header-projects">Projects</h1>
                    <div class="portfolioGrid">
                        {projects.map(project => {
                            return (
                                <Card
                                    key={project.name}
                                    name={project.name}
                                    image={project.image}
                                    url={project.url}
                                    urlSourceCode={project.urlSourceCode}
                                />                                
                            )

                        })}
                    </div>
        </section>
    );
}

export default Projects;
