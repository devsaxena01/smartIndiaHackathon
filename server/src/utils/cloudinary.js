import dotenv from 'dotenv';
dotenv.config({
    path:'./.env'
})
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET, 
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      console.error("No file path provided to Cloudinary upload")
      return null;
    }

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto"
    });

    console.log("File uploaded to Cloudinary:", response.url);
    fs.unlinkSync(localFilePath)
    return response;

  } catch (error) {
    console.error("Cloudinary Upload Error:", error.message);
    try {
      fs.unlinkSync(localFilePath);
      console.log("Local file removed due to upload failure");
    } catch (unlinkErr) {
      console.error("Failed to delete local file:", unlinkErr.message);
    }
    return null;
  }
};

export { uploadOnCloudinary };
