import { Link, Navigate, useNavigate } from "react-router-dom";
import bank from "../assets/images/bank.png";
import { useState, useEffect } from "react";
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
    const { loading, error, success } = useSelector((state) => state.user);

    const navigate = useNavigate();

    // Clear error messages on input change
    const handleInputChange = (setter) => (e) => {
        setter(e.target.value);
        setErrorMessage("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // check empty fields
        if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
            setErrorMessage("All fields are required.");
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
            return;
        }

        setErrorMessage("");
        
        const userData = { firstName, lastName, phone, email, password };
        dispatch(signupUser(userData));
    };

    useEffect(() => {
        if (success === true) {
            navigate("/");
        }
    }, [success, navigate]);

    // backend error message 
    const getBackendErrorMessage = () => {
        if (!error) return null;
        if (typeof error === "string") return error;
        if (typeof error === "object" && error.message) return error.message;
        return "An error occurred during signup.";
    };

    return (
        <>
            <div className="signup-page">
                <img src={bank} alt="" />
                <form className="signup" onSubmit={handleSubmit}>
                    <h4>Register a new account with us</h4>
                    <input name="firstName" className="" type="text" placeholder="first name" onChange={handleInputChange(setFirstName)} value={firstName} />
                    <br />
                    <input name="lastName" className="" type="text" placeholder="last name" onChange={handleInputChange(setLastName)} value={lastName} />
                    <br />
                    <input name="phone" className="" type="tel" placeholder="phone no" onChange={handleInputChange(setPhone)} value={phone} />
                    <br />
                    <input name="email" className="" type="text" placeholder="Email" onChange={handleInputChange(setEmail)} value={email} />
                    <br />
                    <input name="password" className="" type="password" placeholder="new password" onChange={handleInputChange(setPassword)} value={password} />
                    <br />
                    <input name="confirmPassword" className="" type="password" placeholder="confirm password" onChange={handleInputChange(setConfirmPassword)} value={confirmPassword} />
                    <br />
                    <button className="" type="submit" disabled={loading}>
                        {loading ? "Signing Up..." : "Sign Up"}
                    </button>
                    <br />
                    <div className="already">
                        <p>Already have an account? <Link to="/">Log in</Link></p>
                    </div>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    {error && !errorMessage && <p className="error-message">{getBackendErrorMessage()}</p>}
                </form>
            </div>
        </>
    );
}

export default Signup;
