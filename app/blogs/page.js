import BlogList from "../../components/BlogList";
import { blogPosts } from "@/src/data/blogsData";

export default function BlogsPage() {
  return <BlogList posts={blogPosts} title="Blogs" />;
}