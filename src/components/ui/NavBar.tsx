import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe';
function NavBar(){
    return (
        <>
        
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <img src="/logo_andres_blanco.png" alt="Logo" width="auto" height="35" className="d-inline-block align-top" />
                    <span className="border-end border-white me-2"></span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="https://www.youtube.com/@AndresGaritaDev" target="_blank">
                                    <FontAwesomeIcon icon={faYoutube} /> Youtube
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://andresgarita.com">
                                    <FontAwesomeIcon icon={faGlobe} /> Web
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://github.com/andresgarita-dev">
                                    <FontAwesomeIcon icon={faGithub} /> Github
                                </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
        
        
        
        </>
        )
}

export default NavBar;