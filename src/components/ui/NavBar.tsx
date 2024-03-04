import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
function NavBar(){
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Offcanvas navbar large">
                <div className="container-fluid">
                    <img src="/logo_andres_blanco.png" alt="Logo" width="auto" height="35" className="d-inline-block align-top" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex={-1} id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Andrés Garita</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
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
                </div>
            </nav>


        </>
        )
}

export default NavBar;