"use client";

import { useState } from "react";

/* ─── Types ─── */
type Course = {
  title: string;
  description: string;
  price: string | number;
  free?: boolean;
  tag: string;
  tagColor: string;
  link: string;
  featured?: boolean;
  duration?: string;
};

/* ─── Data ─── */
const courses: Course[] = [
  {
    title: "From Software & DevOps Engineer to Generative AI Engineer",
    description:
      "A 4-month, cohort-based program for Software and DevOps Engineers transitioning into Generative AI. Covers LangChain, RAG, fine-tuning, AI agents, model internals, and building small language models from scratch. Real GPU access included.",
    price: 199,
    tag: "4-Month Program",
    tagColor: "from-violet-500 to-indigo-500",
    link: "https://www.ideaweaver.ai/courses",
    featured: true,
    duration: "16 weeks",
  },
  {
    title: "GenAI for DevOps Engineers – Morning Batch (PST)",
    description:
      "A one-month hands-on program for DevOps, Platform, and SRE engineers. Learn LangChain, Hugging Face, Ollama, vLLM, n8n, CrewAI, and RAG with applications in debugging, automation, code review, and Kubernetes troubleshooting.",
    price: 39,
    tag: "1-Month Cohort",
    tagColor: "from-blue-500 to-cyan-500",
    link: "https://www.ideaweaver.ai/courses",
    duration: "4 weeks",
  },
  {
    title: "GenAI for DevOps Engineers – Evening Batch (PST)",
    description:
      "Same curriculum as the morning batch — live instructor-led sessions three days a week. Hands-on labs, real-world operational use cases, and recordings included.",
    price: 39,
    tag: "1-Month Cohort",
    tagColor: "from-blue-500 to-cyan-500",
    link: "https://www.ideaweaver.ai/courses",
    duration: "4 weeks",
  },
  {
    title: "30 Days of AI Agents – Morning Batch",
    description:
      "Build and evaluate modern AI agents using n8n, CrewAI, LlamaIndex, LangGraph, and SmolAgents. Covers agent planning, tool use, multi-agent collaboration, and reliability evaluation.",
    price: 39,
    tag: "30-Day Cohort",
    tagColor: "from-emerald-500 to-teal-500",
    link: "https://www.ideaweaver.ai/courses",
    duration: "4 weeks",
  },
  {
    title: "30 Days of AI Agents – Evening Batch",
    description:
      "Same curriculum as the morning batch — live sessions focused on practical agent development. Build agents that plan, use tools, collaborate, and execute multi-step workflows.",
    price: 39,
    tag: "30-Day Cohort",
    tagColor: "from-emerald-500 to-teal-500",
    link: "https://www.ideaweaver.ai/courses",
    duration: "4 weeks",
  },
  {
    title: "Building Small Language Models from Scratch",
    description:
      "Hands-on deep dive into PyTorch, tokenizers, positional encoding, attention mechanisms, KV cache, and training your own language model. Real GPU access required and provided.",
    price: 49,
    tag: "30-Day Course",
    tagColor: "from-orange-500 to-amber-500",
    link: "https://www.ideaweaver.ai/courses",
    duration: "4 weeks",
  },
  {
    title: "100 Days of DevOps",
    description:
      "A comprehensive DevOps program covering Linux, scripting, CI/CD, containers, Kubernetes, cloud infrastructure, and monitoring. Designed for engineers who want a strong operational foundation.",
    price: 0,
    free: true,
    tag: "Free Course",
    tagColor: "from-zinc-500 to-zinc-600",
    link: "https://www.ideaweaver.ai/courses",
  },
];

const features = [
  {
    icon: "🏗️",
    title: "Learn by Building",
    desc: "Weekly live classes and hands-on exercises focused on real-world Generative AI systems — not slides, not theory dumps.",
  },
  {
    icon: "⚡",
    title: "Real GPU Access",
    desc: "Train, fine-tune, build, and evaluate models using real GPU resources — not simulated environments or toy datasets.",
  },
  {
    icon: "🧠",
    title: "From Basics to Models",
    desc: "Start from first principles and progress all the way to building and understanding small language models from scratch.",
  },
  {
    icon: "👥",
    title: "Cohort-Based Learning",
    desc: "Learn alongside other engineers at the same stage. Live sessions, shared exercises, and a community that moves together.",
  },
];

