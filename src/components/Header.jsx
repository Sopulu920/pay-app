let lastName = "Morah";
let user = lastName

function Header() {
    return (
        <header className="p-3 m-3 fs-5 rounded">            
                <h1>Hi, {user} </h1>
        </header>
    );
}

export default Header;