import { Link } from "react-router-dom";

function Signup() {
    return (
        <>
            <div className="container w-50">
                <form className="d-flex flex-column p-5 m-5 border rounded shadow" action="">
                    <input className="text-center border rounded" type="text" placeholder="last name" />
                    <br />
                    <input className="text-center border rounded" type="text" placeholder="first name" />
                    <br />
                    <input className="text-center border rounded" type="text" placeholder="middle name" />
                    <br />
                    <input className="text-center border rounded" type="text" placeholder="Email" />
                    <br />
                    <input className="text-center border rounded" type="text" placeholder="pick user name" />
                    <br />
                    <input className="text-center border rounded" type="password" placeholder="new password" />
                    <br />
                    <input className="text-center border rounded" type="password" placeholder="confirm password" />
                    <br />
                    <button className="btn btn-primary border rounded">Sign Up</button>
                    <br />
                    <div className="text-center">
                        <p>Already have an account? <Link to="/login">Log in</Link></p>
                    </div>
                </form>
            </div>

        </>
    );
}

export default Signup;