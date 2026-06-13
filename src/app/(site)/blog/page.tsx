import { redirect } from "next/navigation";

// Individual blog posts have been disabled (Sanity removed)
export default function BlogPostPage() {
  redirect("/blog");
}