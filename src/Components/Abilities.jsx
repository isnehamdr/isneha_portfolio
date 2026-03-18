// import { useEffect, useRef, useState } from 'react';

// export default function AbilitiesSection() {
//   const titleRef = useRef(null);
//   const abilitiesRef = useRef([]);
//   const [isHovered, setIsHovered] = useState(Array(4).fill(false));

//   useEffect(() => {
//     // Animate title on mount
//     if (titleRef.current) {
//       titleRef.current.style.transform = 'translateY(0)';
//     }

//     // Stagger animate abilities
//     abilitiesRef.current.forEach((el, index) => {
//       if (el) {
//         setTimeout(() => {
//           el.style.opacity = '1';
//         }, 100 + index * 100);
//       }
//     });
//   }, []);

//   const handleMouseEnter = (index) => {
//     setIsHovered(prev => {
//       const newState = [...prev];
//       newState[index] = true;
//       return newState;
//     });
//   };

//   const handleMouseLeave = (index) => {
//     setIsHovered(prev => {
//       const newState = [...prev];
//       newState[index] = false;
//       return newState;
//     });
//   };

//  const abilities = [
//   {
//     title: 'Front-end development',
//     description: 'Building pixel-perfect, responsive interfaces using React, Tailwind CSS, and modern JavaScript  where clean code meets intuitive design to deliver fast, engaging user experiences.',
//   },
//   {
//     title: 'User interface design',
//     description: 'Designing intuitive, visually compelling interfaces that balance aesthetics with function crafting every layout, color, and interaction with purpose and user-first thinking.',
//   },
//   {
//     title: 'Back-end development',
//     description: 'Architecting robust, scalable server-side systems with Node.js, REST APIs, and databases building the invisible engine that powers seamless, data-driven applications.',
//   },
//   {
//     title: 'Search engine optimization',
//     description: 'Optimizing web performance, semantic structure, and metadata to improve visibility ensuring every project is not just beautiful to users, but discoverable by search engines too.',
//   },
// ];
 

//   return (
//     <div className="min-h-screen">
//       <section className="relative bg-white py-20 sm:py-28 lg:py-36 xl:py-44 overflow-hidden">
//         {/* Grid Lines */}
//         <div className="absolute inset-0 grid grid-cols-9 pointer-events-none">
//           {[...Array(9)].map((_, i) => (
//             <div key={i} className="border-r border-gray-200 h-full"></div>
//           ))}
//         </div>

//         {/* Content Container */}
//         <div className="relative w-full px-6 sm:px-8 lg:px-12">
//           {/* Layout Wrapper */}
//           <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12 lg:gap-16 xl:gap-20">
            
//             {/* Title Section */}
//             <div className="overflow-hidden lg:flex-shrink-0">
//               <h2
//                 ref={titleRef}
//                 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight transition-transform duration-1000 ease-out"
//                 style={{ 
//                   transform: 'translateY(100px)',
//                   color: '#01010e',
//                   fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
//                 }}
//               >
//                 ABILITIES
//               </h2>
//             </div>

//             {/* Abilities Grid - 2x2 Layout with Borders and Padding */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl lg:max-w-[43rem]">
//               {abilities.map((ability, index) => (
//                 <div
//                   key={index}
//                   ref={(el) => (abilitiesRef.current[index] = el)}
//                   className="group opacity-0 transition-all duration-700 border border-gray-300 py-6 rounded-lg hover:border-gray-500 hover:shadow-sm"
//                   onMouseEnter={() => handleMouseEnter(index)}
//                   onMouseLeave={() => handleMouseLeave(index)}
//                 >
//                   {/* Marquee Container */}
//                   <div className="relative overflow-hidden  h-12 ">
//                     {/* Primary Marquee */}
//                     <div 
//                       className="absolute whitespace-nowrap flex will-change-transform"
//                       style={{
//                         animation: isHovered[index] ? 'none' : `marquee ${35 + index * 2}s linear infinite`,
//                       }}
//                     >
//                       {/* First set */}
//                       {[...Array(10)].map((_, i) => (
//                         <span
//                           key={`first-${i}`}
//                           className="inline-block text-2xl sm:text-3xl font-bold tracking-tight uppercase "
//                           style={{ color: '#01010e' }}
//                         >
//                           {ability.title}
//                         </span>
//                       ))}
                      
                     
//                     </div>
//                   </div>

//                   <div className="relative overflow-hidden mb-4 h-12">
//                     {/* Primary Marquee */}
//                     <div 
//                       className="absolute whitespace-nowrap flex will-change-transform"
//                       style={{
//                         animation: isHovered[index] ? 'none' : `marquee ${35 + index * 2}s linear infinite`,
//                       }}
//                     >
//                       {/* First set */}
//                       {[...Array(10)].map((_, i) => (
//                         <span
//                           key={`first-${i}`}
//                           className="inline-block text-2xl sm:text-3xl  font-bold tracking-tight uppercase "
//                           style={{ color: '#01010e' }}
//                         >
//                           {ability.title}
//                         </span>
//                       ))}
                      
                     
//                     </div>
//                   </div>


