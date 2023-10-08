import { Routes, Navigate, Route } from "react-router-dom";
import KanbasNavigator from "./KanbasNavigator";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./css/general.css"
function Kanbas() {
    return (
        <div className="wd-flex">
            <KanbasNavigator></KanbasNavigator>
            <Routes>
                <Route path="/" element = {<Navigate to="Dashboard"/>}/>
                <Route path="/Account/*" element = {<Account />}/>
                <Route path="/Dashboard" element = {<Dashboard />}/>
                <Route path="/Courses/:courseId/*" element = {<Courses />}/>
            </Routes>
        </div>
    )
}
export default Kanbas