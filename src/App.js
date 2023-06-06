
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      {/* <ProgressBar/> */}
      <Routes>
    <Route path="/" index element = {<Home/>}/>
      </Routes>   
      <Footer/>
       </BrowserRouter>
    </>
  );
}

export default App;
