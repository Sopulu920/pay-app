import { Link } from "react-router-dom";

function Login() {
    return(
        <>
        <div className="container w-50">
            <form className="d-flex flex-column p-5 m-5 border rounded shadow" action="">
                <input className="text-center border rounded" type="text" placeholder="user name" />
                <br />
                <input className="text-center border rounded" type="password" placeholder="password" />
                <br />
                <button className="btn btn-primary border rounded">Log in</button>
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