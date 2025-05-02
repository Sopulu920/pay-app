import { Link } from "react-router-dom";
import bank from "../assets/images/bank.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../redux/slice/UserSlice"

function Signup() {
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.user);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage("passwords do not match");
            return;
        }
        else {
            setErrorMessage("");
        }
        const userData = { firstName, lastName, phone, email, password };
        dispatch(signupUser(userData));
    };

    return (
        <>
            <div className="signup-page">
                <img src={bank} alt="" />
                <form className="signup" onSubmit={handleSubmit}>
                    <h4>Register a new account with us</h4>
                    <input name="firstName" className="" type="text" placeholder="first name" onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
                    <br />
                    <input name="lastName" className="" type="text" placeholder="last name" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
                    <br />
                    <input name="phone" className="" type="tel" placeholder="phone no" onChange={(e) => setPhone(e.target.value)} value={phone}/>
                    <br />
                    <input name="email" className="" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    <br />
                    <input name="password" className="" type="password" placeholder="new password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                    <br />
                    <input name="confirmPassword" className="" type="password" placeholder="confirm password" onChange={(e) => setConfirmPassword(e.target.value)} />
                    <br />
                    <button className="" type="submit">Sign Up</button>
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