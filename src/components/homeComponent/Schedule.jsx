import { Link } from "react-router-dom";
import Placeholder from "../../assets/images/placeholder.jpg"
import { user } from "./Header";

const date = { day: new Date().getDate(), month: new Date().getMonth(), year: new Date().getFullYear() };
const individuals = [
    {lastName: `${user.lastName}`,firstName: `${user.firstName}`, amount:`${Math.floor(Math.random() * 1000)}`},
    {lastName: `${user.lastName}`,firstName: `${user.firstName}`, amount:`${Math.floor(Math.random() * 1000)}`},
    {lastName: `${user.lastName}`,firstName: `${user.firstName}`, amount:`${Math.floor(Math.random() * 1000)}`},
    {lastName: `${user.lastName}`,firstName: `${user.firstName}`, amount:`${Math.floor(Math.random() * 1000)}`},
]
function Schedule() {
    return (
        <>
            <div className="schedule-container">
                <div className="schedule-transfer">
                    <p>Schedule transfer</p>
                    <Link className="recent-view">view all <i className="fa-solid fa-greater-than"></i> </Link>
                </div>
                {individuals.map((data,index) =>(
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
        </>
    );
}

export default Schedule;