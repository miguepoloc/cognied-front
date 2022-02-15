import React, { useEffect } from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import Objetives from "./Objetives";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import Scroll from "../helpers/helperScroll";
import ButtonToUp from "./ButtonToUp"
function LandingPage() {
    //El id servirá para nombrar los identificadores y el txt para colocar el nombre (por ejemplo en la barra de navegacion.)
    //Adicional a eso permitirá hacer pocas modificaciones en el codigo
    const secciones = {
        Home: { id: "Home", txt: "Inicio" },
        Objetivos: { id: "Objetivos", txt: "Objetivos" },
        AboutUs: { id: "AboutUs", txt: "Acerca de nosotros" }, //No planeo agregar el footer.
    };

    //Inicializacion del scroll.
    const scroll = new Scroll(secciones, secciones["Home"].id, ["nameNavActive"]);
    //Cuando cargue el componente, ejecuta este hook, así se pondrá activo el element del nav segun corresponda
    useEffect(() => {
        scroll.eventScroll();
    });
    return (
        <>
            <NavBar
                Secciones={secciones}
                PrimeraSeccion={secciones["Home"]}
                scroll={scroll}
            />
            <Home section={secciones["Home"]} style="onlyLogo" />
            <Objetives section={secciones["Objetivos"]} />
            <AboutUs section={secciones["AboutUs"]} />
            <Footer />
            <ButtonToUp Scroll={scroll} seccionToUp = {secciones.Home.id}/>
        </>
    );
}

export default LandingPage;

