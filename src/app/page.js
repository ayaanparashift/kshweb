import About from "./Components/About";
import Esg from "./Components/Esg";
import Parent from "./Components/CNPO/Parent";
import TS from "./Components/TabSlider/TS";
import TrustedPartners from "./Components/TrustedPartners";
import PFetch from "./Components/CNPOF/PFetch";
import NewUSP from "./Components/USPF/NewUSP";
// import Usp from "./Components/USP/Usp";
import LandingSwiper from "./Components/LandingSwiper";
// import Capabilities from "./Components/Capability";
import SlideSection from "./Components/SlideSection";
import BentoSlider from "./Components/BentoSlider";
import AboutF from "./Components/AboutF";
import CapabilitiesF from "./Components/CapabilityF";
import EsgF from "./Components/EsgF";
import SlideSectionF from "./Components/SlideSectionF";

export default function Home() {
  return (
    <>
      <LandingSwiper />
      <AboutF />
      <CapabilitiesF />
      <NewUSP />
      <PFetch />
      <TrustedPartners />
      <EsgF />

      <SlideSectionF />

      <BentoSlider />
    </>
  );
}
