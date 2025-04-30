function WithdrawalModal({ toggleWithdrawalModal }) {
    return (
        <>
            <div className="modal-bg" onClick={toggleWithdrawalModal}>
                <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                    <div className="close-btn">
                        <button onClick={toggleWithdrawalModal}><i className="fa-solid fa-xmark"></i></button>
                    </div>
                    <div className="modal-content">
                        <h1>withdrawal</h1>
                        <div>
                            <i className="fa fa-naira-sign"></i>
                            <input type="number" placeholder="amount" min="0" step="0.01" />
                        </div>
                    </div>
                    <br />
                    <button className="modal-btn">withdrawal</button>
                </div>
            </div>
        </>
    );
}

export default WithdrawalModal;