import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import NavBarElement from "./NavBarElement";
import "../assets/css/NavBar.css";
const NavBar = ({ Secciones,PrimeraSeccion }) => {
    const [offset, setOffset] = useState(0);

    //Esta funcion permite cambiar la barra de navegacion de transparente a blanco cuando. 
    //salga del area del home.
    const ScrollNavBar = () => {
            var _PrimeraSeccion = document.getElementById(PrimeraSeccion.id);
            var navbar = document.getElementById("navBar");

            if (_PrimeraSeccion && navbar) {
                // Get the offset position of the navbar
                var positionSection = _PrimeraSeccion.scrollHeight -20;
                if (offset >= positionSection) {
                    navbar.classList.remove("bg-transparent");
                    navbar.classList.add("bg-white");
                } else {
                    navbar.classList.remove("bg-white");
                    navbar.classList.add("bg-transparent");
                }
            }
            
        
    };
    ScrollNavBar();

    const Scroll = (id) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView();
        else console.log("No puedo hacer");
    };

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener("scroll", onScroll);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    //Nota: cuando el cursor vaya bajando, pasará de transparent a white.
    return (
        <>
            <Navbar
                collapseOnSelect
                expand="lg"
                fixed="top"
                bg="transparent"
                id="navBar"
            >
                <Container fluid>
                    <Navbar.Brand>
                        <Nav.Link
                            className="nameNav text-black text-black"
                            onClick={() => Scroll(PrimeraSeccion.id)}
                        >
                            Cognied
                        </Nav.Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse
                        className="justify-content-end"
                        id="responsive-navbar-nav"
                    >
                        <Nav>
                            {
                                /*
                                Recorro el json. la idea es obtener las keys para poder acceder el value del json y pasarlo al elemento de navegacion.
                                */
                                Object.keys(Secciones).map((Seccion) => {
                                    //console.log(Secciones[Seccion]);
                                    return (
                                        <NavBarElement
                                            key={Seccion}
                                            Seccion={Secciones[Seccion]}
                                            Scroll={Scroll}
                                        />
                                    );
                                })
                            }
                            <Nav.Link>Pricing</Nav.Link>
                            <Button variant="primary" className="ms-2 me-2">
                                Inicia sesion
                            </Button>{" "}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
