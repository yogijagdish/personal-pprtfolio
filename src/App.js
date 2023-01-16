import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills'
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
      </Routes>   
      <Footer/>
       </Router>
    </>
  );
}

export default App;
