import React from "react";
import Courses from "./Courses";
import Footer from "./Footer";
import About from "./About";
import TotalCount from "./TotalCount";
import Register from "./Auth/Register";
export default function Home() {
    return (
        <div>
            <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
            >
                <ol className="carousel-indicators">
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="0"
                        className="active"
                    ></li>
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="1"
                    ></li>
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="2"
                    ></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            className="d-block w-100 h-50"
                            src={
                                "https://pbs.twimg.com/media/EiwJ0vZWkAAkhNA.jpg"
                            }
                            alt="First slide"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            className="d-block w-100 h-50"
                            src={
                                "https://wgs-fusion.s3.amazonaws.com/uploads/product/product_image/95/geekfarm_Asset_00.png"
                            }
                            alt="Second slide"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            className="d-block w-100 h-50"
                            src={
                                "https://images.theconversation.com/files/195198/original/file-20171117-7588-1rai1rs.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
                            }
                            alt="Third slide"
                        />
                    </div>
                </div>
                <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <Courses />
            <TotalCount />
            <About />
            {/* <Register /> */}
            <Footer />
        </div>
    );
}
