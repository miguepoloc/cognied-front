import React from 'react';
import "../assets/css/Objetives.css";

const Objetives = ({ section }) => {
    return (
        <section id={section.id} style={{paddingTop:"6%"}}>
            <div className="content-103">
                <div className="container">
                    <div className="row">
                        <h2 className="display-5 fw-bold text-center mb-4">Nuestros objetivos</h2>
                        <div className="col-md-3 col-sm-3">
                            <div className="service-post">
                                <div className="service-content">
                                    <div className="service-icon">
                                        <i className="fa fa-share-alt"></i>
                                    </div>
                                    <h3 className="service-title">
                                        Advertising
                                    </h3>
                                    <p className="service-description">
                                        Seitan brunch meh, food truck Wes
                                        Anderson quinoa XOXO readymade gastropub
                                        gluten-free heirloom wolf skateboard.
                                    </p>
                                </div>
                                <div className="service-hover"></div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3">
                            <div className="service-post">
                                <div className="service-content">
                                    <div className="service-icon">
                                        <i class="fas fa-pencil-alt"></i>
                                    </div>
                                    <h3 className="service-title">
                                        Branding Design
                                    </h3>
                                    <p className="service-description">
                                        Seitan brunch meh, food truck Wes
                                        Anderson quinoa XOXO readymade gastropub
                                        gluten-free heirloom wolf skateboard.
                                    </p>
                                </div>
                                <div className="service-hover"></div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3">
                            <div className="service-post">
                                <div className="service-content">
                                    <div className="service-icon">
                                        <i class="fas fa-lightbulb"></i>
                                    </div>
                                    <h3 className="service-title">
                                        Creative Marketing
                                    </h3>
                                    <p className="service-description">
                                        Seitan brunch meh, food truck Wes
                                        Anderson quinoa XOXO readymade gastropub
                                        gluten-free heirloom wolf skateboard.
                                    </p>
                                </div>
                                <div className="service-hover"></div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3">
                            <div className="service-post">
                                <div className="service-content">
                                    <div className="service-icon">
                                        <i class="fas fa-code-branch"></i>
                                    </div>
                                    <h3 className="service-title">
                                        Creative Marketing
                                    </h3>
                                    <p className="service-description">
                                        Seitan brunch meh, food truck Wes
                                        Anderson quinoa XOXO readymade gastropub
                                        gluten-free heirloom wolf skateboard.
                                    </p>
                                </div>
                                <div className="service-hover"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-column">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#FC8890"
                        fill-opacity="1"
                        d="M0,160L48,170.7C96,181,192,203,288,208C384,213,480,203,576,181.3C672,160,768,128,864,133.3C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </svg>
              
            </div>
        </section>
    );
};
export default Objetives;