import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import * as client from "./client.js"
import { Link } from "react-router-dom"

function Account() {
    const [account, setAccount] = useState(null)
    const navigate = useNavigate()
    const fetchAccount = async () => {
        const account = await client.account()
        setAccount(account);
    }
    useEffect(() => {
        fetchAccount()
    }, [])
    const save = async () => {
        await client.updateUser(account)
    }

    const logOut = async () =>{
        await client.logOut()
        navigate("/Labs/a6/signin")
    }
    return (
        <div className="w-50">
            <h1>Account</h1>
            {account && (
                <>
                    <div>
                        Password<input value={account.password} className="form-control"
                            onChange={(e) => setAccount({
                                ...account,
                                password: e.target.value
                            })} />
                        First Name<input value={account.firstName} className="form-control"
                            onChange={(e) => setAccount({
                                ...account,
                                firstName: e.target.value
                            })} />
                        Last Name<input value={account.lastName} className="form-control"
                            onChange={(e) => setAccount({
                                ...account,
                                lastName: e.target.value
                            })} />
                        DOB<input value={account.dob} className="form-control"
                            onChange={(e) => setAccount({
                                ...account,
                                dob: e.target.value
                            })} />
                        Email<input value={account.email} className="form-control"
                            onChange={(e) => setAccount({
                                ...account,
                                email: e.target.value
                            })} />
                        Role<select className="form-select" onChange={(e) => setAccount({
                            ...account,
                            role: e.target.value
                        })}>
                            <option value="USER">User</option>
                            <option value="ADMIN">Admin</option>
                            <option value="FACULTY">Faculty</option>
                            <option value="STUDENT">Student</option>
                        </select>
                    </div>
                    <button className="btn btn-primary mt-2" onClick={save}>Save</button>
                    <button className="btn btn-primary mt-2 ms-2" onClick={logOut}>Log Out</button>
                    <Link to={"/Labs/a6/admin/users"} className="btn btn-warning mt-2 ms-2">User Table</Link>
                </>
            )}
        </div>
    );

}
export default Account