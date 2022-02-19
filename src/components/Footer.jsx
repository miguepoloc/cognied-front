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

            <div class="footer-basic footer pb-5">
                <div class="social">
                    <a href="#">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="#">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                        <i class="fab fa-whatsapp"></i>
                    </a>
                </div>
                <ul class="list-inline">
                    <li class="list-inline-item">
                        <a href="#">Home</a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#">Services</a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#">About</a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#">Terms</a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#">Privacy Policy</a>
                    </li>
                </ul>
                <p class="copyright">Company Name © 2022</p>
            </div>
        </footer>
    );
};

export default Footer;
