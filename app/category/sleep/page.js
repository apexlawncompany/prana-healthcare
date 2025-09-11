import BlogList from "../../../components/BlogList";
import { blogPosts } from "@/src/data/blogsData";

export default function AllergiesPage() {
  const filtered = blogPosts.filter((post) => post.category === "Sleep");
  return <BlogList posts={filtered} title="Category: Sleep - Prana Health" />;
}
