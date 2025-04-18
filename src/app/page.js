import Head from "next/head";
import AboutF from "./Components/AboutF";
import CapabilitiesF from "./Components/CapabilityF";
import NewUSP from "./Components/USPF/NewUSP";
import PFetch from "./Components/CNPOF/PFetch";
import TrustedPartners from "./Components/TrustedPartners";
import EsgF from "./Components/EsgF";
import SlideSectionF from "./Components/SlideSectionF";
import BentoSlider from "./Components/BentoSlider";
import LandingSwiper from "./Components/LandingSwiper";
// import Navlist from "./Components/Navlist";
export const metadata = {
  title: "KSH Infra - Inspiring Green Development",
  desc: "Leading Grade A industrial and warehouse park developer in India. KSH INFRA has till date delivered 2.2 million square feet of BTS and ready-to-use, green infrastructure solutions across four large-scale industrial parks in India.",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.desc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <LandingSwiper />
      <AboutF />
      <CapabilitiesF />
      <NewUSP />
      <PFetch />
      <TrustedPartners />
      <EsgF />
      <SlideSectionF />
      <BentoSlider />
      {/* <Navlist /> */}
    </>
  );
}
