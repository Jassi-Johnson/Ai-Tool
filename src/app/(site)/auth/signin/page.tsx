import { redirect } from "next/navigation";

// Sign-in page disabled – authentication removed.
export default function SigninPage() {
  redirect("/");
}