/* eslint-disable default-case */
import React from "react";
import PropTypes from "prop-types";

import Logo from "../assets/img/logo.svg";
import "../assets/css/Home.css";

const Home = ({ style }) => {
    return (
        <>
            <div className="hero">
                <div id="particles-js" class="burbujas_home">
                    {/*<canvas class="particles-js-canvas-el"></canvas>*/}
                </div>
                <div
                    className="inner-header text-center  flex text-white"
                    id="homeGrid"
                >
                    {
                        //Esto es temporal mientras se decide cual es la mejor idea para el inicio.
                        (() => {
                            switch (style) {
                                case "onlyLogo":
                                    return (
                                        <div className="use_home_grid">
                                            <img src={Logo} id="logo_home" alt="" />
                                        </div>
                                    );
                                case "onlyText":
                                    return (
                                        <div class="use_home_grid">
                                            <h1 class="title_home">Digitalmente</h1>
                                            <p class="desc_home">
                                                Plataforma de salud mental
                                            </p>
                                        </div>
                                    );
                                case "oneCharacter":
                                    return (
                                        <div className="image_home">
                                            <img src="img/personajeHome.svg" id="logo_home" alt="Logotipo del proyecto" />
                                        </div>
                                    )
                                case "twoCharacters":
                                    return (
                                        <>
                                            <div className="image_home">
                                                <img src="img/personajeHome.svg" id="logo_home" alt="Personaje animado"
                                                />
                                            </div>
                                            <div class="use_home_grid">
                                                <img src="img/logo.svg" id="logo_home" alt="Personaje animado" />
                                            </div>
                                        </>
                                    );
                            }
                        })()}
                </div>
                <div className="w wave"></div>
                <div className="w wave2"></div>
                <div className="w wave3"></div>
                <div className="w wave4"></div>
            </div>
        </>
    );
};

Home.propTypes = {
    style: PropTypes.string,
};

export default Home;
