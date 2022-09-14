import create from "zustand";
import ky from "ky";

const useBlogStore = create((set) => ({
  blogs: [],
  getNewBlogs: async () => {
    const { data } = await ky
      .get(
        `${process.env.CMS_PUBLIC_URL}/api/posts?sort=publishedAt:desc&pagination[limit]=9&populate=*`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
          },
        }
      )
      .json();
    set({ blogs: data });
  },
}));

export default useBlogStore;
