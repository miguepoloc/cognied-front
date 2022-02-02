import React from 'react';
import Home from "./Home";
import NavBar from "./NavBar";
import Objetives from "./Objetives";
function LandingPage() {
    //El id servirá para nombrar los identificadores y el txt para colocar el nombre (por ejemplo en la barra de navegacion.)
    //Adicional a eso permitirá hacer pocas modificaciones en el codigo
 const secciones = {
     "Home": { id: "Casa", txt: "Casa" },
     "Objetivos":{id: "Objetivos", txt: "Objetivos"},
     "Seccion3":{id: "Section-3", txt: "Seccion3"}};

 return (
     <>
         <NavBar Secciones={secciones} PrimeraSeccion={secciones["Home"]} />
         <Home section={secciones["Home"]} style="onlyLogo" />
         <Objetives section={secciones["Objetivos"]} />
     </>
 );
}

export default LandingPage;

