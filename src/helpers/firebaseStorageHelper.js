import { storage } from "@/api/config/firebase.config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const uploadImageToFirebaseStorage = async ({
  storageFolderName,
  uploadImage,
}) => {
  const storageRef = ref(
    storage,
    `${storageFolderName}/${uploadImage.name + +new Date()}`
  );
  const upload = await uploadBytes(storageRef, uploadImage);
  const downloadUrl = await getDownloadURL(upload.ref);
  return downloadUrl;
};