/* ─── Shared Components ─── */

function GradientButton({
  href,
  children,
  size = "md",
  variant = "primary",
  external,
}: {
  href: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "outline";
  external?: boolean;
}) {
  const base =
    "shimmer-hover inline-block rounded-xl font-semibold transition-all";
  const sizes = { sm: "px-5 py-2.5 text-sm", md: "px-7 py-3 text-sm", lg: "px-10 py-4 text-base" };
  const variants = {
    primary:
      "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-[0_0_30px_rgba(124,58,237,0.35)] hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(124,58,237,0.5)]",
    outline:
      "border border-white/[0.12] text-zinc-300 hover:border-violet-500/50 hover:text-white",
  };
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${base} ${sizes[size]} ${variants[variant]}`}
    >
      {children}
    </a>
  );
}

/* ─── Announcement Bar ─── */
function AnnouncementBar() {
  return (
    <div className="relative bg-gradient-to-r from-violet-600/20 via-indigo-600/20 to-violet-600/20 border-b border-violet-500/20 px-4 py-2.5 text-center text-sm font-medium text-zinc-300">
      <div className="pointer-events-none absolute inset-0 bg-[#09090b]/60" />
      <span className="relative">
        🚀{" "}
        <span className="font-semibold text-white">GenAI Beyond the Basics — New Batches Starting May 8 & 9</span>
        {" "}— Limited Seats Available.{" "}
        <a href="#courses" className="text-violet-300 underline decoration-violet-500/40 hover:text-violet-200">
          Enroll Now →
        </a>
      </span>
    </div>
  );
}

/* ─── Nav ─── */
function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#09090b]/95 px-6 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 text-xs font-black text-white">
            IW
          </span>
          <span className="text-base font-bold text-white">
            IdeaWeaver <span className="text-violet-400">AI Labs</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 text-sm md:flex">
          <a href="#courses" className="text-zinc-400 transition hover:text-white">Courses</a>
          <a href="#about" className="text-zinc-400 transition hover:text-white">About</a>
          <a href="#instructor" className="text-zinc-400 transition hover:text-white">Instructor</a>
          <a href="#faq" className="text-zinc-400 transition hover:text-white">FAQ</a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <a href="https://www.ideaweaver.ai/sign_in" target="_blank" rel="noopener noreferrer"
            className="text-sm text-zinc-400 transition hover:text-white">
            Log in
          </a>
          <GradientButton href="#courses" size="sm">Enroll Now</GradientButton>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-zinc-400 transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-zinc-400 transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-zinc-400 transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {mobileOpen && (
        <div className="flex flex-col gap-4 border-t border-white/[0.06] py-5 md:hidden">
          {[["#courses", "Courses"], ["#about", "About"], ["#instructor", "Instructor"], ["#faq", "FAQ"]].map(([href, label]) => (
            <a key={href} href={href} onClick={() => setMobileOpen(false)}
              className="text-sm text-zinc-400 transition hover:text-white">
              {label}
            </a>
          ))}
          <GradientButton href="#courses" size="sm">Enroll Now</GradientButton>
        </div>
      )}
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#09090b] px-6 py-28 sm:px-12 sm:py-36">
      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[140px]" />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Eyebrow */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-semibold text-violet-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Built for Software & DevOps Engineers
        </div>

        <h1 className="text-5xl font-black leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
          From{" "}
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
            Engineer
          </span>{" "}
          to{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
            AI Builder
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400 leading-relaxed sm:text-xl">
          Hands-on, cohort-based Generative AI programs for Software and DevOps Engineers — focused on building real-world AI systems, not hello-world demos.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <GradientButton href="#courses" size="lg">Browse Courses</GradientButton>
          <GradientButton href="#about" size="lg" variant="outline">How It Works</GradientButton>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-500">
          {[
            "Real GPU Access",
            "Live Instructor-Led",
            "Cohort-Based",
            "Engineers Teaching Engineers",
          ].map((t) => (
            <span key={t} className="flex items-center gap-2">
              <svg className="h-3.5 w-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Courses ─── */
function CourseCard({ course }: { course: Course }) {
  return (
    <div className={`group relative flex flex-col overflow-hidden rounded-2xl border transition ${
      course.featured
        ? "border-violet-500/40 bg-violet-500/[0.04] hover:border-violet-500/70"
        : "border-white/[0.06] bg-[#111116] hover:border-violet-500/30"
    }`}>
      {course.featured && (
        <div className="absolute right-4 top-4 rounded-full bg-violet-600 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-white">
          Most Popular
        </div>
      )}

      {/* Colored top bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${course.tagColor}`} />

      <div className="flex flex-1 flex-col p-7">
        {/* Tag + duration */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className={`inline-flex items-center rounded-full bg-gradient-to-r ${course.tagColor} px-3 py-0.5 text-xs font-semibold text-white`}>
            {course.tag}
          </span>
          {course.duration && (
            <span className="text-xs text-zinc-500">· {course.duration}</span>
          )}
        </div>

        <h3 className="text-base font-bold text-white leading-snug">{course.title}</h3>
        <p className="mt-3 flex-1 text-sm text-zinc-400 leading-relaxed">{course.description}</p>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-5">
          <div>
            {course.free ? (
              <span className="text-xl font-black text-emerald-400">Free</span>
            ) : (
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-white">${course.price}</span>
                <span className="text-xs text-zinc-500">/cohort</span>
              </div>
            )}
          </div>
          <a
            href={course.link}
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer-hover inline-block rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_20px_rgba(124,58,237,0.3)] transition hover:scale-105 hover:shadow-[0_0_35px_rgba(124,58,237,0.45)]"
          >
            Enroll →
          </a>
        </div>
      </div>
    </div>
  );
}

