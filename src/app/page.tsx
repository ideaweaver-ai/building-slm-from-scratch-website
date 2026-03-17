"use client";

import { useState } from "react";

/* ───────── Shared Components ───────── */

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
      {children}
    </span>
  );
}

function SectionHeading({
  badge,
  title,
  subtitle,
}: {
  badge?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      {badge && <Badge>{badge}</Badge>}
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-dark sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-lg text-gray">{subtitle}</p>}
    </div>
  );
}

/* ───────── Hero ───────── */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-dark via-dark-light to-dark px-6 pt-32 pb-20 text-white sm:px-12">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 -bottom-40 h-[400px] w-[400px] rounded-full bg-accent/20 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        <Badge>30-Day Hands-On Program</Badge>

        <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
          Stop Using AI.{" "}
          <span className="bg-gradient-to-r from-primary-light to-accent-light bg-clip-text text-transparent">
            Start Building It.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 sm:text-xl">
          In just 30&nbsp;days, learn how to build your own small language model
          from scratch&nbsp;&mdash; no prior AI experience required.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#pricing"
            className="animate-pulse-glow rounded-xl bg-gradient-to-r from-primary to-accent px-8 py-4 text-lg font-bold shadow-lg transition hover:scale-105"
          >
            Enroll Now for $49
          </a>
          <a
            href="#curriculum"
            className="rounded-xl border border-white/20 px-8 py-4 text-lg font-semibold transition hover:bg-white/10"
          >
            View Curriculum
          </a>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm text-white/60">
          {["Beginner Friendly", "100% Hands-On", "GPU Provided"].map(
            (t) => (
              <span
                key={t}
                className="flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-1.5"
              >
                <svg
                  className="h-4 w-4 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {t}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}

/* ───────── Why This Course ───────── */

function WhyThisCourse() {
  return (
    <section className="bg-white px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          badge="The Problem"
          title="Everyone Uses AI. Almost No One Understands It."
          subtitle="Most people interact with ChatGPT daily but have zero idea how it actually works under the hood."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {/* Problem */}
          <div className="rounded-2xl border border-red-100 bg-red-50/50 p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-2xl">
              &#x26A0;
            </div>
            <h3 className="text-xl font-bold text-dark">Without This Course</h3>
            <ul className="mt-4 space-y-3 text-gray">
              <li className="flex gap-2">
                <span className="text-red-400">&#x2717;</span> You copy-paste
                prompts without understanding
              </li>
              <li className="flex gap-2">
                <span className="text-red-400">&#x2717;</span> AI feels like
                magic — you can&apos;t debug or improve it
              </li>
              <li className="flex gap-2">
                <span className="text-red-400">&#x2717;</span> You rely on
                expensive APIs with no alternative
              </li>
            </ul>
          </div>

          {/* Solution */}
          <div className="rounded-2xl border border-green-100 bg-green-50/50 p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl">
              &#x2728;
            </div>
            <h3 className="text-xl font-bold text-dark">With This Course</h3>
            <ul className="mt-4 space-y-3 text-gray">
              <li className="flex gap-2">
                <span className="text-green-500">&#x2713;</span> You understand
                how LLMs actually work
              </li>
              <li className="flex gap-2">
                <span className="text-green-500">&#x2713;</span> You can build,
                train, and evaluate your own model
              </li>
              <li className="flex gap-2">
                <span className="text-green-500">&#x2713;</span> You stand out
                as an engineer who truly gets AI
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── What You Will Learn ───────── */

const learnings = [
  {
    icon: "🔥",
    title: "PyTorch Fundamentals",
    desc: "Tensors, autograd, and neural network basics from the ground up.",
  },
  {
    icon: "🔤",
    title: "Tokenization",
    desc: "How raw text becomes numerical tokens that models understand.",
  },
  {
    icon: "📐",
    title: "Positional Encoding",
    desc: "Why order matters and how transformers keep track of it.",
  },
  {
    icon: "🎯",
    title: "Attention Mechanism",
    desc: "The breakthrough idea behind every modern LLM, explained clearly.",
  },
  {
    icon: "⚡",
    title: "KV Cache & Optimization",
    desc: "How inference is made fast and efficient in production.",
  },
  {
    icon: "🧠",
    title: "Build Your Own LLM",
    desc: "Combine everything to train a working language model end to end.",
  },
];

function WhatYouLearn() {
  return (
    <section className="bg-gray-light px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          badge="Curriculum Highlights"
          title="What You Will Learn"
          subtitle="A practical, no-fluff curriculum designed for builders."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {learnings.map((l) => (
            <div
              key={l.title}
              className="rounded-2xl border border-white bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-3 text-3xl">{l.icon}</div>
              <h3 className="text-lg font-bold text-dark">{l.title}</h3>
              <p className="mt-2 text-sm text-gray">{l.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Curriculum ───────── */

const weeks = [
  {
    week: 1,
    title: "PyTorch & Neural Networks",
    color: "from-purple-500 to-indigo-500",
    items: [
      "Build a strong foundation in PyTorch and neural networks",
      "Understand tensors, forward passes, backward passes, and training loops",
      "Hands-on: Implement and train a simple neural network using PyTorch",
    ],
  },
  {
    week: 2,
    title: "Tokenizers & Positional Encoding",
    color: "from-indigo-500 to-blue-500",
    items: [
      "Learn how raw text is converted into tokens and why tokenization matters",
      "Explore positional encoding techniques used in transformer models",
      "Hands-on: Experiment with different tokenizers and positional encodings",
    ],
  },
  {
    week: 3,
    title: "Attention Mechanisms & KV Cache",
    color: "from-blue-500 to-cyan-500",
    items: [
      "Deep dive into attention, self-attention, and key-value caching",
      "Understand how modern LLMs optimize inference performance",
      "Hands-on: Implement attention concepts and observe the impact of KV cache",
    ],
  },
  {
    week: 4,
    title: "Building a Small Language Model (SLM) from Scratch",
    color: "from-cyan-500 to-emerald-500",
    items: [
      "Bring everything together by building a small language model from scratch",
      "Learn model architecture, training workflows, and real-world constraints",
      "Hands-on: Build, train, and evaluate a small language model end to end",
    ],
  },
];

function Curriculum() {
  return (
    <section id="curriculum" className="bg-white px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          badge="4-Week Roadmap"
          title="Course Curriculum"
          subtitle="Structured weekly milestones so you never feel lost."
        />

        <div className="mb-8 text-center">
          <a
            href="/curriculum.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/5 px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Full Curriculum (PDF)
          </a>
        </div>

        <div className="relative space-y-8">
          {/* Timeline line */}
          <div className="absolute top-0 left-6 hidden h-full w-0.5 bg-gradient-to-b from-primary to-accent md:block" />

          {weeks.map((w) => (
            <div key={w.week} className="relative flex gap-6">
              {/* dot */}
              <div className="relative z-10 hidden md:block">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${w.color} text-sm font-bold text-white shadow-lg`}
                >
                  W{w.week}
                </div>
              </div>

              <div className="flex-1 rounded-2xl border border-gray-light bg-white p-6 shadow-sm transition hover:shadow-md">
                <div className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
                  Week {w.week}
                </div>
                <h3 className="text-xl font-bold text-dark">{w.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-gray">
                  {w.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
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
    {
      title: "Build Every Week",
      desc: "Every single week includes real implementation — not just slides.",
    },
    {
      title: "No Boring Theory",
      desc: "Concepts are taught through code, not endless equations.",
    },
    {
      title: "Step-by-Step",
      desc: "Each exercise builds on the last so you never feel overwhelmed.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-dark via-dark-light to-dark px-6 py-24 text-white sm:px-12">
      <div className="mx-auto max-w-5xl text-center">
        <SectionHeading
          badge="Learn by Doing"
          title="100% Hands-On. Zero Fluff."
        />
        <div className="grid gap-8 sm:grid-cols-3">
          {points.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="mt-3 text-white/60">{p.desc}</p>
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
    {
      icon: "🛠",
      title: "DevOps Engineers",
      desc: "Moving to AI and want a solid foundation in how LLMs work.",
    },
    {
      icon: "💻",
      title: "Software Engineers",
      desc: "Curious about LLMs and want to go beyond just calling APIs.",
    },
    {
      icon: "🌱",
      title: "Beginners",
      desc: "New to AI but want practical, hands-on skills — not just theory.",
    },
    {
      icon: "📢",
      title: "Content Creators & Educators",
      desc: "Want a deeper understanding to create better AI content.",
    },
  ];

  return (
    <section className="bg-gray-light px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          badge="Is This You?"
          title="Who Is This Course For?"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {personas.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-white bg-white p-6 text-center shadow-sm"
            >
              <div className="mb-3 text-4xl">{p.icon}</div>
              <h3 className="font-bold text-dark">{p.title}</h3>
              <p className="mt-2 text-sm text-gray">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Instructor ───────── */

function Instructor() {
  return (
    <section className="bg-white px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-4xl">
        <SectionHeading badge="Your Instructor" title="Meet Prashant Lakhera" />

        <div className="flex flex-col items-center gap-8 md:flex-row">
          {/* Avatar placeholder */}
          <div className="flex h-48 w-48 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-6xl font-bold text-white shadow-xl">
            PL
          </div>

          <div>
            <h3 className="text-2xl font-bold text-dark">Prashant Lakhera</h3>
            <p className="mt-1 font-medium text-primary">
              Founder, IdeaWeaver AI Labs
            </p>
            <p className="mt-4 text-gray leading-relaxed">
              DevOps expert and author of multiple books, Prashant has spent
              years helping engineers level up through hands-on, practical
              teaching. As a YouTube educator and community builder, he
              specializes in breaking down complex topics into digestible,
              actionable lessons. This course brings his proven teaching approach
              to the world of AI and language models.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {[
                "Published Author",
                "YouTube Educator",
                "Community Builder",
                "DevOps → AI",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Pricing ───────── */

const batches = [
  {
    label: "Weekday Morning",
    days: "Monday – Wednesday",
    time: "7:00 – 8:00 AM PST",
    link: "https://www.ideaweaver.ai/purchase?product_id=6671439",
  },
  {
    label: "Weekday Evening",
    days: "Monday – Wednesday",
    time: "7:00 – 8:00 PM PST",
    link: "https://www.ideaweaver.ai/purchase?product_id=6671441",
  },
  {
    label: "Weekend Morning",
    days: "Saturday – Sunday",
    time: "8:00 – 9:30 AM PST",
    link: "https://www.ideaweaver.ai/purchase?product_id=6671442",
  },
  {
    label: "Weekend Evening",
    days: "Friday – Saturday",
    time: "7:00 – 8:30 PM PST",
    link: "https://www.ideaweaver.ai/purchase?product_id=6671443",
  },
];

function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-gradient-to-br from-dark via-dark-light to-dark px-6 py-24 text-white sm:px-12"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          badge="Limited Time"
          title="Choose Your Batch"
          subtitle="Pick the schedule that works best for you. All batches are $49 with the same curriculum and benefits."
        />

        {/* Price highlight */}
        <div className="mb-6 text-center">
          <div className="inline-flex items-baseline gap-2">
            <span className="text-5xl font-extrabold">$49</span>
            <span className="text-lg text-white/40 line-through">$199</span>
          </div>
          <p className="mt-1 text-sm text-white/50">One-time payment. Lifetime access.</p>
        </div>

        {/* Timezone notice */}
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm text-amber-300">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            All timings are in PST (Pacific Standard Time). Please adjust according to your timezone.
          </span>
        </div>

        {/* Batch cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {batches.map((b) => (
            <div
              key={b.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:border-primary/40 hover:bg-white/10"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-light">
                {b.label}
              </p>
              <div className="mt-4 flex items-center gap-3">
                <svg className="h-5 w-5 shrink-0 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-lg font-semibold">{b.days}</span>
              </div>
              <div className="mt-2 flex items-center gap-3">
                <svg className="h-5 w-5 shrink-0 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg font-semibold">{b.time}</span>
              </div>

              <a
                href={b.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block w-full rounded-xl bg-gradient-to-r from-primary to-accent py-3 text-center font-bold shadow-lg transition hover:scale-105"
              >
                Enroll — $49
              </a>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/60">
          {[
            "4 weeks of structured content",
            "Recorded video sessions",
            "Hands-on exercises every week",
            "GPU access included for labs",
            "Discord community access",
            "All future updates included",
          ].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <svg
                className="h-4 w-4 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </span>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-white/40">
          Instead of spending $1,000+ on bootcamps, get the same depth here.
        </p>
      </div>
    </section>
  );
}

/* ───────── Bonuses ───────── */

function Bonuses() {
  const bonuses = [
    {
      icon: "🎥",
      title: "Recorded Sessions",
      desc: "Watch and rewatch at your own pace, forever.",
    },
    {
      icon: "💬",
      title: "Discord Community",
      desc: "Connect with fellow learners and get your questions answered.",
    },
    {
      icon: "🔄",
      title: "Future Updates",
      desc: "As AI evolves, so does this course — all updates free.",
    },
  ];

  return (
    <section className="bg-white px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          badge="Bonuses"
          title="You Also Get"
          subtitle="Extra value included with your enrollment."
        />
        <div className="grid gap-6 sm:grid-cols-3">
          {bonuses.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-primary/10 bg-primary/5 p-6 text-center"
            >
              <div className="mb-3 text-4xl">{b.icon}</div>
              <h3 className="font-bold text-dark">{b.title}</h3>
              <p className="mt-2 text-sm text-gray">{b.desc}</p>
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
    a: "No. This course is designed for beginners. If you can write basic Python, you're ready.",
  },
  {
    q: "Do I need a GPU?",
    a: "We provide labs with GPU access for this course. To build an actual LLM, you will need a separate GPU, but we have you covered for the course exercises.",
  },
  {
    q: "Will I actually build a real language model?",
    a: "Yes! By Week 4, you will have built, trained, and evaluated your own small language model from scratch.",
  },
  {
    q: "How is this different from free YouTube tutorials?",
    a: "This is a structured, end-to-end program with hands-on exercises every week. No jumping between random videos hoping they connect.",
  },
  {
    q: "What if I get stuck?",
    a: "You'll have access to the Discord community where you can ask questions and get help from Prashant and fellow learners.",
  },
  {
    q: "Is there a refund policy?",
    a: "At this point of time, we are not providing any refunds.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-gray-light px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
        />

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white bg-white shadow-sm"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-semibold text-dark">{f.q}</span>
                <svg
                  className={`h-5 w-5 shrink-0 text-gray transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-gray">{f.a}</div>
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
    <section className="bg-gradient-to-r from-primary to-accent px-6 py-20 text-center text-white sm:px-12">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          Ready to Build Your Own Language Model?
        </h2>
        <p className="mt-4 text-lg text-white/80">
          Join hundreds of engineers who decided to go from using AI to building
          it. Your journey starts today.
        </p>
        <a
          href="#pricing"
          className="mt-8 inline-block rounded-xl bg-white px-10 py-4 text-lg font-bold text-primary shadow-lg transition hover:scale-105"
        >
          Enroll Now for $49
        </a>
      </div>
    </section>
  );
}

/* ───────── Footer ───────── */

function Footer() {
  return (
    <footer className="bg-dark px-6 py-10 text-center text-sm text-white/40">
      <p className="font-semibold text-white/60">IdeaWeaver AI Labs</p>
      <p className="mt-1">
        &copy; {new Date().getFullYear()} IdeaWeaver AI Labs. All rights
        reserved.
      </p>
    </footer>
  );
}

/* ───────── Sticky CTA (Mobile) ───────── */

function StickyCTA() {
  return (
    <div className="fixed right-0 bottom-0 left-0 z-50 border-t border-white/10 bg-dark/95 px-4 py-3 backdrop-blur sm:hidden">
      <a
        href="#pricing"
        className="block w-full rounded-xl bg-gradient-to-r from-primary to-accent py-3 text-center font-bold text-white shadow-lg"
      >
        Enroll Now — $49
      </a>
    </div>
  );
}

/* ───────── Nav ───────── */

function Nav() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-white/10 bg-dark/90 px-6 py-4 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <span className="text-lg font-bold text-white">
          IdeaWeaver<span className="text-primary-light"> AI Labs</span>
        </span>
        <div className="hidden items-center gap-6 text-sm text-white/60 md:flex">
          <a href="#curriculum" className="transition hover:text-white">
            Curriculum
          </a>
          <a href="#pricing" className="transition hover:text-white">
            Pricing
          </a>
          <a
            href="#pricing"
            className="rounded-lg bg-primary px-4 py-2 font-semibold text-white transition hover:bg-primary-dark"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </nav>
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
      <Curriculum />
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
