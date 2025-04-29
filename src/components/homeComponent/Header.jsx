import Placeholder from "../../assets/images/placeholder.jpg"
let lastName = "Morah";
let firstName = "Sopuluchukwu";
export const user = {lastName, firstName};

function Header() {
    return (
        <header className="title">            
                <h1>dashboard</h1>
                <div className="dashboard">
                    <button> <i className="fa-solid fa-search"></i> </button>
                    <button> <i className="fa-solid fa-bell"></i></button>
                    <div className="user">
                        <img src={Placeholder} alt="" />
                        <span>{`${user.lastName} , ${user.firstName}`}</span>
                    </div>
                </div>
        </header>
    );
}

export default Header;