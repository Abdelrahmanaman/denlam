"use client";
import EmblaCarousel from "@/components/slider/EmblaCarousel";
import { useState } from "react";


const CollectionDetailDark = ({collection}) => {
  const [light, setLight] = useState(false);

  const handleLight = () => {
    setLight((light) => !light);
  };


  return (
    <div className={`${light ? "bg-zinc-900 text-white" : "bg-white"}w-full transition-all duration-300 rounded-md md:mt-10`}>
      <div className="my-10">
        <h1 className="text-center text-3xl font-bold text-[#a49c59]">{collection?.title}</h1>
      </div>
      <div className={` transition-all duration-300 h-[500px] md:w-1/2 mx-auto col-span-4 relative`}>
        <EmblaCarousel images = {collection.images}/>
        <div className="mt-3 flex justify-center not-sr-only" aria-hidden={true}>
          <label className="switch" onChange={handleLight}>
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default CollectionDetailDark;
