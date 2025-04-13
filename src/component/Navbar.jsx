import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm sticky-top">
            <div className="container">
                {/* Brand */}
                <NavLink
                    className="navbar-brand fw-bold text-uppercase fs-4"
                    to="/"
                >
                    LA COLLECTION
                </NavLink>

                {/* Mobile Toggle Button */}
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Content */}
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    {/* Nav Links - Center */}
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item px-2">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-link fw-medium ${
                                        isActive
                                            ? "active fw-semibold border-bottom border-dark"
                                            : ""
                                    }`
                                }
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item px-2">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-link fw-medium ${
                                        isActive
                                            ? "active fw-semibold border-bottom border-dark"
                                            : ""
                                    }`
                                }
                                to="/products"
                            >
                                Products
                            </NavLink>
                        </li>
                        <li className="nav-item px-2">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-link fw-medium ${
                                        isActive
                                            ? "active fw-semibold border-bottom border-dark"
                                            : ""
                                    }`
                                }
                                to="/about"
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item px-2">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-link fw-medium ${
                                        isActive
                                            ? "active fw-semibold border-bottom border-dark"
                                            : ""
                                    }`
                                }
                                to="/contact"
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>

                    {/* Action Buttons */}
                    <div className="d-flex flex-column flex-lg-row gap-2">
                        <NavLink
                            to="/login"
                            className="btn btn-outline-dark btn-sm rounded-2 fw-medium"
                        >
                            <i className="fa fa-sign-in me-1"></i> LOGIN
                        </NavLink>
                        <NavLink
                            to="/register"
                            className="btn btn-outline-dark btn-sm rounded-2 fw-medium"
                        >
                            <i className="fa fa-user-plus me-1"></i> SIGN UP
                        </NavLink>
                        <NavLink
                            to="/cart"
                            className="btn btn-dark btn-sm rounded-2 fw-medium"
                        >
                            <i className="fa fa-shopping-cart me-1"></i> CART
                            (0)
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
