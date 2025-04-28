
let lastName = "Morah";
let user = lastName

function Header() {
    return (
        <header className="title">            
                <h1>dashboard</h1>
                <div className="dashboard">
                    <button> <i className="fa-solid fa-search"></i> </button>
                    <button> <i className="fa-solid fa-bell"></i></button>
                    <input type="text" placeholder="search"/>
                </div>
        </header>
    );
}

export default Header;