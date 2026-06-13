import type { PropsWithChildren } from "react";

export default function DocsLayout({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto grid max-w-[1170px] gap-x-8 gap-y-4 pt-24 pb-16 md:pt-28 md:pb-20 lg:grid-cols-1 lg:pt-32 lg:pb-24">
      <main className="prose prose-invert rounded-lg bg-white/5 px-8 py-11 sm:p-[55px] lg:px-8 xl:p-[55px]">
        {children}
      </main>
    </div>
  );
}