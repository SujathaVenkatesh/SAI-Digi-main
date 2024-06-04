import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Common/Navbar';
import Footer from './Common/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/ContactUs/Contact';
import Services from './Pages/services/Services';
import SEO from './Pages/services/SEO/SEO';
import SEM from './Pages/services/Sem/Sem1';
import SMO from './Pages/services/SMO/SMO';
import SMM from './Pages/services/SMM/SMM';
import Graphics from './Pages/services/GraphicsDesign/Graphic';
import WebDevMain from './Pages/WebDevelopment/WebDevMain';



function App() {
    

    
    return (
        < >
        <Navbar />
        <Router>
          
            <Routes>
                <Route exact path="/"  element={<Home />} />
                <Route path="/about" exact element={<About/>} />
                <Route path="/contact" exact element={<Contact/>} />
                <Route path="/Services" exact element={<Services/>} />
                <Route path="/seo" exact element={<SEO/>} />
                <Route path="/sem1" exact element={<SEM/>} />
                <Route path="/smo" exact element={<SMO/>} />
                <Route path="/smm" exact element={<SMM/>} />
                <Route path="/graphic-design" exact element={<Graphics />} />
                <Route path="/Web development" exact element={<WebDevMain />} />

            </Routes>
           
        </Router>
         <Footer />
         </>
    );
}

export default App;
