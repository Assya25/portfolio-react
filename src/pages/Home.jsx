import { FaUser, FaMapMarkerAlt, FaBook, FaUsers, FaCode } from "react-icons/fa";
import Skillbar from "../components/Skillbar"
import { SiPantheon } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { useEffect, useState } from "react";
export default function Home() {
  const [githubData, setGithubData] = useState(null);
  const [githubError, setGithubError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadGithubProfile() {
      try {
        const res = await fetch("https://api.github.com/users/github-john-doe");
        if (!res.ok) throw new Error("Erreur lors de la récupération du profil GitHub.");
        const data = await res.json();

        if (isMounted) setGithubData(data);
      } catch (err) {
        if (isMounted) setGithubError(err?.message || "Erreur inconnue.");
      }
    }

    loadGithubProfile();

    return () => {
      isMounted = false;
    };
  }, []);
    return (
        <div>
            <section
            className="text-white"
            style={{
                backgroundImage: "url(/images/hero-bg.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "70vh",
                position: "relative",
            }}
            >
                {/* overlay sombre */}
        
                <div 
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.7)",
                }}
                ></div>
                
            <div className="container text-center position-relative py-5 px-3">
            <h1 className="fw-bold display-5 display-md-4 ">Bonjour je suis John Doe</h1>
            <p className="fs-5 fs-md-3">Développeur Web fullstack</p>

            <button
            className="btn btn-danger mt-3"
            data-bs-toggle="modal"
            data-bs-target="#githubModal">
                    En savoir plus
            </button>
               
                    
            </div>
            </section>

            <section id="a-propos" className="py-5 bg-light">
                <div className="container">
                    <div className="card-relief">
                    <div className="row g-4">

                        {/*Colone gauche */}

                        <div className="col-12 col-lg-6">
                             <h2 className="h4 border-bottom border-3 border-primary pb-2">A propos</h2>
                    <img 
                    src="/images/john-doe-about.jpg"
                    alt="John Doe"
                    className="img-fluid rounded w-100"
                    />
                    <p></p>
                    <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                    minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                    <p className="about-text">Ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div> 
                 

            {/* Colonne Droite */}        

            <div className="col-lg-6">
                <h2 className="h4 border-bottom border-3 border-primary pb-2">Mes compétences</h2>

                {/*Competence 1*/}
               <Skillbar label="HTML5" value={90} colorClass="bg-danger" />
            
                {/*Compétence 2 */}
                 <Skillbar label ="CSS" value={80} colorClass="bg-info" />

                {/*Compétence 3 */}
                <Skillbar label = "JAVASCRIPT" value={70} colorClass="bg-warning" />

                {/*Compétence 4 */}
               <Skillbar label="PHP" value={60} colorClass="bg-success" />

                {/*Compétence 5 */}
                   <Skillbar label="REACT" value={50} colorClass= "bg-primary" />

                   </div>
                   </div>
                   
            </div>
            </div>
            <div 
className="modal fade"
id="githubModal"
tabIndex="-1"
aria-labelledby="githubModalLabel"
aria-hidden="true">

<div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content bg-dark text-light">
        <div className="modal-header border-0">
            <h5 className="modal-title" id="githubModalLabel">
                Mon Profil GitHub
            </h5>
            <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"></button>
        </div>

        <div className="modal-body">
            {!githubData && !githubError && (
                <p className="mb-0">Chargement du profil...</p>
            )}

            {githubError &&(
                <p className="mb-0 text-warning">{githubError}</p>
            )}

            {githubData && (
                <div className="row align-items-center g-4">
                    <div className="col-12 col-md-5 text-center mb-3 mb-md-0">
                    <img
                    src={githubData.avatar_url}
                    alt={githubData.login}
                    className="img-fluid rounded-circle"
                    style={{maxWidth:230}}
                    />
                    </div>
                  
                    <div className="col-12 col-md-7">
                        <div className="d-flex align-items-center mb-2">
                            <FaUser className="me-2 text-white" />
                        <a 
                        href={githubData.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fw-semibold text-info text-decoration-underline">
                                
                                {githubData.name ||githubData.login} </a>
                                </div>

                               <hr className="border-secondary" />

                        <p className="small mb-3">{githubData.bio}</p>

                        <hr className="border-secondary" />

                         <div className="d-flex align-items-center mb-2">
                            <FaMapMarkerAlt className="me-2 opacity-75" />
                            <span>{githubData.location || "Localisation non renseignée"}</span> </div>
                             <hr className="border-secondary" />


                        <div className="d-flex align-items-center mb-2">
                            <FaBook className="me-2 opacity-75" />
                            <span>Repositories : {githubData.public_repos}</span> </div>
                             <hr className="border-secondary" />

                            <div className="d-flex align-items-center mb-2">
                            <FaUsers className="me-2 opacity-75" />
                            <span>Followers: {githubData.followers}</span> </div>
                             <hr className="border-secondary" />

                            <div className="d-flex align-items-center mb-2">
                            <FaUsers className="me-2 opacity-75" />
                            <span>Following: {githubData.following}</span></div>
                             <hr className="border-secondary" />
                            
                            <a
                            href={githubData.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-light btn-sm">


                            <FaGithub className="me-2" />
                            Voir sur GitHub
                            </a>
                            </div>
                           </div>
                          

            )}
            </div>
             <hr className="border-secondary" />
            <div className="modal-footer border-0 justify-content-end px-3 pb-3">
                <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal">
                        Fermer
                    </button>
                    </div>   
                    </div> 
                    </div>
             </div>
            </section>
           </div>

            );
}