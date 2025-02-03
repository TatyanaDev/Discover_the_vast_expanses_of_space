import SpaceBackground from "../../components/SpaceBackground";
import SpaceJourney from "../../components/SpaceJourney";
import Header from "../../components/Header";
import Offers from "../../components/Offers";
import Footer from "../../components/Footer";

const SpaceJourneyPage = () => (
  <>
    <Header />
    <main>
      <SpaceBackground />
      <div className="combined-sections">
        <Offers />
        <SpaceJourney />
      </div>
    </main>
    <Footer />
  </>
);

export default SpaceJourneyPage;
