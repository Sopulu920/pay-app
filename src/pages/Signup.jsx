import { Link } from "react-router-dom";
import bank from "../assets/images/bank.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {signupUser} from "../redux/slice/UserSlice"
import axios from "axios";

function Signup() {
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.user);

    const handleSumbit = (e) => {
        e.preventDefault();
        const userData = { lastName, firstName, middleName, userName, email, phone, password, confirmPassword };
        dispatch(signupUser(userData));
    };

    return (
        <>
            <div className="signup-page">
                <img src={bank} alt="" />
                <form className="signup" onSubmit={handleSumbit}>
                    <h4>Register a new account with us</h4>
                    <input name="lastName" className="" type="text" placeholder="last name" onChange={(e) => setLastName(e.target.value)} />
                    <br />
                    <input name="firstName" className="" type="text" placeholder="first name" onChange={(e) => setFirstName(e.target.value)} />
                    <br />
                    <input name="middleName" className="" type="text" placeholder="middle name" onChange={(e) => setMiddleName(e.target.value)} />
                    <br />
                    <input name="email" className="" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <input name="phone" className="" type="tel" placeholder="phone no" onChange={(e) => setPhone(e.target.value)} />
                    <br />
                    <input name="username" className="" type="text" placeholder="pick user name" onChange={(e) => setUserName(e.target.value)} />
                    <br />
                    <input name="password" className="" type="password" placeholder="new password" onChange={(e) => setPassword(e.target.value)} />
                    <br />
                    <input name="confirmPassword" className="" type="password" placeholder="confirm password" onChange={(e) => setConfirmPassword(e.target.value)} />
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