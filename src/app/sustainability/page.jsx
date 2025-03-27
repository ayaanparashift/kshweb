import React from "react";
import SustainSpotLigth from "./susConpomentsF/SustainSpotLigth";
import ImgAndContent from "../GlobalComponents/ImgAndContent";
import SustainSec2 from "./susConpomentsF/SustainSec2";
import SustainSocial from "./susConpomentsF/SustainSocial";
import SustainEnviroment from "./susConpomentsF/SustainEnviroment";
import Usp from "../Components/USP/Usp";
import SustainGovernence from "./susConpomentsF/SustainGovernence";
import SustainDownload from "./susConpomentsF/SustainDownload";
import SustainDownload2 from "./susConpomentsF/SustainDownload2";
import PopForm from "./susConpomentsF/PopForm";
// import Head from "next/head";

// const metadata = {
//   title:
//     "Driving Sustainable Development: KSH INFRA&#039;s Commitment to Sustainability",
//   desc: "Discover how KSH INFRA is committed to sustainability through EDGE Certification, IGBC Platinum-compliant planning, environmental care, social impact norms, employee engagements, diversity and inclusion, and community actions.",
// };
import Head from "next/head";

export const metadata = {
  title:
    "Driving Sustainable Development: KSH INFRA&#039;s Commitment to Sustainability",
  desc: "Discover how KSH INFRA is committed to sustainability through EDGE Certification, IGBC Platinum-compliant planning, environmental care, social impact norms, employee engagements, diversity and inclusion, and community actions.",
};
const page = () => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.desc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SustainSpotLigth />
      <SustainSec2 />
      <SustainDownload />
      <SustainDownload2 />
      <SustainEnviroment />
      <SustainSocial />
      <SustainGovernence />
    </>
  );
};

export default page;
