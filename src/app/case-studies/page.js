import React from "react";
import CSpot from "./Components/CSpot";
// import CaseSlide from "./Components/CaseSlide";
import FormSec from "./Components/FormSec";
import CSbgbl from "./Components/CSblbg";
import TrustedPartners from "../Components/TrustedPartners";
// import CaseSideTop from "./Components/CaseSideTop";
// import CaseSideBtm from "./Components/CaseSideBtm";

const page = () => {
  return (
    <div>
      <CSpot />
      {/* <CaseSlide /> */}
      <TrustedPartners paddingB={70} />
      {/* <CaseSideTop /> */}
      <FormSec />
      <CSbgbl />
    </div>
  );
};

export default page;
