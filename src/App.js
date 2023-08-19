import React from "react";
import {Route,Routes} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from "./component/home/Home";
import ErrorPage from "./component/ErrorPage";
import Contact from "./component/contact/Contact";
import About from "./component/about/About";
import Projects from "./component/Projects/Projects"
import Particles from "./Particles";

function App() {

  return (      
      <>
      <Particles/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      </>
  );
}

export default App;
