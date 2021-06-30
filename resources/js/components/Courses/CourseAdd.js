import React, { useState } from "react";

export default function CourseAdd() {
    const [message, setmessage] = useState(false);
    const [courseName, setCourseName] = useState("");
    const [img, setImg] = useState("");
    const [description, setDescription] = useState("");
    const [link, setLink] = useState("");

    const formSubmitHandler = async e => {
        e.preventDefault();
        const courseData = {
            courseName: courseName,
            filepath: img,
            description: description,
            documentationlink: link
        };
        console.log("course data", courseData);
        const res = await axios.post("/add-course", courseData);
        if (res.data.status === 200) {
            setmessage(true);
        }
    };

    return (
        <div className="container">
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
                                Create New Course
                            </legend>
                            <div className="form-group">
                                <label
                                    htmlFor="exampleInputPassword1"
                                    className="form-label mt-4"
                                >
                                    Course Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="Course Name"
                                    name="courseName"
                                    onChange={e => {
                                        setCourseName(e.target.value);
                                    }}
                                    value={courseName}
                                />
                            </div>

                            <div className="form-group">
                                <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label mt-4"
                                >
                                    Image
                                </label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Course Description"
                                    name="img"
                                    onChange={e => {
                                        setImg(e.target.value);
                                    }}
                                    value={img}
                                />
                            </div>

                            <div className="form-group">
                                <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label mt-4"
                                >
                                    Description
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Course Description"
                                    name="description"
                                    onChange={e => {
                                        setDescription(e.target.value);
                                    }}
                                    value={description}
                                />
                            </div>

                            <div className="form-group">
                                <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label mt-4"
                                >
                                    Course Documentation
                                </label>
                                <input
                                    type="url"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Course Description"
                                    name="link"
                                    onChange={e => {
                                        setLink(e.target.value);
                                    }}
                                    value={link}
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
        </div>
    );
}
