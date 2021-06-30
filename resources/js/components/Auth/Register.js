import React, { useState } from "react";
import axios from "axios";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [message, setmessage] = useState(false);
    const [error, seterror] = useState("");

    const formSubmitHandler = async e => {
        e.preventDefault();

        const enteredData = {
            name: name,
            email: email,
            phone: phone,
            password: password
        };
        console.log(enteredData);

        const res = await axios.post("/register", enteredData);
        console.log("resdata", res);
        if (res.data.status === 200) {
            setmessage(true);
            setName("");
            setEmail("");
            setPhone("");
            setPassword("");
        } else {
            seterror(res.data.message);
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
                            <legend className="text-center">Register</legend>
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
                                    name="name"
                                    onChange={e => {
                                        setName(e.target.value);
                                    }}
                                    value={name}
                                />
                                {error}
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
                                        setEmail(e.target.value);
                                    }}
                                    value={email}
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
                                        setPhone(e.target.value);
                                    }}
                                    value={phone}
                                />
                            </div>

                            <div className="form-group">
                                <label
                                    htmlFor="exampleInput"
                                    className="form-label mt-4"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="password"
                                    name="password"
                                    onChange={e => {
                                        setPassword(e.target.value);
                                    }}
                                    value={password}
                                />
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
