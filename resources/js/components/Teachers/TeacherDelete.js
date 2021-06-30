import React, { useState, useEffect } from "react";

export default function TeacherDelete(props) {
    const [message, setMessage] = useState(false);
    const deleteteachersData = async () => {
        const id = props.match.params.id;
        const res = await axios.get(`/teachersdelete/${id}`);
        if (res.data.status === 200) {
            setMessage(true);
        }
    };
    useEffect(() => {
        deleteteachersData();
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
