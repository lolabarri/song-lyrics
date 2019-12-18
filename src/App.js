import React from 'react';
import './App.css';
import lyrics from "../public/lyrics.json";
import TypeCard from "./components/TypeCard/TypeCard";

function App() {
  return (
    <div className="App">
        <h1>CANCIONES ALCOR</h1>
        <TypeCard type="Entrada"/>
        <TypeCard type="Ofertorio"/>
        <TypeCard type="Comunión"/>
        <TypeCard type="Salida"/>
    </div>
  );
}

export default App;
