import React from "react";
import CaseINSec2 from "./Cmponents/CaseINSec2";
import CaseINAbout from "./Cmponents/CaseINAbout";
import CaseINChalleng from "./Cmponents/CaseINChalleng";
import CaseINBenefit from "./Cmponents/CaseINBenefit";
import CaseSolution from "./Cmponents/CaseSolution";
import CaseINForm from "./Cmponents/CaseINForm";
import CasINSpot from "./Cmponents/CasINSpot";
import FormSec from "../Components/FormSec";
import CSbgbl from "../Components/CSblbg";
import Res from "../Components/Res";
// import BlogInsideSpot from "../bloginside/Components/BlogInsideSpot";

const page = () => {
  return (
    <>
      <CasINSpot />
      <CaseINSec2 />
      <CaseINAbout />
      <CaseINChalleng />
      <CaseSolution />
      <CaseINBenefit />
      <Res respara="We delivered a ready-to-use custom manufacturing facility complete with machinery, office and advanced infrastructure to Jabil on time." />
      <FormSec />
      <CSbgbl />
    </>
  );
};

export default page;
