export const BlogSkeleton = () => {
  return (
    <div className="flex justify-center p-4" role="status">
      <div className="p-4 border-b-2 border-slate-200 pb-4 w-screen max-w-screen-lg cursor-pointer animate-pulse">
        <div className="grid grid-cols-12 w-full px-20 pt-12  max-w-screen-2xl">
          <div className=" col-span-8">
            <div className=" text-5xl font-extrabold">
              <div className=" h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
            <div className=" text-gray-500 pt-1">
              <div className=" h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
            <div className="pt-2">
              <div className=" h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
          </div>
          <div className=" col-span-4">
            <div className=" text-slate-600 text-lg">
              <div className=" h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
            <div className="flex w-full pt-2">
              <div className="flex justify-center flex-col">
                <div className=" h-2 bg-gray-200 rounded-full mb-2.5"></div>
              </div>
              <div className=" pl-4">
                <div className="text-2xl font-bold">
                  <div className=" h-2 bg-gray-200 rounded-full mb-2.5"></div>
                </div>
                <div className="pt-2 text-slate-500">
                  <div className=" h-2 bg-gray-200 rounded-full mb-2.5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
