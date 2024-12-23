import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: string;
}

export const BlogCards = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="p-4 border-b-2 border-slate-200 pb-4 w-screen max-w-screen-lg cursor-pointer">
        <div className="flex">
          <div>
            <Avatar name={authorName} size="small" />
          </div>
          <div className=" font-extralight text-sm pl-2 flex justify-center flex-col">
            {authorName}
          </div>
          <div className=" flex justify-center flex-col pt-1 pl-1">
            <Circle />
          </div>
          <div className=" pl-2 font-light text-slate-400 text-sm flex justify-center flex-col">
            {publishedDate}
          </div>
        </div>
        <div className=" text-xl font-semibold pt-2">{title}</div>
        <div className=" text-md font-thin">{content.slice(0, 200)}...</div>
        <div className="text-slate-400 w-full text-sm font-thin">{`${Math.ceil(
          content.length / 100
        )} minutes read`}</div>
      </div>
    </Link>
  );
};

export function Circle() {
  return (
    <div className="h-0.5 w-0.5 rounded-full bg-slate-400 align-bottom"></div>
  );
}

export function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size: "small" | "big";
}) {
  const InitialName = name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gray-400 ${
        size == "small" ? "w-6 h-6" : "w-10 h-10"
      }`}
    >
      <span
        className={`font-extralight text-gray-300  dark:text-gray-200 ${
          size == "small" ? "text-xs" : "text-md"
        }`}
      >
        {InitialName}
      </span>
    </div>
  );
}
