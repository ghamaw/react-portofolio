import React, { useEffect } from 'react';
import './scrollup.css';

const Scrollup = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollUp = document.querySelector(".scrollup");
            if (window.scrollY >= 430) {
                scrollUp.classList.add("show-scroll");
            } else {
                scrollUp.classList.remove("show-scroll");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button className="scrollup" onClick={scrollToTop} aria-label="Scroll to top">
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </button>
    );
};

export default Scrollup;
