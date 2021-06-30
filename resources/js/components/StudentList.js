import Student from "./Student";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function StudentList() {
    const [fetchedStudentDetails, setFetchedStudentDetails] = useState([]);
    const fetchStudentData = async () => {
        const res = await axios.get("/student/studentlist");
        if (res.data.status == 200) {
            setFetchedStudentDetails(res.data.studentdata);
        }
        console.log("data", res.data.studentdata);
    };
    useEffect(() => {
        fetchStudentData();
    }, []);
    console.log("data1213", fetchedStudentDetails);
    return (
        <div>
            <Student />
            <h4 className="text-center text-primary mt-5">Student Lists</h4>
            <div className="row m-2 justify-content-center">
                <div className="col-md-8 mt-5">
                    <table className="table table-primary table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Email</th>
                                <th scope="col">Courses</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fetchedStudentDetails.map(studentsdatas => {
                                return (
                                    <tr key={studentsdatas.id}>
                                        <th scope="row">#</th>
                                        <td>{studentsdatas.name}</td>
                                        <td>{studentsdatas.address}</td>
                                        <td>{studentsdatas.phone}</td>
                                        <td>{studentsdatas.email}</td>
                                        <td>{studentsdatas.courses}</td>
                                        <td>
                                            <NavLink
                                                to={`/studentupdate/${studentsdatas.id}`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faEdit}
                                                    className="text-info m-2"
                                                />
                                            </NavLink>
                                            <NavLink
                                                to={`/studentdelete/${studentsdatas.id}`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faTrashAlt}
                                                    className="text-danger m-2"
                                                />
                                            </NavLink>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
