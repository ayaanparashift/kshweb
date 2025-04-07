import React from "react";
import ParkOverviewContent from "./ParkOverviewContent";
import TrustedPartners from "../Components/TrustedPartners";
import WhyKsh from "./WhyKsh";
// import Map from "../Components/Map";
import Map1 from "../Components/Map1";
import Usp from "../Components/USPF/NewUSP";
import ParkOverviewSpot from "./ParkOverviewSpot";
import ParkThreed from "./ParkThreed";
import Head from "next/head";

export const metadata = {
  title: "KSH Infra: Grade A Industrial & Logistics Parks",
  description:
    "Experience industry-leading standards and sustainable infrastructure with KSH INFRA. Delivering ready-to-use industrial parks with custom configurations, plug-and-play functionality, and a commitment to sustainability.",
};
const page = () => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <ParkOverviewSpot />
        <ParkOverviewContent />
        <Map1 />
        <Usp />
        <WhyKsh />
        <TrustedPartners paddingB={70} />
        <ParkThreed />
      </div>
    </>
  );
};

export default page;
