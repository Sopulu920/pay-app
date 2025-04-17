function Card() {
    return (
        <div className="card h-50">
            <div className="card-body position-relative m-3 p-5 bg-dark text-white rounded">
                <p className="card-title ">Account Number</p>
                <p className="card-subtitle position-absolute end-0 p-5 ">C V V</p>
                <p className="card-text position-absolute bottom-0 p-5">Full Name</p>
            </div>
        </div>
    );
}

export default Card;