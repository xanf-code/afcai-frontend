import create from "zustand";
import ky from "ky";

const useImageStore = create((set, get) => ({
  imageSrc: "",
  getLogo: (formData) => {
    ky.post(
      `https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/image/upload`,
      {
        body: formData,
      }
    )
      .json()
      .then((data) => {
        set({ imageSrc: data.secure_url });
      });
  },
}));

export default useImageStore;
