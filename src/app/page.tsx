import { Github, Linkedin, Mail, Codepen, Terminal, Server, Database, Braces, Globe, Cpu, Code2, Send, ArrowUpRight, FileCode, Coffee, Gamepad2, Wifi, Battery, Keyboard } from "lucide-react";

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
           
           <div className="flex-1 flex flex-col justify-center gap-4">
                {/* Languages Group */}
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                    <TechIcon icon={FileCode} label="Java" />
                    <TechIcon icon={Cpu} label="C++" />
                    <TechIcon icon={Code2} label="Python" />
                    <TechIcon icon={Terminal} label="C" />
                    <TechIcon icon={Database} label="SQL" />
                    <TechIcon icon={Globe} label="HTML" />
                    <TechIcon icon={FileCode} label="CSS" />
                    <TechIcon icon={Braces} label="JS" />
                </div>

                {/* Divider */}
                <div className="h-px bg-neutral-800 w-full" />

                {/* Tools Group */}
                <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                    <TechIcon icon={Terminal} label="Linux" />
                    <TechIcon icon={Globe} label="Docker" />
                    <TechIcon icon={Database} label="MySQL" />
                    <TechIcon icon={Server} label="Ntwk" />
                    <TechIcon icon={Braces} label="Git" />
                    <TechIcon icon={Cpu} label="Arduino" />
                    <TechIcon icon={Gamepad2} label="CV" />
                </div>
           </div>
        </div>

        {/* DSA Stats - LeetCode Style */}
        <div className="md:col-span-1 md:row-span-1 bg-neutral-900 rounded-3xl border border-neutral-800 p-4 flex flex-col justify-between hover:border-neutral-700 transition-colors relative overflow-hidden">
            <div className="flex items-center justify-between mb-1 relative z-10">
                <span className="text-xs font-medium text-neutral-300">Education</span>
                <Globe className="w-4 h-4 text-neutral-500" />
            </div>
            <div className="flex flex-col justify-end h-full gap-1 relative z-10">
                <span className="text-lg font-bold text-white tracking-tighter">VIT Chennai</span>
                <span className="text-xs text-neutral-500 font-medium">B.Tech CSE</span>
                 <span className="text-[10px] text-neutral-400 mt-1">CGPA: 8.91</span>
                 <span className="text-[10px] text-neutral-500">Expected 2028</span>
            </div>
            
            <div className="space-y-2 relative z-10 mt-2">
               {/* Decorative bar */}
                <div className="w-full bg-neutral-800 h-1 rounded-full overflow-hidden flex">
                    <div className="bg-indigo-500 h-full w-[70%]" />
                </div>
            </div>
        </div>

        {/* Social Links - Github & LinkedIn as Buttons */}
        <div className="md:col-span-1 md:row-span-1 flex flex-col gap-2 justify-center">
            <a href="https://github.com/Tanish-Desai" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 rounded-xl border border-indigo-500 p-2.5 flex flex-row items-center justify-between text-white hover:bg-indigo-700 hover:scale-[1.02] transition-all group cursor-pointer shadow-md">
                <div className="flex items-center gap-3">
                    <Github className="w-20 h-20 group-hover:scale-110 transition-transform" />
                    <span className="font-bold text-sm">GitHub</span>
                </div>
                <ArrowUpRight className="w-8 h-20 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>

            <a href="https://www.linkedin.com/in/tanish-desai-400199326/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 rounded-xl border border-blue-500 p-2.5 flex flex-row items-center justify-between text-white hover:bg-blue-700 hover:scale-[1.02] transition-all group cursor-pointer shadow-md">
                 <div className="flex items-center gap-3">
                    <Linkedin className="w-20 h-20 group-hover:scale-110 transition-transform" />
                     <span className="font-bold text-sm">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-8 h-20 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
        </div>

         {/* More Projects List (Compact) */}
         <div className="md:col-span-2 md:row-span-1 bg-neutral-900 rounded-3xl border border-neutral-800 p-6 flex flex-col gap-2 hover:border-neutral-700 transition-colors overflow-y-auto">
            <h2 className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                <Codepen className="w-4 h-4" /> Other Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <ProjectItem title="Secure RAG Engineering" lang="Research" href="#" />
                <ProjectItem title="SQL Assignment Automator" lang="Python" href="#" />
                <ProjectItem title="Network Load Balancer" lang="C++ / Systems" href="#" />
                <ProjectItem title="Polyglot File Gen" lang="Python / Sec" href="https://github.com/Tanish-Desai/PolyglotGen" />
            </div>
        </div>

        {/* Main Project Display */}
        <div className="md:col-span-2 bg-neutral-900 rounded-3xl border border-neutral-800 p-6 flex flex-col justify-center hover:border-neutral-700 transition-colors group">
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center border border-neutral-700 flex-shrink-0">
                        <Terminal className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white leading-tight group-hover:text-indigo-400 transition-colors">AI Exam Formatter Tool</h3>
                        <p className="text-neutral-500 text-xs font-mono">Python • Prompt Engineering</p>
                    </div>
                </div>
                <a href="#" target="_blank" className="p-2 rounded-full bg-neutral-800 hover:bg-white hover:text-black transition-colors flex-shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                </a>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed line-clamp-2">
                An AI-powered utility designed to ingest question banks and automatically format them into standardized examination templates.
            </p>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2 bg-neutral-100 text-neutral-900 rounded-3xl p-6 flex flex-row items-center justify-between overflow-hidden relative group">
            <div className="relative z-10 flex flex-col justify-center h-full w-full max-w-sm">
                 <h2 className="text-xl font-bold mb-1">Let's work together</h2>
                 <p className="text-neutral-600 text-sm mb-4">
                    Interested in embedded systems? Reach out.
                 </p>
                 <form className="flex gap-2">
                    <input 
                        type="email" 
                        placeholder="your@email.com" 
                        className="bg-white border border-neutral-300 rounded-full px-4 py-2 w-full text-sm outline-none focus:ring-2 focus:ring-neutral-400 transition-all placeholder:text-neutral-500"
                    />
                    <button className="bg-black text-white rounded-full w-10 h-10 flex-shrink-0 flex items-center justify-center hover:scale-105 transition-transform">
                        <Send className="w-4 h-4" />
                    </button>
                 </form>
            </div>
            <Mail className="hidden sm:block absolute -bottom-8 -right-8 w-40 h-40 text-neutral-200 rotate-12 group-hover:rotate-0 transition-transform duration-500 pointer-events-none" />
        </div>

      </div>
    </main>
  );
}

function TechIcon({ icon: Icon, label }: { icon: any, label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 group p-2 rounded-lg hover:bg-neutral-800/50 transition-colors">
      <div className="p-2 rounded-lg bg-neutral-800 group-hover:bg-neutral-700 transition-colors">
         <Icon className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
      </div>
      <span className="text-[10px] uppercase font-bold text-neutral-500 group-hover:text-neutral-300 transition-colors">{label}</span>
    </div>
  );
}

function ProjectItem({ title, lang, href }: { title: string, lang: string, href: string }) {
    return (
        <a href={href} target={href !== "#" ? "_blank" : undefined} className="flex items-center justify-between p-3 rounded-lg bg-neutral-800/30 hover:bg-neutral-800 hover:scale-[1.02] transition-all border border-transparent hover:border-neutral-700 group">
            <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/50 group-hover:bg-indigo-400 transition-colors"></div>
                <span className="font-medium text-neutral-300 text-sm group-hover:text-white transition-colors">{title}</span>
            </div>
            <div className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-500 font-mono border border-neutral-700 group-hover:border-neutral-600 transition-colors">{lang}</div>
        </a>
    )
}
