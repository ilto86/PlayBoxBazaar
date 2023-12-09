// import styles from './Header.module.css';

import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AuthContext from '../../contexts/authContext';

export default function Header() {
    const location = useLocation();

    const {
        isAuthenticated,
        username,
    } = useContext(AuthContext);


    return (
    <>
        {/* header section starts */}
        <header className="header-section">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg custom_nav-container">
                    <Link className="navbar-brand" to="/">
                        <span style={{ textTransform: 'none' }}>PlayBoxBazaar&reg;</span>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className=""> </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  ">
                            <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                                <Link
                                className="nav-link" 
                                to="/"
                                >
                                    Home <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            {isAuthenticated && (
                                <li className={`nav-item ${location.pathname === '/create' ? 'active' : ''}`}>
                                    <Link 
                                    className="nav-link" 
                                    to="/create"
                                    >
                                        {" "}
                                        Create Console
                                    </Link>

                                {/* <Link 
                                className="nav-link" 
                                to="/create"
                                >
                                    {" "}
                                    
                                    Create Console
                                </Link> */}
                                </li>
                            )}
                            <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
                                <Link 
                                className="nav-link" 
                                to="/about"
                                >
                                    {" "}
                                    About
                                </Link>
                            </li>
                            <li className={`nav-item ${location.pathname === '/products' ? 'active' : ''}`}>
                                <Link 
                                className="nav-link" 
                                to="/products"
                                >
                                    Products
                                </Link>
                            </li>
                            <li className={`nav-item ${location.pathname === '/testimonials' ? 'active' : ''}`}>
                                <Link 
                                className="nav-link" 
                                to="/testimonials"
                                >
                                    Testimonial
                                </Link>
                            </li>
                            <li className={`nav-item ${location.pathname === '/contacts' ? 'active' : ''}`}>
                                <Link 
                                className="nav-link" 
                                to="/contacts"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                        <div className="user_optio_box">
                            {!isAuthenticated && (
                                <Link to="/sign-in">
                                    <i className={`fa fa-user ${location.pathname === '/sign-in' ? 'active' : ''}`} aria-hidden="true" />
                                </Link>
                            )}
                            {isAuthenticated && (
                                <>
                                    <h6>
                                        {username}
                                    </h6>
                                    <Link to="https://www.mediamarkt.de/de/product/_sony-playstationr5-digital-edition-modelgruppe-slim-2907073.html">
                                        <i className="fa fa-shopping-cart" aria-hidden="true" />
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        {/* end header section */}
    </>
    );
}