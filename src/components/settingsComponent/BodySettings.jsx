import ProfileModal from "./profileModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserId, updateUser } from "../../redux/slice/LoginSlice";

function BodySettings() {

    const [profileModal, setProfileModal] = useState(false);
    const toggleProfileModal = () => {
        setProfileModal(!profileModal)
    }

    const user = useSelector(getUserId);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = () => {
        // Clear all cookies
        document.cookie.split(";").forEach(function(c) {
            document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });
        // Clear localStorage and sessionStorage
        localStorage.clear();
        sessionStorage.clear();
        // Clear Redux login user state
        dispatch(updateUser(null));
        // Redirect to login page
        navigate("/");
        window.location.reload();
    }

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
