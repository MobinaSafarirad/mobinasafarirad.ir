import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external,
  className,
}: Props) {
  const styles = {
    primary: "bg-accent text-accent-fg hover:opacity-90 hover:shadow-md",
    secondary:
      "border border-border bg-bg-elevated text-fg hover:border-accent/25 hover:shadow-md",
    ghost: "text-fg hover:text-accent",
  } as const;

  return (
    <a
      href={href}
      className={cn(
        "group inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition-all duration-300 active:scale-[0.98]",
        styles[variant],
        className,
      )}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
      {external ? (
        <ArrowUpRight
          className="size-4 transition-transform duration-300 rtl:-scale-x-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:group-hover:-translate-x-0.5"
          aria-hidden
        />
      ) : null}
    </a>
  );
}
