import { Link, Navigate, Route, Routes } from "react-router-dom"
import Signin from "./users/signin"
import Home from "./users/home"
import Account from "./users/account"
import UserTable from "./users/userTable"
import Register from "./users/register"

function Assignment6() {
    return (
        <div>
            <div className="container-fluid">
                <h1>Lab 6</h1>
                <div className="row">
                    <div className="col-2">
                        <div className="list-group">
                            <Link to="/Labs/a6" className="list-group-item">
                                Home
                            </Link>
                            <Link to="./signin" className="list-group-item">
                                Signin
                            </Link>
                            <Link to="./account" className="list-group-item">
                                Account
                            </Link>
                            <Link to="./register" className="list-group-item">
                                Register
                            </Link>
                        </div>
                    </div>
                    <div className="col-7">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/signin" element={<Signin />} />
                            <Route path="/account" element={<Account/>}/>
                            <Route path="/admin/users" element={<UserTable/>}/>
                            <Route path="/register" element={<Register/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Assignment6