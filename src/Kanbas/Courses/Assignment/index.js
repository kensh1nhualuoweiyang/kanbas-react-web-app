
import { useParams, Link } from "react-router-dom"
import "../../css/general.css"
import "./assignments.css"
import CourseInfo from "../../Database";
import { BsPlusLg } from "react-icons/bs"
import { FaEllipsisVertical } from "react-icons/fa6"
import { BiSolidChevronDownCircle } from "react-icons/bi"
import {AiFillFileText} from "react-icons/ai"
import { AiOutlineCheckCircle } from "react-icons/ai"

function Assignment() {
    const { courseId } = useParams();
    let assignments = CourseInfo.assignmentList
    assignments = assignments.filter((assignment) => assignment.courseId === courseId)
    return (
        <div className="wd-assignment-content">
            <div className="row">
                <div className="col-8">
                    <input className="form-control w-25" type="text" placeholder="Search For Assignment" />
                </div>
                <div className="col-4">
                    <div className="float-end">
                        <div className="d-inline-flex gap-1">
                            <button type="button" className="btn btn-sm btn-secondary">
                                <BsPlusLg className="me-1 wd-color-light-grey" />
                                Assignment</button>
                            <button type="button" className="btn btn-sm btn-danger">
                                <BsPlusLg className="me-1 wd-color-light-grey" />
                                Module</button>
                            <button type="button" className="btn btn-sm btn-secondary">
                                <FaEllipsisVertical className="me-1 wd-color-light-grey" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <ul className="list-group mb-5">
                <button type="button"
                    className="wd-assignment-item-title list-group-item list-group-item-secondary">
                    <FaEllipsisVertical className="me-1 wd-color-light-grey" />
                    <BiSolidChevronDownCircle className="me-1" />
                    Assignments
                    <div className="float-end">
                        <span className="badge rounded-3 bg-transparent">40 % of Total</span>
                        <BsPlusLg className="ms-1 wd-color-light-grey" />
                        <FaEllipsisVertical className=" wd-color-grey" />
                    </div>
                </button>
                {
                    assignments.map((assignment) => (
                        <li key={assignment._id} className="list-group-item">
                            <div className="d-flex gap-2 align-items-center">
                                <FaEllipsisVertical className="wd-color-black" />
                                <AiFillFileText className=" wd-color-green" />
                                <div className="wd-assignment-desc">
                                    <Link to={`./${assignment._id}`} className="mb-0">
                                        {assignment.title}</Link>
                                    <p className="mb-0">{assignment.desc}</p>
                                    <p className="mb-0"><span>Due</span> {assignment.duedate} | {assignment.pts} pts</p>
                                </div>
                                <AiOutlineCheckCircle className="ms-1 wd-color-green" />
                                <FaEllipsisVertical className="wd-color-black" />

                            </div>
                        </li>
                    ))
                }
            </ul>
        </div >
    )
}

export default Assignment