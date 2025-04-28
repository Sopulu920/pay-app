
let lastName = "Morah";
let user = lastName

function Header() {
    return (
        <header className="title">            
                <h1>dashboard</h1>
                <div className="dashboard">
                    <input type="text" placeholder="search"/>
                    <button> <i className="fa-solid fa-search"></i> </button>
                    <button> <i className="fa-solid fa-bell"></i></button>
                </div>
        </header>
    );
}

export default Header;