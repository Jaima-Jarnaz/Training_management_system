import React, { useState, useEffect } from "react";
import TeachersNav from "./TeachersNav";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function TeacherList() {
    const [enteredTeachersData, setEnteredTeachersData] = useState([]);
    const fetchTeacherData = async () => {
        const res = await axios.get("/teacherslist");
        if (res.data.status == 200) {
            setEnteredTeachersData(res.data.teachersdata);
        }
        console.log("data", res.data.teachersdata);
    };
    useEffect(() => {
        fetchTeacherData();
    }, []);
    console.log("data1213", enteredTeachersData);
    return (
        <div>
            <TeachersNav />
            <h4 className="text-center text-primary mt-5">Teacher Lists</h4>
            <div className="row m-2 justify-content-center">
                <div className="col-md-8 mt-5">
                    <table className="table table-info table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Teacher Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Email</th>
                                <th scope="col">Taken Courses</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {enteredTeachersData.map(datas => {
                                return (
                                    <tr key={datas.id}>
                                        <th scope="row">#</th>
                                        <td>{datas.Teacher_Name}</td>
                                        <td>{datas.Address}</td>
                                        <td>{datas.Phone}</td>
                                        <td>{datas.Email}</td>
                                        <td>{datas.Assigned_Course}</td>
                                        <td>
                                            <NavLink
                                                to={`/teachersupdate/${datas.id}`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faEdit}
                                                    className="text-info m-2"
                                                />
                                            </NavLink>
                                            <NavLink
                                                to={`/teachersdelete/${datas.id}`}
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
