import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Menu from './components/Menu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/menu' exact element={<Menu />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/contact' exact element={<Contact />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
