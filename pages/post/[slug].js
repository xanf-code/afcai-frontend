import ky from "ky";
import md from "markdown-it";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function IndividualBlog({ post }) {
  return (
    <div className="max-w-2xl md:mx-auto md:mt-6 m-5">
      <h1 className="text-black font-IBMSans font-bold text-2xl md:text-3xl">
        {post.attributes.Title}
      </h1>
      <div className="bg-gray-100 p-1 px-2 my-2 inline-block rounded-md">
        <h1 className="tracking-wide font-IBMSans text-xs font-normal">
          {dayjs(post.attributes.publishedAt).fromNow()}
        </h1>
      </div>
      <div className="py-4">
        <div
          className="prose prose-lg font-IBMSans"
          dangerouslySetInnerHTML={{
            __html: md().render(post.attributes.Content || safe),
          }}
        />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const { data } = await ky
    .get(`${process.env.CMS_PUBLIC_URL}/api/posts?populate=*`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
      },
    })
    .json();

  const paths = data.map((blog) => ({
    params: { slug: blog.attributes.Slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const { data } = await ky
    .get(
      `${process.env.CMS_PUBLIC_URL}/api/posts?populate=*&filters[slug][$eq]=${slug}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        },
      }
    )
    .json();

  const post = data[0];
  return {
    props: { post },
  };
}
