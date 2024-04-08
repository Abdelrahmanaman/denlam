import Image from "next/image";
import React from "react";
import Link from "next/link";
const AboutMe = () => {
  return (
    <div className="grid grid-cols-1 lg:h-[85vh] lg:grid-cols-2 overflow-hidden">
      <div className="relative z-10 lg:py-16">
        <div className="relative h-64 sm:h-80 lg:h-full animate-slide-in-left">
          <Image priority alt="Design Image" src={"/profile.jpg"} className="absolute inset-0 md:h-full md:w-full object-cover size-60 " fill sizes="(max-width: 768px) 100vw, 1920px" />
        </div>
      </div>

      <div className="relative flex items-center bg-gray-100 border-2 border-primary animate-slide-in-right">
        <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

        <div className="p-8 sm:p-16 lg:p-24">
          <h1 className="text-center text-xl text-color underline md:mb-5">Qui suis-je?</h1>
          <p className="overflow-y-auto h-96 border-primary border-2 p-2 scrollbar-thin text-gray-900">
            Step into my world, where the scent of sawdust mingles with the echo of hammer strikes, and every curve and contour tells a tale of passion and dedication. I am Ethan Winters, a humble craftsman with a heart woven from the fibers of creativity and a soul forged in the fires of inspiration. In the quiet sanctuary of my workshop, time slows to a gentle rhythm, allowing me to lose myself in the dance between form and function, tradition and innovation. With each piece I create, I strive to capture the essence of beauty and grace, to breathe life into the raw materials that grace my hands. Wood is my canvas, and with each stroke of the chisel, I carve stories into its grain, weaving intricate patterns that speak of nature's majesty and the passage of time. But my craft knows no bounds; from the delicate intricacies of metalwork to the timeless allure of ceramics, I embrace every
            medium with a fervor that knows no bounds. Join me on this journey of creation, where each piece is not just an expression of artistry, but a reflection of the dreams and aspirations that fuel my soul. Together, let us explore the boundless possibilities of craftsmanship and discover the beauty that lies within.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
