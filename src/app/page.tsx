import Link from "next/link";
import { products, type Theme } from "@/lib/content";

const order: Theme[] = ["chauffeur", "clinic", "gym"];

const labels: Record<Theme, string> = {
  chauffeur: "Professional chauffeur app",
  clinic: "Medical center & GP clinic app",
  gym: "Gym & fitness studio app",
};

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 py-20">
      <div className="glow pointer-events-none absolute inset-x-0 top-0 h-[480px]" />
      <div className="relative w-full max-w-[1100px]">
        <div className="text-center">
          <div className="mb-6 inline-flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-accent font-display text-xl font-extrabold text-accent-contrast">
              0
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-white">
              Code Zero Labs
            </span>
          </div>
          <h1 className="h-display text-[2.5rem] sm:text-[3.25rem]">
            Choose a product
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-lead text-mist">
            Three landing pages, one design system. Pick one to preview.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {order.map((theme) => {
            const p = products[theme];
            return (
              <Link
                key={theme}
                href={`/${p.slug}`}
                data-theme={theme}
                className="group rounded-2xl border border-ink-3/60 bg-ink-2/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15 font-display text-2xl font-extrabold text-accent">
                  0
                </span>
                <h2 className="font-display mt-6 text-h4 font-semibold text-white">
                  {p.product}
                </h2>
                <p className="mt-2 text-base text-mist">{labels[theme]}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-accent">
                  View page
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
