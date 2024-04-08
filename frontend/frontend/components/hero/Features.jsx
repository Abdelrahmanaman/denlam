import Image from "next/image";
import Link from "next/link";
import EmblaCarousel from "../slider/EmblaCarousel";
import { connectDB } from "@/utils/db";
import Collection from "@/model/collection";

const Features = () => {
  return (
    <div className="md:flex  gap-5 items-center font-roboto">
      <div
        className="flex flex-col md:w-96  gap-10
      "
      >
        <div className="border-l-2 border-b-2 border-b-primary border-l-primary md:px-3 px-2 ">
          <h3 className="prose-xl md:prose-2xl font-semibold text-primary">Design d'objets haut de gamme</h3>
          <span className="prose text-gray-600">Découvrez notre travail de design et de création d'objets haut de gamme, mettant en valeur l'élégance et la qualité.</span>
        </div>
        <div className="border-l-2 border-b-2 border-b-primary border-l-primary  md:px-3 p-2 ">
          <h3 className="prose-xl md:prose-2xl font-semibold  text-primary">Création sur mesure</h3>
          <span className="prose text-gray-600">Nous proposons des créations sur mesure, adaptées à vos besoins et reflétant votre style unique.</span>
        </div>
        <div className="border-l-2 border-b-2 border-b-primary border-l-primary  md:px-3 p-2 ">
          <h3 className="prose-xl md:prose-2xl font-semibold  text-primary">Artisanat d'exception</h3>
          <span className="prose text-gray-600">Chaque pièce est réalisée avec soin et expertise, en utilisant des matériaux de haute qualité pour un résultat d'exception.</span>
        </div>
      </div>
    </div>
  );
};

export default Features;

export const Explore = async ({ homePageData }) => {
  let collections;
  //* Getting all the displayed collection on the landing page
  try {
    connectDB();
    const data = await Collection.find().limit(5);
    collections = data.map((entry) => ({
      id: entry._id.toString(),
      image: entry.images[0],
    }));
  } catch (err) {
    console.log(err.message);
  }
  return (
    <article className="my-4 font-roboto">
      <div className="py-10">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
            <div className="mx-auto max-w-md text-center lg:text-left">
              <div>
                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">{homePageData[1]?.title || <div class="border-gray-300 size-7 mt-5  animate-spin rounded-full border-4 border-t-blue-600" />}</h2>

                <p className="mt-4 text-gray-500">{homePageData[1]?.description || <div class="border-gray-300 size-7 mt-5  animate-spin rounded-full border-4 border-t-blue-600" />}</p>
              </div>
              <Link href={"/collection"} className="mt-8 inline-block rounded border border-color bg-color hover:bg-white hover:text-black px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring">
                Voir plus
              </Link>
            </div>
          </div>
          <div className="lg:col-span-2 lg:py-8 relative">
            <EmblaCarousel collections={collections} />
          </div>
        </div>
      </div>
    </article>
  );
};
