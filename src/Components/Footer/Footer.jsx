import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer class="footer">
                <div class="top-footer">
                    <div class="line"></div>
                    <div class="social-networks">
                        <a href="https://github.com/kevin-alexis" target='_blank'><i class="fa-brands fa-github"></i></a> 
                        <a href="https://www.linkedin.com/in/kevin-alexis-bello-maldonado/" target='_blank'><i class="fa-brands fa-linkedin"></i></a> 
                        <a href="https://api.whatsapp.com/send?phone=529984111421" target='_blank'><i class="fa-brands fa-whatsapp"></i></a> 
                    </div>
                    <div class="line"></div>
                </div>
                <div class="bottom-footer">
                    <div class="legal-information">
                        <a href="">Legal information</a>
                        <p>|</p>
                        <a href="">Privacy Policy</a>
                    </div>
                    <p class="copyright">Copyright © 2024</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
