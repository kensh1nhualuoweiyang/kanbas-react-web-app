import "../../../css/general.css"
import "../../CourseModule/courseHome.css"
import CourseInfo from "../../../CourseInfo"
import { FaBan } from "react-icons/fa"
import { AiOutlineCheckCircle } from "react-icons/ai"
import { AiOutlineImport } from "react-icons/ai"
import { Link, useParams } from "react-router-dom"
import { PiCrosshairSimpleBold } from "react-icons/pi"
import { FaChartColumn } from "react-icons/fa6"
import { CiBullhorn } from "react-icons/ci"
import { AiOutlineBell } from "react-icons/ai"
import { RxCross1 } from "react-icons/rx"
import { RiCircleFill } from "react-icons/ri"
import { AiOutlineCalendar } from "react-icons/ai"
function CourseStatus() {
    const { courseId } = useParams();
    const matchingCourse = CourseInfo.courseToDo.filter((course) => course.courseId === courseId)
    const courseTodo = matchingCourse.map(course => (course.todos)).flat();
    const comingUp = CourseInfo.comingUp
    return (
        <div className="wd-course-status">
            <h2>Course Status</h2>
            <div className="btn-group mb-3">
                <button type="button" className="btn btn-secondary">
                    <FaBan className="me-2 wd-color-black" />
                    Unpublish
                </button>
                <button type="button" className="btn btn-success ">
                    <AiOutlineCheckCircle className="me-2 wd-color-light-grey" />
                    Published
                </button>
            </div>
            <div className="wd-course-status-actions">
                <Link className="btn btn-secondary" to="">
                    <AiOutlineImport className="me-2 wd-color-light-grey" />
                    Import Existing Content
                </Link>
                <Link className="btn btn-secondary" to="">
                    <AiOutlineImport className="me-2 wd-color-light-grey" />
                    Import From Common
                </Link >
                <Link className="btn btn-secondary" to="">
                    <PiCrosshairSimpleBold className="me-2 wd-color-light-grey" />
                    Choose Home Page
                </Link >
                <Link className="btn btn-secondary" to="">
                    <FaChartColumn className="me-2 wd-color-light-grey" />
                    View Course Stream
                </Link >
                <Link className="btn btn-secondary" to="">
                    <CiBullhorn className="me-2 wd-color-light-grey" />
                    New Announcement
                </Link >
                <Link className="btn btn-secondary" to="">
                    <FaChartColumn className="me-2 wd-color-light-grey" />
                    New Analytics
                </Link >
                <Link className="btn btn-secondary" to="">
                    <AiOutlineBell className="me-2 wd-color-light-grey" />
                    View Course Notifications
                </Link >
            </div>
            <div className="wd-course-status-todo">
                <h2>To Do</h2>
                <hr className="mt-0" />

                <div className="list-group">
                    {
                        courseTodo.map((todo, index) => (

                            <Link key={index} to="" className="wd-course-status-list-item list-group-item pt-0">
                                <div className="d-flex justify-content-between align-items-start">
                                    <span className="badge bg-danger rounded-pill">{todo.amount}</span>
                                    <span>{todo.title}</span>
                                    <button className="btn btn-sm pt-0"><RxCross1 /></button>
                                </div>
                                <small>{todo.pts} Points <RiCircleFill /> {todo.dueDate} at {todo.dueTime}</small>
                            </Link>

                        ))
                    }
                </div>
            </div>
            <div className="wd-course-status-upcoming">
                <div className="d-flex wd-corse-status-upcoming-header">
                    <h2>Coming Up</h2>
                    <div className="float-end">
                        <Link to="" className="wd-course-status-list-item ">
                            <AiOutlineCalendar className="me-1 wd-color-light-grey" />
                            View Calendar
                        </Link>
                    </div>
                </div>
                <hr className="mt-0" />
                <div className="list-group">
                    {
                        comingUp.map((event,index) => (
                            <Link key={index} href="" className="wd-course-status-list-item list-group-item mt-0 pt-0">
                                <div className="d-inline-flex align-items-center">
                                    <AiOutlineCalendar className="me-1 wd-color-light-grey" />
                                    <span>{event.title}</span>
                                </div>
                                <br/>
                                <small>{event.descript} {event.date} at {event.time}</small>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CourseStatus