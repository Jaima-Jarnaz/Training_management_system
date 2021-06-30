import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import StudentDisplay from "./StudentDisplay";
import StudentList from "./StudentList";
import StudentUpdate from "./StudentUpdate";
import StudentDelete from "./StudentDelete";
import CourseDisplay from "./Courses/CourseDisplay";
import TeachersDisplay from "./Teachers/TeachersDisplay";
import TeachersAdd from "./Teachers/TeachersAdd";
import TeacherList from "./Teachers/TeacherList";
import TeacherUpdate from "./Teachers/TeacherUpdate";
import TeacherDelete from "./Teachers/TeacherDelete";

function Example() {
    return (
        <Router>
            <>
                <Nav />
                <Switch>
                    <Route path="/register" exact component={Register} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/student" exact component={StudentDisplay} />
                    <Route path="/studentlist" exact component={StudentList} />
                    <Route
                        path="/studentupdate/:id"
                        exact
                        component={StudentUpdate}
                    />
                    <Route
                        path="/studentdelete/:id"
                        exact
                        component={StudentDelete}
                    />
                    <Route path="/addcourse" exact component={CourseDisplay} />
                    <Route path="/teachers" exact component={TeachersDisplay} />
                    <Route path="/addteachers" exact component={TeachersAdd} />
                    <Route path="/teacherslist" exact component={TeacherList} />
                    <Route
                        path="/teachersupdate/:id"
                        exact
                        component={TeacherUpdate}
                    />
                    <Route
                        path="/teachersdelete/:id"
                        exact
                        component={TeacherDelete}
                    />
                </Switch>
            </>
        </Router>
    );
}

export default Example;

if (document.getElementById("example")) {
    ReactDOM.render(<Example />, document.getElementById("example"));
}
