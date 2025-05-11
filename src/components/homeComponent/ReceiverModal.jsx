import { useSelector } from "react-redux";
import { getUserId } from "../../redux/slice/LoginSlice";

function ReceiverModal({ toggleReceiverModal }) {

    const user = useSelector(getUserId);

    return (
        <>
            <div className="modal-bg" onClick={toggleReceiverModal}>
                <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                    <div className="r-close-btn">
                        <button onClick={toggleReceiverModal}><i className="fa-solid fa-xmark"></i></button>
                    </div>
                    <div className="modal-content">
                        <div>
                            <div className="r-data-title">name</div>
                            <div>{`${user.lastName}, ${user.firstName}`}</div>
                        </div>
                        <br />
                        <div>
                            <div className="r-data-title">account number</div>
                            <div>{user.accountNumber}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ReceiverModal;