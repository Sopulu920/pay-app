import {Link} from "react-router-dom";

let lastName = "Morah";
let user = lastName

function Header() {
    return (
        <header className="p-3 m-3 fs-5 rounded d-flex justify-content-between">            
                <h1>Hi {user}</h1>
                <Link className="fs-5" to="/login">Log in</Link>
        </header>
    );
}

export default Header;