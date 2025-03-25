import roicoLabel from '../../assets/Roico.png'
import { NavLink } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary-subtle px-2 sticky-top">
            <a className="navbar-brand">
                <img src={roicoLabel} alt="Logo" height="40" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse p-2" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/controls">Controls</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/diagnostics">Diagnostics</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/adminPanel">Admin Panel</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/settings">Settings</NavLink>
                    </li>
                </ul>
                <form className="d-flex">
                    
                </form>
            </div>
        </nav>
    );
}

export default Navbar