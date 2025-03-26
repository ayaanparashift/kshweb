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

const page = () => {
  return (
    <div>
      <SustainSpotLigth />
      <SustainSec2 />
      <SustainDownload />
      <SustainDownload2 />
      <SustainEnviroment />
      <SustainSocial />
      <SustainGovernence />
    </div>
  );
};

export default page;
