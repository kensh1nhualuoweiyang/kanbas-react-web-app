import "./grade.css"
import "../../css/general.css"
import { useParams } from "react-router-dom"
import CourseInfo from "../../CourseInfo";
import { AiOutlineImport } from "react-icons/ai"
import { AiOutlineExport } from "react-icons/ai"
import { BsFillGearFill } from "react-icons/bs"
import { HiOutlineMagnifyingGlass } from "react-icons/hi2"
import { CiFilter } from "react-icons/ci"

function Grade() {
    const { courseId } = useParams();
    let assignmentList = CourseInfo.assignmentList;
    let enrollment = CourseInfo.enrollment
    const users = CourseInfo.user
    const grades = CourseInfo.grade
    assignmentList = assignmentList.filter((assignment) => (assignment.courseId === courseId))
    enrollment = enrollment.filter((enroll) => (enroll.course === courseId))
    return (
        <div className="wd-grade-content">
            <div className="float-end mb-1">
                <button className="btn btn-secondary me-2" type="button">
                    <AiOutlineImport className="wd-color-light-grey me-2" />Import</button>
                <button className="btn btn-secondary me-2 dropdown-toggle" type="button">
                    <AiOutlineExport className="wd-color-light-grey me-2" />Export</button>
                <ul className="dropdown-menu"></ul>
                <button className="btn btn-secondary me-2" type="button">
                    <BsFillGearFill className="wd-color-light-grey" />
                </button>
            </div>
            <div class="row mt-5">
                <div class="col-4">
                    <label class="form-label" for="assignment">Student Names</label>
                    <div class="input-group mb-3">
                        <label class="input-group-text" for="studentName">
                            <HiOutlineMagnifyingGlass />
                        </label>
                        <select class="form-select" id="studentName">
                            <option selected>Search For Students</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                <div class="col-4">
                    <label class="form-label" for="assignment">Assignment Names</label>
                    <div class="input-group mb-3">
                        <label class="input-group-text" for="assignment">
                            <HiOutlineMagnifyingGlass />
                        </label>
                        <select class="form-select" id="assignment">
                            <option selected>Search For Assignment</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
            </div>
            <button class="btn btn-secondary" type="button">
                <CiFilter className="wd-color-light-grey me-2" />Apply Filter</button>
            <div className="table-responsive">
                <table class="table table-striped table-bordered mt-3">
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            {
                                assignmentList.map((assignment) => (
                                    <>
                                        <th>
                                            {assignment.title}
                                            <br />
                                            Out of {assignment.pts}
                                        </th>
                                    </>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrollment.map((enroll) => {
                                const user = users.find((user) => user._id === enroll.user)
                                return (
                                    <tr>
                                         <td>{user.firstName} {user.lastName}</td>
                                         {
                                            assignmentList.map((assignment) => {
                                                const grade = grades.find((grade) => grade.assignment === assignment._id 
                                                    && grade.student === enroll.user)
                                                return (<td>{grade?.grade || ""}</td>);
                                            })
                                         }
                                    </tr>
                                   
                                   
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Grade