import { Link, NavLink } from "react-router-dom";

export default function Header (){
    return (
<header>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid px-4">
        {/*brand */}
        <Link className="navbar-brand fw-bold" to="/">
        JOHN DOE 
        </Link>

        {/*Burger Button*/}
        
        <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNavbar"
        aria-controls="mainNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links*/}
        <div className="collapse navbar-collapse" id="mainNavbar">
        <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <NavLink className="nav-link" to="/">
                HOME
                </NavLink>
            </li>

            <li className="nav-item">
                <NavLink className="nav-link" to="/services">
                SERVICES
                </NavLink>
            </li>

            <li className="nav-item">
                <NavLink className="nav-link" to="/portfolio">
                PORTFOLIO
                </NavLink>
            </li>

    
            <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                CONTACT
                </NavLink>
            </li>


            <li className="nav-item">
                <NavLink className="nav-link" to="/mentions-legales">
               MENTIONS LEGALES
                </NavLink>
            </li>
        </ul>
        </div>
        </div>
    </nav>

</header>

    );
}