// import Parent from "./Parent";

// export default function PFetch() {
//   const staticData = {
//     "Case Studies": [
//       {
//         id: 1,
//         title: "Creating opportunities for Kawasaki",
//         content:
//           "How we built Kawasaki's first integrated manufacturing and R&D facility in India?",
//       },
//       {
//         id: 2,
//         title: "Jabil + KSH INFRA",
//         content: "Jabil + KSH INFRA.",
//       },
//       {
//         id: 3,
//         title: "Another Case Studies Title 3",
//         content: "Another case studies",
//       },
//       { id: 4, title: "Case Studies Title 4",linkText:"",link:"/", content: "Case study 4" },
//     ],
//     News: [
//       { id: 5, title: "Global Markets Surge",linkText:"",link:"/", content: "News 1" },
//       { id: 6, title: "Policy Reforms Announced",linkText:"",link:"/", content: "News 2" },
//       { id: 7, title: "Tech Giants Merge",linkText:"",link:"/", content: "News 3" },
//       { id: 8, title: "Rising Economy Outlook",linkText:"",link:"/", content: "News 4" },
//     ],
//     "Press Release": [
//       { id: 9, title: "New Product Launch",linkText:"",link:"/", content: "Press Release 1" },
//       { id: 10, title: "Merger Announcement",linkText:"",link:"/", content: "Press Release 3" },
//       {
//         id: 11,
//         title: "Quarterly Financial Update",
//         content: "Press Release 2",
//       },
//       {
//         id: 12,
//         title: "Strategic Partnership Formed",
//         content: "Press Release 4",
//       },
//     ],
//     Others: [
//       {
//         id: 13,
//         title: "CEO Interview Insights",
//         content: "CEO Interview Insights 1",
//       },
//       {
//         id: 14,
//         title: "Community Initiative Kickoff",
//         content: "CEO Interview Insights 2",
//       },
//       {
//         id: 15,
//         title: "Industry Analysis Report",
//         content: "CEO Interview Insights 3",
//       },
//       {
//         id: 16,
//         title: "Upcoming Event Highlights",
//         content: "CEO Interview Insights 4",
//       },
//     ],
//   };

//   return <Parent staticData={staticData} />;
// }

import Parent from "./Parent";

export default function PFetch() {
  const staticData = {
    "Case Studies": [
      {
        id: 1,
        title: "Jabil + KSH INFRA",
        content: "Done and Delivered. On Time",
        linkText: "Explore Case Study",
        link: "/case-studies/jabil",
      },
      {
        id: 2,
        title: "Kawasaki + KSH INFRA",
        content:
          "Manufacturing, Assembly, and R&D — Delivered Kawasaki's First Indian Integrated Unit",
        linkText: "Explore Case Study",
        link: "/case-studies/kawasaki",
      },
    ],
    News: [
      {
        id: 5,
        title: "Mapletree Investments Acquires KSH Infra’s logistics asset",
        content: "Mapletree Investments Acquires KSH Infra’s logistics asset",
      },
      {
        id: 6,
        title: "Post covid-19 opportunities in India",
        content: "Post covid-19 opportunities in India",
      },
      {
        id: 7,
        title: "Benefits of moving into a sustainable Industrial Park",
        content: "Benefits of moving into a sustainable Industrial Park",
      },
      {
        id: 8,
        title:
          "IndoSpace inks Rs 1,000 cr JV with KSH INFRA to develop Logistics Parks across India",
        content:
          "IndoSpace inks Rs 1,000 cr JV with KSH INFRA to develop Logistics Parks across India",
      },
    ],
    "Press Release": [
      {
        id: 9,
        title: "New Product Launch",
        linkText: "Explore Press Release",
        link: "/",
        content: "Press Release 1",
      },
      {
        id: 10,
        title: "Merger Announcement",
        linkText: "",
        link: "/",
        content: "Press Release 3",
      },
      {
        id: 11,
        title: "Quarterly Financial Update",
        linkText: "",
        link: "/",
        content: "Press Release 2",
      },
      {
        id: 12,
        title: "Strategic Partnership Formed",
        linkText: "",
        link: "/",
        content: "Press Release 4",
      },
    ],
    Others: [
      {
        id: 13,
        title: "CEO Interview Insights",
        linkText: "",
        link: "/",
        content: "CEO Interview Insights 1",
      },
      {
        id: 14,
        title: "Community Initiative Kickoff",
        linkText: "",
        link: "/",
        content: "CEO Interview Insights 2",
      },
      {
        id: 15,
        title: "Industry Analysis Report",
        linkText: "",
        link: "/",
        content: "CEO Interview Insights 3",
      },
      {
        id: 16,
        title: "Upcoming Event Highlights",
        linkText: "",
        link: "/",
        content: "CEO Interview Insights 4",
      },
    ],
  };

  return <Parent staticData={staticData} />;
}
