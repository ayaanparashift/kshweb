import React from "react";
import InvesterSec2 from "./components/InvesterSec2";
import InvesterCase from "./components/InvesterCase";
import InvesRelaSpot from "./components/InvesRelaSpot";

const page = () => {
  return (
    <>
      <InvesRelaSpot />
      <InvesterSec2 />
      <InvesterCase />
    </>
  );
};

export default page;
