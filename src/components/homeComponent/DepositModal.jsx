function DepositModal({ toggleDepositModal }) {
    return (
        <>
            <div className="modal-bg" onClick={toggleDepositModal}>
                <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                    <div className="close-btn">
                        <button onClick={toggleDepositModal}><i className="fa-solid fa-xmark"></i></button>
                    </div>
                    <div className="modal-content">
                        <h1>deposit</h1>
                        <div>
                            <i className="fa fa-naira-sign"></i>
                            <input type="number" placeholder="amount" min="0" step="0.01" />
                        </div>
                    </div>
                    <br />
                    <button className="modal-btn">deposit</button>
                </div>
            </div>
        </>
    );
}

export default DepositModal;