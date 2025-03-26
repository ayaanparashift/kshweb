// "use client";
// import { useState } from "react";
// import TeamCard from "./TeamCard";

// const TabTeam = () => {
//   const tabs = [
//     { title: "All" },
//     { title: "Operations Team" },
//     { title: "Partners | Advisors | EIRs" },
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);

//   const teamData = {
//     news: [
//       {
//         id: 1,
//         name: "Kushal S. Hegde",
//         des: "Chairman",
//         category: "Operations Team",
//         image: "/blog/blogin/blogin1.png",
//         linkuri: "/",
//       },
//       {
//         id: 2,
//         name: "Rajesh Hegde",
//         des: "MD - KSH International",
//         category: "News",
//         image: "/blog/blogin/blogin1.png",
//         linkuri: "/",
//       },
//     ],
//     blogs: [
//       {
//         id: 3,
//         name: "Rohit Hegde",
//         des: "Managing Director",
//         category: "Operations Team",
//         image: "/blog/blogin/blogin1.png",
//         linkuri: "/",
//       },
//       {
//         id: 4,
//         name: "Sundaresan. V",
//         des: "Managing Director",
//         category: "Partners | Advisors | EIRs",
//         image: "/blog/blogin/blogin1.png",
//         linkuri: "/",
//       },
//     ],
//     pressRelease: [
//       {
//         id: 5,
//         name: "Abhijit Pawar",
//         des: "Chairman",
//         category: "Partners | Advisors | EIRs",
//         image: "/blog/blogin/blogin1.png",
//         linkuri: "/",
//       },
//       {
//         id: 6,
//         name: "Rushid Domadia",
//         des: "MD - KSH International",
//         category: "Operations Team",
//         image: "/blog/blogin/blogin1.png",
//         linkuri: "/",
//       },
//       {
//         id: 7,
//         name: "Akhilesh Ayyapan",
//         des: "Managing Director",
//         category: "Partners | Advisors | EIRs",
//         image: "/blog/blogin/blogin1.png",
//         linkuri: "/",
//       },
//     ],
//   };

//   // Determine which team members to display based on the active tab.
//   let teamToDisplay = [];
//   if (activeIndex === 0) {
//     teamToDisplay = [
//       ...teamData.news,
//       ...teamData.blogs,
//       ...teamData.pressRelease,
//     ];
//   } else if (activeIndex === 1) {
//     teamToDisplay = teamData.news;
//   } else if (activeIndex === 2) {
//     teamToDisplay = teamData.blogs;
//   } else if (activeIndex === 3) {
//     teamToDisplay = teamData.pressRelease;
//   }

//   return (
//     <>
//       <div className="w-full bg-[#092241]">
//         <div className="fix12 pt-[50px] flex flex-col gap-[60px] pb-[30px]">
//           <h2 className="fpt-600 text-[44px] text-white">Our Team</h2>
//           <div>
//             <div className="fix12 flex overflow-x-auto scrollbar-hide items-center border-b-2 border-[#BFBFBF]">
//               {tabs.map((tab, index) => (
//                 <button
//                   key={index}
//                   className={`flex-1 lg:min-w-0 fsans-600 text-[20px] leading-[111%] min-w-[200px] text-center text-sm font-medium transition-colors pb-[15px] whitespace-nowrap ${
//                     activeIndex === index
//                       ? "text-[#F7E327] border-b-2 border-[#F7E327]"
//                       : "text-white hover:text-gray-300"
//                   }`}
//                   onClick={() => setActiveIndex(index)}
//                 >
//                   {tab.title}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="fix12 py-[70px] grid grid-cols-4 gap-y-[60px]">
//         {teamToDisplay.map((member) => (
//           <TeamCard key={member.id} member={member} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default TabTeam;

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TeamCard from "./TeamCard";
import TeamModal from "./TeamModal";

const TabTeam = () => {
  const tabs = [
    { title: "All", category: null },
    { title: "Operations Team", category: "Operations Team" },
    {
      title: "Partners | Advisors | EIRs",
      category: "Partners | Advisors | EIRs",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedMember, setSelectedMember] = useState(null); // Track selected team member

  const allTeamMembers = [
    {
      id: 1,
      name: "Kushal S. Hegde",
      des: "Chairman",
      category: "Operations Team",
      image: "/team/member/kushal.png",
      linkuri: "/",
      aboutmem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.",
    },
    {
      id: 2,
      name: "Rajesh Hegde",
      des: "MD - KSH International",
      category: "News",
      image: "/team/member/rajesh.png",
      linkuri: "/",
      aboutmem:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      name: "Rohit Hegde",
      des: "Managing Director",
      category: "Operations Team",
      image: "/team/member/rohit.png",
      linkuri: "/",
      aboutmem:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 4,
      name: "Sundaresan. V",
      des: "Managing Director",
      category: "Partners | Advisors | EIRs",
      image: "/team/member/sun.png",
      linkuri: "/",
      aboutmem:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 5,
      name: "Abhijit Pawar",
      des: "Chairman",
      category: "Partners | Advisors | EIRs",
      image: "/team/member/abhi.png",
      linkuri: "/",
      aboutmem:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 6,
      name: "Rushid Domadia",
      des: "MD - KSH International",
      category: "Operations Team",
      image: "/team/member/rush.png",
      linkuri: "/",
      aboutmem:
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
    },
    {
      id: 7,
      name: "Karam Domadia",
      des: "MD - KSH International",
      category: "Partners | Advisors | EIRs",
      image: "/team/member/karan.png",
      linkuri: "/",
      aboutmem:
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
    },
    {
      id: 8,
      name: "Akhilesh Ayyapan",
      des: "Managing Director",
      category: "Partners | Advisors | EIRs",
      image: "/team/member/akh.png",
      linkuri: "/",
      aboutmem:
        "Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur.",
    },
  ];

  const teamToDisplay =
    activeIndex === 0
      ? allTeamMembers
      : allTeamMembers.filter(
          (member) => member.category === tabs[activeIndex].category
        );

  return (
    <>
      <div className="w-full bg-[#092241]">
        <div className="fix12 pt-[50px] flex flex-col gap-[40px] pb-[50px]">
          <h2 className="fpt-600 text-[44px] text-white">Meet our team</h2>
          <div>
            <div className="fix12 flex overflow-x-auto scrollbar-hide items-center border-b-2 border-[#BFBFBF]">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`flex-1 lg:min-w-0 fsans-600 text-[20px] leading-[111%] min-w-[200px] text-center text-sm font-medium transition-colors pb-[15px] whitespace-nowrap ${
                    activeIndex === index
                      ? "text-[#F7E327] border-b-2 border-[#F7E327]"
                      : "text-white hover:text-gray-300"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Cards with Clickable Modal */}
      <div className="fix12 py-[70px] grid grid-cols-4 gap-y-[60px] justify-items-center">
        <AnimatePresence mode="wait">
          {teamToDisplay.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.7, 0, 0.4, 1] }}
              className="max-w-fit"
            >
              <TeamCard
                member={member}
                onClick={() => setSelectedMember(member)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Team Member Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
          >
            <TeamModal
              key={selectedMember}
              member={selectedMember}
              onClose={() => setSelectedMember(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TabTeam;
