"use client";

import { useServerInsertedHTML } from "next/navigation";
import { useRef } from "react";

const code = `(function(){try{var t=localStorage.getItem("theme");var d=document.documentElement;if(t==="dark"||(t!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches)){d.classList.add("dark")}else{d.classList.remove("dark")}}catch(e){}})();`;

/**
 * Injects the anti-flash theme script directly into the SSR stream via
 * useServerInsertedHTML instead of rendering a literal <script> element in
 * the component tree. React 19 warns ("Encountered a script tag while
 * rendering React component...") when a raw <script> is reconciled as a
 * normal element, even though it works fine on first load — this avoids
 * that warning entirely while still running before paint.
 */
export function ThemeScript() {
  const inserted = useRef(false);

  useServerInsertedHTML(() => {
    if (inserted.current) {
      return null;
    }
    inserted.current = true;
    return <script dangerouslySetInnerHTML={{ __html: code }} suppressHydrationWarning />;
  });

  return null;
}
