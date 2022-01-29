/* eslint-disable react/style-prop-object */
// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Formulario from './components/Formulario';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home style="onlyLogo"  />} />
        <Route path="formulario" element={<Formulario />} />
      </Routes>
    </div>
  );
}

export default App;
