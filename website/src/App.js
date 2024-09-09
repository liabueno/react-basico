import React from 'react';
import Menu from './components/Menu';
// import Form from './components/Form';
import Slides from './components/Slides';
import './App.css';
 
function App() {
            {/* TODO: ARRUMAR ESSA PAGE
              CRIAR HOME */}

  return (
    <div>
      <header>
        <Menu />
      </header>
      <main>
        <section>
          <h2>Galeria de Slides</h2>
          <Slides />
        </section>
        <section>
        {/* <h2>Formulário de Cadastro</h2>
        <Form /> */}
        {/* TODO: PAGE CONTATO */}
        </section>
      </main>
      <footer>
        <p>Desenvolvido por Júlia</p>
      </footer>
    </div>
  );
}
 
export default App;