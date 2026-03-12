"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Cpu,
  Globe,
  Gamepad2,
  Server,
  Wifi,
  Battery,
  Keyboard,
  Shield,
  Database,
  Eye,
  Joystick,
  Sword,
  Flame,
  Home,
  Zap,
} from "lucide-react";

interface Project {
  title: string;
  shortDesc: string;
  description: string;
  tech: string[];
  url: string;
  icon: React.ElementType;
  span?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Esp32LoadBal",
    shortDesc: "ESP32 reverse-proxy & load balancer",
    description:
      "Proof-of-concept reverse-proxy and load balancer on an ESP32 microcontroller. Acts as a layer-7 gateway forwarding traffic to multiple backends via round-robin, paired with Python TCP servers for demonstration.",
    tech: ["C++", "Arduino", "Python", "TCP"],
    url: "https://github.com/Tanish-Desai/Esp32LoadBal",
    icon: Server,
    span: "md:col-span-2",
    featured: true,
  },
  {
    title: "Load Balancer Simulator",
    shortDesc: "Q-learning based load balancing",
    description:
      "A Python simulator implementing and visualizing a Q-learning based load-balancing algorithm across multiple servers. Compares classical strategies with learned policies under varying load patterns.",
    tech: ["Python", "Q-Learning", "Simulation"],
    url: "https://github.com/Tanish-Desai/Load-Balancer-Algorithm-Simulator",
    icon: Cpu,
    span: "md:col-span-2",
    featured: true,
  },
  {
    title: "secure-rag-harness",
    shortDesc: "RAG pipeline attack & defense demos",
    description:
      "Simulation repository demonstrating pipeline (RAG) attacks and defenses for LLM-based retrieval systems. Contains harness code and examples to reproduce attack scenarios and test mitigation strategies.",
    tech: ["Python", "Docker", "LLM", "Security"],
    url: "https://github.com/Tanish-Desai/secure-rag-harness",
    icon: Shield,
    span: "md:col-span-2",
    featured: true,
  },
  {
    title: "autoass",
    shortDesc: "SQL assignment report generator",
    description:
      "Connects to an Oracle database, executes configurable SQL queries, captures outputs, and emits cleanly formatted Markdown assignment reports with terminal-style images. Built for reproducible DBMS lab reports.",
    tech: ["Python", "oracledb", "pandas", "Pillow"],
    url: "https://github.com/Tanish-Desai/autoass",
    icon: Database,
  },
  {
    title: "VibeType",
    shortDesc: "Browser typing-race game",
    description:
      "A lightweight browser typing-race game where words scroll toward a deadline and the player must type them before they cross it. Demonstrates frontend game loops, input handling, and simple UX.",
    tech: ["JavaScript", "Vite"],
    url: "https://github.com/Tanish-Desai/VibeType",
    icon: Keyboard,
  },
  {
    title: "ascii-cam",
    shortDesc: "Real-time ASCII webcam art",
    description:
      "Captures a live webcam feed, converts frames to grayscale, maps pixel brightness to ASCII characters, and streams real-time ASCII-art video in the terminal. A compact OpenCV demonstration.",
    tech: ["Python", "OpenCV"],
    url: "https://github.com/Tanish-Desai/ascii-cam",
    icon: Eye,
  },
  {
    title: "Auto-Socket",
    shortDesc: "Gesture-controlled home automation",
    description:
      "WiFi-enabled home automation using ESP32 to control appliances through a relay. Uses MediaPipe and OpenCV for gesture-based control, illustrating WiFi principles and practical IoT integrations.",
    tech: ["ESP32", "Python", "MediaPipe", "OpenCV"],
    url: "https://github.com/Tanish-Desai/Auto-Socket",
    icon: Wifi,
    span: "md:col-span-2",
    featured: true,
  },
  {
    title: "uber-ride-optimiser",
    shortDesc: "Ride & route optimization experiments",
    description:
      "Scripts and experiments related to optimizing multi-stop rides or pooling scenarios, exploring algorithms, heuristics, and dataset experiments for route optimization.",
    tech: ["Python"],
    url: "https://github.com/Tanish-Desai/uber-ride-optimiser",
    icon: Globe,
  },
  {
    title: "Mutager",
    shortDesc: "Godot mutation game mechanic",
    description:
      "A Godot project implementing a mutation mechanic that applies temporary effects to a player — altered movement, visuals, or stat modifiers. Showcases modular gameplay effect design.",
    tech: ["Godot", "GDScript"],
    url: "https://github.com/Tanish-Desai/Mutager",
    icon: Zap,
  },
  {
    title: "flapper",
    shortDesc: "Flappy Bird clone in Godot",
    description:
      "A concise 2D Flappy Bird clone demonstrating level design, player input mechanics, collision detection, and score tracking — game development fundamentals in Godot.",
    tech: ["Godot", "GDScript"],
    url: "https://github.com/Tanish-Desai/flapper",
    icon: Gamepad2,
  },
  {
    title: "Flapper-Unity",
    shortDesc: "Flappy Bird in Unity",
    description:
      "A Unity reimplementation of Flappy Bird demonstrating the same mechanics with C# scripting and Unity engine components. Useful to compare Godot and Unity workflows.",
    tech: ["Unity", "C#"],
    url: "https://github.com/Tanish-Desai/Flapper-Unity",
    icon: Joystick,
  },
  {
    title: "Dot-Knight",
    shortDesc: "Metroidvania platformer prototype",
    description:
      "A Godot-based metroidvania prototype featuring a knight character, exploring platforming, enemy and level design, and modular scene organization for action-platformer games.",
    tech: ["Godot", "GDScript"],
    url: "https://github.com/Tanish-Desai/Dot-Knight",
    icon: Sword,
  },
  {
    title: "Meteor-Shower-mini",
    shortDesc: "Minimal survival meteor game",
    description:
      "A compact survival-style game where the player tries to survive as long as possible against meteor showers. Showcases spawn patterns and difficulty scaling.",
    tech: ["Godot", "GDScript"],
    url: "https://github.com/Tanish-Desai/Meteor-Shower-mini",
    icon: Flame,
  },
  {
    title: "battery-notifier",
    shortDesc: "Battery threshold alert utility",
    description:
      "A tiny Python executable that monitors your laptop battery and sends an alert when it crosses a configured threshold. A small automation utility for battery management.",
    tech: ["Python"],
    url: "https://github.com/Tanish-Desai/battery-notifier",
    icon: Battery,
  },
  {
    title: "portfolio",
    shortDesc: "Personal developer portfolio site",
    description:
      "The source for my public-facing portfolio site — showcasing projects, links, and short case-studies. Built as a modern component-driven web app.",
    tech: ["TypeScript", "Next.js"],
    url: "https://github.com/Tanish-Desai/portfolio",
    icon: Home,
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 p-6 md:p-10 font-sans selection:bg-neutral-800">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8 flex items-center gap-4">
        <Link
          href="/"
          className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800 transition-all"
        >
          <ArrowLeft className="w-5 h-5 text-neutral-400" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Projects
          </h1>
          <p className="text-sm text-neutral-500 mt-1">
            A collection of things I&apos;ve built and experimented with
          </p>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}
      </div>
    </main>
  );
}

