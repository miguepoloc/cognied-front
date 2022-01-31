import React, { useEffect} from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import NavBarElement from "./NavBarElement";
import "../assets/css/NavBar.css";
import Scroll from "../helpers/helperScroll"
//import Scroll from "../assets/js/scrollTemp"
const NavBar = ({ Secciones,PrimeraSeccion }) => 
{
    const scroll = new Scroll(Secciones, PrimeraSeccion.id, ["nameNavActive"]);

    //Cuando cargue el componente, ejecuta este hook, así se pondrá activo el element del nav segun corresponda
    useEffect(() => {
        scroll.eventScroll();
    });

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
                            className="nameNav"
                            onClick={() => scroll.scroll(PrimeraSeccion.id)}
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
                                    return (
                                        <NavBarElement
                                            key={Seccion}
                                            Seccion={Secciones[Seccion]}
                                            Scroll={(id) => {
                                                scroll.scroll(id);
                                            }}
                                        />
                                    );
                                })
                            }
                            <Button className=" btn-naranja ms-2 me-2">
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
