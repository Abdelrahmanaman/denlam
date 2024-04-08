import Image from "next/image";
import Collection from "@/model/collection";
import { connectDB } from "@/utils/db";
import Link from "next/link";

export const CollectionListing = async () => {
  connectDB();
  const data = await Collection.find();

  return (
    <>
      {data.map((product, index) => (
        <Link href={`/collection/${product._id}`} key={index}>
          <article className="relative group ">
            <div className="w-[385px] h-[400px] group-hover:opacity-50 transition-all duration-300">
              <Image className="size-full  object-cover object-center" src={product.images[0]} width={500} height={500} alt="Product image" />
            </div>
            <p className="absolute text-xl top-1/2 right-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300  bg-transparent">{product.title}</p>
          </article>
        </Link>
      ))}
    </>
  );
};
