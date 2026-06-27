import React from "react";
import BasicExample from "./component/nav";
import Footer from "./component/footer";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Enquery from "./pages/Enquery";
import Services from "./pages/Services";
import List from "./pages/List";

const App=()=>{
  return (
    <BrowserRouter>
          <BasicExample/>
        <Routes>
          <Route path="/" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="services" element={<Services/>}/>
            <Route path="enquery" element={<Enquery/>}/>
            <Route path="list" element={<List/>}/>
        </Routes>
        <Footer/>
     </BrowserRouter>
  )
   
 

}

export default App;
