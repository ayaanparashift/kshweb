// const TeamCard = ({ member }) => {
//   return (
//     <div className="w-full max-w-[250px] bg-white shadow-lg rounded-lg overflow-hidden">
//       <img
//         src={member.image}
//         alt={member.name}
//         className="w-full h-auto object-cover"
//       />
//       <div className="p-4 flex items-center justify-between">
//         <div>
//           <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
//           <p className="text-sm text-gray-600">{member.des}</p>
//         </div>
//         <a
//           href={member.linkuri}
//           className="w-6 h-6 flex items-center justify-center"
//         >
//           <img src="/linkedin.svg" alt="LinkedIn" className="w-full h-full" />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default TeamCard;

const TeamCard = ({ member, onClick }) => {
  return (
    <div className="cursor-pointer w-fit h-fit" onClick={onClick}>
      {/* Now Clickable */}
      <div className="w-[290px] bg-white border border-[#DDDDDD] overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-[350px] object-cover"
        />
        <div className="py-[27px] px-[20px] flex-col gap-[16px] flex">
          <div className="flex w-full items-center justify-between">
            <h3 className="spotlightheaddd fsans-600 text-[24px]">
              {member.name}
            </h3>
            <a
              href={member.linkuri}
              className="w-[41px] h-[41px] flex items-center justify-center"
            >
              <img
                src="/team/icons/linkedin.svg"
                alt="LinkedIn"
                className="w-full h-full"
              />
            </a>
          </div>
          <p className="text-[18px] fsans-400">{member.des}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
