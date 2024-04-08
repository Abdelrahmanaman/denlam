"use server";
import Collection from "@/model/collection";
import { connectDB } from "@/utils/db";
const uploadCollection = async (formData) => {
    try {
        await connectDB();
        // Parse the imageUrls JSON string into an array
        const imageUrls = JSON.parse(formData.get("imageUrls"));
        console.log("Parsed Image URLs:", imageUrls); // Debugging line

        // Create a new collection document with the extracted data
        await Collection.create({
            title: formData.get("title"),
            description: formData.get("description"),
            images: imageUrls, // Use the parsed imageUrls array
        });
        console.log("Collection created successfully");
    } catch (error) {
        console.log(error.message);
    }
};

export default uploadCollection;
