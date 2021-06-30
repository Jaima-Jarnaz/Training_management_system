import React from "react";
import { NavLink } from "react-router-dom";

export default function Courses() {
    return (
        <section className="container mt-5">
            <h2 className="text-center text-primary m-5">COURSES</h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="card mb-3">
                        <h3 className="card-header">React</h3>
                        <div className="card-body"></div>
                        <img
                            className="card-img-top"
                            src={
                                "https://namespaceit.com/uploads/post/image/1616394211.jpg"
                            }
                            alt="Card image cap"
                        ></img>
                        <div className="card-body"></div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Cras justo odio</li>
                        </ul>
                        <div className="card-body">
                            <NavLink to="#" className="card-link">
                                Card link
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card mb-3">
                        <h3 className="card-header">Jira</h3>
                        <div className="card-body"></div>
                        <img
                            className="card-img-top"
                            src={
                                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7WoYmzJFb0NuJRGLNil5_6WjsN-jABJCyYc3I_C1OZ21M3eTA09DCZ2hoGtBgVOw_Hk&usqp=CAU"
                            }
                            alt="Card image cap"
                        ></img>
                        <div className="card-body"></div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Cras justo odio</li>
                        </ul>
                        <div className="card-body">
                            <NavLink to="#" className="card-link">
                                Card link
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card mb-3">
                        <h3 className="card-header">Git/Gerrit</h3>
                        <div className="card-body"></div>
                        <img
                            className="card-img-top"
                            src={
                                "https://i.ytimg.com/vi/jeWTvDad6VM/maxresdefault.jpg"
                            }
                            alt="Card image cap"
                        ></img>
                        <div className="card-body"></div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Cras justo odio</li>
                        </ul>
                        <div className="card-body">
                            <NavLink to="#" className="card-link">
                                Card link
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