//                   {/* Description */}
//                   <p 
//                     className="text-sm sm:text-base leading-relaxed px-2"
//                     style={{ 
//                       color: '#555555',
//                     }}
//                   >
//                     {ability.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Global Marquee Animation Style */}
//         <style>{`
//           @keyframes marquee {
//             0% {
//               transform: translateX(0);
//             }
//             100% {
//               transform: translateX(-50%);
//             }
//           }
//         `}</style>
//       </section>
//     </div>
//   );
// }



import { useEffect, useRef, useState } from 'react';

export default function AbilitiesSection() {
  const titleRef = useRef(null);
  const abilitiesRef = useRef([]);
  const [isHovered, setIsHovered] = useState(Array(4).fill(false));

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.style.transform = 'translateY(0)';
    }
    abilitiesRef.current.forEach((el, index) => {
      if (el) {
        setTimeout(() => {
          el.style.opacity = '1';
        }, 100 + index * 100);
      }
    });
  }, []);

  const handleMouseEnter = (index) => {
    setIsHovered(prev => { const n = [...prev]; n[index] = true; return n; });
  };
  const handleMouseLeave = (index) => {
    setIsHovered(prev => { const n = [...prev]; n[index] = false; return n; });
  };

  const abilities = [
    {
      title: 'Front-end development',
      description: 'Building pixel-perfect, responsive interfaces using React, Tailwind CSS, and modern JavaScript  where clean code meets intuitive design to deliver fast, engaging user experiences.',
    },
    {
      title: 'User interface design',
      description: 'Designing intuitive, visually compelling interfaces that balance aesthetics with function crafting every layout, color, and interaction with purpose and user-first thinking.',
    },
    {
      title: 'Back-end development',
      description: 'Architecting robust, scalable server-side systems with Node.js, REST APIs, and databases building the invisible engine that powers seamless, data-driven applications.',
    },
    {
      title: 'Search engine optimization',
      description: 'Optimizing web performance, semantic structure, and metadata to improve visibility ensuring every project is not just beautiful to users, but discoverable by search engines too.',
    },
  ];

  return (
    <div className="">
      <section className="relative bg-white py-20 sm:py-28 lg:py-36 xl:py-44 overflow-hidden">
        {/* Grid Lines */}
        <div className="absolute inset-0 grid grid-cols-9 pointer-events-none">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="border-r border-gray-200 h-full"></div>
          ))}
        </div>

        {/* Content Container */}
        <div className="relative w-full px-6 sm:px-8 lg:px-12">
          {/* Layout Wrapper */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12 lg:gap-16 xl:gap-20">

            {/* Title Section */}
            <div className="overflow-hidden lg:flex-shrink-0">
              <h2
                ref={titleRef}
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight transition-transform duration-1000 ease-out"
                style={{
                  transform: 'translateY(100px)',
                  color: '#01010e',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                }}
              >
                ABILITIES
              </h2>
            </div>

            {/* Abilities Grid — 2 cols on all screen sizes */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full max-w-3xl lg:max-w-[43rem]">
              {abilities.map((ability, index) => (
                <div
                  key={index}
                  ref={(el) => (abilitiesRef.current[index] = el)}
                  className="group opacity-0 transition-all duration-700 border border-gray-300 py-6 rounded-lg hover:border-gray-500 hover:shadow-sm"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  {/* Marquee Container */}
                  <div className="relative overflow-hidden h-8 sm:h-12">
                    <div
                      className="absolute whitespace-nowrap flex will-change-transform"
                      style={{
                        animation: isHovered[index] ? 'none' : `marquee ${35 + index * 2}s linear infinite`,
                      }}
                    >
                      {[...Array(10)].map((_, i) => (
                        <span
                          key={`first-${i}`}
                          className="inline-block text-sm sm:text-3xl font-bold tracking-tight uppercase"
                          style={{ color: '#01010e' }}
                        >
                          {ability.title}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative overflow-hidden mb-3 sm:mb-4 h-8 sm:h-12">
                    <div
                      className="absolute whitespace-nowrap flex will-change-transform"
                      style={{
                        animation: isHovered[index] ? 'none' : `marquee ${35 + index * 2}s linear infinite`,
                      }}
                    >
                      {[...Array(10)].map((_, i) => (
                        <span
                          key={`first-${i}`}
                          className="inline-block text-sm sm:text-3xl font-bold tracking-tight uppercase"
                          style={{ color: '#01010e' }}
                        >
                          {ability.title}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className="text-[0.65rem] sm:text-base leading-relaxed px-2"
                    style={{ color: '#555555' }}
                  >
                    {ability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>
    </div>
  );
}