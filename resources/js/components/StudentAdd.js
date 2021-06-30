import React, { useState } from "react";
import axios from "axios";

export default function StudentAdd() {
    const [studentName, setstudentName] = useState("");
    const [address, setaddress] = useState("");
    const [phone, setphone] = useState("");
    const [email, setemail] = useState("");
    const [courses, setcourses] = useState("");
    const [message, setmessage] = useState(false);

    const formSubmitHandler = async e => {
        e.preventDefault();

        const enteredData = {
            name: studentName,
            address: address,
            phone: phone,
            email: email,
            courses: courses
        };
        //console.log(enteredData);

        const res = await axios.post("/student/create", enteredData);
        if (res.data.status === 200) {
            setmessage(true);
            setstudentName("");
            setaddress("");
            setphone("");
            setemail("");
            setcourses("");
        }
    };

    return (
        <>
            {message && (
                <div className="alert alert-dismissible alert-success">
                    <strong>Well done!</strong> Data saved successfully
                </div>
            )}

            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form
                        onSubmit={formSubmitHandler}
                        className="border border-light bg-primary p-4 m-3 text-light"
                    >
                        <fieldset>
                            <legend className="text-center">
                                Create New Student
                            </legend>
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
                                    name="studentName"
                                    onChange={e => {
                                        setstudentName(e.target.value);
                                    }}
                                    value={studentName}
                                />
                            </div>
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
                                    Courses
                                </label>
                                <div className="input-group-prepend"></div>
                                <select
                                    className="custom-select"
                                    id="inputGroupSelect03"
                                    name="courses"
                                    onChange={e => {
                                        setcourses(e.target.value);
                                    }}
                                    value={courses}
                                >
                                    <option>Redmine</option>
                                    <option>Git/Gerrit</option>
                                    <option>Jira</option>
                                    <option>React</option>
                                    <option>Block Chain</option>
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
        </>
    );
}
