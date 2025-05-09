import { Link } from "react-router-dom"

function BodyAirtimeData() {
    return (
        <>
        <div className="airtime-data">
            <Link className="airtime-data-page" to="/Airtime">Buy Airtime</Link>
            <Link className="airtime-data-page" to="/Data">Buy Data</Link>
        </div>
        </>
    );
}

export default BodyAirtimeData;