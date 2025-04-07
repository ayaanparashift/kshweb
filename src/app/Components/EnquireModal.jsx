"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EnquireModal = () => {
  const [showEnquire, setShowEnquire] = useState(false);

  const handleEnquireClick = () => {
    setShowEnquire(true);
    // Disable scrolling
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.paddingRight = "0px"; // Hide scrollbar
  };

  const handleCloseEnquire = () => {
    setShowEnquire(false);
    // Enable scrolling
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
    document.documentElement.style.paddingRight = ""; // Reset scrollbar padding
  };

  return (
    <>
      <button
        className="text-[#092241] px-[10px] py-[25px] fixed top-[50%] z-[1000000] 
         bg-gradient-to-l from-white from-[39%] to-[#A4AFCA] -rotate-180 right-0 [writing-mode:tb-rl] fsans-600 text-[16px]"
        onClick={handleEnquireClick} // On click, show EnquireNow
      >
        Enquire Now
      </button>

      {/* EnquireNow Modal */}
      <AnimatePresence>
        {showEnquire && (
          <motion.div
            className="absolute z-[100000000000000000] top-0 right-0 w-[510px] overflow-hidden"
            initial={{ x: "510px" }} // Start off the screen
            animate={{ x: 0 }} // Slide in from the right
            exit={{
              x: "510px", // Slide out to the right
              transition: { duration: 0.5 }, // Duration of the slide-out animation
            }}
            transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }} // Duration of the slide animation
          >
            <div className="bg-[#092241] min-h-screen flex flex-col gap-[60px] w-full px-[40px] py-[47px] z-[10000000000] relative mt-0 overflow-hidden">
              <div className="flex justify-between items-center">
                <button onClick={handleCloseEnquire}>
                  <img
                    className="w-[40px] h-[40px]"
                    src="/homepage/icons/backarrow.svg"
                    alt="Back"
                  />
                </button>
                <div>
                  <motion.h1
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.7, 0, 0.4, 1] }}
                    viewport={{ once: true, amount: 0 }}
                    className="fpt-600 xl:text-[42px] lg:text-[40px] md:text-[32px] text-[20px] text-white leading-[150%] md:leading-[105%] pb-1 2xl:text-[42px]"
                  >
                    Enquire Now
                  </motion.h1>
                  <motion.div
                    initial={{ x: -150, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.7, 0, 0.4, 1] }}
                    viewport={{ once: true, amount: 0 }}
                    className="bg-[#F7E327] h-[10px] w-full"
                  ></motion.div>
                </div>
              </div>

              {/* Form */}
              <form className="flex flex-col gap-[24px] sm:gap-[50px] relative z-[10000000000]">
                <div className="flex sm:flex-row flex-col gap-[24px]">
                  <input
                    type="text"
                    placeholder="Name"
                    className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full xl:w-[295px]"
                  />
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full xl:w-[295px]"
                  />
                </div>
                <div className="flex sm:flex-row flex-col gap-[24px]">
                  <input
                    type="number"
                    placeholder="Phone"
                    className="border-b appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full xl:w-[295px]"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full xl:w-[295px]"
                  />
                </div>
                <div className="relative w-full">
                  <select
                    name="Subject"
                    id="sub"
                    className="w-full appearance-none outline-none border-b border-b-[#146BD7] bg-[#263548] text-white px-[10px] py-[14px] pr-[3.5rem] scrollbar-gutter-stable"
                    style={{ scrollbarGutter: "stable" }}
                  >
                    <option value="">Subject</option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                  </select>
                </div>
                <div className="w-full">
                  <textarea
                    className="h-[118px] resize-none w-full appearance-none outline-none border-b border-b-[#146BD7] bg-[#263548] text-white px-[10px] py-[14px]"
                    name="Message"
                    placeholder="Message"
                    id="message"
                  ></textarea>
                </div>
                <div className="w-full">
                  <button
                    type="submit"
                    className="bg-[#E30613] w-fit gap-[10px] px-[21px] py-[14px] flex items-center text-base fsans-600 text-white justify-around rounded-3xl"
                  >
                    <p>Submit</p>
                    <img src="/rightUpArrow.svg" alt="Arrow" />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EnquireModal;
