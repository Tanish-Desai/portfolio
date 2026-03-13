import Link from "next/link";
import { Github, Linkedin, Mail, Codepen, Terminal, Server, Database, Braces, Globe, Cpu, Code2, Send, ArrowUpRight, FileCode, Gamepad2, FolderOpen, Boxes, Container, GitBranch, Joystick, Sparkles, MonitorSmartphone, FileText } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 p-8 font-sans selection:bg-neutral-800 flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto">
        
        {/* Profile / Hero Section - Large Top Left */}
        <div className="md:col-span-2 md:row-span-1 bg-neutral-900 rounded-3xl border border-neutral-800 p-8 flex flex-col justify-between hover:border-neutral-700 transition-colors group relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-50">
             <Terminal className="w-32 h-32 text-neutral-800 -rotate-12 transform translate-x-8 -translate-y-8" />
          </div>
          <div className="flex flex-col md:flex-row gap-6 relative z-10 h-full">
            <div className="flex-shrink-0">
                 <div className="h-32 w-32 rounded-3xl bg-neutral-800 overflow-hidden border border-indigo-500/50 shadow-2xl">
                    <img src="/tanish.jpg" alt="Tanish Desai" className="w-full h-full object-cover" />
                 </div>
            </div>
            <div className="flex flex-col justify-between h-full">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight text-white mb-2 group-hover:text-indigo-400 transition-colors">Tanish Desai</h1>
                    <h2 className="text-xl font-medium text-indigo-400 mb-2">Systems Developer & Aspiring Backend Engineer</h2>
                    <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
                        Passionate about computer networks, database architectures, and exploring the frontiers of Agentic AI. I build automation tools and efficient systems that optimize workflows and solve complex logical problems.
                    </p>
                </div>
                 <div className="space-y-4 mt-4">
                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-xs text-neutral-300">Backend Systems</span>
                        <span className="px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-xs text-neutral-300">Computer Networks</span>
                        <span className="px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-xs text-neutral-300">Agentic AI</span>
                        <span className="px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-xs text-neutral-300">DBMS</span>
                    </div>
                     <div className="flex items-center gap-2 text-sm text-neutral-500">
                         <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                         Available for opportunities
                     </div>
                  </div>
            </div>
          </div>
        </div>

        {/* Languages & Tools Section - Merged */}
        <div className="md:col-span-2 md:row-span-1 bg-neutral-900 rounded-3xl border border-neutral-800 p-4 flex flex-col gap-4 hover:border-neutral-700 transition-colors h-full">
           <div className="flex items-center justify-between">
                <h2 className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Languages & Tools</h2>
                <div className="flex gap-2">
                    <Code2 className="w-4 h-4 text-neutral-600" />
                    <Server className="w-4 h-4 text-neutral-600" />
                </div>
           </div>
           
           <div className="flex-1 flex flex-col justify-center gap-2">
                {/* Languages Group — 2×5 */}
                <div className="grid grid-cols-5 gap-0.5">
                    <TechIcon icon={FileCode} label="Java" />
                    <TechIcon icon={Cpu} label="C++" />
                    <TechIcon icon={Code2} label="Python" />
                    <TechIcon icon={Terminal} label="C" />
                    <TechIcon icon={Database} label="SQL" />
                    <TechIcon icon={Globe} label="HTML" />
                    <TechIcon icon={FileCode} label="CSS" />
                    <TechIcon icon={Braces} label="JS" />
                    <TechIcon icon={Braces} label="TS" />
                    <TechIcon icon={Gamepad2} label="GDScript" />
                </div>

                {/* Divider */}
                <div className="h-px bg-neutral-800 w-full" />

                {/* Tools Group — 2×5 */}
                <div className="grid grid-cols-5 gap-0.5">
                    <TechIcon icon={Terminal} label="Linux" />
                    <TechIcon icon={Container} label="Docker" />
                    <TechIcon icon={Database} label="MySQL" />
                    <TechIcon icon={Server} label="Ntwk" />
                    <TechIcon icon={GitBranch} label="Git" />
                    <TechIcon icon={Cpu} label="Arduino" />
                    <TechIcon icon={MonitorSmartphone} label="OpenCV" />
                    <TechIcon icon={Joystick} label="Godot" />
                    <TechIcon icon={Sparkles} label="Next.js" />
                    <TechIcon icon={Boxes} label="Vite" />
                </div>
           </div>
        </div>

        {/* Coding Profiles + Education */}
        <div className="md:col-span-1 md:row-span-2 flex flex-col gap-3">
            <div className="md:h-1/4 bg-neutral-900 rounded-3xl border border-neutral-800 p-3 flex flex-col hover:border-neutral-700 transition-colors">
                <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-neutral-300 uppercase tracking-wider">Coding Profiles</span>
                    <Code2 className="w-4 h-4 text-neutral-500" />
                </div>
                <div className="grid grid-cols-2 gap-2 mt-2 flex-1">
                    <a
                        href="https://leetcode.com/u/Tanish_Desai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative overflow-hidden rounded-2xl border border-amber-600/40 bg-gradient-to-br from-amber-950/70 via-neutral-900 to-neutral-950 px-2.5 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400/70"
                    >
                        <div className="absolute -right-4 -top-4 h-10 w-10 rounded-full bg-amber-500/20 blur-md transition-opacity group-hover:opacity-100" />
                        <div className="relative z-10 flex items-start justify-between gap-2">
                            <div className="space-y-0.5">
                                <p className="text-xs font-semibold text-amber-300">LeetCode</p>
                                <p className="text-[10px] text-amber-200/80">Rating 1500+</p>
                            </div>
                            <img src="/icons/leetcode.svg" alt="LeetCode" className="h-7 w-7 object-contain" />
                        </div>
                    </a>
                    <a
                        href="https://www.codechef.com/users/viridiana78"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative overflow-hidden rounded-2xl border border-orange-700/50 bg-gradient-to-tr from-orange-950/80 via-neutral-900 to-neutral-950 px-2.5 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-400/70"
                    >
                        <div className="absolute -left-4 -bottom-4 h-10 w-10 rounded-full bg-orange-500/20 blur-md transition-opacity group-hover:opacity-100" />
                        <div className="relative z-10 flex items-start justify-between gap-2">
                            <div className="space-y-0.5">
                                <p className="text-xs font-semibold text-orange-300">CodeChef</p>
                                <p className="text-[10px] text-orange-200/80">Rating 1400+</p>
                            </div>
                            <img src="/icons/codechef.svg" alt="CodeChef" className="h-7 w-7 object-contain" />
                        </div>
                    </a>
                </div>
            </div>

            <div className="md:h-3/4 bg-neutral-900 rounded-3xl border border-neutral-800 p-4 flex flex-col justify-between hover:border-neutral-700 transition-colors relative overflow-hidden">
                <div className="flex items-center justify-between mb-3 relative z-10">
                    <span className="text-xs font-medium text-neutral-300 uppercase tracking-wider">Studying At</span>
                    <Globe className="w-4 h-4 text-neutral-500" />
                </div>
                <div className="relative z-10 h-full flex flex-col gap-3">
                    <div className="rounded-2xl border border-neutral-800 bg-neutral-950/50 p-3">
                        <p className="text-sm font-semibold text-white leading-snug">Vellore Institute of Technology, Chennai</p>
                        <p className="text-xs text-indigo-400 mt-1">B.Tech in Computer Science and Engineering</p>
                    </div>

                    <div className="grid grid-cols-1 gap-2 mt-auto">
                        <div className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-2.5">
                            <p className="text-[10px] uppercase tracking-wider text-neutral-500">Current CGPA</p>
                            <p className="text-base font-semibold text-white">8.91</p>
                        </div>
                        <div className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-2.5">
                            <p className="text-[10px] uppercase tracking-wider text-neutral-500">Expected</p>
                            <p className="text-base font-semibold text-white">2028</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Social Links - Github & LinkedIn as Buttons */}
        <div className="md:col-span-1 md:row-span-1 flex flex-col gap-3 justify-center">
            <a href="https://github.com/Tanish-Desai" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 rounded-xl border border-indigo-500 p-2.5 flex flex-row items-center justify-between text-white hover:bg-indigo-700 hover:scale-[1.02] transition-all group cursor-pointer shadow-md">
                <div className="flex items-center gap-3">
                    <Github className="w-15 h-20 group-hover:scale-110 transition-transform" />
                    <span className="font-bold text-base">GitHub</span>
                </div>
                <ArrowUpRight className="w-8 h-20 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>

            <a href="https://www.linkedin.com/in/tanish-desai-400199326/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 rounded-xl border border-blue-500 p-2.5 flex flex-row items-center justify-between text-white hover:bg-blue-700 hover:scale-[1.02] transition-all group cursor-pointer shadow-md">
                 <div className="flex items-center gap-3">
                    <Linkedin className="w-15 h-20 group-hover:scale-110 transition-transform" />
                     <span className="font-bold text-base">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-8 h-20 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
        </div>

        {/* Resume Button */}
        <a href="https://drive.google.com/file/d/1AVlqM7kz50XvC4UZneVZ9G6eUK13k3fu/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="md:col-span-1 md:row-span-1 bg-emerald-950 rounded-xl border border-emerald-800 p-2.5 flex flex-row items-center justify-between text-white hover:bg-emerald-900 hover:scale-[1.02] transition-all group cursor-pointer shadow-md">
            <div className="flex items-center gap-3">
                <FileText className="w-20 h-20 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-base">Resume</span>
            </div>
            <ArrowUpRight className="w-8 h-20 opacity-50 group-hover:opacity-100 transition-opacity" />
        </a>

         {/* Projects Button */}
         <Link href="/projects" className="md:col-span-1 md:row-span-1 bg-neutral-900 rounded-xl border border-neutral-800 p-2.5 flex flex-row items-center justify-between text-white hover:border-indigo-500/50 hover:scale-[1.02] transition-all group cursor-pointer shadow-md">
            <div className="flex items-center gap-3">
                <FolderOpen className="w-20 h-20 text-neutral-400 group-hover:text-indigo-400 transition-colors group-hover:scale-110 transition-transform" />
                <span className="font-bold text-base">Projects</span>
            </div>
            <ArrowUpRight className="w-8 h-20 opacity-50 group-hover:opacity-100 transition-opacity" />
        </Link>



        {/* Contact Form */}
        <div className="md:col-span-3 md:col-start-2 bg-neutral-100 text-neutral-900 rounded-3xl p-6 flex flex-row items-center justify-between overflow-hidden relative group">
            <div className="relative z-10 flex flex-col justify-center h-full w-full max-w-sm">
                 <h2 className="text-xl font-bold mb-1">Let's work together</h2>
                 <p className="text-neutral-600 text-sm mb-4">
                    Wanna reach out?
                 </p>
                 <a
                    href="mailto:tanshikode79@gmail.com"
                    className="inline-flex items-center gap-2 bg-black text-white rounded-full px-5 py-2.5 text-sm font-medium hover:scale-105 transition-transform w-fit"
                 >
                    <Send className="w-4 h-4" />
                    Send a message
                 </a>
            </div>
            <Mail className="hidden sm:block absolute -bottom-8 -right-8 w-40 h-40 text-neutral-200 rotate-12 group-hover:rotate-0 transition-transform duration-500 pointer-events-none" />
        </div>

      </div>
    </main>
  );
}

function TechIcon({ icon: Icon, label }: { icon: any, label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 group py-2 px-1 rounded-lg hover:bg-neutral-800/50 transition-colors w-full">
      <div className="p-2 rounded-lg bg-neutral-800 group-hover:bg-neutral-700 transition-colors">
         <Icon className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
      </div>
      <span className="text-[10px] uppercase font-bold text-neutral-500 group-hover:text-neutral-300 transition-colors truncate w-full text-center leading-none">{label}</span>
    </div>
  );
}


