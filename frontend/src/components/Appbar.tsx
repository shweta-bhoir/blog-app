import { Link } from "react-router-dom";
import { Avatar } from "./BlogCards";

export const Appbar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-4">
      <Link
        className=" flex flex-col justify-center cursor-pointer text-4xl font-semibold"
        to={"/blogs"}
      >
        Medium
      </Link>

      <div>
        <Link to="/publish">
          <button
            type="button"
            className="mr-4 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            New Blog
          </button>
        </Link>
        <Avatar name="Shweta" size="big" />
      </div>
    </div>
  );
};
