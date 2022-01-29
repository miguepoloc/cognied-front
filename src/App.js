import './App.css';
import { Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage'
import Formulario from './components/Formulario';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="formulario" element={<Formulario />} />
      </Routes>
    </>
  );
}

export default App;
