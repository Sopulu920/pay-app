import { user } from "./Header";

function Welcome() {
    return (
        <>
            <div className="welcome">
                <div className="welcome-back">
                    welcome back, {user.firstName}!
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