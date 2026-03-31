// import React from 'react';

// const Experience = () => {
//   const experiences = [
//     {
//       title: 'Full Stack Intern',
//       company: '@SaitSolution',
//       period: '2025 - Current',
//       description: 'Developing full-stack systems at S.A.I.T Solution, handling end-to-end development from responsive UI design to database management and server integration.',
//       image: '/images/sait.jpeg', 
//     },
//     {
//       title: 'Student Service Advisor',
//       company: '@Infomax College of IT and Management',
//       period: 'Jul 2024 - Dec 2024',
//       description: 'Student Service Advisor at Infomax College. Assisted students and facilitated communication.',
//       image: '/images/infomax.jpeg', 
//     },
//     {
//       title: 'Test Center Assistant',
//       company: '@Infomax College of IT and Management',
//       period: 'Dec 2023 - Feb 2024',
//       description: 'Exam operations support. Managed security, coordination, and examiner assistance.',
//       image: '/images/infomax.jpeg', 
//     },
//   ];

//   return (
//     <section className="py-12 md:py-16 lg:py-20 relative">
//       {/* Vertical grid lines */}
//       <div className="absolute inset-0 pointer-events-none grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-9">
//         {[...Array(9)].map((_, i) => (
//           <div key={i} className="border-r border-gray-200 h-full" />
//         ))}
//       </div>

//       <div className="px-4 md:px-8 mx-auto">
//         <div className="max-w-7xl mx-auto">
//           {/* Header */}
//           <div className="overflow-hidden mb-8 md:mb-12 lg:mb-16">
//             <h2 className="text-4xl md:text-5xl lg:text-6xl text-center uppercase">
//               experiences
//             </h2>
//           </div>

//           {/* Experiences Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//             {experiences.map((exp, index) => (
//               <div
//                 key={index}
//                 className="group cursor-pointer "
//               >
//                 {/* Image Container - Fixed Aspect Ratio */}
//                 <div className="relative w-full aspect-[4/3] mb-4 overflow-hidden">
//                   <img
//                     src={exp.image}
//                     alt={exp.title}
//                     className="w-full h-full object-contain  "
//                     onError={(e) => {
//                       e.target.src = 'https://via.placeholder.com/400x300?text=Experience';
//                     }}
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="flex flex-col gap-1">
//                   <a
//                     href="#"
//                     className="text-xl md:text-2xl font-medium text-[#01010e] hover:text-gray-600 transition-colors duration-200 no-underline"
//                   >
//                     {exp.title}
//                   </a>
                  
//                   <span className="text-sm md:text-base font-medium text-[#01010e]">
//                     {exp.company}
//                   </span>

//                   <span className="text-sm md:text-base text-[#b3b3b3]">
//                     {exp.period}
//                   </span>

//                   <p className="text-sm md:text-base text-gray-600 mt-2 leading-relaxed">
//                     {exp.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;


import React, { useState } from "react";
import VerticalGridLines from "./VerticalGridLines";

const experiences = [
  {
    title: "Full Stack Intern",
    company: "@SaitSolution",
    period: "2025 — Current",
    description:
      "Developing full-stack systems at S.A.I.T Solution, handling end-to-end development from responsive UI design to database management and server integration.",
    image: "/images/sait.jpeg",
    tag: "Developer",
  },
  {
    title: "Student Service Advisor",
    company: "@Infomax College of IT and Management",
    period: "Jul 2024 — Dec 2024",
    description:
      "Student Service Advisor at Infomax College. Assisted students and facilitated communication between departments.",
    image: "/images/infomax.jpeg",
    tag: "Advisory",
  },
  {
    title: "Test Center Assistant",
    company: "@Infomax College of IT and Management",
    period: "Dec 2023 — Feb 2024",
    description:
      "Exam operations support. Managed security, coordination, and examiner assistance throughout testing periods.",
    image: "/images/infomax.jpeg",
    tag: "Operations",
  },
];

const Experience = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      style={{
        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
        position: "relative",
        backgroundColor: "#ffffff",
        overflow: "hidden",
      }}
      className="min-h-screen px-6 md:px-16 py-20"
    >
      {/* Google Font */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=DM+Serif+Display:ital@0;1&display=swap');`}</style>

      {/* Vertical grid lines */}
      <VerticalGridLines />

      {/* Content */}
      <div
        className="max-w-5xl mx-auto"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Header */}
        <div className="mb-16">
          <h2
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            className="text-5xl md:text-6xl text-[#111] leading-none"
          >
            Experience
          </h2>
        </div>

        {/* Top Divider */}
        <div style={{ width: "100%", height: "1px", backgroundColor: "#ddd" }} />

        {/* Experience List */}
        <div>
          {experiences.map((exp, index) => (
            <div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              style={{
                borderBottom: "1px solid #ddd",
                cursor: "pointer",
                transition: "background 0.2s ease",
                background: hovered === index ? "#f7f7f6" : "transparent",
              }}
            >
              <div
                style={{
                  padding: "2rem 1rem",
                  display: "grid",
                  gridTemplateColumns: "1fr 2fr auto",
                  gap: "2rem",
                  alignItems: "start",
                }}
                className="max-md:!grid-cols-1 max-md:!gap-4"
              >
                {/* Left: Image */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "12px",
                      overflow: "hidden",
                      flexShrink: 0,
                      backgroundColor: "#f0efed",
                      boxShadow:
                        hovered === index
                          ? "0 4px 20px rgba(0,0,0,0.1)"
                          : "0 1px 4px rgba(0,0,0,0.06)",
                      transition: "box-shadow 0.25s ease",
                    }}
                  >
                    <img
                      src={exp.image}
                      alt={exp.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentNode.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:22px;">🏢</div>`;
                      }}
                    />
                  </div>
                </div>

                {/* Center: Title + Company + Description */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <h3
                    style={{
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: "1.2rem",
                      fontWeight: 500,
                      color: "#111",
                      lineHeight: 1.3,
                      margin: 0,
                    }}
                  >
                    {exp.title}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "#666", fontWeight: 300, margin: 0 }}>
                    {exp.company}
                  </p>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "#888",
                      lineHeight: 1.7,
                      marginTop: "8px",
                      maxHeight: hovered === index ? "200px" : "0px",
                      overflow: "hidden",
                      opacity: hovered === index ? 1 : 0,
                      transition: "max-height 0.35s ease, opacity 0.3s ease",
                    }}
                  >
                    {exp.description}
                  </p>
                </div>

                {/* Right: Period + Tag */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: "8px",
                    paddingTop: "4px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.65rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: "#aaa",
                      whiteSpace: "nowrap",
                      margin: 0,
                    }}
                  >
                    {exp.period}
                  </p>
                  <span
                    style={{
                      fontSize: "0.6rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "#777",
                      backgroundColor: "#efefed",
                      borderRadius: "999px",
                      padding: "2px 10px",
                    }}
                  >
                    {exp.tag}
                  </span>
                </div>
              </div>
            </div>
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
