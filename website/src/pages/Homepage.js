// pages/Home.js
import React from 'react';
import Slides from '../components/Slides';
import './Homepage.css';

function Homepage() {
  return (
    <div className="home">
      <h1>Bem-vindo a Galeria dos Cosmos!</h1>
      <p>
        Este site utiliza a API da NASA para trazer a você a "Imagem Astronômica do Dia" (APOD - Astronomy Picture of the Day).
        Aqui, você poderá explorar imagens e vídeos astronômicos incríveis fornecidos pela NASA.
      </p>      
      <Slides />
    </div>
  );
}

export default Homepage;
