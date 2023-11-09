
import { useParams, useNavigate, Link } from "react-router-dom"
import "../../../css/general.css"
import "./editAssignment.css"
import "../assignments.css"
import CourseInfo from "../../../Database"
import { AiOutlineCheckCircle } from "react-icons/ai"
import { FaEllipsisVertical } from "react-icons/fa6"
function AssignmentEditor() {
    const { assignmentId } = useParams()
    const navigate = useNavigate()
    const { courseId } = useParams()
    const assignment = CourseInfo.assignmentList.find((assignment) => assignment._id === parseInt(assignmentId) )
   
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignment`);
    };

    return (
        <div className="wd-edit-assignment-content">
            <div className="float-end">
                <AiOutlineCheckCircle className="me-2 wd-color-green" />
                <span className="me-2 wd-color-green">Published</span>
                <button className="btn btn-secondary rounded-1" type="button" >
                    <FaEllipsisVertical />
                </button>
            </div>
            <br />
            <hr className="mt-4 mb-2" />
            <label htmlFor="name" className="form-label">Assignment Name</label>
            <input type="text" id="name" className="form-control mb-3" value={`${assignment.title}`}/>
            <textarea type="text" className="form-control mb-2" rows="3"></textarea>
            <div className="row wd-assignment-detail">
                <div className="col-5 text-end">
                    <label htmlFor="points" className="form-label">Points</label>
                </div>
                <div className="col-7 align-items-center">
                    <input type="number" id="points" className="form-control mb-3 w-25" />
                </div>
            </div>
            <div className="row wd-assignment-detail">
                <div className="col-5 text-end">
                    <label htmlFor="group" className="form-label">Assignment Group</label>
                </div>
                <div className="col-7 align-items-center">
                    <select id="group" className="form-select w-50 mb-3">
                        <option selected value = "Assignment">Assignment</option>

                    </select>
                </div>
            </div>
            <div className="row wd-assignment-detail">
                <div className="col-5 text-end">
                    <label htmlFor="display" className="form-label">Display Grade as</label>
                </div>
                <div className="col-7 align-items-center">
                    <select id="display" className="form-select w-50 mb-3">
                        <option selected value="percentage">Percentage</option>

                    </select>
                </div>
            </div>
            <div className="row wd-assignment-detail">
                <div className="col-5 text-end">

                </div>
                <div className="col-7 align-items-center">
                    <input className=" form-check-input" type="checkbox" value="" id="doNotCount" />
                    <label className="form-check-label mb-3" htmlFor="doNotCount">
                        Do not count this assignment towards the final grade
                    </label>
                </div>
            </div>
            <div className="row wd-assignment-detail">
                <div className="col-5 text-end">
                    Submission Type
                </div>
                <div className="col-7 align-items-center ">
                    <div className="card mb-3">
                        <div className="wd-asign-task card-body">
                            <select id="display" className="form-select w-75 mb-3">
                                <option selected>Online</option>
                            </select>

                            <label htmlFor="onlineOption" className="form-label wd-asign-label">Online Entry
                                Options</label>
                            <div id="onlineOption">
                                <div className="row">
                                    <div className="col">
                                        <input className=" form-check-input" type="checkbox" id="textEty" />
                                        <label className="form-check-label mb-3" htmlFor="textEty">
                                            Text Entry
                                        </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <input className=" form-check-input" type="checkbox" id="url" />
                                        <label className="form-check-label mb-3" htmlFor="url">
                                            Website URL
                                        </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <input className=" form-check-input" type="checkbox" id="media" />
                                        <label className="form-check-label mb-3" htmlFor="media">
                                            Media Recorading
                                        </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <input className=" form-check-input" type="checkbox" id="annotation" />
                                        <label className="form-check-label mb-3" htmlFor="annotation">
                                            Student Annotation
                                        </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <input className=" form-check-input" type="checkbox" id="file" />
                                        <label className="form-check-label mb-3" htmlFor="file">
                                            File Updaload
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="row wd-assignment-detail">
                <div className="col-5 text-end">
                    Assign
                </div>
                <div className="col-7 align-items-center ">
                    <div className="card mb-3">
                        <div className="wd-asign-task card-body">
                            <label htmlFor="assignTo" className="form-label wd-asign-label">Assign To</label>
                            <input type="text" id="assignTo" className="form-control mb-3" />
                            <label htmlFor="dueDate" className="form-label wd-asign-label">Due</label>
                            <input type="date" id="dueDate" className="form-control mb-3" />

                            <div className="row">
                                <div className="col-6">
                                    <label htmlFor="available" className="form-label wd-asign-label">Available
                                        From</label>
                                    <input type="date" id="availableFrom" className="form-control mb-3" />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="until" className="form-label wd-asign-label">Until</label>
                                    <input type="date" id="until" className="form-control mb-3" />
                                </div>
                            </div>

                        </div>
                        <button type="button" className="btn btn-secondary card-footer"><i
                            className="fa fa-plus me-2"></i>Add</button>
                    </div>
                </div>

            </div>
            <hr></hr>
            <input className=" form-check-input" type="checkbox" value="" id="notify" />
            <label className="form-check-label mb-3" htmlFor="notify">
                Notify user that this contents has changed
            </label>
            <div className="float-end">
                <Link to={`/Kanbas/Courses/${courseId}/Assignment`} className="btn btn-secondary mb-2 me-2"
                    type="button">Cancel</Link>
                <button onClick={handleSave} className="btn btn-danger mb-2"
                    type="button">Save</button>
            </div>
            <hr></hr>
        </div>
    )

}

export default AssignmentEditor