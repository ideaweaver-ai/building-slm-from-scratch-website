"use client";

import { useState } from "react";

/* ───────── Shared Components ───────── */

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-semibold text-violet-300 tracking-wide">
      {children}
    </span>
  );
}

function SectionHeading({
  badge,
  title,
  subtitle,
  light,
}: {
  badge?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      {badge && <Badge>{badge}</Badge>}
      <h2 className={`mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl ${light ? "text-white" : "text-white"}`}>
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base text-white/50">{subtitle}</p>}
    </div>
  );
}

/* ───────── Nav ───────── */

function Nav() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-white/5 bg-[#080b14]/90 px-6 py-4 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <span className="text-lg font-bold text-white">
          IdeaWeaver<span className="text-violet-400"> AI Labs</span>
        </span>
        <div className="hidden items-center gap-6 text-sm md:flex">
          <a href="#pricing" className="text-white/50 transition hover:text-white">
            Pricing
          </a>
          <a
            href="#pricing"
            className="rounded-lg bg-violet-600 px-4 py-2 font-semibold text-white transition hover:bg-violet-500"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ───────── Hero ───────── */

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080b14] px-6 pt-40 pb-28 text-white sm:px-12">
      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow blobs */}
      <div className="pointer-events-none absolute top-0 left-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-blue-600/15 blur-[100px]" />

      <div className="relative mx-auto max-w-4xl text-center">
        <Badge>2-Day Workshop &mdash; April 24&ndash;26, 2026</Badge>

        <h1 className="mt-8 text-5xl font-black leading-[1.1] tracking-tight sm:text-7xl">
          Stop Using AI.{" "}
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
            Start Building It.
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-white/50 sm:text-xl leading-relaxed">
          In just 2&nbsp;days, build your own Small Language Model based on the{" "}
          <span className="text-violet-300 font-semibold">Gemma&nbsp;4 architecture</span>
          {" "}— from scratch, hands-on.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#pricing"
            className="rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-10 py-4 text-lg font-bold text-white shadow-[0_0_40px_rgba(124,58,237,0.4)] transition hover:scale-105 hover:shadow-[0_0_60px_rgba(124,58,237,0.5)]"
          >
            Enroll Now for $29
          </a>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
          {["Beginner Friendly", "100% Hands-On"].map((t) => (
            <span
              key={t}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-white/60 backdrop-blur"
            >
              <svg className="h-3.5 w-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {t}
            </span>
          ))}
        </div>

        {/* Date countdown strip */}
        <div className="mt-16 grid grid-cols-2 divide-x divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur sm:grid-cols-2 max-w-lg mx-auto">
          <div className="px-8 py-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40">Morning Batch</p>
            <p className="mt-1 text-base font-bold text-white">Sat–Sun, Apr 25–26</p>
            <p className="text-sm text-violet-300">8:00–10:00 AM PST</p>
          </div>
          <div className="px-8 py-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40">Evening Batch</p>
            <p className="mt-1 text-base font-bold text-white">Fri–Sat, Apr 24–25</p>
            <p className="text-sm text-violet-300">7:00–9:00 PM PST</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Why This Workshop ───────── */

