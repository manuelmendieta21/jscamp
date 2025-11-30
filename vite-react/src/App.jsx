//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio.jsx";
import Empleos from "./pages/Empleos.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/empleos" element={<Empleos />} />
    </Routes>
  );
}

export default App;