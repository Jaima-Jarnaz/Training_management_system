import React from "react";
import StudentAdd from "./StudentAdd";
import Student from "./Student";

export default function StudentDisplay() {
    return (
        <div className="container">
            <Student />
            <StudentAdd />
        </div>
    );
}
