import React, { useState, useEffect } from "react";

export default function StudentDelete(props) {
    const [message, setMessage] = useState(false);
    const deleteStudentData = async () => {
        const id = props.match.params.id;
        const res = await axios.get(`/studentdelete/${id}`);
        if (res.data.status === 200) {
            setMessage(true);
        }
    };
    useEffect(() => {
        deleteStudentData();
    }, []);

    return (
        <div>
            {message && (
                <div className="alert alert-dismissible alert-danger mt-5 text-center">
                    <strong>Well done!</strong> Data deleted successfully
                </div>
            )}
        </div>
    );
}
