import React from "react";
import { NavLink } from "react-router-dom";

export default function CourseNav() {
    return (
        <div className="container">
            <ul className="nav nav-tabs m-5 border-bottom border-primary">
                <li className="nav-item">
                    <NavLink
                        className="nav-link active "
                        data-bs-toggle="tab"
                        to="/addcourse"
                    >
                        Course
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        data-bs-toggle="tab"
                        to="/courselist"
                    >
                        Course List
                    </NavLink>
                </li>
                <li className="nav-item dropdown">
                    <NavLink
                        className="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                        to="#"
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
            </ul>
        </div>
    );
}
