import React from "react";
import CapAbout from "./componentsf/CapAbout";
import CapLand from "./componentsf/CapLand";
import CapLeasing from "./componentsf/CapLeasing";
import CapProperty from "./componentsf/CapProperty";
import CapEnq from "./componentsf/CapEnq";
import CapDev from "./componentsf/CapDev";
import CapSpot from "./componentsf/CapSpot";
import Head from "next/head";

export const metadata = {
  title: "KSH INFRA Capabilities",
  desc: "KSH INFRA Capabilities",
};
const page = () => {
  return (
    <>
      <Head>
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.desc} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
      </Head>
      <CapSpot />
      <CapAbout />
      <CapLand />
      <CapDev />
      <CapLeasing />
      <CapProperty />
      <CapEnq />
    </>
  );
};

export default page;
