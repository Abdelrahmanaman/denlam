"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import HeroArticle from "../HeroArticle";
const Sliders = () => {
  return (
    <div className="h-screen">
      <Carousel className=" relative h-full">
        <CarouselContent >
          <CarouselItem>
            <div className="bg-collection h-[92vh] bg-cover bg-center"></div>
            <HeroArticle title={"Découvrez l'Art du Bois - Créations Uniques Façonnées avec Passion "} button={"Découvrez maintenant"} />
          </CarouselItem>
          <CarouselItem className="relative">
            <div className="bg-design h-[92vh] bg-cover bg-center "></div>
            <HeroArticle title={"Découvrez l'Art du Bois - Créations Uniques Façonnées avec Passion "} button={"Découvrez maintenant"} />
          </CarouselItem>
          <CarouselItem className="relative">
            <div className="bg-about h-[92vh] bg-cover bg-center "></div>
            <HeroArticle title={"Rencontrez l'artisan qui insuffle la vie au bois. Découvrez mon parcours"} button={"À propos de moi"} />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 size-7 md:left-10 md:size-16" />
        <CarouselNext className="absolute right-2 size-7 md:right-10 md:size-16" />
      </Carousel>
    </div>
  );
};

export default Sliders;
