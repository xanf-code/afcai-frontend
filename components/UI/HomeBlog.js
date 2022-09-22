import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";

dayjs.extend(relativeTime);

function HomeBlog({ blog }) {
  return (
    <div className="space-y-2 ">
      <div>
        <Image
          src={`${process.env.CMS_PUBLIC_URL}${blog.attributes.Cover.data.attributes.url}`}
          alt={`${process.env.CMS_PUBLIC_URL}${blog.attributes.Cover.data.attributes.name}`}
          className="object-cover rounded-md opacity-100 hover:opacity-60 transition duration-500 ease-in-out z-0"
          width={500}
          height={280}
          layout="responsive"
          placeholder="blur"
          blurDataURL={`${process.env.CMS_PUBLIC_URL}${blog.attributes.Cover.data.attributes.url}`}
        />
      </div>
      <div className="flex justify-between pt-1">
        <span className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2">
          <svg
            aria-hidden="true"
            className="mr-1 w-3 h-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd"
            ></path>
          </svg>
          <h1 className="tracking-wide font-IBMSans text-xs ml-1.5">
            {dayjs(blog.attributes.publishedAt).fromNow()}
          </h1>
        </span>
        <div className="bg-gray-100 p-1 px-2 inline-block rounded-md">
          <h1 className="tracking-wide font-IBMSans text-xs">
            {blog.attributes.tag.data.attributes.Title}
          </h1>
        </div>
      </div>
      <h1 className=" text-gray-700 tracking-wider font-IBMSans font-medium hover:underline underline-offset-4 pt-1 ">
        {blog.attributes.Title}
      </h1>
    </div>
  );
}

export default HomeBlog;
