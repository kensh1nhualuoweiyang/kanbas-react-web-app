import { useEffect, useState } from "react"
import * as  client from "./client"
import { CiCirclePlus } from "react-icons/ci";
import { cat } from "fontawesome";
function UserTable() {
    const [users, setUsers] = useState([])
    const fetchUser = async () => {
        const res = await client.findAllUser()

        setUsers(res)
    }
    const [user, setUser] = useState({ username: "", password: "", role: "USER" })
    const createUser = async () => {
        try {
            const newUser = await client.createUser(user)
            setUsers([newUser, ...users])
        }
        catch (err) {
            console.log(err);
        }
    }
    const selectUser = async (user) => {
        try {
            const u = await client.findUserById(user._id)
            setUser(u)
        } catch (err) {
            console.log((err));
        }
    }
    const updateUser = async () => {
        try {
            const status = await client.updateUser(user)
            setUsers(users.map((item) => item._id === user._id ? user : item))

        }
        catch (err) {
            console.log(err);
        }
    }
    const deleteUser = async (uid) => {
        try {
            const status = await client.deleteUser(uid)
            setUsers(users.filter((item) => item._id !== uid))
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchUser()
    }, [])
    return (
        <div>
            <h1>User List</h1>
            <table className="table">
                {console.log(users)}
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                    <tr>
                        <td>
                            User Name:<input value={user.password} className="form-control mb-2" onChange={(e) => setUser({ ...user, password: e.target.value })} />
                            Password:<input value={user.username} className="form-control" onChange={(e) => setUser({ ...user, username: e.target.value })} />
                        </td>
                        <td>
                            First Name :<input value={user.firstName} className="form-control" onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
                        </td>
                        <td>
                            Last Name<input value={user.lastName} className="form-control" onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
                        </td>
                        <td>
                            <select value={user.role} className="form-select" onChange={(e) => setUser({ ...user, role: e.target.value })}>
                                <option value="USER">User</option>
                                <option value="ADMIN">Admin</option>
                                <option value="FACULTY">Faculty</option>
                                <option value="STUDENT">Student</option>
                            </select>
                        </td>
                        <td>
                            <button className="btn btn-primary me-2 mb-2" onClick={updateUser} >Update User</button>
                            <button className="btn btn-primary" onClick={createUser} >Create User</button>
                        </td>
                    </tr>

                </thead>
                <tbody>
                    {users && users.map((item) => (
                        <tr key={item._id}>
                            <td>{item.username}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>
                                <button className="btn btn-warning me-2 mb-2" onClick={() => selectUser(item)}>
                                    Select
                                </button>
                                <button className="btn btn-warning me-2" onClick={() => deleteUser(item._id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>))}
                </tbody>
            </table>
        </div>

    )
}
export default UserTable