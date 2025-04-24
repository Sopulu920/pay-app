import Header from "../components/homeComponent/Header.jsx";
import Card from "../components/homeComponent/Card.jsx";
import TransferTable from "../components/homeComponent/TransferTable.jsx";
import Footer from "../components/Footer.jsx";
import LeftHand from "../components/LeftHand.jsx";

function Home() {
    return (
        <>
            <div className="face">
                <LeftHand />
                <div className="body">
                    <Header />
                    <Card />
                    <br />
                    <TransferTable />
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Home;