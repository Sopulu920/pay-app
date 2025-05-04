import { useSelector, useDispatch } from "react-redux";
import { fetchUserData } from "../../redux/slice/DataSlice";
import { useEffect } from "react";
import { data } from "react-router-dom";

function Welcome() {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.data);

    useEffect(() => {
        dispatch(fetchUserData(user.data._id));
    }, [dispatch]);

    return (
        <>
            <div className="welcome">
                <div className="welcome-back">
                welcome back, {user.data.firstName}!
                </div>
                <div className="welcome-button">
                    <button className="welcome-receive">receive</button>
                    <button className="welcome-send">send money</button>
                </div>
            </div>
        </>
    );
}

export default Welcome;