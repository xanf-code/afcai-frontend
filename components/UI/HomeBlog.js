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
          width={100}
          height={60}
          layout="responsive"
          className=" object-cover rounded-md opacity-100 hover:opacity-60 transition duration-500 ease-in-out"
          priority
        />
      </div>
      <div className="flex justify-between pt-1">
        <div className="bg-gray-100 p-1 px-1 inline-block rounded-md">
          <h1 className="tracking-wide font-IBMSans text-xs">
            {dayjs(blog.attributes.publishedAt).fromNow()}
          </h1>
        </div>
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
