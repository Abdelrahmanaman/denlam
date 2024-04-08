"use client";
import uploadCollection from "@/action/uploadCollection";
import React from "react";
import UploadImage from "./UploadImage";
import { useState } from "react";
const AddCollection = () => {
  const [imageUrls, setImageUrls] = useState([]);

  const handleUploadSuccess = (url) => {
    setImageUrls((prevUrls) => [...prevUrls, url]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.target);
      formData.append("imageUrls", JSON.stringify(imageUrls));
      await uploadCollection(formData);
      setImageUrls([]); // Clear the image URLs
      event.target.reset(); // Reset the form fields
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col w-full md:pl-5 px-3">
        <h1 className=" text-4xl my-3">Add collection</h1>
        <label htmlFor="collectionName">Collection name</label>
        <input className="border-2 md:w-60 mb-3 rounded-md px-2 py-3 outline-none focus:outline-primary" name="title" type="text" id="collectionName" placeholder="Title" />
        <label htmlFor="collectionDescription">Collection name</label>
        <textarea name="description" className="border-2 outline-none mb-3 focus:outline-primary resize-none h-48 rounded-md p-2 md:max-w-[600px] md:h-full md:max-h-[300px]" id="collectionDescription" placeholder="Description" />
        <div className="flex justify-center  md:max-w-[600px]">
          <UploadImage onUploadSuccess={handleUploadSuccess} />
        </div>
        <div className="flex justify-end  md:max-w-[600px]">
          <button className="w-28 py-3 font-semibold bg-primary rounded-md" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default AddCollection;
