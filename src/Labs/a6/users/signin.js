import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/Labs/a6/account");
  };
  return (
    <div>
      <h1>Signin</h1>
      UserName<input value={credentials.username} className = "form-control mb-2"onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
      Password<input value={credentials.password} className= "form-control mb-2"onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
      <button className="btn btn-primary"onClick={signin}> Signin </button>
    </div>
  );
}
export default Signin;