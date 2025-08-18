import { v2 as cloudinary } from "cloudinary";

const CLOUDINARY_FOLDER = "Mern";
async function uploadFile(files) {
  for (const file of files) {
    const result = await new Promise((resolve, reject) => {
      cloudinary.v2.uploader
        .upload_stream(
          {
            folder: CLOUDINARY_FOLDER,
          },
          (error, uploadResult) => {
            if (error) {
              return reject(error);
            }
            return resolve(uploadResult);
          }
        )
        .end(file.buffer);
    });
  }
}

export default uploadFile;
