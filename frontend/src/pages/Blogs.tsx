import { Appbar } from "../components/Appbar";
import { BlogCards } from "../components/BlogCards";
import { useBlogs } from "../hooks/Index";
import { BlogsSkeleton } from "../components/BlogsSkeleton";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div>
        <Appbar />
        <div className="flex justify-center flex-col pt-10">
          <BlogsSkeleton />
          <BlogsSkeleton />
          <BlogsSkeleton />
          <BlogsSkeleton />
          <BlogsSkeleton />
          <BlogsSkeleton />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Appbar />
      <div className="flex justify-center p-4">
        <div>
          {blogs.map((blog) => (
            <BlogCards
              id={blog.id}
              key={blog.id}
              title={blog.title}
              content={blog.content}
              publishedDate="2nd Nov 2024"
              authorName={blog.author.name ?? "Shweta Bhoir"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
