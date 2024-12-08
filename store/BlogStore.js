import create from "zustand";

const useBlogStore = create((set) => ({
  blogs: [],
  getNewBlogs: async () => {
    const response = await fetch(
      `${process.env.CMS_PUBLIC_URL}/api/posts?sort=publishedAt:desc&pagination[limit]=9&populate=*`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        },
      }
    );
    const { data } = await response.json();
    set({ blogs: data });
  },
}));

export default useBlogStore;
