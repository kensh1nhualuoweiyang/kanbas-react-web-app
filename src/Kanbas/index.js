import { Routes, Navigate, Route } from "react-router-dom";
import KanbasNavigator from "./KanbasNavigator";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./css/general.css"
import { useEffect, useState } from "react";
import CourseInfo from "./Database";
import { Provider } from "react-redux";
import store from "./store";
import axios from "axios"
function Kanbas() {
    const [courses, setCourses] = useState([])
    const [course, setCourse] = useState({
        name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    })
    const API_BASE = process.env.REACT_APP_API_BASE;
    const url = `${API_BASE}/courses`
    const findAllCourses = async () => {
        const response = await axios.get(url)
        setCourses(response.data)
    };
    useEffect(() => {
        findAllCourses();
    }, [])

    const addNewCourse = async () => {
        const response = await axios.post(url, course)
        console.log(response.data);
        setCourses([
            response.data,
            ...courses,
        ]);

        setCourse({ name: "" })
    }

    const deleteCourse =  async (id) => {
        const response = await axios.delete(
            `${url}/${id}`
          );
      
        setCourses(courses.filter((course) => course._id !== id))
    }

    const editCourse = (course) => {
        setCourse(course)
    }


    const updateCourse = async() => {
        const response = await axios.put(`${url}/${course._id}`)
        const newCourses = courses.map((item) => item._id === course._id ? course : item)
        setCourses(newCourses)
        setCourse({name:""})
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