function WhyThisCourse() {
  return (
    <section className="bg-[#0d1120] px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          badge="The Problem"
          title="Everyone Uses AI. Almost No One Understands It."
          subtitle="Most people interact with ChatGPT daily but have zero idea how it actually works under the hood."
          light
        />

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-xl">⚠️</div>
            <h3 className="text-lg font-bold text-white">Without This Workshop</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/50">
              {[
                "You copy-paste prompts without understanding",
                "AI feels like magic — you can't debug or improve it",
                "You rely on expensive APIs with no alternative",
              ].map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="mt-0.5 shrink-0 text-red-400">✗</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-xl">✨</div>
            <h3 className="text-lg font-bold text-white">With This Workshop</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/50">
              {[
                "You understand how LLMs actually work",
                "You can build, train, and evaluate your own model",
                "You stand out as an engineer who truly gets AI",
              ].map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="mt-0.5 shrink-0 text-emerald-400">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── What You Will Learn ───────── */

const learnings = [
  { icon: "🔤", title: "Tokenization", desc: "How raw text becomes numerical tokens that models understand." },
  { icon: "📐", title: "Positional Encoding", desc: "Why order matters and how transformers keep track of it." },
  { icon: "🎯", title: "Attention Mechanism", desc: "The breakthrough idea behind every modern LLM, explained clearly." },
  { icon: "⚡", title: "KV Cache & Optimization", desc: "How inference is made fast and efficient in production." },
  { icon: "🧠", title: "Build Your Own LLM", desc: "Combine everything to train a working language model end to end." },
];

function WhatYouLearn() {
  return (
    <section className="bg-[#080b14] px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          badge="Workshop Topics"
          title="What You Will Build & Learn"
          subtitle="A practical, no-fluff curriculum designed for builders."
          light
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {learnings.map((l, i) => (
            <div
              key={l.title}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/3 p-6 transition hover:border-violet-500/40 hover:bg-violet-500/5"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
                style={{ background: "radial-gradient(circle at 50% 0%, rgba(124,58,237,0.08) 0%, transparent 70%)" }}
              />
              <div className="mb-4 text-3xl">{l.icon}</div>
              <div className="mb-1 text-xs font-semibold uppercase tracking-widest text-violet-400">
                Step {i + 1}
              </div>
              <h3 className="text-base font-bold text-white">{l.title}</h3>
              <p className="mt-2 text-sm text-white/40 leading-relaxed">{l.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Hands-On Focus ───────── */

function HandsOn() {
  const points = [
    { title: "No Boring Theory", desc: "Concepts are taught through code, not endless equations.", icon: "💡" },
    { title: "Step-by-Step", desc: "Each exercise builds on the last so you never feel overwhelmed.", icon: "🪜" },
  ];

  return (
    <section className="bg-[#0d1120] px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-5xl">
        <SectionHeading badge="Learn by Doing" title="100% Hands-On. Zero Fluff." light />
        <div className="grid gap-6 sm:grid-cols-2">
          {points.map((p) => (
            <div key={p.title} className="flex gap-5 rounded-2xl border border-white/8 bg-white/3 p-8">
              <div className="shrink-0 text-4xl">{p.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-white/40 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Who Is This For ───────── */

function WhoIsThisFor() {
  const personas = [
    { icon: "🛠", title: "DevOps Engineers", desc: "Moving to AI and want a solid foundation in how LLMs work." },
    { icon: "💻", title: "Software Engineers", desc: "Curious about LLMs and want to go beyond just calling APIs." },
    { icon: "🌱", title: "Beginners", desc: "New to AI but want practical, hands-on skills — not just theory." },
    { icon: "📢", title: "Content Creators & Educators", desc: "Want a deeper understanding to create better AI content." },
  ];

  return (
    <section className="bg-[#080b14] px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-5xl">
        <SectionHeading badge="Is This You?" title="Who Is This Workshop For?" light />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {personas.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-white/8 bg-white/3 p-6 text-center transition hover:border-violet-500/30 hover:bg-violet-500/5"
            >
              <div className="mb-4 text-4xl">{p.icon}</div>
              <h3 className="font-bold text-white text-sm">{p.title}</h3>
              <p className="mt-2 text-xs text-white/40 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Instructor ───────── */

const modelsBuilt = [
  { name: "Gemma 3", url: "https://huggingface.co/lakhera2023/gemma3-from-scratch/tree/main" },
  { name: "DeepSeek", url: "https://huggingface.co/lakhera2023/deepseek-children-stories" },
  { name: "Qwen", url: "https://huggingface.co/lakhera2023/Qwen-model" },
  { name: "DevOps SLM", url: "https://huggingface.co/lakhera2023/devops-slm" },
  { name: "LLaMA 4", url: "https://huggingface.co/lakhera2023/llama4-debugmodel-10k" },
];

function Instructor() {
  return (
    <section className="bg-[#0d1120] px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-4xl">
        <SectionHeading badge="Your Instructor" title="Meet Prashant Lakhera" light />

        <div className="flex flex-col items-center gap-10 rounded-2xl border border-white/8 bg-white/3 p-10 md:flex-row">
          <div className="flex h-36 w-36 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-blue-600 text-5xl font-black text-white shadow-[0_0_60px_rgba(124,58,237,0.4)]">
            PL
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white">Prashant Lakhera</h3>
            <p className="mt-1 text-sm font-semibold text-violet-400">Founder, IdeaWeaver AI Labs</p>
            <p className="mt-4 text-sm text-white/50 leading-relaxed">
              DevOps expert and author of{" "}
              <a
                href="https://plakhera.gumroad.com/l/BuildingASmallLanguageModelfromScratch"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-violet-300 underline decoration-violet-500/40 hover:decoration-violet-300"
              >
                &ldquo;Building a Small Language Model from Scratch&rdquo;
              </a>
              . Prashant has built several language models himself — all publicly available on Hugging Face. He specializes in breaking down complex topics into digestible, actionable lessons.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Published Author", "YouTube Educator", "Community Builder", "DevOps → AI"].map((tag) => (
                <span key={tag} className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-white/30">
            Models Built by Prashant (on Hugging Face)
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {modelsBuilt.map((m) => (
              <a
                key={m.name}
                href={m.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/8 bg-white/3 px-4 py-2 text-sm font-semibold text-white/60 transition hover:border-violet-500/30 hover:text-violet-300"
              >
                {m.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Pricing ───────── */

const batches = [
  {
    label: "Workshop — Morning Batch",
    days: "Saturday – Sunday",
    time: "8:00 – 10:00 AM PST",
    dates: "Apr 25 – Apr 26",
    link: "https://www.ideaweaver.ai/purchase?product_id=6706367",
  },
  {
    label: "Workshop — Evening Batch",
    days: "Friday – Saturday",
    time: "7:00 – 9:00 PM PST",
    dates: "Apr 24 – Apr 25",
    link: "https://www.ideaweaver.ai/purchase?product_id=6706370",
  },
];

function Pricing() {
  return (
    <section
      id="pricing"
      className="relative bg-[#080b14] px-6 py-24 text-white sm:px-12"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <SectionHeading
          badge="2-Day Workshop"
          title="Choose Your Batch"
          subtitle="Both batches are $29 with the same content."
          light
        />

        <div className="mb-10 text-center">
          <div className="inline-flex items-baseline gap-3">
            <span className="text-6xl font-black">$29</span>
            <span className="text-xl text-white/25 line-through">$99</span>
          </div>
          <p className="mt-2 text-sm text-white/30">One-time payment. Lifetime access to recordings.</p>
        </div>

        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2 text-sm text-amber-300">
            🕐 All timings in PST — please adjust for your timezone
          </span>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {batches.map((b) => (
            <div
              key={b.label}
              className="group rounded-2xl border border-violet-500/20 bg-violet-500/5 p-8 transition hover:border-violet-500/50 hover:bg-violet-500/10"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-violet-400">{b.label}</p>
              <p className="mt-3 text-2xl font-black text-white">{b.dates}</p>
              <div className="mt-4 space-y-2 text-sm text-white/50">
                <p>📅 {b.days}</p>
                <p>🕐 {b.time}</p>
              </div>
              <a
                href={b.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block w-full rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 py-3.5 text-center font-bold text-white shadow-[0_0_30px_rgba(124,58,237,0.3)] transition hover:scale-105 hover:shadow-[0_0_50px_rgba(124,58,237,0.4)]"
              >
                Enroll — $29
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/30">
          {["2-day intensive workshop", "Recorded video sessions", "Hands-on exercises", "All future updates included"].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </span>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-white/20">
          A weekend well spent. Build something real for $29.
        </p>
      </div>
    </section>
  );
}

/* ───────── Bonuses ───────── */

function Bonuses() {
  const bonuses = [
    { icon: "🎥", title: "Recorded Sessions", desc: "Watch and rewatch at your own pace, forever." },
    { icon: "🔄", title: "Future Updates", desc: "As AI evolves, so does this workshop — all updates free." },
  ];

  return (
    <section className="bg-[#0d1120] px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-4xl">
        <SectionHeading badge="Bonuses" title="You Also Get" subtitle="Extra value included with your enrollment." light />
        <div className="grid gap-5 sm:grid-cols-2">
          {bonuses.map((b) => (
            <div key={b.title} className="flex gap-5 rounded-2xl border border-white/8 bg-white/3 p-7">
              <div className="shrink-0 text-3xl">{b.icon}</div>
              <div>
                <h3 className="font-bold text-white">{b.title}</h3>
                <p className="mt-1 text-sm text-white/40">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── FAQ ───────── */

const faqs = [
  {
    q: "Do I need prior AI or Machine Learning experience?",
    a: "No. This workshop is designed for beginners. If you can write basic Python, you're ready.",
  },
  {
    q: "Will I actually build a real language model?",
    a: "Yes! By the end of the workshop, you will have built, trained, and evaluated your own small language model from scratch.",
  },
  {
    q: "How is this different from free YouTube tutorials?",
    a: "This is a structured, hands-on 2-day workshop. No jumping between random videos hoping they connect.",
  },
  {
    q: "Is there a refund policy?",
    a: "At this point of time, we are not providing any refunds.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#080b14] px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-3xl">
        <SectionHeading badge="FAQ" title="Frequently Asked Questions" light />

        <div className="space-y-2">
          {faqs.map((f, i) => (
            <div key={i} className="overflow-hidden rounded-xl border border-white/8 bg-white/3">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-semibold text-white text-sm">{f.q}</span>
                <svg
                  className={`h-4 w-4 shrink-0 text-white/30 transition-transform ${open === i ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="border-t border-white/5 px-6 py-4 text-sm text-white/40 leading-relaxed">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Final CTA ───────── */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0d1120] px-6 py-28 text-center text-white sm:px-12">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[400px] w-[800px] rounded-full bg-gradient-to-r from-violet-600/20 to-blue-600/20 blur-[100px]" />
      </div>
      <div className="relative mx-auto max-w-2xl">
        <h2 className="text-4xl font-black sm:text-5xl">
          Ready to Build Your Own{" "}
          <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            Language Model?
          </span>
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-base text-white/40 leading-relaxed">
          Join engineers who decided to go from using AI to building it. Your journey starts this weekend.
        </p>
        <a
          href="#pricing"
          className="mt-10 inline-block rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-12 py-4 text-lg font-bold text-white shadow-[0_0_60px_rgba(124,58,237,0.4)] transition hover:scale-105"
        >
          Enroll Now for $29
        </a>
      </div>
    </section>
  );
}

/* ───────── Footer ───────── */

function Footer() {
  return (
    <footer className="bg-[#080b14] border-t border-white/5 px-6 py-10 text-center text-sm text-white/20">
      <p className="font-semibold text-white/40">IdeaWeaver AI Labs</p>
      <p className="mt-1">&copy; {new Date().getFullYear()} IdeaWeaver AI Labs. All rights reserved.</p>
    </footer>
  );
}

/* ───────── Sticky CTA (Mobile) ───────── */

function StickyCTA() {
  return (
    <div className="fixed right-0 bottom-0 left-0 z-50 border-t border-white/10 bg-[#080b14]/95 px-4 py-3 backdrop-blur-xl sm:hidden">
      <a
        href="#pricing"
        className="block w-full rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 py-3 text-center font-bold text-white"
      >
        Enroll Now — $29
      </a>
    </div>
  );
}

/* ───────── Page ───────── */

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <WhyThisCourse />
      <WhatYouLearn />
      <HandsOn />
      <WhoIsThisFor />
      <Instructor />
      <Pricing />
      <Bonuses />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyCTA />
    </>
  );
}
