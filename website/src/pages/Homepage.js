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
      <hr />
      <h1>O que é a NASA?</h1>
      <div className="nasa-info">
        <p>
          A NASA (National Aeronautics and Space Administration) é uma agência governamental dos Estados Unidos
          responsável pelo programa espacial civil, bem como pela pesquisa aeroespacial. Desde sua criação em 1958,
          a NASA liderou várias missões científicas, tecnológicas e de exploração espacial, desempenhando um papel
          fundamental na busca pelo conhecimento sobre o universo.
        </p>
        <img
          src="/images/nasa.png"
          alt="NASA Logo"
          className="nasa-logo"
        />
      </div>
    </div>
  );
}

export default Homepage;
