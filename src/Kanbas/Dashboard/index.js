import { Link } from "react-router-dom";
import CourseInfo from "../CourseInfo";
import "../css/general.css"
import "./dashboard.css"
import iconImage from "./exampleIcon.png"
import {HiOutlineClipboardList} from "react-icons/hi"
function Dashboard() {
    const courseInfo = CourseInfo.courseInfo
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
                    <p><b className="wd-color-black wd-font-large">Published Courses ({courseInfo.length})</b></p>
                    <hr className="wd-width-80" />
                    <div class="row row-cols-4 row-cols-sm-2 row-cols-md-3 g-5">
                        {courseInfo.map((course) => (
                            <div className="col">
                                <div className="card">
                                    <img src={iconImage} className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <Link key={course.id} to={`/Kanbas/Courses/${course.id}`} className="wd-color-blue">
                                                {course.number} {course.name}
                                            </Link>
                                        </h5>
                                        <p className="card-text">
                                            <Link key={course.id} to={`/Kanbas/Courses/${course.id}`} className="wd-color-grey">
                                                {course.number}.{course.id}.{course.endDate}
                                            </Link>
                                        </p>
                                    </div>
                                    <div className="card-footer">
                                       <Link key={course.id} to={`/Kanbas/Courses/${course.id}/Assignments`}
                                            className="btn btn-transparent wd-color-light-grey">
                                            <HiOutlineClipboardList />
                                       </Link>
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