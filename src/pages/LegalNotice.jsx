import { FaGlobe, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaMap } from "react-icons/fa";
export default function LegalNotice() {
    return (
        <main>
            <section className="services-banner">

            </section>
            <section className="py-4"></section>
            <div className="text-center mb-5">
                            <h2 className="fw-bold mb-2"> Mentions Légales</h2>
                            <p></p>
                            <div className="title-underline"></div>
                             </div>

                <div className="container">
                    <div className="row g-4 align-items-stretch"></div>
                    
                    <div className="accordion" id="legalAccordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">

                    <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne">
                        
                        Editeur du Site
                        
                        </button>    
                        </h2>
                <div 
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#legalAccordion">

                <div className="accordion-body">
                   <section className="py-2"></section>
                            <h4 className="fs-2 mb-3">John Doe</h4>
                            <div className="d-flex align-items-start mb-2">
                             <FaMap className="text-black mt-1"/>
                             <span className="ms-2">40 rue Laure Diebold</span>
                           </div>
                            <div className="d-flex align-items-start mb-2">
                           <FaMapMarkerAlt className="text-black mt-1" />
                           <span className="ms-2">69009 Lyon</span>
                         </div>
                         <div className="d-flex align-items-start mb-2">
                          <FaPhoneAlt className="text-black mt-1" />
                         <span className="ms-2">10 20 30 40 50</span>
                        </div>
                        <div className="d-flex align-items-start mb-2">
                        <FaEnvelope className="text-black mt-1" />
                        <span className="ms-2">johndoe@gmail.com</span>
                </div>
                
                 </div>
                </div>
                </div>

                  <div className="accordion" id="legalAccordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">

                    <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo">
                        
                        Hébergeur
                        
                        </button>    
                        </h2>
                <div 
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#legalAccordion">

                <div className="accordion-body">
                   <section className="py-2"></section>
                            <h4 className="fs-2 mb-3">alwaysdata</h4>
                            <div className="d-flex align-items-start mb-2">
                             <span className="ms-1">91 rue du Fautbourg Saint Honoré, 75008 Paris</span>
                           </div>
                        <div className="d-flex align-items-start mb-2">
                        <FaGlobe className="text-black mt-1" />
                        <span className="ms-2">www.alwaysdata.com</span>
                </div>
                
                 </div>
                </div>
                </div>
                </div>

                     <div className="accordion" id="legalAccordion">
                        <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">

                    <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="true"
                    aria-controls="collapseThree">
                        
                        Crédit
                        
                        </button>    
                        </h2>
                <div 
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#legalAccordion">
                   
                    <section className="py-2"></section>
                    <h3 className="fw-bold mb-0 ms-3">Crédits</h3>

                <div className="accordion-body">
 
                         <p className="mb-3">
                           Ce site a été réalisé par John Doe étudiant <a 
                           href="https://www.centre-europeen-formation.fr/"
                           target="blank"
                           rel="noonpener noreferrer"
                           className="link-primary">
                           au Centre Européen de Formation.</a> </p>

                        <p className="mb-3 fst-italic">Les images utilisé sur ce site sont libres de droits et ont été obtenues sur le site <a 
                           href="https://pixabay.com/fr/"
                           target="blank"
                           rel="noonpener noreferrer"
                           className="link-primary">Pixabay</a></p>
                        
                    
                       <p className="mb-3 fst-italic">La Favicon de ce site a été fournie par {" "} <a 
                           href="https://www.flaticon.com/de/kostenlose-icons/john-doe"
                           target="blank"
                           rel="noonpener noreferrer"
                           className="link-primary">John Doe Icons erstellt von Freepik-Flaticon</a></p>
        
                </div>
                </div>
            </div>
                </div>
                </div>
                 
                
            
</div>
</main>
);
}

