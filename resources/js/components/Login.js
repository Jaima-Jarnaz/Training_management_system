import React from "react";

export default function Login() {
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form className="border border-light bg-primary p-4 m-3">
                        <fieldset>
                            <legend className="text-center">
                                Create New Student
                            </legend>
                            <div class="form-group">
                                <label
                                    for="exampleInputEmail1"
                                    class="form-label mt-4"
                                >
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email"
                                />
                                <small
                                    id="emailHelp"
                                    class="form-text text-muted"
                                >
                                    We'll never share your email with anyone
                                    else.
                                </small>
                            </div>
                            <div class="form-group">
                                <label
                                    for="exampleInputPassword1"
                                    class="form-label mt-4"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="Password"
                                />
                            </div>
                            <button type="submit" class="btn btn-light">
                                Submit
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}
