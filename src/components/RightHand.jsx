import Header from "./Header.jsx";
import Card from "./Card.jsx";
import Transfer from "./Transfer.jsx";

const CurrentYear = new Date().getFullYear();
//document.getElementById("year").innerHTML = date;

function RightHand() {
    return (
        <>
            <div className="w-75 d-flex flex-column">
                <Header />
                <Card />
                <Transfer />
                <footer className="text-center my-5">Copyright &copy; {CurrentYear}</footer>
            </div>

        </>
    );
}

export default RightHand;