import Header from "../components/homeComponent/Header.jsx";
import Card from "../components/homeComponent/Card.jsx";
import Footer from "../components/Footer.jsx";
import LeftHand from "../components/LeftHand.jsx";
import Chart from "../components/homeComponent/Chart.jsx";
import Info from "../components/homeComponent/Info.jsx";
import Table from "../components/homeComponent/Table.jsx";
import Welcome from "../components/homeComponent/Welcome.jsx";

function Home() {
    return (
        <>
            <div className="face">
                <LeftHand />
                <div className="body">
                    <Header />
                    <Welcome />
                    <div className="card-chart">
                        <div className="ict">
                            <Info />
                            <Chart />
                            <Table />
                        </div>
                        <Card />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;