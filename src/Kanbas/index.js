import { Routes, Navigate, Route } from "react-router-dom";
import KanbasNavigator from "./KanbasNavigator";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./css/general.css"
import { useState } from "react";
import CourseInfo from "./CourseInfo";
import { Provider } from "react-redux";
import store from "./store";
function Kanbas() {
    const [courses, setCourses] = useState(CourseInfo.courseList)
    const [course, setCourse] = useState({
        name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    })

    const addNewCourse = () => {
        setCourses(
            [
                ...courses,
                { ...course, _id: new Date().getTime().toString() }
            ]
        )
    }

    const deleteCourse = (id) => {
        const newCourses = courses.filter((course) => course._id !== id)
        setCourses(newCourses)
    }

    const editCourse = (course) => {
        setCourse(course)
    }

    const updateCourse = () => {
        const newCourses = courses.map((item) => item._id === course._id ? course : item)
        setCourses(newCourses)
    }
    return (
        <Provider store={store}>
            <div className="wd-flex">
                <KanbasNavigator></KanbasNavigator>
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="/Account/*" element={<Account />} />
                    <Route path="/Dashboard" element={
                        <Dashboard
                            course={course}
                            courses={courses}
                            setCourse={setCourse}
                            addNewCourse={addNewCourse}
                            deleteCourse={deleteCourse}
                            updateCourse={updateCourse}
                            editCourse={editCourse} />} />
                    <Route path="/Courses/:courseId/*" element={<Courses courses={courses} />} />
                </Routes>
            </div>
        </Provider>

    )
}
export default Kanbas