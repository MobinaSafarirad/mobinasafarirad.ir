import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";

const components: Components = {
  a: ({ href, children }) => (
    <a
      href={href}
      {...(href?.startsWith("http")
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  ),
};

export function Markdown({ content }: { content: string }) {
  return (
    <div className="prose-site">
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </div>
  );
}
