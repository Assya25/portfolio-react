import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import LegalNotice from "./pages/LegalNotice";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App () {
  return (
    <Router>
      <div className="app-container">
      <Header />
      
      <main className="main-content">

       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path= "/portfolio" element={<Portfolio />} />
        <Route path="/mentions-legales" element={<LegalNotice />} />
        <Route path="/contact" element={<Contact />} />
</Routes> 
</main>
<Footer />    
</div>
</Router>

  );   
}


export default App;
