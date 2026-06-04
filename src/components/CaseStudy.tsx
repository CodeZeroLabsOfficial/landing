"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ProductContent } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

export function CaseStudy({ content }: { content: ProductContent }) {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.12 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5, ease: EASE }}
        className="absolute inset-0"
      >
        <Image
          src={content.caseStudy.image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
      <div className="absolute inset-0 bg-ink/30" />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 md:px-8">
        <Reveal className="max-w-xl">
          <p className="eyebrow">{content.caseStudy.eyebrow}</p>
          <h2 className="h-display mt-5 text-h1">{content.caseStudy.title}</h2>
          <p className="mt-6 text-lead leading-relaxed text-mist">
            {content.caseStudy.body}
          </p>
          <a
            href="#cta"
            className="btn-ghost mt-9 inline-flex rounded-full px-7 py-3.5 text-sm"
          >
            {content.caseStudy.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
