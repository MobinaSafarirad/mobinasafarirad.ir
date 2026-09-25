import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function TextLink({ href, children, className }: Props) {
  const external = href.startsWith("http") || href.startsWith("mailto:");

  if (external) {
    return (
      <a
        href={href}
        className={cn(
          "group inline-flex items-center gap-1 font-medium text-fg underline-offset-4 transition-colors hover:underline",
          className,
        )}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
        {href.startsWith("http") ? (
          <ArrowUpRight
            className="size-3.5 transition-transform duration-300 rtl:-scale-x-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:group-hover:-translate-x-0.5"
            aria-hidden
          />
        ) : null}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-1 font-medium text-fg underline-offset-4 transition-colors hover:underline",
        className,
      )}
    >
      {children}
    </Link>
  );
}
