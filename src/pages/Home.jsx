import Header from "../components/homeComponent/Header.jsx";
import Card from "../components/homeComponent/Card.jsx";
import Footer from "../components/Footer.jsx";
import LeftHand from "../components/LeftHand.jsx";
import Chart from "../components/homeComponent/Chart.jsx";
import Info from "../components/homeComponent/Info.jsx"

function Home() {
    return (
        <>
            <div className="face">
                <LeftHand />
                <div className="body">
                    <Header />
                    <Info />                    
                   <div className="card-chat">
                    <Card />
                    <Chart />
                   </div>
                    <br />
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Home;