function ProjectCard({
  project,
}: {
  project: Project;
}) {
  const Icon = project.icon;

  return (
    <div className={`${project.span || "md:col-span-1"} relative z-0 hover:z-[50] group overflow-visible`}>
      <div className="pointer-events-none fixed inset-0 z-[70] bg-black/65 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100" />

      <div className="relative z-[80] bg-neutral-900 rounded-3xl border border-neutral-800 p-5 flex h-full flex-col justify-between transition-all duration-300 group-hover:border-indigo-500/40 group-hover:shadow-xl group-hover:shadow-indigo-500/5 group-focus-within:border-indigo-500/40 group-focus-within:shadow-xl group-focus-within:shadow-indigo-500/5">
        <div className="flex items-start justify-between mb-3">
          <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center border border-neutral-700 group-hover:border-indigo-500/40 group-hover:bg-indigo-500/10 transition-all">
            <Icon className="w-5 h-5 text-neutral-400 group-hover:text-indigo-400 transition-colors" />
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full bg-neutral-800 hover:bg-white hover:text-black transition-colors opacity-0 group-hover:opacity-100"
          >
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div
          className={project.featured ? "flex-1 flex flex-col items-center justify-center text-center px-4" : ""}
        >
          <h3 className={`${project.featured ? "text-xl md:text-2xl" : "text-base"} font-bold text-white leading-tight group-hover:text-indigo-400 transition-colors mb-1`}>
            {project.title}
          </h3>
          <p className={`${project.featured ? "text-sm md:text-base max-w-md text-neutral-400" : "text-xs text-neutral-500"} leading-relaxed`}>
            {project.shortDesc}
          </p>
        </div>

        <div className={`flex flex-wrap gap-1.5 mt-3 ${project.featured ? "justify-center" : ""}`}>
          {project.tech.map((t) => (
            <span
              key={t}
              className={`${project.featured ? "text-[11px] px-2.5 py-1" : "text-[10px] px-2 py-0.5"} rounded-full bg-neutral-800 text-neutral-500 font-mono border border-neutral-700 group-hover:border-neutral-600 transition-colors`}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="pointer-events-none absolute -left-2 -right-2 -top-2 z-[100] rounded-[2rem] border border-indigo-500/50 bg-neutral-900/98 p-6 opacity-0 shadow-2xl shadow-indigo-500/10 transition-all duration-300 translate-y-2 scale-[0.98] group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:scale-100">
          <div className="flex min-h-full flex-col">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center border border-indigo-500/40 bg-indigo-500/10 shrink-0">
                  <Icon className="w-6 h-6 text-indigo-400" />
                </div>
                <div className={project.featured ? "text-center md:text-left" : ""}>
                  <h3 className={`${project.featured ? "text-xl md:text-2xl" : "text-lg"} font-bold text-white leading-tight`}>
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-400 leading-relaxed">
                    {project.shortDesc}
                  </p>
                </div>
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-neutral-800 p-2 text-neutral-300 transition-colors hover:bg-white hover:text-black shrink-0"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <p className="text-sm leading-relaxed text-neutral-300 flex-1">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={`${project.title}-${t}`}
                  className="rounded-full border border-neutral-700 bg-neutral-800 px-2.5 py-1 text-[11px] font-mono text-neutral-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
