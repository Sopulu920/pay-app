import Header from "../components/homeComponent/Header.jsx";
import Card from "../components/homeComponent/Card.jsx";
import LeftHand from "../components/LeftHand.jsx";
import Chart from "../components/homeComponent/Chart.jsx";
import Info from "../components/homeComponent/Info.jsx";
import Table from "../components/homeComponent/Table.jsx";
import Welcome from "../components/homeComponent/Welcome.jsx";
import Schedule from "../components/homeComponent/Schedule.jsx";

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
                        <div className="cs">
                            <Card />
                            <Schedule />
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
