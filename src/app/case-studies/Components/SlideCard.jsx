"use client";

const SlideCard = () => {
  return (
    <div className="flex flex-col xl:w-[710px] xl-1280:w-[650px] w-full overflow-hidden border border-[#DDDDDD]">
      <div className="xl:min-w-fit h-[240px] w-full max-w-full min-w-full overflow-hidden">
        <div className="min-w-full max-h-full">
          <img
            src="/cnpoex.png"
            alt="CNPO Example"
            className="w-full object-cover h-full"
          />
        </div>
      </div>
      <div className="flex flex-col gap-[40px] px-[30px] py-[20px]">
        <h3 className="fsans-600 text-[24px] spotlightheaddd">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
          sapien metus.
        </h3>
        <div className="flex cursor-pointer group items-center justify-between font-semibold text-[#ffffff] text-[16px] h-[50px] w-fit">
          <button className="flex group hover:translate-x-[5px] transition-transform duration-[400ms] items-center justify-center gap-3">
            <img
              src="/buttonarrows/redarico.svg"
              width={0}
              height={0}
              className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300 cursor-pointer"
              alt="Red Arrow Icon"
            />
            <p className="text-black fsans-600">Explore More</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlideCard;
