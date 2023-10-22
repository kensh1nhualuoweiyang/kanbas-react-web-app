import { Link } from "react-router-dom";
import "../css/general.css"
import "./dashboard.css"
import iconImage from "./exampleIcon.png"
import { HiOutlineClipboardList } from "react-icons/hi"
import {AiFillDelete} from "react-icons/ai"
import {AiFillEdit} from "react-icons/ai"
function Dashboard({courses,course,setCourse,addNewCourse,deleteCourse,updateCourse,editCourse}) {
   

    return (
        <div className="wd-general-content">
            <div className="wd-general-header">
                <div>
                    <h2 className="wd-page-title mb-0">Dashboard</h2>
                </div>
                <hr className="mt-1" />
            </div>
            <div className="wd-general-content-body">

                <div className="wd-dashboard-body">
                    <div className="float-end my-2">
                        <input value={course.name} className="form-control my-2"
                            onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                        <input value={course.number} className="form-control my-2"
                            onChange={(e) => setCourse({ ...course, number: e.target.value })} />
                        <input value={course.startDate} className="form-control my-2"
                            onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
                        <input value={course.endDate} className="form-control my-2"
                            onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
                        <button className="btn btn-danger float-end" onClick={addNewCourse}>Add </button>
                        <button className="btn btn-danger float-end me-2" onClick={updateCourse}>Update </button>
                        
                    </div>
                    <p className="wd-width-80">
                        <b className="wd-color-black wd-font-large">Published Courses ({courses.length})</b>
                    </p>
                    <hr className="wd-width-80" />
                    <div className="row row-cols-4 row-cols-sm-2 row-cols-md-3 g-5">
                        {courses.map((course) => (
                            <div className="col">
                                <div className="card" key={course._id}>
                                    <img src={iconImage} className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="wd-color-blue">
                                                {course.number} {course.name}
                                            </Link>
                                        </h5>
                                        <p className="card-text">
                                            <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="wd-color-grey">
                                                {course.number}.{course._id}.{course.endDate}
                                            </Link>
                                        </p>
                                    </div>
                                    <div className="card-footer">
                                        <Link key={course._id} to={`/Kanbas/Courses/${course._id}/Assignment`}
                                            className="btn btn-transparent wd-color-light-grey">
                                            <HiOutlineClipboardList />
                                        </Link>
                                        <button className="btn btn-transparent" onClick={()=>deleteCourse(course._id)}>
                                            <AiFillDelete/>
                                        </button>
                                        <button className="btn btn-transparent" onClick={() => editCourse(course)}>
                                            <AiFillEdit/> 
                                        </button>
                                    </div>
                                </div>

                            </div>
                        ))}


                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;