"use client";
import AboutMe from "@/components/about-me/AboutMe";
import Passion from "@/components/about-me/Passion";
import React, { useState } from "react";

const page = () => {
  const [showNext, setShowNext] = useState(false);

  const handelNext = () => {
    setShowNext((prev) => !prev);
    console.log(showNext)
  };
  return (
    <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 mb-20">
      <div className="  md:flex justify-center items-center">{showNext ? <Passion /> : <AboutMe />}</div>
      <div className="flex justify-end">
        <button onClick={handelNext} className="mt-2  rounded border border-primary bg-color px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring">
          {!showNext ? "Suivant" : "Précédent"}
        </button>
      </div>
    </section>
  );
};

export default page;
