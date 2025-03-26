import React from "react";

const ParkThreed = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        paddingBottom: "56.25%" /* 16:9 aspect ratio */,
      }}
    >
      <iframe
        src="https://my.spline.design/kshpark-a1626db22c3eca67289036ca25df15a6/"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          border: "none",
        }}
        title="Spline 3D Scene"
      />
    </div>
  );
};

export default ParkThreed;

//https://my.spline.design/kshpark-a1626db22c3eca67289036ca25df15a6/
