import Link from "next/link";
import "./globals.css";
import { rubik } from "@/lib/fonts";

export default function RootNotFound() {
  return (
    <html lang="en" className={rubik.variable}>
      <body className="min-h-dvh bg-bg font-sans text-fg">
        <main className="mx-auto max-w-lg px-6 py-24">
          <h1 className="text-2xl font-semibold tracking-tight">
            This page is not here.
          </h1>
          <p className="mt-3 text-fg-muted">
            The URL may be wrong, or the note has not been written yet.
          </p>
          <p className="mt-8 flex gap-4 text-sm font-medium">
            <Link href="/en" className="underline-offset-4 hover:underline">
              English
            </Link>
            <Link href="/fa" className="underline-offset-4 hover:underline">
              فارسی
            </Link>
          </p>
        </main>
      </body>
    </html>
  );
}
