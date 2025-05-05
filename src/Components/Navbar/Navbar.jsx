import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; 
import roicoLabel from '../../assets/Roico.png'; 
import './Navbar.css';

function Navbar() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    // Effect to check token and set user state on component load
    useEffect(() => {
        const token = localStorage.getItem('token'); 
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
            
                setUser({
                        id: decodedToken.id,
                        username: decodedToken.username,
                        role: decodedToken.role
                });
                // }
            } catch (error) {
                console.error("Error decoding token:", error);
                localStorage.removeItem('token'); // Clean up invalid token
                setUser(null); // Ensure user state is cleared on error
            }
        } else {
            setUser(null); // Ensure user state is null if no token found
        }
    }, []); 

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/login');
    };

    if (!user) {
        // Render nothing or a minimal loading indicator while user state loads
        return null;
    }
    
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
                    {user.role === 'admin' && (
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/adminPanel">Admin Panel</NavLink>
                                </li>)}
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/settings">Settings</NavLink>
                    </li>
                </ul>   

                <div className="ms-auto">
                    <button className="btn btn-danger btn-sm" onClick={handleLogout}>
                        Logout ({user.username})
                    </button>
                </div>

                <form className="d-flex">
                    
                </form>
            </div>
        </nav>
    );
}

export default Navbar