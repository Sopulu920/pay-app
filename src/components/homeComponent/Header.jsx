import Placeholder from "../../assets/images/placeholder.jpg";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserData } from "../../redux/slice/DataSlice";
import { useEffect } from "react";

function Header() {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.data);

    useEffect(() => {
        dispatch(fetchUserData(user.data._id));
    }, [dispatch]);

    return (
        <header className="title">
            <h1>dashboard</h1>
            <div className="dashboard">
                <button> <i className="fa-solid fa-search"></i> </button>
                <button> <i className="fa-solid fa-bell"></i></button>
                <div className="user">
                    <img src={user?.data.image || Placeholder} alt="User" />
                    <span>{`${user?.data.lastName} , ${user?.data.firstName} `}</span>
                </div>
                <span className="accNum">{`Account: ${user?.data.accountNumber}`}</span>
            </div>
        </header>
    );
}

export default Header;
