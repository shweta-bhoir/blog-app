import axios from "axios";
import { Appbar } from "../components/Appbar";
import { BACKEND_URL } from "../config";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <Appbar />
      <div className="flex justify-center w-full pt-8">
        <div className="w-full max-w-screen-lg">
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Title"
          />
          <TextEditor onchange={(e) => setContent(e.target.value)} />
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg"
            onClick={async () => {
              const response = await axios.post(
                `${BACKEND_URL}/api/V1/blog`,
                {
                  title,
                  content,
                  published: true,
                },
                {
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                  },
                }
              );
              console.log(response);
              navigate(`/blog/${response.data.id}`);
            }}
          >
            Publish post
          </button>
        </div>
      </div>
    </div>
  );
};

function TextEditor({
  onchange,
}: {
  onchange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div>
      <div className="w-full mb-4 mt-2 border rounded-lg">
        <div className=" my-2 bg-white rounded-b-lg">
          <label htmlFor="editor" className="sr-only">
            Publish post
          </label>
          <textarea
            onChange={onchange}
            id="editor"
            rows={8}
            className="block w-full px-0 text-sm text-gray-800 bg-white border-0 pl-2 focus:outline-none"
            placeholder="Write an article..."
            required
          ></textarea>
        </div>
      </div>
    </div>
  );
}
