import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">WICAKSONO</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#qualification" className="footer__link">Qualification</a>
                    </li>

                    <li>
                        <a href="#portofolio" className="footer__link">Portofolio</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/witchactsolo" className="footer__social-link" target="_blank" rel='noreferrer'>
                        <i className='bx bxl-instagram' ></i>
                    </a>

                    <a href="https://github.com/ghamaw" className="footer__social-link" target="_blank" rel='noreferrer'>
                        <i className='bx bxl-github' ></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; Wicaksono. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer