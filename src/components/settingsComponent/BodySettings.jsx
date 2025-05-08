import ProfileModal from "./profileModal";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserId } from "../../redux/slice/LoginSlice";
import { logoutUser } from "../../redux/slice/LogoutSlice";

function BodySettings() {

    const [profileModal, setProfileModal] = useState(false);
    const toggleProfileModal = () => {
        setProfileModal(!profileModal)
    }

    const dispatch = useDispatch();
    const user = useSelector(getUserId);
    const { loading, error, isAuthenticated } = useSelector((state) => state.logout);

    const navigate = useNavigate();

    const handleSubmit = async () => {
        await dispatch(logoutUser(user && user._id));
    }

    useEffect(() => {
        if (isAuthenticated === true) {
            navigate("/")
        }
    }, [isAuthenticated, navigate, dispatch, user])

    return (
        <>
            <div className="settings-body">
                <button className="settings-btn" onClick={toggleProfileModal}>
                    Personal Profile
                </button>
                {profileModal && <ProfileModal toggleProfileModal={toggleProfileModal} />}
                <button className="settings-btn">
                    Dark Mode
                </button>
                <button className="settings-btn" onClick={handleSubmit}>
                    Log Out
                </button>
                <button className="settings-delete-btn">
                    Delete Account
                </button>
            </div>
        </>
    );
}

export default BodySettings;