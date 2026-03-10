import { Link, } from "react-router-dom";
import {FaGithub, FaTwitter, FaLinkedin} from "react-icons/fa";
import { GiWhiteBook } from "react-icons/gi";

export default function Footer() {
    return (
        <footer style={{backgroundColor: "#212529", color:"white", padding: "40px 0"}}>
          <footer className="site-footer" style={{backgroundColor: "#212529", color:"white", padding: "0px 0"}}>
          <div style={{maxWidth: "1200px", margin:"0 auto", padding:"0 16px"}}>
        <div
        style={{
          display:"grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "40px",
        }}
        >
          <div>
            <h5 style={{ fontWeight:"700", marginBottom:12}}>John Doe</h5>
            <p style={{margin: 0, opacity: 0.85}}>40 rue Laure Diebold</p>
            <p style={{margin: 0, opacity: 0.85}}>69009 Lyon, France</p>
            <p style={{margin: 0, opacity: 0.85}}>10 20 30 40 50</p>
            <p style={{margin: 0, opacity: 0.85}}>johndoe@gmail.com</p>

<div className="footer-icons" style={{marginTop: "15px", display:"flex", gap:"15px"}}>    
          <div style={{ marginTop: "15px", display:"flex", gap:"15px" }}>
            <a href="https://github.com" target="_blank" rel="noopener nooreferrer" style={{color: "white"}}>
            <FaGithub size={20}/>
            </a>
          <a href="https://x.com" target="_blank" rel="noopener nooreferrer" style={{color: "white"}}>
            <FaTwitter size={20}/>
            </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener nooreferrer" style={{color: "white"}}>
            <FaLinkedin size={20}/>
            </a>
          </div>
          </div>
          </div>

          <div>
            <h5 style={{ fontWeight:"700", marginBottom:12 }}>Lien Utiles</h5>
            <ul style={{listStyle:"none", padding:0, margin:0, lineHeight: 1.9 }}>
              <li>
                <Link style={{color:"white", textDecoration: "none", opacity:0.85}} to="/">Accueil</Link> 
                </li> 
              <li>
                <Link style={{color:"white", textDecoration: "none", opacity:0.85}} to="/services">Services</Link> 
                </li>
              <li>
                <Link style={{color:"white", textDecoration: "none", opacity:0.85}} to="/portfolio">Portfolio
                </Link> 
                </li>
              <li>
                <Link style={{color:"white", textDecoration: "none", opacity:0.85}}to="contact">Me contacter
                </Link>
                 </li>
              <li>
                <Link style={{color:"white", textDecoration: "none", opacity:0.85}}to="/mentions-legales">Mentions légales</Link> 
                </li>
            </ul>
            </div>

            <div>
              <h5 style={{fontWeight: 700, marginBottom: 12}}>Mes dernières réalisations</h5>
              <ul style={{listStyle:"none", padding:0, margin: 0, lineHeight: 1.9, opacity: 0.85}}>
            <li>Fresh Food</li>
            <li>Restaurant Akira</li>
            <li>Espace bien-être</li>
            <li>SEO</li>
            <li>Création d'une API</li>
            <li>Maquette d'un site</li>
              </ul>
            </div>
        </div>
        </div>
        </footer>
        </footer>
        
    );
}