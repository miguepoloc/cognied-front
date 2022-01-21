import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "../assets/css/NavBar.css";
const NavBar = () => {

    
    const [offset, setOffset] = useState(0);

    //Esta funcion permite cambiar 
    const ScrollNavBar = (objOnScroll = null) => {
        var navbar = document.getElementById("navBar");
        var section2 = document.getElementById("section-2");
        // Get the offset position of the navbar
        var positionSection = section2.offsetTop;
        if (offset >= positionSection) {
            console.log("Blanco")
            navbar.classList.remove("bg-transparent");
            navbar.classList.add("bg-white");
        } else {
            console.log("transparente")
            navbar.classList.remove("bg-white");
            navbar.classList.add("bg-transparent");
        }
    };
    ScrollNavBar()
    const Scroll = (id)=>{
        const element = document.getElementById(id);
        if (element) 
            element.scrollIntoView();
        else 
            console.log("No puedo hacer");
    }
    
    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
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
                    <Navbar.Brand href="#home">
                        <Nav.Link
                            href="#home"
                            className="nameNav text-black text-black"
                            onClick={() => Scroll("Home")}
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
                            <Nav.Link
                                href="#home"
                                className="text-black font-weight-bold"
                                onClick={() => Scroll("Home")}
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link
                                href="#features"
                                onClick={() => Scroll("section-2")}
                            >
                                Section 2
                            </Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
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
