"use client";

import { useState } from "react";

const batches = [
  {
    label: "Morning",
    dates: "May 9 – May 31",
    time: "8:00 – 9:30am PST",
    icon: "🌅",
    link: "https://www.ideaweaver.ai/purchase?product_id=6721587",
  },
  {
    label: "Evening",
    dates: "May 8 – May 30",
    time: "7:00 – 8:30pm PST",
    icon: "🌙",
    link: "https://www.ideaweaver.ai/purchase?product_id=6721588",
  },
];

const curriculum = [
  {
    title: "Model Context Protocol (MCP)",
    desc: "Understand how AI systems interact with tools, APIs, and external systems, and how tool calling actually works behind the scenes.",
    icon: "🔌",
  },
  {
    title: "Retrieval-Augmented Generation (RAG)",
    desc: "Go beyond simple vector search and build high-quality, production-grade RAG pipelines with better chunking, retrieval, and ranking strategies.",
    icon: "🔍",
  },
  {
    title: "Supervised Fine-Tuning",
    desc: "Learn when and how to fine-tune models, how to prepare datasets, and how to improve model performance for specific use cases.",
    icon: "🎯",
  },
  {
    title: "GPU Inference",
    desc: "Understand how inference works step-by-step, including KV cache, latency optimization, memory constraints, and cost trade-offs.",
    icon: "⚡",
  },
  {
    title: "Model Evaluation",
    desc: "Learn how to measure model performance correctly using quality, cost, and latency instead of relying on misleading traditional metrics.",
    icon: "📊",
  },
];

const audience = [
  "DevOps Engineers",
  "Backend Engineers",
  "ML Engineers",
  "Anyone building real-world AI applications",
];

