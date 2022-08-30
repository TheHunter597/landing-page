import Header from "../components/Home/Header/Header";

import FirstSection from "../components/Home/FirstSection/FirstSection";
import SecondSection from "../components/Home/SecondSection/SecondSection";
import ThirdSection from "../components/Home/ThirdSection/ThirdSection";
import Footer from "../components/Home/Footer/Footer";

function Home() {
  return (
    <div>
      <div className="fs-small"></div>
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Footer />
    </div>
  );
}

export default Home;
