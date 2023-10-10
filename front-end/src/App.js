import React from "react";
import BasicExample from "./component/nav";
import Footer from "./component/footer";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
const App=()=>{
  return (
    <BrowserRouter>
          <BasicExample/>
        <Routes>
          <Route path="/shree" element={<Home/>}/>
          <Route path="shree/about" element={<About/>}/>
          <Route path="shree/contact" element={<Contact/>}/>
          <Route path="shree/services" element={<Contact/>}/>
        </Routes>
        <Footer/>
     </BrowserRouter>
  )
   
 

}

export default App;
