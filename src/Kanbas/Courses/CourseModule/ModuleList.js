import { useParams } from "react-router"

import "./courseHome.css"
import "./courseModule.css"
import "../../css/general.css"
import { FaEllipsisVertical } from "react-icons/fa6"
import { BiSolidChevronDownCircle } from "react-icons/bi"
import { AiOutlineCheckCircle } from "react-icons/ai"
import { BsPlusLg } from "react-icons/bs"
import { AiOutlineLink } from "react-icons/ai"
import { Link } from "react-router-dom"
import { MdOutlineOutput } from "react-icons/md"
import { LuClipboardList } from "react-icons/lu"
import { AiFillEdit } from "react-icons/ai"
import { AiFillDelete } from "react-icons/ai"

import { GrAdd } from "react-icons/gr"
import { useDispatch, useSelector } from "react-redux"
import { addModule,setModule,updateModule,deleteModule } from "./moduleRr"

function ModuleList() {
    const { courseId } = useParams();


    const {modules} = useSelector((state) => state.moduleReducer)
    const {module} = useSelector((state) => state.moduleReducer)
    const dispatch = useDispatch()




    return (
        <div className="wd-course-module-content">
            <div className="float-end">
                <div className="d-inline-flex gap-1">
                    <button type="button" className="btn btn-sm btn-secondary btn-small">Collapse All</button>
                    <button type="button" className="btn btn-sm btn-secondary">View Progress</button>
                    <div className="dropdown">
                        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button"
                            data-bs-toggle="dropdown">
                            <AiOutlineCheckCircle className="wd-color-green me-1" />
                            Publish All
                        </button>
                        <ul className="dropdown-menu">
                            <li className="dropdown-item">Option 1</li>
                            <li className="dropdown-item">Option 2</li>
                        </ul>
                    </div>
                    <button type="button" className="btn btn-sm btn-danger" onClick={() => dispatch(addModule({...module,courseId:courseId}))} >
                        <GrAdd className="me-1" />
                        Module</button>
                    <button type="button" className="btn btn-sm btn-danger" onClick={dispatch(()=>updateModule(module))}>
                        <AiFillEdit /> Update
                    </button>
                    <button type="button" className="btn btn-sm btn-secondary">
                        <FaEllipsisVertical className=" wd-color-light-grey" />
                    </button>
                </div>
            </div>
            <br />

            <input value={module.moduleName} className="form-control w-25 my-2"
                onChange={(e) => dispatch(setModule({
                    ...module, name: e.target.value
                }))}
            />
            <textarea value={module.description} className="form-control w-25"
                onChange={(e) => dispatch(setModule({
                    ...module, description: e.target.value
                }))}
            />


            <hr />
            {modules.map((module) => (
                <ul key={module._id} className="list-group mb-5">
                    <button type="button" className="wd-module-item-title list-group-item list-group-item-secondary">
                        <FaEllipsisVertical className="me-1 wd-color-grey" />
                        <BiSolidChevronDownCircle className="me-1" />
                        {module.moduleName}
                        <div className="float-end">
                            <AiOutlineCheckCircle className="wd-color-green me-2" />
                            <BiSolidChevronDownCircle className="me-1" />
                            <BsPlusLg className="me-1 wd-color-light-grey" />
                            <FaEllipsisVertical className="me-1 wd-color-grey" />
                            <button type="button" className="btn btn-sm btn-danger me-2" onClick={() => dispatch(setModule({ ...module, description: `${module.description ? module.description : ""}` }))}>
                                <AiFillEdit /> Edit
                            </button>
                            <button type="button" className="btn btn-sm btn-danger" onClick={() => dispatch(deleteModule(module._id))}>
                                <AiFillDelete /> Delete
                            </button>
                        </div>
                    </button>
                    {
                        module.description && <li className="list-group-item">{module.description}</li>
                    }
                    {

                        module.moduleTopic && module.moduleTopic.map((topic) => (
                            <>
                                {
                                    topic.topicName && (
                                        <li key={topic.topicName} className="list-group-item">
                                            <div className="d-inline-flex gap-2">
                                                <FaEllipsisVertical className="me-1 wd-color-grey" />
                                                {topic.topicName}
                                            </div>
                                            <div className="float-end">
                                                <AiOutlineCheckCircle className="wd-color-green me-2" />
                                                <FaEllipsisVertical className="me-1 wd-color-grey" />
                                            </div>
                                        </li>
                                    )}
                                {
                                    topic.semiTopics && (
                                        topic.semiTopics.map((semitopic, semiIndex) => (
                                            <li key={semiIndex} className="list-group-item">
                                                <div className="d-inline-flex gap-5">
                                                    <FaEllipsisVertical className="me-1 wd-color-grey" />
                                                    {semitopic}
                                                </div>
                                                <div className="float-end">
                                                    <AiOutlineCheckCircle className="wd-color-green me-2" />
                                                    <FaEllipsisVertical className="me-1 wd-color-grey" />
                                                </div>
                                            </li>
                                        ))
                                    )
                                }
                                {
                                    topic.links && Object.entries(topic.links).map(([key, value], linkIndex) => (
                                        <li key={linkIndex} className="list-group-item">
                                            <div className="d-inline-flex ">
                                                <FaEllipsisVertical className="me-2 wd-color-grey" />
                                                <AiOutlineLink className="wd-color-green me-3" />
                                                <Link to={value} className="wd-module-external-link me-2">
                                                    {key}
                                                    <MdOutlineOutput className="ms-2 wd-color-red" />
                                                </Link>

                                            </div>
                                            <div className="float-end">
                                                <AiOutlineCheckCircle className="wd-color-green me-2" />
                                                <FaEllipsisVertical className="me-1 wd-color-grey" />
                                            </div>
                                        </li>
                                    ))
                                }
                                {
                                    topic.other && Object.entries(topic.other).map(([key, value], otherIndex) => (
                                        <li key={otherIndex} className="list-group-item">
                                            <div className="d-inline-flex ">
                                                <FaEllipsisVertical className="me-1 wd-color-grey" />
                                                <LuClipboardList className="me-3 wd-color-black" />

                                                <Link to={value} className="wd-module-assignment-link me-2" >
                                                    {key}
                                                </Link>

                                            </div>
                                            <div className="float-end">
                                                <AiOutlineCheckCircle className="wd-color-green me-2" />
                                                <FaEllipsisVertical className="me-1 wd-color-grey" />
                                            </div>
                                        </li>
                                    ))
                                }
                            </>
                        ))
                    }


                </ul>
            ))}
        </div>
    )
}

export default ModuleList