import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';

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
    </Router>
    </>
  );
}

export default App;
