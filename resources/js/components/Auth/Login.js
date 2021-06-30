import React, { useState } from "react";
import axios from "axios";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, seterror] = useState("");
    const [message, setmessage] = useState(false);

    const formSubmitHandler = async e => {
        e.preventDefault();

        const enteredData = {
            email: email,
            password: password
        };
        console.log(enteredData);

        const res = await axios.post("/login", enteredData);
        console.log("resdata", res);
        if (res.data.status === 200) {
            setmessage(true);
            setEmail("");
            setPassword("");
        } else {
            seterror(res.data.message);
        }
    };
    return (
        <>
            {" "}
            {message && (
                <div className="alert alert-dismissible alert-success">
                    <strong>Well done!</strong> Successfully logged in
                </div>
            )}
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form
                        onSubmit={formSubmitHandler}
                        className="border border-light bg-primary p-4 m-3 text-light"
                    >
                        <fieldset>
                            <legend className="text-center">Login</legend>

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
