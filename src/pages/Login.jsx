import { Link, useNavigate } from "react-router-dom";
import bank from "../assets/images/bank.png";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/slice/LoginSlice";


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [empty, setEmpty] = useState({
        email: false,
        password: false,
    });

    const dispatch = useDispatch();
    const { loading, error, isAuthenticated, user } = useSelector((state) => state.login);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newEmpty = {
            email: !email,
            password: !password,
        };
        setEmpty(newEmpty);

        if (Object.values(newEmpty).some((v) => v)) {
            setErrorMessage("All fields are required.");
            return;
        }

        const credentials = { email, password };
        console.log("Dispatching loginUser with credentials:", credentials);
        dispatch(loginUser(credentials));
    };

    // Clear error messages on input change
    const handleInputChange = (setter, field) => (e) => {
        setter(e.target.value);
        setErrorMessage("");
        setEmpty((prev) => ({ ...prev, [field]: false }));
    };

    useEffect(() => {
        console.log("isAuthenticated is ", isAuthenticated);
        console.log("Logged user ", user);
        if (isAuthenticated === true) {
            navigate("/dashboard");
        }
    }, [isAuthenticated, navigate, dispatch, user]);

    // backend error message 
    const getBackendErrorMessage = () => {
        if (!error) return null;
        if (typeof error === "string") return error;
        if (typeof error === "object" && error.message) return error.message;
        return "An error occurred during login.";
    };


    return (
        <>
            <div className="login-page">
                <img src={bank} alt="" />
                <form className="login" onSubmit={handleSubmit}>
                    <h4>Welcome to our Log in page</h4>
                    <input
                    name="email"
                    className={empty.email ? "input-error" : ""}
                    type="text"
                    placeholder="E-mail"
                    onChange={handleInputChange(setEmail, "email")} />
                    <br />
                    <input
                    name="password"
                    className={empty.password ? "input-error" : ""}
                    type="password"
                    placeholder="password"
                    onChange={handleInputChange(setPassword, "password")} />
                    <br />
                    <button className="" type="submit">Log in</button>
                    <br />
                    <div className="forget">
                        <Link>Forget Password?</Link>
                        <Link to="/signup">Sign Up</Link>
                    </div>

                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    {error && !errorMessage && <p className="error-message">{getBackendErrorMessage()}</p>}

                </form>
            </div>
        </>
    );
}

export default Login;