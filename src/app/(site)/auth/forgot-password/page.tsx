// Forgot password page disabled – authentication removed
import { redirect } from "next/navigation";

export default function ForgotPasswordPage() {
  redirect("/");
}