import { redirect } from "next/navigation";

// Author pages have been disabled (Sanity removed)
export default function AuthorPage() {
  redirect("/blog");
}