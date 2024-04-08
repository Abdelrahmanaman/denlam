"use client";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import { NextButton, PrevButton, usePrevNextButtons } from "./EmblaCarouselArrowButton";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Image from "next/image";
import Link from "next/link";


const EmblaCarousel = (props) => {
  const { options } = props;
  const { images } = props;
  const { collections } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  if (collections) {
    return (
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {collections?.map((collection, index) => (
              <Link className="embla__slide embla__class-names" key={index} href={`collection/${collection.id}`}>
                <Image className="embla__slide__img" priority src={collection.image} alt={"image"} width={1920} height={1080} />
              </Link>
            ))}
          </div>
        </div>

        <div className="embla__controls flex justify-center">
          <div className="embla__buttons h-full ">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images?.map((image, index) => (
            <div className="embla__slide embla__class-names" key={index}>
              <Image className="embla__slide__img" priority src={image} alt={"image"} width={1920} height={1080} />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls flex justify-center">
        <div className="embla__buttons h-full ">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
