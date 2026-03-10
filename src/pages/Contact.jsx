import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
export default function Contact() {
    const [formData, setFormData] = useState ({
        name:"",
        email:"",
        phone:"",
        subject:"",
        message:"",

    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

return (
        <main>
            <section className="services-banner">

            </section>
            <section className="py-4"></section>
            <div className="text-center mb-5">
                            <h2 className="fw-bold mb-2"> Contact</h2>
                            <p className="mb-3">Pour me contacter en vue d'un entretien ou une future collaboration, merci de remplir le formulaire de contact</p>
                            <div className="title-underline"></div>
                             </div>
           
                <section id="formulaire" className="py-4">

                <div className="container">
                    <div className="card p-3 p-md-4 ">
                    <div className="row g-4">
                    <div className="col-12 col-lg-6">
                          
                          <h3 className="fw-bold mb-3">Formulaire de contact</h3>
                             <div className="title-underline-left mb-4"></div>
            
            <form>
                   <div className="mb-3">
                    <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Nom"
                    value={formData.name}
                    onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    />
                    </div>

                    <div className="mb-3">
                    <input
                    type="phone"
                    className="form-control"
                    name="phone"
                    placeholder="Votre numéro de téléphone"
                    value={formData.phone}
                    onChange={handleChange}
                    />
                    </div>

                    <div className="mb-3">
                    <input
                    type="subject"
                    className="form-control"
                    name="subject"
                    placeholder="Sujet"
                    value={formData.subject}
                    onChange={handleChange}
                    />
                    </div>

                    <div className="mb-3">
                    <textarea
                    className="form-control"
                    name="message"
                    placeholder="Votre message"
                    rows="8"
                    value={formData.message}
                    onChange={handleChange}
                    />
                    </div>
                  </form>
                  </div>

                    <div className="col-12 col-lg-6">
                    <h3 className="fw-bold mb-3">Mes Coordonnées</h3>
                    <div className="title-underline-left mb-4"></div>
                        <p></p>
                        <section className="py-2"></section>
                        <h4 className="fs-2 mb-3">John Doe</h4>
                        <div className="d-flex align-items-start mb-2">
                            <FaGlobe className="text-primary mt-1"/>
                        <span className="ms-2">40 rue Laure Diebold</span>
                        </div>
                        <div className="d-flex align-items-start mb-2">
                            <FaMapMarkerAlt className="text-primary mt-1" />
                        <span className="ms-2">69009 Lyon</span>
                        </div>
                        <div className="d-flex align-items-start mb-2">
                           <FaPhoneAlt className="text-primary mt-1" />
                        <span className="ms-2">10 20 30 40 50</span>
                        </div>
                        <div className="d-flex align-items-start mb-2">
                           <FaEnvelope className="text-primary mt-1" />
                        <span className="ms-2">johndoe@gmail.com</span>
                        </div>
                    <div className="ratio ratio-4x3 mt-3">
                        <div className="ratio ratio-4x3 mt-4">
                         <iframe
                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6369921346086!2d4.7983927!3d45.778464799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65b9483ea1%3A0xeb40e28b0f46eff3!2s41%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1772197316745!5m2!1sfr!2sfr"
                         allowFullScreen
                         loading="lazy"
                         ></iframe>
                        </div>
                    </div>
                    </div>
                    
                    </div>
                    </div>
                    </div>
                    
                        </section>
                        </main>
);
}
