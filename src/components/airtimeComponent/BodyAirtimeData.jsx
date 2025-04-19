import { Link } from "react-router-dom"

function BodyAirtimeData() {
    return (
        <>
        <div className="d-flex justify-content-around">
            <Link className="page" to="/Airtime"><button className="border rounded p-5 fs-5 ">Buy Airtime</button></Link>
            <Link className="page" to="/Data"><button className="border rounded p-5 fs-5 ">Buy Data</button></Link>
        </div>
        </>
    );
}

export default BodyAirtimeData;