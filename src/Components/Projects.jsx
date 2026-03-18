import { useEffect, useState } from 'react';

export default function Projects() {
  const [lineWidth, setLineWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Animate line width on mount
    const timer = setTimeout(() => {
      setLineWidth(100);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Project images data - matching the Webflow structure
  const projectImages = [
    '/images/aaramkunj.png',
    '/images/alpine4.png',
    '/images/backtonature.png',
    '/images/baraanda6.png',
    '/images/bedbreak.png',
    '/images/cappa.png',
    '/images/cappa3.png',
    '/images/consultancy1.png',
    '/images/driving1.png',
    '/images/ecommerce1.png',
    '/images/alpine5.png',
    '/images/ecommerce4.png',
    '/images/multiple3.png',
    '/images/restro.png',
    '/images/restro3.png',
    '/images/orai1.png',
    '/images/stella1.png',
    '/images/stella3.png',
    '/images/stella4.png',
    '/images/stella5.png',
    '/images/university.png',
  ];

  return (
    <section className="relative z-30 h-screen bg-[#01010e] overflow-hidden">
      {/* Padding Global - 5% on sides */}
      <div className="relative h-full" >
        
        {/* More Projects Wrap */}
        <div className="relative h-full">
          
          {/* Container Large */}
          <div className="relative h-full max-w-[1920px] mx-auto">
            
            {/* Padding Section Large */}
            <div className="relative h-full">
              
              {/* Content - SEE ALL PROJECTS */}
              <div className="relative z-20 flex items-center justify-center h-full">
                <a
                  href="/works"
                  className="inline-block text-center group"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 transition-opacity duration-300 group-hover:opacity-90 text-center">
                    SEE ALL PROJECTS
                  </h2>
                  
                  {/* Animated Line */}
                  <div className="flex justify-center">
                    <div
                      className="h-1 bg-white transition-all duration-700 ease-out"
                      style={{ 
                        width: isHovered ? '100%' : `${lineWidth}%`,
                        maxWidth: '600px'
                      }}
                    ></div>
                  </div>
                </a>
              </div>

              {/* Background Images */}
              <div className="absolute inset-0 z-10">
                
                {/* Image Overlay Layer */}
                <div className="absolute inset-0 bg-black/60 z-10"></div>

                {/* Images Layout - 5 Columns */}
                <div className="flex h-full w-full gap-0">
                  
                  {/* Column 1 - Down Animation */}
                  <div className="flex-1 flex flex-col overflow-hidden">
                    <div className="flex flex-col animate-scroll-down-1">
                      {projectImages.map((img, idx) => (
                        <div key={`col1-${idx}`} className="flex-shrink-0 mb-4">
                          <img
                            src={img}
                            alt=""
                            className="w-full h-[80vh] object-cover transform rotate-[3deg]"
                            loading="lazy"
                          />
                        </div>
                      ))}
                      {/* Duplicate for seamless loop */}
                      {projectImages.map((img, idx) => (
                        <div key={`col1-dup-${idx}`} className="flex-shrink-0 mb-4">
                          <img
                            src={img}
                            alt=""
                            className="w-full h-[80vh] object-cover transform rotate-[3deg]"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Column 2 - Up Animation */}
                  <div className="flex-1 flex flex-col overflow-hidden">
                    <div className="flex flex-col animate-scroll-up-2">
                      {[...projectImages].reverse().map((img, idx) => (
                        <div key={`col2-${idx}`} className="flex-shrink-0 mb-4">
                          <img
                            src={img}
                            alt=""
                            className="w-full h-[80vh] object-cover transform rotate-[3deg]"
                            loading="lazy"
                          />
                        </div>
                      ))}
                      {/* Duplicate for seamless loop */}
                      {[...projectImages].reverse().map((img, idx) => (
                        <div key={`col2-dup-${idx}`} className="flex-shrink-0 mb-4">
                          <img
                            src={img}
                            alt=""
                            className="w-full h-[80vh] object-cover transform rotate-[3deg]"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Column 3 - Down Animation (Hidden on mobile) */}
                  <div className="hidden sm:flex flex-1 flex-col overflow-hidden">
                    <div className="flex flex-col animate-scroll-down-3">
                      {projectImages.map((img, idx) => (
                        <div key={`col3-${idx}`} className="flex-shrink-0 mb-4">
                          <img
                            src={img}
                            alt=""
                            className="w-full h-[80vh] object-cover transform rotate-[3deg]"
                            loading="lazy"
                          />
                        </div>
                      ))}
                      {/* Duplicate for seamless loop */}
                      {projectImages.map((img, idx) => (
                        <div key={`col3-dup-${idx}`} className="flex-shrink-0 mb-4">
                          <img
                            src={img}
                            alt=""
                            className="w-full h-[80vh] object-cover transform rotate-[3deg]"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Column 4 - Up Animation (Hidden on mobile/tablet) */}
                  <div className="hidden md:flex flex-1 flex-col overflow-hidden">
                    <div className="flex flex-col animate-scroll-up-4">
                      {[...projectImages].reverse().map((img, idx) => (
                        <div key={`col4-${idx}`} className="flex-shrink-0 mb-4">
                          <img
                            src={img}
                            alt=""
                            className="w-full h-[80vh] object-cover transform rotate-[3deg]"
                            loading="lazy"
                          />
                        </div>
                      ))}
                      {/* Duplicate for seamless loop */}
                      {[...projectImages].reverse().map((img, idx) => (
                        <div key={`col4-dup-${idx}`} className="flex-shrink-0 mb-4">
                          <img
                            src={img}
                            alt=""
                            className="w-full h-[80vh] object-cover transform rotate-[3deg]"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Column 5 - Down Animation (Hidden on mobile/tablet) */}
                  <div className="hidden lg:flex flex-1 flex-col overflow-hidden">
                    <div className="flex flex-col animate-scroll-down-5">
                      {projectImages.map((img, idx) => (
                        <div key={`col5-${idx}`} className="flex-shrink-0 mb-4">
                          <img
                            src={img}
                            alt=""
                            className="w-full h-[80vh] object-cover transform rotate-[3deg]"
                            loading="lazy"
                          />
                        </div>
                      ))}
                      {/* Duplicate for seamless loop */}
                      {projectImages.map((img, idx) => (
                        <div key={`col5-dup-${idx}`} className="flex-shrink-0 mb-4">
                          <img
                            src={img}
                            alt=""
                            className="w-full h-[80vh] object-cover transform rotate-[3deg]"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes scrollDown {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes scrollUp {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }

        .animate-scroll-down-1 {
          animation: scrollDown 50s linear infinite;
        }

        .animate-scroll-up-2 {
          animation: scrollUp 50s linear infinite;
        }

        .animate-scroll-down-3 {
          animation: scrollDown 45s linear infinite;
        }

        .animate-scroll-up-4 {
          animation: scrollUp 55s linear infinite;
        }

        .animate-scroll-down-5 {
          animation: scrollDown 48s linear infinite;
        }
      `}</style>
    </section>
  );
}