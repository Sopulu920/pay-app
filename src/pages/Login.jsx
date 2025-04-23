import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/login", { userName, password })
            .then(result => console.log(result))
            .catch(err => console.log(err))
    }
    return (
        <>
            <div className="container w-50">
                <form className="d-flex flex-column p-5 m-5 border rounded shadow" onSubmit={handleSubmit}>
                    <input className="text-center border rounded" type="text" placeholder="user name" value={userName} onChange={(e)=> setUserName(e.target.value)} />
                    <br />
                    <input className="text-center border rounded" type="password" placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
                    <br />
                    <button className="btn btn-primary border rounded" type="submit">Log in</button>
                    <br />
                    <div className="d-flex justify-content-between">
                        <Link>Forget Password?</Link>
                        <Link to="/signup">Sign Up</Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;