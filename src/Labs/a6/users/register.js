import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client"
function Register() {
    const [error, setError] = useState("");
    const [credentials, setCredentials] = useState({
        username: "", password: ""
    });
    const navigate = useNavigate();
    const signup = async () => {
        try {
            await client.register(credentials);
            navigate("/Labs/a6/account");
        } catch (err) {
            setError(err.response.data.message);
        }
    };
    return (
        <div>
            <h1>Signup</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            UserName :<input
                value={credentials.username}
                className="form-control mb-2"
                onChange={(e) => setCredentials({
                    ...credentials,
                    username: e.target.value
                })} />
            Password: <input
             className="form-control mb-2"
                value={credentials.password}
                onChange={(e) => setCredentials({
                    ...credentials,
                    password: e.target.value
                })} />
            <button onClick={signup} className="btn btn-primary mt-2">
                Signup
            </button>
        </div>
    );
}
export default Register;