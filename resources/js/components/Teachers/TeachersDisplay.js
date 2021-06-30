import React from "react";
import TeachersNav from "./TeachersNav";
import { NavLink } from "react-router-dom";

export default function TeachersDisplay() {
    return (
        <div className="container">
            <TeachersNav />
            <div className="jumbotron">
                <h1 className="display-4">Our Amazing Teachers</h1>
                <hr className="my-4" />
                <p>Teachers Panel</p>
                <p className="lead">
                    <NavLink
                        className="nav-link"
                        data-bs-toggle="tab"
                        to="/teacherslist"
                    >
                        Teachers List
                    </NavLink>
                </p>
            </div>
        </div>
    );
}
