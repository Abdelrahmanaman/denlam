import CollectionDetail from "@/components/collection-detail/CollectionDetail";
import CollectionDetailDark from "@/components/collection-detail/CollectionDetailDark";
import Collection from "@/model/collection";
import { connectDB } from "@/utils/db";

const page = async ({ params }) => {
  const id = params.id;
  let collection;
  try {
    connectDB();
    const resp = await Collection.findById(id);
    const collectiontt = resp.toObject(); // Convert Mongoose document to plain JavaScript object
    delete collectiontt._id;
    collection = collectiontt;
  } catch (err) {
    console.log(err.message);
  }
  return (
    <article className=" h-full md:px-20 pb-20 px-2">
      <CollectionDetailDark collection={collection} />
      <div className=" flex justify-start mx-auto md:w-1/2">
        <CollectionDetail collection={collection} />
      </div>
    </article>
  );
};

export default page;
