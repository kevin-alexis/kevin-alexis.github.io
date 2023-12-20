import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import ABitOfMe from '../../Components/ABitOfMe/ABitOfMe';
import Projects from '../../Components/Projects/Projects';
import Skills from '../../Components/Skills/Skills';
import './Home.css'
import Contact from '../../Components/Contact/Contact';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <main class="content">
                <ABitOfMe/>
                <Projects/>
                <Skills/>
                <Contact/>
            </main>
            <Footer/>
        </div>
    );
}

export default Home;
