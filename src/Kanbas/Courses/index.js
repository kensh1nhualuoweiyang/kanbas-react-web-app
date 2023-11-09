import { useParams, Routes, Route, Navigate, useLocation } from "react-router-dom";
import CourseNav from "./CourseNav";
import "../css/general.css"
import "./course.css"
import { HiBars3 } from "react-icons/hi2"
import CourseHome from "./CourseHome";
import CourseModule from "./CourseModule";
import Assignment from "./Assignment";
import AssignmentEditor from "./Assignment/AssignmentEditor";
import Grade from "./Grade";
import { useEffect, useState } from "react";
import axios from "axios"
function Courses() {
    const { courseId } = useParams();
    const { pathname } = useLocation();

    const [course, setCourse] = useState({})
    const API_BASE = process.env.REACT_APP_API_BASE;
    const url = `${API_BASE}/courses`
    const findCourseById = async (courseId) => {
        const response = await axios.get(`${url}/${courseId}`)
        setCourse(response.data)
    }

    useEffect(() => {
        findCourseById(courseId)
    }, [courseId])

    const routes = [
        { path: "/", element: <Navigate to="Home" /> },
        { path: "Home", element: <CourseHome />, name: "Home" },
        { path: "Module", element: <CourseModule />, name: "Modules" },
        { path: "Assignment", element: <Assignment />, name: "Assignments" },
        { path: "Assignment/:assignmentId", element: <AssignmentEditor />, name: "Assignment Editor" },
        { path: "Grade", element: <Grade />, name: "Grades" }
    ];
    const activeRoute = pathname.split("/").slice(4).map(segment => decodeURIComponent(segment));


    return (
        <div className="wd-general-content">
            <div className="wd-general-header">
                <div className="wd-flex">
                    <div className="wd-home-header-icon">
                        <HiBars3 className="wd-color-red wd-course-header-icon me-2" />
                    </div>
                    <div className="pe-2">
                        <nav className="wd-nav-bread-crumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><span>{course.number}.{course.name}</span></li>
                                {
                                    activeRoute.map((route, index) => (
                                        <li key={index} className={`breadcrumb-item ${index === activeRoute.length - 1 && "active"}`}><span>{route}</span></li>
                                    ))
                                }
                            </ol>
                        </nav>
                    </div>
                </div>
                <hr />
            </div>

            <div className="wd-general-content-body">
                <CourseNav />
                <Routes>
                    {
                        routes.map((route, index) => (
                            <Route key={index} path={route.path} element={route.element} />
                        ))
                    }
                </Routes>

            </div>
        </div>
    )

}
export default Courses;