const upcomingBatches = [
  {
    label: "Morning",
    icon: "🌅",
    dates: "May 9 – May 31",
    time: "8:00 – 9:30am PST",
    link: "https://www.ideaweaver.ai/purchase?product_id=6721587",
  },
  {
    label: "Evening",
    icon: "🌙",
    dates: "May 8 – May 30",
    time: "7:00 – 8:30pm PST",
    link: "https://www.ideaweaver.ai/purchase?product_id=6721588",
  },
];

function CoursesSection() {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");

  return (
    <section id="courses" className="bg-[#09090b] px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-4 flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 w-fit text-sm font-semibold text-violet-300">
          Programs & Courses
        </div>
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Learn Generative AI by Building Real Systems
            </h2>
            <p className="mt-3 max-w-xl text-zinc-400 text-base leading-relaxed">
              Every program is cohort-based, hands-on, and designed for engineers who want to go beyond tools and understand how AI systems actually work.
            </p>
          </div>
          <a href="https://www.ideaweaver.ai/courses" target="_blank" rel="noopener noreferrer"
            className="shrink-0 text-sm text-violet-400 underline decoration-violet-500/40 transition hover:text-violet-300">
            View all products →
          </a>
        </div>

        {/* Tabs */}
        <div className="mb-10 flex gap-2 border-b border-white/[0.06] pb-0">
          {(["upcoming", "past"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`relative px-5 py-3 text-sm font-semibold transition ${
                tab === t
                  ? "text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-violet-500"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {t === "upcoming" ? "🟢 Upcoming" : "Past Courses"}
            </button>
          ))}
        </div>

        {/* Upcoming tab */}
        {tab === "upcoming" && (
          <div>
            {/* Course hero */}
            <div className="mb-10 overflow-hidden rounded-2xl border border-fuchsia-500/30 bg-gradient-to-br from-fuchsia-500/[0.06] to-purple-600/[0.04] p-8 sm:p-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-2xl">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-3 py-1 text-xs font-semibold text-fuchsia-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Enrolling Now · May 2026
                  </div>
                  <h3 className="text-2xl font-black text-white sm:text-3xl">
                    GenAI Beyond the Basics
                  </h3>
                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed max-w-xl">
                    For engineers who already understand GenAI fundamentals and want to go deeper. A hands-on, system-level course covering MCP, production-grade RAG, supervised fine-tuning, GPU inference, and model evaluation.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["MCP", "Production RAG", "Fine-Tuning", "GPU Inference", "Model Evaluation"].map((t) => (
                      <span key={t} className="rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 px-3 py-0.5 text-xs font-medium text-fuchsia-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href="/genai-beyond-the-basics"
                  className="shrink-0 text-sm text-fuchsia-400 underline decoration-fuchsia-500/40 transition hover:text-fuchsia-300 whitespace-nowrap"
                >
                  View full course details →
                </a>
              </div>

              {/* Batch cards */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {upcomingBatches.map((b) => (
                  <div key={b.label} className="flex flex-col gap-4 rounded-xl border border-white/[0.08] bg-[#09090b] p-6">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{b.icon}</span>
                      <span className="text-lg font-bold text-white">{b.label}</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-zinc-400">
                        <svg className="h-4 w-4 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {b.dates}
                      </div>
                      <div className="flex items-center gap-2 text-zinc-400">
                        <svg className="h-4 w-4 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {b.time}
                      </div>
                    </div>
                    <a
                      href={b.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto block rounded-lg bg-gradient-to-r from-fuchsia-600 to-purple-600 py-2.5 text-center text-sm font-semibold text-white shadow-[0_0_20px_rgba(192,38,211,0.3)] transition hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(192,38,211,0.45)]"
                    >
                      Enroll — {b.label} →
                    </a>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-amber-400/70">All timings in PST — please adjust for your timezone.</p>
            </div>
          </div>
        )}

        {/* Past courses tab */}
        {tab === "past" && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((c) => (
              <CourseCard key={c.title} course={c} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── About ─── */
function AboutSection() {
  return (
    <section id="about" className="bg-[#111116] px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-semibold text-violet-300">
              Our Approach
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Most AI courses focus on tools and prompts.{" "}
              <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                We focus on systems.
              </span>
            </h2>
            <p className="mt-5 text-zinc-400 leading-relaxed">
              IdeaWeaver AI Labs is a hands-on learning platform built for Software Engineers and DevOps Engineers who want to transition into Generative AI by understanding how real systems work.
            </p>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              Here, you learn how Generative AI actually works — how models are trained, evaluated, and used in real-world systems. We start from first principles and don&rsquo;t assume prior GenAI or ML knowledge. A working knowledge of Python is the only prerequisite.
            </p>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              You&rsquo;ll work on real-world patterns and get hands-on access to real GPU resources. Built by engineers, for engineers.
            </p>
            <div className="mt-8">
              <GradientButton href="#courses" size="md">Explore Programs</GradientButton>
            </div>
          </div>

          {/* Right — feature cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <div key={f.title}
                className="rounded-2xl border border-white/[0.06] bg-[#09090b] p-6 transition hover:border-violet-500/30">
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="font-bold text-white text-sm">{f.title}</h3>
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── What You'll Work On ─── */
function CurriculumHighlights() {
  const topics = [
    "LangChain & Prompt Engineering",
    "Hugging Face & Model Hubs",
    "Retrieval-Augmented Generation (RAG)",
    "Fine-Tuning & Model Evaluation",
    "AI Agents (CrewAI, LangGraph, n8n)",
    "Ollama & vLLM (Local Inference)",
    "Tokenization & Positional Encoding",
    "Attention Mechanisms & KV Cache",
    "Building Small Language Models",
    "PyTorch & Neural Networks",
    "MCP & Quantization",
    "Kubernetes + GenAI Workflows",
  ];

  return (
    <section className="bg-[#09090b] px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Topics grid */}
          <div className="grid grid-cols-2 gap-3">
            {topics.map((t) => (
              <div key={t}
                className="flex items-start gap-2.5 rounded-xl border border-white/[0.06] bg-[#111116] px-4 py-3">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                </svg>
                <span className="text-xs font-medium text-zinc-300 leading-tight">{t}</span>
              </div>
            ))}
          </div>

          {/* Text */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-semibold text-violet-300">
              What You&rsquo;ll Work On
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              A complete path from engineer to AI builder
            </h2>
            <p className="mt-5 text-zinc-400 leading-relaxed">
              Our programs are cohort-based and focused on learning by building. Instead of relying on prompt-only workflows, students work on practical exercises and mini-projects that reflect how Generative AI systems are designed, trained, evaluated, and deployed in real-world environments.
            </p>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              All programs emphasize practical implementation, clear mental models, and engineering depth. Students also get access to real GPU resources for hands-on experimentation and model training.
            </p>
            <div className="mt-8">
              <GradientButton href="#courses" size="md">See All Programs</GradientButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Instructor ─── */
function InstructorSection() {
  return (
    <section id="instructor" className="bg-[#111116] px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-semibold text-violet-300">
          Your Instructor
        </div>
        <h2 className="mb-12 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Hi, I&rsquo;m Prashant
        </h2>

        <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-[#09090b]">
          <div className="flex flex-col gap-10 p-10 md:flex-row md:items-start">
            {/* Avatar */}
            <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 text-4xl font-black text-white ring-2 ring-violet-500/30 ring-offset-4 ring-offset-[#09090b] shadow-[0_0_50px_rgba(124,58,237,0.35)]">
              PL
            </div>

            {/* Bio */}
            <div>
              <h3 className="text-2xl font-bold text-white">Prashant Lakhera</h3>
              <p className="mt-1 text-sm font-semibold text-violet-400">Founder, IdeaWeaver AI Labs</p>

              <p className="mt-5 text-sm text-zinc-400 leading-relaxed">
                With 20+ years of experience across Software Engineering, DevOps, Cloud, Kubernetes, and Large-Scale Distributed Systems. Over the years, I&rsquo;ve worked on systems used by millions of users, built and operated production-grade cloud platforms, and helped teams debug, scale, and secure complex infrastructure.
              </p>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                More recently, my focus has been on Generative AI — specifically how LLMs actually work under the hood and how to build reliable, real-world GenAI systems. I&rsquo;m the author of multiple technical books, a CNCF Kubestronaut, RHCA, and an AWS Community Builder.
              </p>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                I created IdeaWeaver AI Labs to help engineers transition into Generative AI the right way — by building systems, understanding fundamentals, and learning through hands-on work, not hype.
              </p>

              {/* Credentials */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "CNCF Kubestronaut",
                  "RHCA",
                  "AWS Community Builder",
                  "Published Author",
                  "20+ Years Engineering",
                ].map((tag) => (
                  <span key={tag}
                    className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
const faqs = [
  {
    q: "Do I need prior AI or ML experience?",
    a: "No. We start from first principles. A working knowledge of Python is the only prerequisite. All programs are designed for Software and DevOps Engineers making the transition.",
  },
  {
    q: "What does 'cohort-based' mean?",
    a: "You learn alongside a group of engineers at the same stage. Sessions are live and instructor-led, typically running 3 days a week. Recordings are available for enrolled students.",
  },
  {
    q: "Do I get real GPU access?",
    a: "Yes. All programs that require GPU compute — fine-tuning, model training, and evaluation — include access to real GPU resources, not simulated environments.",
  },
  {
    q: "What is the difference between the 1-month and 4-month programs?",
    a: "The 1-month programs (GenAI for DevOps, AI Agents, SLM) focus on a single domain. The 4-month program is a full-stack GenAI curriculum covering everything from LangChain and RAG to model internals and building small language models from scratch.",
  },
  {
    q: "Are there refunds?",
    a: "At this time we do not offer refunds. If you have questions about a program before enrolling, reach out directly.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#09090b] px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-semibold text-violet-300">
          FAQ
        </div>
        <h2 className="mb-12 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="space-y-2">
          {faqs.map((f, i) => (
            <div key={i}
              className="overflow-hidden rounded-xl border border-white/[0.06] bg-[#111116] transition hover:border-violet-500/20">
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

/* ─── Newsletter ─── */
function Newsletter() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-[#111116] px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-semibold text-violet-300">
          Stay in the Loop
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-white">Let&rsquo;s Keep in Touch</h2>
        <p className="mt-4 text-zinc-400 leading-relaxed">
          Join the IdeaWeaver AI Labs mailing list to get early access to cohort launches, hands-on GenAI workshops, and deep technical content for engineers transitioning into Generative AI.
        </p>

        {submitted ? (
          <div className="mt-8 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-6 py-5 text-sm text-emerald-300">
            ✅ You&rsquo;re on the list! Check your inbox to confirm your subscription.
          </div>
        ) : (
          <form
            className="mt-8 space-y-4"
            onSubmit={(e) => { e.preventDefault(); if (agreed && email) setSubmitted(true); }}
          >
            <input
              type="email"
              required
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-white/[0.08] bg-[#09090b] px-5 py-3.5 text-sm text-white placeholder:text-zinc-500 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/30"
            />
            <label className="flex items-start gap-3 text-left text-xs text-zinc-500">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 shrink-0 accent-violet-600"
              />
              I agree to receive occasional emails about new courses, cohorts, and updates from IdeaWeaver AI Labs.
            </label>
            <button
              type="submit"
              className="shimmer-hover w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(124,58,237,0.35)] transition hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(124,58,237,0.45)]"
            >
              Subscribe
            </button>
            <p className="text-xs text-zinc-600">No spam. Unsubscribe anytime.</p>
          </form>
        )}
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="bg-[#09090b] border-t border-white/[0.06] px-6 py-14">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 text-xs font-black text-white">IW</span>
              <span className="text-base font-bold text-white">IdeaWeaver <span className="text-violet-400">AI Labs</span></span>
            </div>
            <p className="mt-3 text-sm text-zinc-500 leading-relaxed">
              Hands-on, cohort-based Generative AI programs for Software and DevOps Engineers.
            </p>
          </div>

          {/* Programs */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-600">Programs</p>
            <div className="space-y-3 text-sm text-zinc-400">
              <a href="#courses" className="block transition hover:text-white">GenAI for DevOps Engineers</a>
              <a href="#courses" className="block transition hover:text-white">30 Days of AI Agents</a>
              <a href="#courses" className="block transition hover:text-white">Building Small Language Models</a>
              <a href="#courses" className="block transition hover:text-white">4-Month AI Program</a>
              <a href="#courses" className="block transition hover:text-white">100 Days of DevOps</a>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-600">Company</p>
            <div className="space-y-3 text-sm text-zinc-400">
              <a href="#about" className="block transition hover:text-white">About</a>
              <a href="#instructor" className="block transition hover:text-white">Instructor</a>
              <a href="#faq" className="block transition hover:text-white">FAQ</a>
              <a href="https://www.ideaweaver.ai/sign_in" target="_blank" rel="noopener noreferrer"
                className="block transition hover:text-violet-400">Log In</a>
              <a href="https://www.ideaweaver.ai/sign_up" target="_blank" rel="noopener noreferrer"
                className="block transition hover:text-violet-400">Sign Up</a>
            </div>
          </div>
        </div>

        <div className="mt-12 h-px bg-white/[0.06]" />
        <div className="mt-6 flex flex-col items-center justify-between gap-4 text-xs text-zinc-600 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} IdeaWeaver AI Labs. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="https://www.ideaweaver.ai/p/terms-of-use" target="_blank" rel="noopener noreferrer" className="transition hover:text-zinc-400">Terms of Use</a>
            <a href="https://www.ideaweaver.ai/p/privacy-policy" target="_blank" rel="noopener noreferrer" className="transition hover:text-zinc-400">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ─── */
export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Nav />
      <Hero />
      <CoursesSection />
      <AboutSection />
      <CurriculumHighlights />
      <InstructorSection />
      <FAQ />
      <Newsletter />
      <Footer />
    </>
  );
}
