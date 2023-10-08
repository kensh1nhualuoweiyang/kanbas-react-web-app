import { Link, useLocation, useParams } from "react-router-dom"
import "../../css/general.css"
import "./subNav.css"


function CourseNav() {
    const tabs = ["Home", "Module", "Piazza", "Zoom Meeting", "Assignment",
        "Quizzes", "Grade", "People", "Panopto Video", "Discussions", "Announcements", "Pages",
        "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Progress Report"]
    const { pathname } = useLocation();
    const { courseId } = useParams();
    const decodePath = pathname.split("/").map(segment => decodeURIComponent(segment));
    return (
        <ul className="wd-sub-nav">
            {
                tabs.map((tab, index) => (
                    <li key={index} className={`${decodePath.includes(tab) && "wd-tab-active"}`}>
                        <Link key={index} to={`/Kanbas/Courses/${courseId}/${tab}`}>
                            {tab}
                        </Link>
                    </li>
                ))
            }
        </ul>
    )

}
export default CourseNav