function TransferModal({ toggleTransferModal }) {
    return (
        <>
            <div className="modal-bg" onClick={toggleTransferModal}>
                <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                    <div className="transfer-close-btn">
                        <button onClick={toggleTransferModal}><i className="fa-solid fa-xmark"></i></button>
                    </div>
                    <div className="modal-content">
                        <h1>transfer</h1>
                        <input type="number" placeholder="account number" min="0" />
                        <br />
                        <div>
                            <i className="fa fa-naira-sign"></i>
                            <input type="number" placeholder="amount" min="0" step="0.01" />                            
                        </div>                        
                    </div>
                    <br />
                    <button className="modal-btn">transfer</button>
                </div>
            </div>
        </>
    );
}

export default TransferModal;