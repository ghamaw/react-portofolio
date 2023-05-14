import React, { useState } from 'react';
import './portofolio.css';

const Portofolio = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="portofolio section" id="portofolio">
            <h2 className="section__title">Portofolio</h2>
            <span className="section__subtitle">My recent work</span>

            <div className="portofolio__container container grid">
                <div className="portofolio__content">
                    <div>
                        <i className="bx bxl-html5 portofolio__button-logo"></i>
                        <i className="bx bxl-css3 portofolio__button-logo"></i>
                        <i className="bx bxl-javascript portofolio__button-logo"></i>
                        <i className="bx bxl-php portofolio__button-logo"></i>
                        <h3 className="portofolio__title">Titir Tegal</h3>
                    </div>

                    <span className="portofolio__button" onClick={() => toggleTab(1)}>View More {" "}
                        <i className="uil uil-arrow-right portofolio__button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "portofolio__modal active-modal" : "portofolio__modal"}>
                        <div className="portofolio__modal-content">
                            <i className="uil uil-times portofolio__modal-close" onClick={() => toggleTab(0)}></i>

                            <div className="portofolio__modal-img1"></div>

                            <h3 className="portofolio__modal-title">Titir Cetar</h3>
                            <p className="portofolio__modal-description">Disaster risk and threat data management application in Tegal Regency</p>
                            <a href="https://titir.tegalkab.go.id/" target="_blank" rel="noreferrer" className="portofolio__modal-link">View project</a>

                            {/* <ul className="portofolio__modal-services grid">
                                <li className="portofolio__modal-services">
                                    <i className="uil uil-check-circle portofolio__modal-icon"></i>
                                    <p className="portofolio__modal-info">Develop an webgis aplication</p>
                                </li>

                                <li className="portofolio__modal-services">
                                    <i className="uil uil-check-circle portofolio__modal-icon"></i>
                                    <p className="portofolio__modal-info">Develop an webgis aplication</p>
                                </li>

                                <li className="portofolio__modal-services">
                                    <i className="uil uil-check-circle portofolio__modal-icon"></i>
                                    <p className="portofolio__modal-info">Develop an webgis aplication</p>
                                </li>
                            </ul> */}

                        </div>
                    </div>
                </div>

                <div className="portofolio__content">
                    <div>
                        <i className="bx bxl-html5 portofolio__button-logo"></i>
                        <i className="bx bxl-css3 portofolio__button-logo"></i>
                        <i className="bx bxl-javascript portofolio__button-logo"></i>
                        <i className="bx bxl-php portofolio__button-logo"></i>
                        <h3 className="portofolio__title">Kedaireka Labuan Bajo</h3>
                    </div>

                    <span className="portofolio__button" onClick={() => toggleTab(2)}>View More {" "}
                        <i className="uil uil-arrow-right portofolio__button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "portofolio__modal active-modal" : "portofolio__modal"}>
                        <div className="portofolio__modal-content">
                            <i className="uil uil-times portofolio__modal-close" onClick={() => toggleTab(0)}></i>

                            <div className="portofolio__modal-img2"></div>

                            <h3 className="portofolio__modal-title">Kedaireka Labuan Bajo</h3>
                            <p className="portofolio__modal-description">Application to determine land use and tourism potential based on land use in Labuan Bajo</p>
                            <a href="https://kedairekalabuanbajo.org/" target="_blank" rel="noreferrer" className="portofolio__modal-link">View project</a>


                            {/* <ul className="portofolio__modal-services grid">
                                <li className="portofolio__modal-services">
                                    <i className="uil uil-check-circle portofolio__modal-icon"></i>
                                    <p className="portofolio__modal-info">Develop an webgis aplication</p>
                                </li>

                                <li className="portofolio__modal-services">
                                    <i className="uil uil-check-circle portofolio__modal-icon"></i>
                                    <p className="portofolio__modal-info">Develop an webgis aplication</p>
                                </li>

                                <li className="portofolio__modal-services">
                                    <i className="uil uil-check-circle portofolio__modal-icon"></i>
                                    <p className="portofolio__modal-info">Develop an webgis aplication</p>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                </div>

            </div>

        </section>

    )
}

export default Portofolio