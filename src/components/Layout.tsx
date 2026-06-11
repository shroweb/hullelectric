import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { StickyMobileBar } from "./StickyMobileBar";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pb-16 lg:pb-0">{children}</main>
      <Footer />
      <StickyMobileBar />
    </div>
  );
}