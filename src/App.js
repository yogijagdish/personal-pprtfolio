import './App.css';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
    <Route path="/" index element = {<Home/>}/>
    <Route path="/skills" element={<Skills/>}/>
    <Route path="/contact" element={<Contact/>}/>
      </Routes>   
      <Footer/>
       </Router>
    </>
  );
}

export default App;
