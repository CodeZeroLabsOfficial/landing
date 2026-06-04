import type { ProductContent } from "@/lib/content";

const others: { label: string; href: string }[] = [
  { label: "Chauffeur", href: "/chauffeur" },
  { label: "Clinic", href: "/clinic" },
  { label: "Gym", href: "/gym" },
];

export function Footer({ content }: { content: ProductContent }) {
  return (
    <footer className="border-t border-ink-3/60 bg-ink py-14">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-md bg-accent font-display text-lg font-extrabold text-accent-contrast">
                0
              </span>
              <span className="font-display text-base font-semibold tracking-tight text-white">
                {content.product}
              </span>
            </div>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Built by Code Zero Labs — premium mobile and web platforms for
              modern service businesses.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <FooterCol title="Product" links={content.nav} />
            <FooterCol title="Our apps" links={others} />
            <FooterCol
              title="Company"
              links={[
                { label: "About", href: "#" },
                { label: "Contact", href: "#" },
                { label: "Privacy", href: "#" },
              ]}
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-ink-3/60 pt-7 text-small text-muted md:flex-row">
          <p>© {new Date().getFullYear()} Code Zero Labs. All rights reserved.</p>
          <p>Designed &amp; built by Code Zero Labs.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="font-display text-small font-semibold uppercase tracking-wide text-white">
        {title}
      </p>
      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-base text-muted transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
