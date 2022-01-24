import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to=""><span id="college">College</span><span id="help">Help</span></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" id='blue' data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="" id='home'>Home</NavLink>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item text-center" to="">Notes</Link></li>
                                    <li><Link className="dropdown-item text-center" to="">Time-Table</Link></li>
                                    <li><Link className="dropdown-item text-center" to="">Syllabus</Link></li>
                                </ul>
                            </li>


                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Branch
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item text-center" to="">CSE</Link></li>
                                    <li><Link className="dropdown-item text-center" to="">IT</Link></li>
                                    <li><Link className="dropdown-item text-center" to="">ECE</Link></li>
                                    <li><Link className="dropdown-item text-center" to="">EE</Link></li>
                                    <li><Link className="dropdown-item text-center" to="">Civil</Link></li>
                                    <li><Link className="dropdown-item text-center" to="">ME</Link></li>
                                    <li><Link className="dropdown-item text-center" to="">IP</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="" id='about'>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="" id='contribute'>Contribute</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="" id='contact'>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;