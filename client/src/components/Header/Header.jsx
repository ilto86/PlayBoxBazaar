import styles from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();

    return (
    <>
        {/* header section starts */}
        <header className="header-section">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg custom_nav-container">
                    <a className="navbar-brand" href="/">
                        <span style={{ textTransform: 'none' }}>PlayBoxBazaar&reg;</span>
                    </a>
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
                                <a
                                className="nav-link" 
                                href="/"
                                >
                                    Home <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className={`nav-item ${location.pathname === '/create' ? 'active' : ''}`}>
                                <a 
                                className="nav-link" 
                                href="/create"
                                >
                                    {" "}
                                    Create Console
                                </a>
                            </li>
                            <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
                                <a 
                                className="nav-link" 
                                href="/about"
                                >
                                    {" "}
                                    About
                                </a>
                            </li>
                            <li className={`nav-item ${location.pathname === '/products' ? 'active' : ''}`}>
                                <a 
                                className="nav-link" 
                                href="/products"
                                >
                                    Products
                                </a>
                            </li>
                            <li className={`nav-item ${location.pathname === '/testimonials' ? 'active' : ''}`}>
                                <a 
                                className="nav-link" 
                                href="/testimonials"
                                >
                                    Testimonial
                                </a>
                            </li>
                            <li className={`nav-item ${location.pathname === '/contacts' ? 'active' : ''}`}>
                                <a 
                                className="nav-link" 
                                href="/contacts"
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                        <div className="user_optio_box">
                            <a href="/login">
                                <i className={`fa fa-user ${location.pathname === '/login' ? 'active' : ''}`} aria-hidden="true" />
                            </a>
                            <a href="">
                                <i className="fa fa-shopping-cart" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        {/* end header section */}
    </>
    );
}