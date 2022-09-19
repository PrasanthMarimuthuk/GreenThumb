import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import "../src/Styles/Animation.css";
import About from "./Components/About";
import Component1 from "./Components/Component1";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/collections" element={<Component1/>}/>
        <Route path="/about" element={<About/>}/>
       </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
