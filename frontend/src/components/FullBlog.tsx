import { Blog } from "../hooks/Index";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCards";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Appbar />
      <div className=" flex justify-center">
        <div className="grid grid-cols-12 w-full px-20 pt-12  max-w-screen-2xl">
          <div className=" col-span-8">
            <div className=" text-5xl font-extrabold">{blog.title}</div>
            <div className=" text-gray-500 pt-1">
              Posted on 2nd December 2023
            </div>
            <div className="pt-2">{blog.content}</div>
          </div>
          <div className=" col-span-4">
            <div className=" text-slate-600 text-lg">Author</div>
            <div className="flex w-full pt-2">
              <div className="flex justify-center flex-col">
                <Avatar size="big" name={blog.author.name || "Anonymous"} />
              </div>
              <div className=" pl-4">
                <div className="text-2xl font-bold">
                  {blog.author.name || "Anonymous"}
                </div>
                <div className="pt-2 text-slate-500">
                  Random catch phrase about the author's ability to grab the
                  user's attention.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
