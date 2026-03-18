

// import React from 'react';
// import { motion } from 'framer-motion';

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="
//         relative min-h-screen flex items-center justify-center
//         overflow-hidden 
//       "
//     >
//       {/* ── Grid Lines ── */}
//       <div className="absolute inset-0 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-9 pointer-events-none">
//         {[...Array(9)].map((_, i) => (
//           <div key={i} className="border-r border-gray-200" />
//         ))}
//       </div>

//       {/* ── Content ── */}
//       <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20 sm:py-28 lg:py-36">
//         <div className="flex flex-col items-center text-center">

//           {/* ISNEHA
//               - overflow-hidden keeps the slide-up animation
//               - pb-[0.15em] stops the bottom edge being clipped
//               - clamp() gives smooth scaling across ALL screen sizes
//           */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="overflow-hidden w-full pb-[0.15em]"
//           >
//             <h1
//               className="
//                 font-display leading-none text-primary tracking-tight
//                 text-[clamp(3.2rem,12vw,12rem)]
//               "
//             >
//               ISNEHA
//             </h1>
//           </motion.div>

//           {/* Role */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="my-2 sm:my-3 lg:my-4"
//           >
//             <p
//               className="
//                 text-gray-400 uppercase tracking-widest
//                 text-[0.6rem] sm:text-xs md:text-sm lg:text-base
//               "
//             >
//               Fullstack Developer
//             </p>
//           </motion.div>

//           {/* MANANDHAR
//               - py-[0.15em] protects top AND bottom edges from clipping
//           */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="overflow-hidden w-full py-[0.15em]"
//           >
//             <h1
//               className="
//                 font-display leading-none text-primary tracking-tight
//                 text-[clamp(3.2rem,12vw,12rem)]
//               "
//             >
//               MANANDHAR
//             </h1>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative min-h-screen flex items-center justify-center
        overflow-hidden 
      "
    >
      {/* ── Grid Lines ── 
          Fix: always render all 9 cols on every screen so lines reach full height.
          On small screens the 4-col/6-col subsets were cutting off the rightmost lines.
      */}
      <div className="absolute inset-0 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-9 pointer-events-none">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className={`
              border-r border-gray-200 h-full
              ${i >= 4 ? 'hidden sm:block' : ''}
              ${i >= 6 ? 'hidden lg:block' : ''}
            `}
          />
        ))}
      </div>

      {/* ── Content ──
          Fix: tighten py on mobile (py-12) while keeping sm/lg values untouched.
      */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-28 lg:py-36">
        <div className="flex flex-col items-center text-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="overflow-hidden w-full pb-[0.15em]"
          >
            <h1
              className="
                font-display leading-none text-primary tracking-tight
                text-[clamp(3.2rem,12vw,12rem)]
              "
            >
              ISNEHA
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="my-2 sm:my-3 lg:my-4"
          >
            <p
              className="
                text-gray-400 uppercase tracking-widest
                text-[0.6rem] sm:text-xs md:text-sm lg:text-base
              "
            >
              Fullstack Developer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="overflow-hidden w-full py-[0.15em]"
          >
            <h1
              className="
                font-display leading-none text-primary tracking-tight
                text-[clamp(3.2rem,12vw,12rem)]
              "
            >
              MANANDHAR
            </h1>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;