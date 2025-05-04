import Placeholder from "../../assets/images/placeholder.jpg";
import { useSelector } from "react-redux";
import { loginUser } from "../../redux/slice/LoginSlice";

function Header() {
    const { user } = useSelector((state) => state.login);

    return (
        <header className="title">
            <h1>dashboard</h1>
            <div className="dashboard">
                <button> <i className="fa-solid fa-search"></i> </button>
                <button> <i className="fa-solid fa-bell"></i></button>
                <div className="user">
                    <img src={user?.image || Placeholder} alt="User" />
                    <span>{`${user?.lastName} , ${user?.firstName}`}</span>
                </div>
            </div>
        </header>
    );
}

export default Header;
