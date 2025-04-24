import { Link } from "react-router-dom"
import bank from "../assets/images/bank.png";

function Signup() {
    return (
        <>
            <div className="signup-page">
                <img src={bank} alt="" />
                <form className="signup" action="">
                    <h4>Register a new account with us</h4>
                    <input className="" type="text" placeholder="last name" />
                    <br />
                    <input className="" type="text" placeholder="first name" />
                    <br />
                    <input className="" type="text" placeholder="middle name" />
                    <br />
                    <input className="" type="text" placeholder="Email" />
                    <br />
                    <input className="" type="tel" placeholder="phone no" />
                    <br />
                    <input className="" type="text" placeholder="pick user name" />
                    <br />
                    <input className="" type="password" placeholder="new password" />
                    <br />
                    <input className="" type="password" placeholder="confirm password" />
                    <br />
                    <button className="">Sign Up</button>
                    <br />
                    <div className="already">
                        <p>Already have an account? <Link to="/">Log in</Link></p>
                    </div>
                </form>
            </div>

        </>
    );
}

export default Signup;