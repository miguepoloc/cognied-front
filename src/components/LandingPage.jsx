import React from 'react';
import Home from "./Home";
import NavBar from "./NavBar";

function LandingPage() {
    //El id servirá para nombrar los identificadores y el txt para colocar el nombre (por ejemplo en la barra de navegacion.)
    //Adicional a eso permitirá hacer pocas modificaciones en el codigo
 const secciones = {
     "Home": { id: "Casa", txt: "Casa" },
     "Seccion2":{id: "Section-2", txt: "Seccion2"},
     "Seccion3":{id: "Section-3", txt: "Seccion3"}};

 return (
     <>
         <NavBar Secciones={secciones} PrimeraSeccion={secciones["Home"]} />
         <Home section={secciones["Home"]} style="onlyLogo" />
     </>
 );
}

export default LandingPage;

