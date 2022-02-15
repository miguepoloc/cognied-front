import React from 'react';
import "../assets/css/Footer.css"
const Footer = ({ section }) => {
    return (
        <footer>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#00659d"
                    fill-opacity="1"
                    d="M0,128L80,133.3C160,139,320,149,480,170.7C640,192,800,224,960,224C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                ></path>
            </svg>
            <div className="  footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-xs-12 about-company">
                            <h2>Heading</h2>
                            <p className="pr-5 text-white-50">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam ac ante mollis quam
                                tristique convallis{" "}
                            </p>
                            <p>
                                <a href="#">
                                    <i className="fa fa-facebook-square mr-1"></i>
                                </a>
                                <a href="#">
                                    <i className="fa fa-linkedin-square"></i>
                                </a>
                            </p>
                        </div>
                        <div className="col-lg-3 col-xs-12 links">
                            <h4 className="mt-lg-0 mt-sm-3">Links</h4>
                            <ul className="m-0 p-0">
                                <li>
                                    - <a href="#">Lorem ipsum</a>
                                </li>
                                <li>
                                    - <a href="#">Nam mauris velit</a>
                                </li>
                                <li>
                                    - <a href="#">Etiam vitae mauris</a>
                                </li>
                                <li>
                                    - <a href="#">Fusce scelerisque</a>
                                </li>
                                <li>
                                    - <a href="#">Sed faucibus</a>
                                </li>
                                <li>
                                    - <a href="#">Mauris efficitur nulla</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-xs-12 location">
                            <h4 className="mt-lg-0 mt-sm-4">Location</h4>
                            <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
                            <p className="mb-0">
                                <i className="fa fa-phone mr-3"></i>(541)
                                754-3010
                            </p>
                            <p>
                                <i className="fa fa-envelope-o mr-3"></i>
                                info@hsdf.com
                            </p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col copyright">
                            <p className="">
                                <small className="text-white-50">
                                    © 2019. All Rights Reserved.
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
