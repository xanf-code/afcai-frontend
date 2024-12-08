import create from "zustand";

const useImageStore = create((set, get) => ({
  imageSrc: "",
  getLogo: async (formData) => {
    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      set({ imageSrc: data.secure_url });
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useImageStore;
