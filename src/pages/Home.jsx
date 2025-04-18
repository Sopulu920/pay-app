import Header from "../components/homeComponent/Header.jsx";
import Card from "../components/homeComponent/Card.jsx";
import TransferTable from "../components/homeComponent/TransferTable.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
    return (
        <>
            <div className="w-75 d-flex flex-column">
                <Header />
                <Card />
                <TransferTable />
                <Footer />
            </div>

        </>
    );
}

export default Home;