import Link from "next/link";
import HomeBlog from "./HomeBlog";

function HomeBlogSection({ data }) {
  return (
    <>
      <h1 className="font-semibold font-IBMSans text-3xl md:text-2xl text-black pt-3 ">
        Latest Announcements
      </h1>
      <hr className="w-full border-1 border-gray-200 pb-2" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 ">
        {data &&
          data.map((blog) => (
            <div key={blog.id}>
              <Link href={`/post/${blog.attributes.Slug}`}>
                <a>
                  <HomeBlog key={blog.id} blog={blog} />
                </a>
              </Link>
              <hr className="my-4 h-px bg-gray-200 border-0 md:hidden" />
            </div>
          ))}
      </div>
    </>
  );
}

export default HomeBlogSection;
