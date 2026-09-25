import { cn } from "@/lib/utils";

type Props = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, children, className }: Props) {
  return (
    <section
      id={id}
      className={cn("border-t border-border py-16 sm:py-20", className)}
    >
      {children}
    </section>
  );
}

export function SectionHeading({
  title,
  intro,
  action,
}: {
  title: string;
  intro?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
          {title}
        </h2>
        {intro ? (
          <p className="mt-2 max-w-xl text-fg-muted">{intro}</p>
        ) : null}
      </div>
      {action}
    </div>
  );
}
