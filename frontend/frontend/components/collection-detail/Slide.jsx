import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

import React from "react";

const Slide = () => {
  return (
    <Carousel className=" w-full h-full">
      <CarouselContent className="h-[100%] rounded-md ">
        <CarouselItem className="size-[500px]">
          <Image className="size-full" width={400} height={400} src={"/product1.jpg"} alt="img" />
        </CarouselItem>
        <CarouselItem className="size-[500px]">
          <Image className="size-full" width={400} height={400} src={"/product2.jpg"} alt="img" />
        </CarouselItem>
        <CarouselItem className="size-[500px]">
          <Image className="size-full" width={400} height={400} src={"/product3.jpg"} alt="img" />
        </CarouselItem>
        <CarouselItem className="size-[500px]">
          <Image className="size-full" width={400} height={400} src={"/product4.jpg"} alt="img" />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className=" left-3 top-1/2" />
      <CarouselNext className=" right-3 top-1/2" />
    </Carousel>
  );
};

export default Slide;
