import CareerAcc from "./Components/CareerAcc";
import CareerBlbg from "./Components/CareerBlbg";
import CareerSec2 from "./Components/CareerSec2";
import CareerSec3 from "./Components/CareerSec3";
import CareerSpot from "./Components/CareerSpot";
import { CarSlide } from "./Components/CarSlide";
import FormSec from "./Components/FormSec";
export default function page() {
  return (
    <div>
      <CareerSpot />
      <CareerSec2 />
      <CareerSec3 />
      <CareerAcc />
      <CarSlide />
      <CareerBlbg />
      <FormSec />
    </div>
  );
}
