import React from "react";
import { useSelector } from "react-redux";
import { getUserId } from "../../redux/slice/LoginSlice";
import { data } from "react-router-dom";

function ProfileModal({ toggleProfileModal }) {
    const user = useSelector(getUserId);

    return (
        <>
            <div className="profile-container">
                <ul>
                    <li className="profile-data">
                        last name <br />
                        <span>{user.lastName}</span>
                    </li>
                    <li className="profile-data">
                        first name <br />
                        <span>{user.firstName}</span>
                    </li>
                    <li className="profile-data">
                        email <br />
                        <span>{user.email}</span>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default ProfileModal;
