export default function Services() {
    return (
        <main>
            <section className="services-banner">

            </section>
            <section className="py-4"></section>
            <div className="text-center mb-5">
                            <h2 className="fw-bold mb-2">Mes offres de services</h2>
                            <p className="mb-3">Voici les prestations sur lesquelles je peux intervenir</p>
                            <div className="title-underline"></div>
                             </div>

                <div className="container">
                    <div className="row g-4 align-items-stretch">
                
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 service-card">
                            <div className="card-body text-center d-flex flex-column">
                                <i className="bi bi-brush text-primary fs-1 mb-3" aria-hidden="true"></i>
                        <h3 className="h5 fw-bold">UX Design</h3>
                        <p>L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications, mobiles, logiciels, 
objets connectés, etc) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus
fluide et agréable possible.</p>
                    </div>
                    </div>
                    </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card h-100 service-card">
                        <div className="card-body text-center d-flex flex-column">
                            <i className="bi bi-code-slash text-primary fs-1 mb-3" aria-hidden="true"></i>
                        <h3 className="h5 fw-bold">Développement Web</h3>
                        <p> Le développement des sites web consiste à créer des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks 
(Bootstrap, React, Angular, etc.) </p>
                    </div>
                    </div>
                    </div>

                 <div className="col-12 col-md-6 col-lg-4">
                    <div className="card h-100 service-card">
                        <div className="card-body text-center d-flex flex-column">
                            <i className="bi bi-search text-primary fs-1 mb-3" aria-hidden="true"></i>             
                        <h3 className="h5 fw-bold">Référencement</h3>
                        <p>Référencement naturel (SEO) est un technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs 
de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.</p>
                    </div>
                    </div>
                    </div>

</div>
                </div>

<section className="py-4"></section>
        </main>



    );
    }


