
let lastName = "Morah";
let user = lastName

function Header() {
    return (
        <header className="title">            
                <h1>Hi {user}</h1>
                <p>Amount</p>
        </header>
    );
}

export default Header;