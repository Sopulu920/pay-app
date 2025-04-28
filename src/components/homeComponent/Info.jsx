function Info() {
    const amount = Math.floor(Math.random()*1000);
    const amount2 = Math.floor(Math.random()*10000);
    const amount3 = Math.floor(Math.random()*10000);

    return (
        <>
            <div className="info">
                <div className="balance">
                    <i className="fa-solid fa-wallet"></i>
                    <div>
                        <p className="info-text">Wallet Balance</p>
                        <i class="fa-solid fa-naira-sign"></i>
                        <span>{amount3}</span>
                    </div>
                </div>
                <div className="income-expense">
                    <i className="income fa-solid fa-history"></i>
                    <div>
                        <p className="info-text"> income </p>
                        <i class="fa-solid fa-naira-sign"></i>
                        <span>{amount2}</span>
                    </div>
                </div>
                <div className="income-expense">
                    <i className="expense fa-solid fa-history"></i>
                    <div>
                        <p className="info-text"> spent </p>
                        <i class="fa-solid fa-naira-sign"></i>
                        <span>{amount}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Info;