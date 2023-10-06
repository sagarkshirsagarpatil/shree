import React from "react";
import Navbar from "./component/Navbar";
import BasicExample from "./component/nav";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
const App=()=>{
  return (
    <BrowserRouter>
          <BasicExample/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/services" element={<Contact/>}/>
        </Routes>
     </BrowserRouter>
  )
   
 

}

export default App;
