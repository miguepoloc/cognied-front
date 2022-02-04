import React from 'react';
import Home from "./Home";
import NavBar from "./NavBar";
import Objetives from "./Objetives";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
function LandingPage() {
    //El id servirá para nombrar los identificadores y el txt para colocar el nombre (por ejemplo en la barra de navegacion.)
    //Adicional a eso permitirá hacer pocas modificaciones en el codigo
 const secciones = {
     "Home": { id: "Casa", txt: "Casa" },
     "Objetivos":{id: "Objetivos", txt: "Objetivos"},
     "AboutUs":{id: "AboutUs", txt: "Acerca de nosotros"}};

 return (
     <>
         <NavBar Secciones={secciones} PrimeraSeccion={secciones["Home"]} />
         <Home section={secciones["Home"]} style="onlyLogo" />
         <Objetives section={secciones["Objetivos"]} />
         <AboutUs section={secciones["AboutUs"]} />
         <Footer />
     </>
 );
}

export default LandingPage;

