import HomeBlog from "../components/UI/HomeBlog";
import Link from "next/link";
import ImageCarousel from "../components/UI/ImageCarousel";
import ky from "ky";

export default function Home({ data }) {
  return (
    <div className="max-w-7xl md:mx-auto space-y-4  mx-6 my-2 md:my-0 mt-6 md:mt-0">
      <div className=" md:grid md:grid-cols-2 md:gap-2 space-y-3 md:space-y-0">
        <ImageCarousel />
        <div className="md:grid md:grid-rows-2 md:gap-2 space-y-3 md:space-y-0">
          <div className="bg-blue-500">space-1</div>
          <div className="bg-gray-100 rounded-md">space-2</div>
        </div>
      </div>
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
    </div>
  );
}

export async function getServerSideProps() {
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
  return {
    props: {
      data,
    },
  };
}
