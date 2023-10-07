import { Link, useLocation } from "react-router-dom";
import "./kNav.css"
import "../css/general.css"
import logo from "./northeastern_logo.png"
import { FaRegCircleUser } from "react-icons/fa6";
import { AiOutlineDashboard } from "react-icons/ai"
import { BiBook } from "react-icons/bi"
import { BsInbox } from "react-icons/bs"
import { BsCalendarWeek } from "react-icons/bs"
import { MdOutlineOutput } from "react-icons/md"
import { LuNetwork } from "react-icons/lu"
import { AiOutlineClockCircle } from "react-icons/ai"
import { BsQuestionCircle } from "react-icons/bs"
function KanbasNavigator() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
    const { pathname } = useLocation();
    const linkIconMap = {
        Account: <FaRegCircleUser className="wd-kNav-user-icon" />,
        Dashboard: <AiOutlineDashboard className="wd-kNav-icon" />,
        Courses: <BiBook className="wd-kNav-icon" />,
        Commons: <MdOutlineOutput className="wd-kNav-icon" />,
        Calendar: <BsCalendarWeek className="wd-kNav-icon" />,
        Inbox: <BsInbox className="wd-kNav-icon" />,
        History: <AiOutlineClockCircle className="wd-kNav-icon" />,
        Studio: <LuNetwork className="wd-kNav-icon" />,
        Help: <BsQuestionCircle className="wd-kNav-icon" />
    }
    return (
        <ul className="wd-nav-sidebar">
            <li><img src={logo} /></li>
            {links.map((link, index) => (
                <li key={index} className={`${pathname.includes(link) && "kanbas-nav-active"}`}>
                    <Link to={`/${link}`}>
                        <i className={`${linkIconMap[link]}`}></i>
                        <div>{linkIconMap[link]}</div>
                        <div>{link}</div>
                    </Link>
                </li>
            ))}

        </ul>
    );
}

export default KanbasNavigator
