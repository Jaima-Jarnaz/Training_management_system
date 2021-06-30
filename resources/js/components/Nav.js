import React from "react";
import "./css/Nav.css";
import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <div>
            <nav
                className="navbar navbar-expand-lg navbar-dark bg-primary p-4"
                id="nav-id"
            >
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        TraiNy
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarColor01"
                        aria-controls="navbarColor01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarColor01"
                    >
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link active"
                                    to="/student"
                                >
                                    Students
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link active"
                                    to="/teachers"
                                >
                                    Teachers
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown active">
                                <NavLink
                                    className="nav-link dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    to="/addcourse"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Courses
                                </NavLink>
                                <div className="dropdown-menu">
                                    <NavLink className="dropdown-item" to="#">
                                        Action
                                    </NavLink>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link active"
                                    to="/about"
                                >
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link active"
                                    to="/register"
                                >
                                    Register
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link active"
                                    to="/login"
                                >
                                    login
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
