import { Circle } from "./BlogCards";

export const BlogsSkeleton = () => {
  return (
    <div className="flex justify-center p-4" role="status">
      <div className="p-4 border-b-2 border-slate-200 pb-4 w-screen max-w-screen-lg cursor-pointer animate-pulse">
        <div className="flex">
          <div className="h-4 w-4 bg-gray-200 rounded-full  mb-4"></div>
          <div className=" h-2 bg-gray-200 rounded-full mb-2.5"></div>
          <div className=" h-2 bg-gray-200 rounded-full mb-2.5"></div>
          <div className=" flex justify-center flex-col  pl-2">
            <Circle />
          </div>
          <div className=" pl-2  bg-gray-200 flex justify-center flex-col">
            <div className=" h-2 bg-gray-200 rounded-full mb-2.5">
              <div className=" h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
          </div>

          <div className=" text-xl  bg-gray-200 pt-2">
            <div className=" h-2 bg-gray-200 rounded-full mb-2.5"></div>
          </div>
          <div className="  bg-gray-200">
            <div className=" h-2 bg-gray-200 rounded-full mb-2.5"></div>
          </div>
          <div className=" bg-gray-200 w-full pt-4">
            <div className=" h-2 bg-gray-200 rounded-full mb-2.5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
