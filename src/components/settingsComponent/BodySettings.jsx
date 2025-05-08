import ProfileModal from "./profileModal";
import { useState } from "react";

function BodySettings() {

    const [profileModal, setProfileModal] = useState(false);
    const toggleProfileModal = () => {
        setProfileModal(!profileModal)
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
                <button className="settings-btn">
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