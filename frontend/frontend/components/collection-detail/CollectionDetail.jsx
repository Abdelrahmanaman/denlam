const CollectionDetail =  ({collection}) => {

  return (
    <div className=" w-full">
      <h3 className="underline text-xl text-center font-semibold text-[#a49c59] mb-3">Description</h3>
      <p className="text-justify">{collection.description}</p>
    </div>
  );
};

export default CollectionDetail;
