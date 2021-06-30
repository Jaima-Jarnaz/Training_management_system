import React, { useState, useEffect } from "react";
import "./TotalCount.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUserGraduate,
    faChalkboardTeacher,
    faBookOpen
} from "@fortawesome/free-solid-svg-icons";

export default function TotalCount() {
    const [studentTotalCount, setStudentTotalCount] = useState(0);
    const [teacherTotalCount, setTeacherTotalCount] = useState(0);
    const totalStudentDataCount = async () => {
        const res = await axios.get("/totalcount");

        setStudentTotalCount(res.data.totalstudent);
        setTeacherTotalCount(res.data.totalteachers);

        console.log("data", res.data.totalstudent);
    };
    useEffect(() => {
        totalStudentDataCount();
    }, []);
    return (
        <section className="container-fluid  bg-primary mt-5">
            <div className="">
                <div className="">
                    <div className="row justify-content-center">
                        <div className="col-md-4 p-5">
                            <FontAwesomeIcon
                                icon={faUserGraduate}
                                className="text-info "
                                id="icon"
                            />
                            <p id="counttext">Total Students</p>
                            <label id="totalLabel">+{studentTotalCount}</label>
                        </div>

                        <div className="col-md-4 p-5">
                            <FontAwesomeIcon
                                icon={faChalkboardTeacher}
                                className="text-info "
                                id="icon"
                            />
                            <p id="counttext">Total Teachers</p>
                            <label id="totalLabel">+{teacherTotalCount}</label>
                        </div>

                        <div className="col-md-4 p-5">
                            <FontAwesomeIcon
                                icon={faBookOpen}
                                className="text-info "
                                id="icon"
                            />
                            <p id="counttext">Total Courses</p>
                            <label id="totalLabel">+{studentTotalCount}</label>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
