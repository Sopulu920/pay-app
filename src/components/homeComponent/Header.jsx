import Placeholder from "../../assets/images/placeholder.jpg";
import { useSelector } from "react-redux";
import { getUserId } from "../../redux/slice/LoginSlice";

function Header() {
    const user = useSelector(getUserId);

    return (
        <header className="title">
            <h1>dashboard</h1>
            <div className="dashboard">
                <button> <i className="fa-solid fa-search"></i> </button>
                <button> <i className="fa-solid fa-bell"></i></button>
                <div className="user">
                    <img src={user?.image || Placeholder} alt="User" />
                    <span>{`${user?.lastName} , ${user?.firstName} `}</span>
                </div>
                <span className="accNum">{`Account: ${user?.accountNumber}`}</span>
            </div>
        </header>
    );
}

export default Header;
