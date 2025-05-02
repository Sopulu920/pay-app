import { Link } from "react-router-dom";
import bank from "../assets/images/bank.png";

function Login() {

    return (
        <>
            <div className="login-page">
                <img src={bank} alt="" />
                <form className="login" >
                    <h4>Welcome to our Log in page</h4>
                    <input name="username" className="" type="text" placeholder="user name" />
                    <br />
                    <input name="password" className="" type="password" placeholder="password" />
                    <br />
                    <button  className="" type="submit">Log in</button>
                    <br />
                    <div className="forget">
                        <Link>Forget Password?</Link>
                        <Link to="/signup">Sign Up</Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;