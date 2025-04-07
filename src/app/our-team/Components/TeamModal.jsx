import { motion } from "framer-motion";

const TeamModal = ({ member, onClose }) => {
  if (!member) return null; // Don't render if no member is selected

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose} // Close when clicking outside
    >
      <motion.div
        className="bg-white xl:w-[1000px] px-[30px] py-[40px] max-w-[1000px] flex flex-col gap-[50px]"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <div className="flex flex-col gap-[24px]">
          <div className="flex w-full justify-between">
            <div className="flex flex-col gap-[10px]">
              <h2 className="fpt-700 md:text-[44px] sm:text-[32px] text-[24px] leading-[111%]">
                {member.name}
              </h2>
              <h3 className="spotlightheaddd fsans-400 text-[24px] text-[#E30613] leading-[111%]">
                {member.des}
              </h3>
            </div>
            <img
              src="/team/icons/close.svg"
              className="w-[60px] h-[60px] cursor-pointer"
              onClick={onClose}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex gap-[10px] items-center">
              <img
                className="w-[34px] h-[34px]"
                src="/team/icons/roles.svg"
                alt="Education Logo"
              />
              <h4 className="spotlightheaddd fsans-600 text-[20px] leading-[34px]">
                Role Overview
              </h4>
            </div>
            <p className="text-[#434343] text-[16px] leading-[24px] fsans-400">
              With extensive experience in financial planning, risk management,
              and performance optimization, Giuseppe Caputo drives sound fiscal
              policies and strategic investments.
            </p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex gap-[10px] items-center">
              <img
                className="w-[34px] h-[34px]"
                src="/team/icons/exp.svg"
                alt="Education Logo"
              />
              <h4 className="spotlightheaddd fsans-600 text-[20px] leading-[34px]">
                Expertise
              </h4>
            </div>
            <p className="text-[#434343] text-[16px] leading-[24px] fsans-400">
              With extensive experience in financial planning, risk management,
              and performance optimization, Giuseppe Caputo drives sound fiscal
              policies and strategic investments.
            </p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex gap-[10px] items-center">
              <h4 className="spotlightheaddd fsans-600 text-[20px] leading-[34px]">
                Commitment to KSH:
              </h4>
            </div>
            <p className="text-[#434343] text-[16px] leading-[24px] fsans-400">
              Focused on building financial resilience, Giuseppe Caputo supports
              ISS GF's global operations by enabling strategic agility and
              operational efficiency.
            </p>
          </div>
        </div>
        <div className="flex gap-[10px] items-center">
          <img
            className="w-[41px] h-[41px]"
            src="/team/icons/linkedin.svg"
            alt="Linkedin"
          />
          <a
            className="text-[#092241] text-[20px] fsans-600"
            href="https://linkedin.com"
          >
            Connect to LinkedIn
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default TeamModal;
