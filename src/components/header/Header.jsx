import React, { useState } from 'react';
import {
    UilEstate,
    UilApps,
    // UilUser,
    UilScenery,
    UilFileAlt,
    UilMessage,
    UilTimesSquare
} from '@iconscout/react-unicons'
import "./header.css";

const Header = () => {
    /* ================== Toggle Menu =================== */
    const [Toggle, showMenu] = useState(false);
    const [Scroll, isScrolled] = useState(false);
    const [activeNav, setActiveNav] = useState("#home")
    const changeNavbarStyle = () => {
        if (window.scrollY >= 1) {
            isScrolled(true);
        }
        else {
            isScrolled(false);
        }
    };
    window.addEventListener('scroll', changeNavbarStyle);

    return (
        <header className={Scroll ? 'header colorChange' : 'header'}>
            <nav className="nav container">
                <a href="index.html" className="nav__logo">WICAKSONO</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                <UilEstate className="nav__icon" /> Home
                            </a>
                        </li>


                        {/* <li className="nav__item">
                            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                <UilUser className="nav__icon" /> About
                            </a>
                        </li> */}

                        <li className="nav__item">
                            <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                                <UilFileAlt className="nav__icon" /> Skills
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#portofolio" onClick={() => setActiveNav('#portofolio')} className={activeNav === "#portofolio" ? "nav__link active-link" : "nav__link"}>
                                <UilScenery className="nav__icon" /> Portofolio
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                <UilMessage className="nav__icon" /> Contact
                            </a>
                        </li>

                        <UilTimesSquare className="nav__close" onClick={() => showMenu(!Toggle)} size="30" />
                    </ul>
                </div>

                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <UilApps />
                </div>
            </nav>
        </header>
    )
}

export default Header