import React from "react";
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from './components/LandingPage'
import Formulario from './components/Formulario';
import Login from './components/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="formulario" element={<Formulario />} />
      </Routes>
    </>
  );
}

export default App;
