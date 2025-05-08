import { Link } from "react-router-dom";
import Placeholder from "../../assets/images/placeholder.jpg"


const date = { day: new Date().getDate(), month: new Date().getMonth(), year: new Date().getFullYear() };
const individuals = [
    { lastName: `jack`, firstName: `ghost`, amount: `${Math.floor(Math.random() * 1000)}` },
    { lastName: `john`, firstName: `smith`, amount: `${Math.floor(Math.random() * 1000)}` },
    { lastName: `mark`, firstName: `mayday`, amount: `${Math.floor(Math.random() * 1000)}` },
    { lastName: `matthew`, firstName: `glass`, amount: `${Math.floor(Math.random() * 1000)}` },
]
function Schedule() {
    return (
        <>
            <div className="schedule-container">
                <div className="schedule-transfer">
                    <p>Schedule transfer</p>
                    <Link className="recent-view" to={"/allTransaction"}>view all <i className="fa-solid fa-greater-than"></i> </Link>
                </div>

                <div className="individual-container">
                    {individuals.map((data, index) => (
                        <div className="individual" key={index}>
                            <div className="individual-id">
                                <img src={Placeholder} alt="" />
                                <div>
                                    <p className="individual-name">{`${data.lastName} ${data.firstName}`}</p>
                                    <p className="individual-date">{`${date.day}/${date.month}/${date.year}`}</p>
                                </div>
                            </div>
                            <div>
                                <i className="fa fa-naira-sign"></i>
                                <span>{data.amount}</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    );
}

export default Schedule;