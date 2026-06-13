import { redirect } from "next/navigation";

// Blog post page disabled – Sanity CMS has been removed
export default function BlogPostPage() {
  redirect("/blog");
}