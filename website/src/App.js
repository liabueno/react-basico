// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NasaPage from './pages/NasaPage';
import Contact from './pages/Contact';
import Menu from './components/Menu';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/nasa" element={<NasaPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
