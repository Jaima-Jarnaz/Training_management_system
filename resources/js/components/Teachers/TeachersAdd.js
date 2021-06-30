import React, { useState } from "react";
import axios from "axios";

export default function TeachersAdd() {
    const [teacherName, setTeacherName] = useState("");
    const [address, setaddress] = useState("");
    const [phone, setphone] = useState("");
    const [email, setemail] = useState("");
    const [courseTaken, setCourseTaken] = useState("");
    const [message, setmessage] = useState(false);

    const teacherFormSubmitHandler = async e => {
        e.preventDefault();
        const teacherData = {
            Teacher_Name: teacherName,
            Address: address,
            Phone: phone,
            Email: email,
            Assigned_Course: courseTaken
        };
        console.log("teacher", teacherData);
        const res = await axios.post("/addteachers", teacherData);
        console.log(res);
        if (res.data.status === 200) {
            setmessage(true);
            setTeacherName("");
            setaddress("");
            setphone("");
            setemail("");
            setCourseTaken("");
        }
    };
    return (
        <div>
            {message && (
                <div className="alert alert-dismissible alert-success">
                    <strong>Well done!</strong> Data saved successfully
                </div>
            )}

            <div className=" row justify-content-center">
                <div className="col-md-6">
                    <form
                        onSubmit={teacherFormSubmitHandler}
                        className="border border-light bg-info p-4 m-3 text-light"
                    >
                        <fieldset>
                            <legend className="text-center">
                                Create New Teacher
                            </legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label
                                            htmlFor="exampleInputPassword1"
                                            className="form-label mt-4"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            placeholder="Name"
                                            name="teacherName"
                                            onChange={e => {
                                                setTeacherName(e.target.value);
                                            }}
                                            value={teacherName}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label
                                            htmlFor="exampleInputPassword1"
                                            className="form-label mt-4"
                                        >
                                            Address
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInput"
                                            placeholder="Address"
                                            name="address"
                                            onChange={e => {
                                                setaddress(e.target.value);
                                            }}
                                            value={address}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label
                                    htmlFor="exampleInput"
                                    className="form-label mt-4"
                                >
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInput"
                                    placeholder="Phone"
                                    name="phone"
                                    onChange={e => {
                                        setphone(e.target.value);
                                    }}
                                    value={phone}
                                />
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label mt-4"
                                >
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email"
                                    name="email"
                                    onChange={e => {
                                        setemail(e.target.value);
                                    }}
                                    value={email}
                                />
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label mt-4"
                                >
                                    Assigned Course
                                </label>
                                <div className="input-group-prepend"></div>
                                <select
                                    className="custom-select"
                                    id="inputGroupSelect03"
                                    name="assignedcourses"
                                    onChange={e => {
                                        setCourseTaken(e.target.value);
                                    }}
                                    value={courseTaken}
                                >
                                    <option>Redmine</option>
                                    <option>Git/Gerrit</option>
                                    <option>Jira</option>
                                    <option>React</option>
                                    <option>Block Chain</option>
                                    <option>Business Manners</option>
                                </select>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-light mt-3"
                            >
                                Submit
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}