const faqs = [
  {
    q: "Do I need prior AI or ML experience?",
    a: "Yes — this course assumes you already understand the basics of Generative AI (LLMs, prompting, basic tooling). If you are new to GenAI, we recommend starting with our GenAI for DevOps Engineers course first.",
  },
  {
    q: "What does 'cohort-based' mean?",
    a: "You learn alongside a group of engineers at the same stage. Sessions are live and instructor-led, running multiple days a week. Recordings are available for enrolled students.",
  },
  {
    q: "Do I get real GPU access?",
    a: "Yes. Topics like supervised fine-tuning and GPU inference include access to real GPU resources — not simulated environments or toy datasets.",
  },
  {
    q: "What is the difference between the Morning and Evening batches?",
    a: "The curriculum is identical. The only difference is the schedule — Morning runs May 9–31 at 8:00–9:30am PST, and Evening runs May 8–30 at 7:00–8:30pm PST. Pick whichever fits your timezone and routine.",
  },
  {
    q: "Are there refunds?",
    a: "At this time we do not offer refunds. If you have questions about the course before enrolling, reach out directly.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-semibold text-violet-300">
          FAQ
        </div>
        <h2 className="mb-12 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="space-y-2">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-white/[0.06] bg-[#111116] transition hover:border-violet-500/20"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="pr-4 font-semibold text-white text-sm">{f.q}</span>
                <svg
                  className={`h-4 w-4 shrink-0 text-zinc-500 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`faq-answer ${open === i ? "open" : ""} border-t border-white/[0.04]`}>
                <p className="px-6 py-4 text-sm text-zinc-400 leading-relaxed">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AISystemsEngineeringPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#09090b]/95 px-6 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between">
          <a href="/" className="flex items-center">
            <img src="/logo.png" alt="IdeaWeaver AI Labs" className="h-9 w-auto" />
          </a>
          <div className="flex items-center gap-3">
            <a
              href="#batches"
              className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(124,58,237,0.35)] transition hover:scale-[1.03]"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 sm:px-12 sm:py-32">
        {/* Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[140px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-semibold text-violet-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Enrolling Now · May 2026
          </div>

          <h1 className="text-5xl font-black leading-[1.1] tracking-tight text-white sm:text-6xl">
            GenAI{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              Beyond the Basics
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400 leading-relaxed">
            A hands-on, system-level course for engineers who already understand
            the basics of Generative AI and want to go deeper into how
            real-world AI systems are built, optimized, and deployed.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-500 leading-relaxed">
            Instead of focusing on prompts or high-level concepts, this course
            teaches you how modern AI applications work under the hood — and how
            to build production-ready solutions using industry-relevant
            techniques.
          </p>

          {/* Batch pills */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {batches.map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] px-5 py-2.5 text-sm"
              >
                <span>{b.icon}</span>
                <span className="font-semibold text-white">{b.label}</span>
                <span className="text-zinc-400">·</span>
                <span className="text-zinc-400">{b.dates}</span>
                <span className="text-zinc-400">·</span>
                <span className="text-zinc-300">{b.time}</span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="#batches"
              className="inline-block rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-10 py-4 text-base font-semibold text-white shadow-[0_0_40px_rgba(124,58,237,0.4)] transition hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(124,58,237,0.55)]"
            >
              Choose Your Batch →
            </a>
          </div>

          {/* Trust row */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-5 text-sm text-zinc-500">
            {["Live Instructor-Led", "All timings in PST", "Recordings Included", "Engineers Teaching Engineers"].map(
              (t) => (
                <span key={t} className="flex items-center gap-2">
                  <svg
                    className="h-3.5 w-3.5 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {t}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="bg-[#111116] px-6 py-24 sm:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-semibold text-violet-300">
            What You&rsquo;ll Learn
          </div>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Five topics. All production-level.
          </h2>
          <p className="mb-12 max-w-2xl text-zinc-400 leading-relaxed">
            By the end of this course, you will not just &ldquo;use&rdquo; AI
            models — you will understand how to{" "}
            <span className="text-white font-semibold">engineer</span> AI
            systems.
          </p>

          <div className="space-y-4">
            {curriculum.map((item, i) => (
              <div
                key={item.title}
                className="flex gap-5 rounded-2xl border border-white/[0.06] bg-[#09090b] p-6 transition hover:border-violet-500/30"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-2xl">
                  {item.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-violet-400 uppercase tracking-wider">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="px-6 py-24 sm:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-semibold text-violet-300">
                Who This Is For
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Built for engineers who build things.
              </h2>
              <p className="mt-5 text-zinc-400 leading-relaxed">
                This course is designed for engineers who already have a basic
                understanding of Generative AI and want to move beyond prompting
                into real system design and production deployment.
              </p>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                If you are ready to move beyond basic prompting and start
                building scalable, efficient, and production-ready GenAI systems
                — this course is for you.
              </p>
            </div>

            <div className="grid gap-3">
              {audience.map((role) => (
                <div
                  key={role}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-[#111116] px-5 py-4"
                >
                  <svg
                    className="h-5 w-5 shrink-0 text-violet-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                  </svg>
                  <span className="font-semibold text-zinc-200">{role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="px-6 py-24 sm:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-semibold text-violet-300">
            What&rsquo;s Included
          </div>
          <h2 className="mb-12 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Everything you need to succeed.
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "🎥", title: "Live Sessions", desc: "Instructor-led live classes for the full duration of the cohort, multiple days a week." },
              { icon: "⚡", title: "GPU Access", desc: "Real GPU resources for hands-on labs — fine-tuning, inference, and evaluation." },
              { icon: "♾️", title: "Lifetime Access", desc: "All session recordings included. Revisit any topic at any time, forever." },
              { icon: "💬", title: "Discord Community", desc: "Private Discord community to ask questions, share progress, and collaborate with peers." },
              { icon: "🔄", title: "All Future Updates", desc: "Course content is updated as the ecosystem evolves — you get every update at no extra cost." },
              { icon: "🏗️", title: "Hands-On Labs", desc: "Every topic comes with practical exercises built around real-world production patterns." },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/[0.06] bg-[#111116] p-6 transition hover:border-violet-500/30"
              >
                <div className="mb-3 text-3xl">{item.icon}</div>
                <h3 className="font-bold text-white text-sm">{item.title}</h3>
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Batch cards */}
      <section id="batches" className="bg-[#111116] px-6 py-24 sm:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-semibold text-violet-300">
            Choose Your Batch
          </div>
          <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Two options. Same curriculum.
          </h2>
          <p className="mb-12 text-zinc-400">
            Pick the time that works for you. All sessions are live,
            instructor-led, and in{" "}
            <span className="font-semibold text-white">Pacific Standard Time (PST)</span>.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            {batches.map((b) => (
              <div
                key={b.label}
                className="relative flex flex-col overflow-hidden rounded-2xl border border-violet-500/30 bg-violet-500/[0.04] p-8 transition hover:border-violet-500/60"
              >
                <div className="mb-6 text-4xl">{b.icon}</div>
                <h3 className="text-xl font-bold text-white">{b.label}</h3>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <svg className="h-4 w-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-zinc-300">{b.dates}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <svg className="h-4 w-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-zinc-300">{b.time}</span>
                  </div>
                </div>

                <div className="mt-auto pt-8">
                  <a
                    href={b.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3.5 text-center text-sm font-semibold text-white shadow-[0_0_25px_rgba(124,58,237,0.35)] transition hover:scale-[1.02] hover:shadow-[0_0_45px_rgba(124,58,237,0.5)]"
                  >
                    Enroll — {b.label} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* Footer */}
      <footer className="border-t border-white/[0.06] px-6 py-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 text-sm text-zinc-600 sm:flex-row">
          <div className="flex items-center">
            <img src="/logo.png" alt="IdeaWeaver AI Labs" className="h-7 w-auto opacity-70" />
          </div>
          <p>&copy; {new Date().getFullYear()} IdeaWeaver AI Labs. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="https://www.ideaweaver.ai/p/terms-of-use" target="_blank" rel="noopener noreferrer" className="transition hover:text-zinc-400">Terms</a>
            <a href="https://www.ideaweaver.ai/p/privacy-policy" target="_blank" rel="noopener noreferrer" className="transition hover:text-zinc-400">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
