import Link from "next/link";
import Image from "next/image";


export const Hero = async ({ homePageData }) => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:h-[85vh] lg:grid-cols-2">
        <div className="relative z-10 lg:py-16">
          <div className="relative h-64 sm:h-80 lg:h-full">
            <Image priority alt="Design Image" src={"/design.jpg"} className="absolute inset-0 md:h-full md:w-full object-cover size-60 " fill sizes="(max-width: 768px) 100vw, 1920px" />
          </div>
        </div>

        <div className="relative flex items-center bg-gray-100 border-2 border-primary">
          <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

          <div className="p-8 sm:p-16 lg:p-24">
            <h1 className="text-2xl font-bold sm:text-3xl">{homePageData[0].title ? homePageData[0].title : "Loading..."}</h1>
            {homePageData[0].title ? <p className="mt-4 text-gray-600">{homePageData[0].subtitle}</p> : <div class="border-gray-300 size-7 mt-5  animate-spin rounded-full border-4 border-t-blue-600" />}
            <Link href="/services" className="mt-8 inline-block rounded border border-primary bg-color px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-indigo-500">
              En savoir plus
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
