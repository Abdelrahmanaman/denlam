import { CollectionListing } from "@/components/collection-section/collection-listing/CollectionListing";

const page = () => {
  return (
    <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 mb-10">
      <div className=" justify-between flex-wrap gap-y-5 flex">
        <CollectionListing />
        <CollectionListing />
        <CollectionListing />
        <CollectionListing />
        <CollectionListing /> 
        <CollectionListing />
        <CollectionListing />
        <CollectionListing />
        <CollectionListing />
      </div>
    </section>
  );
};

export default page;
