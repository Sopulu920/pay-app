import Header from "../components/Header.jsx";
import Card from "../components/Card.jsx";
import TransferTable from "../components/TransferTable.jsx";

const CurrentYear = new Date().getFullYear();
//document.getElementById("year").innerHTML = date;

function Home() {
    return (
        <>
            <div className="w-75 d-flex flex-column">
                <Header />
                <Card />
                <TransferTable />
                <footer className="text-center my-5">Copyright &copy; {CurrentYear}</footer>
            </div>

        </>
    );
}

export default Home;