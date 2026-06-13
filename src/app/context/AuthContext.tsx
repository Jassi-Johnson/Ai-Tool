"use client";

// AuthProvider is disabled – authentication removed.
export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}