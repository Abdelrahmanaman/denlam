"use client";
import { CldUploadWidget } from "next-cloudinary";
import { useState } from "react";

const UploadImage = ({ onUploadSuccess }) => {

  const handleUploadSuccess = (result) => {
    const urls = result.info.secure_url;
    onUploadSuccess(urls);
  };
  //   console.log(result.info.secure_url)

  return (
    <CldUploadWidget uploadPreset="ml_default" onSuccess={handleUploadSuccess}>
      {({ open }) => (
        <button
          className="bg-primary w-36 py-3 text-black font-medium rounded-md whitespace-nowrap"
          onClick={() => {
            event.preventDefault(); // Set uploading to true when starting the upload
            open();
          }}
        >
          Upload an Image
        </button>
      )}
    </CldUploadWidget>
  );
};

export default UploadImage;
