import { useState } from "react";
import './App.css';
import Homepage from "./components/Navbarhead/Homepage"
import Header from './components/header/Header';
import Navbarhead from './components/Navbarhead/Navbarhead';
import Footer from './components/footer/Footer';
import Contact from "../src/components/Navbarhead/Contact"
import Video from "./components/Navbarhead/Video"
import About from "./components/Navbarhead/Abouts"
import { Route, Routes } from 'react-router-dom';

function App() {

  const [searchKey, setSearchKey] = useState("")

  return (
    <>

      <Header setSearchKey={setSearchKey} />
      <Navbarhead />
      <Routes>
        <Route path="/" element={<Homepage searchKey={searchKey} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/techno" />
        <Route path="/About" element={<About/>} />
        <Route path="/Video" element={<Video/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
