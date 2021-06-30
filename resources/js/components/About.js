import React from "react";

export default function About() {
    return (
        <div className="container mt-5 mb-5">
            <h2 className="text-center text-primary m-5">ABOUT</h2>

            <div className="row">
                <div className="col-md-6">
                    <img
                        src={
                            "https://seeromega.com/wp-content/uploads/2017/08/Dollarphotoclub_76404227-copy.jpg"
                        }
                        className="img-fluid"
                    ></img>
                </div>
                <div className="col-md-6 mt-5">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <p className="lead">
                                A training session plan – also called a learning
                                plan – is an organized description of the
                                activities and resources you'll use to guide a
                                group toward a specific learning objective.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
