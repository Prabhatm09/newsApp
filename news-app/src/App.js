import './App.css';
import Homepage from "./components/Homepage/Homepage"
import Header from './components/header/Header';
import Navbarhead from './components/Navbarhead/Navbarhead';
import Footer from './components/footer/Footer';
import Contact from "../src/components/Navbarhead/Contact"
import Techno from "./components/Navbarhead/Techno"
import Market from "./components/Navbarhead/Market"
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <> 
   {/* <News.Provider value={posts}> */}
      <Header />
    {/* </News.Provider> */}
      <Navbarhead />
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/techno" element={<Techno/>}/>
      <Route path="/Business" element={<Market/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App;
