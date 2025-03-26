import React from "react";
import CaseINSec2 from "./Cmponents/CaseINSec2";
import CaseINAbout from "./Cmponents/CaseINAbout";
import CaseINChalleng from "./Cmponents/CaseINChalleng";
import CaseINBenefit from "./Cmponents/CaseINBenefit";
import CaseSolution from "./Cmponents/CaseSolution";
import CaseINForm from "./Cmponents/CaseINForm";
import CasINSpot from "./Cmponents/CasINSpot";
// import BlogInsideSpot from "../bloginside/Components/BlogInsideSpot";

const page = () => {
  return (
    <>
      <CasINSpot />
      <CaseINSec2 />
      <CaseINAbout />
      <CaseINChalleng />
      <CaseINBenefit />
      <CaseSolution />
      {/* <CaseINForm /> */}
    </>
  );
};

export default page;
