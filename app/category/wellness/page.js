import BlogList from "../../../components/BlogList";
import { blogPosts } from "@/src/data/blogsData";

export default function AllergiesPage() {
  const filtered = blogPosts.filter((post) => post.category === "Wellness");
  return <BlogList posts={filtered} title="Category: Wellness - Prana Health" />;
}
