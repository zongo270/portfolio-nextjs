"use client";

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { 
  ArrowRight, Download, MapPin, Languages, ShieldCheck, CheckCircle2, 
  Cloud, ShieldAlert, Database, Code2, Terminal, Network, ExternalLink, 
  Layers, CloudCog, Shield, Award, Scan, Cpu, Radio, Copy, Check, X, Printer, ChevronRight, GitMerge, Lock, ListFilter, Eye, Github, Linkedin, FileText
} from 'lucide-react';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'security' | 'dev' | 'tools'>('all');
  const [modalOpen, setModalOpen] = useState<'project3' | 'project2' | 'gateway' | 'resume' | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Background Ambient Glow & Grid */}
      <div className="fixed inset-0 grid-pattern pointer-events-none z-0"></div>
      <div className="fixed -top-40 -left-40 w-96 h-96 bg-cyber-blue/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed top-1/3 -right-40 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed -bottom-40 left-1/3 w-96 h-96 bg-cyber-emerald/10 rounded-full blur-3xl pointer-events-none"></div>

      <Navigation onOpenResume={() => setModalOpen('resume')} />

      <main className="z-10 flex-grow">
        {/* HERO */}
        <section id="hero" className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-cyber-cyan/30 bg-cyber-cyan/5 text-cyber-cyan text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-ping"></span>
                  <span>SENIOR B.S. INFORMATION TECHNOLOGY @ UCF</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                  Defending Systems. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-sky-400 to-cyber-emerald">
                    Architecting Cloud Security.
                  </span>
                </h1>

                <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
                  I am <strong className="text-slate-100 font-semibold">Serge-Antoine Keou Ketchiozo</strong>, a systems technologist and aspiring Cloud Security Engineer specializing in multi-tier database architectures, defense-in-depth security, and cloud scalability. Equipped with verified AWS and Harvard CS50 certifications and field cybersecurity operations experience.
                </p>

                <div className="flex flex-wrap gap-4 pt-2 font-mono text-xs">
                  <a href="#projects" className="px-6 py-3 rounded-md bg-cyber-cyan text-cyber-950 font-bold hover:bg-cyan-300 transition-all flex items-center space-x-2 shadow-lg shadow-cyber-cyan/20">
                    <span>Inspect Architecture</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <button onClick={() => setModalOpen('resume')} className="px-6 py-3 rounded-md border border-slate-700 bg-cyber-900/80 text-slate-300 hover:border-slate-500 hover:text-white transition-all flex items-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Resume / CV</span>
                  </button>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyber-cyan" />
                    <span>Orlando, Florida</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Languages className="w-4 h-4 text-cyber-emerald" />
                    <span>English & French (Bilingual)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-sky-400" />
                    <span>NIST CSF & Zero Trust Ready</span>
                  </div>
                </div>
              </div>

              {/* Identity Telemetry Terminal */}
              <div className="lg:col-span-5">
                <div className="glass-panel rounded-2xl p-6 border-cyber-cyan/20 relative shadow-2xl">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                    <div className="flex items-center space-x-2 font-mono text-xs text-slate-400">
                      <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                      <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                      <span className="ml-2 text-slate-300 font-semibold">identity.profile.sh</span>
                    </div>
                    <span className="text-[10px] font-mono bg-cyber-emerald/10 text-cyber-emerald border border-cyber-emerald/30 px-2 py-0.5 rounded">AUTHENTICATED</span>
                  </div>

                  <div className="font-mono text-xs space-y-3 leading-relaxed text-slate-300">
                    <p><span className="text-cyber-cyan">$</span> whoami</p>
                    <p className="text-slate-400 pl-4">Serge-Antoine Keou Ketchiozo</p>

                    <p><span className="text-cyber-cyan">$</span> cat university_status.json</p>
                    <div className="bg-cyber-950/80 p-3 rounded border border-slate-800/80 pl-4 text-sky-300">
                      &#123;<br />
                      &nbsp;&nbsp;&quot;institution&quot;: &quot;University of Central Florida&quot;,<br />
                      &nbsp;&nbsp;&quot;degree&quot;: &quot;B.S. in Information Technology&quot;,<br />
                      &nbsp;&nbsp;&quot;status&quot;: &quot;Senior Standing&quot;,<br />
                      &nbsp;&nbsp;&quot;current_gpa&quot;: &quot;3.1&quot;,<br />
                      &nbsp;&nbsp;&quot;expected_grad&quot;: &quot;December 2026&quot;<br />
                      &#125;
                    </div>

                    <p><span className="text-cyber-cyan">$</span> cat credentials_active.list</p>
                    <ul className="pl-4 space-y-1 text-slate-400">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyber-emerald" />
                        AWS Academy Graduate: Cloud Architecting
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyber-emerald" />
                        AWS Academy Graduate: Cloud Foundations
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyber-emerald" />
                        Harvard University CS50x Certificate
                      </li>
                    </ul>

                    <p className="pt-2"><span className="text-cyber-cyan">$</span> uptime --mission</p>
                    <p className="text-cyber-emerald pl-4 font-semibold">Building resilient, zero-trust cloud infrastructure.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: SKILLS */}
        <section id="about" className="py-16 border-t border-slate-900 bg-cyber-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <h2 className="text-xs font-mono uppercase tracking-widest text-cyber-cyan mb-2">Technical Competencies</h2>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Systems Engineering & Cloud Core</h3>
              </div>
              <div className="mt-4 md:mt-0 flex gap-2 font-mono text-xs">
                {(['all', 'security', 'dev', 'tools'] as const).map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1.5 rounded transition-all capitalize ${
                      activeCategory === cat
                        ? 'bg-cyber-800 border border-cyber-cyan text-cyber-cyan'
                        : 'bg-cyber-900/60 border border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {cat === 'dev' ? 'Software & DB' : cat === 'tools' ? 'Infrastructure' : cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {(activeCategory === 'all' || activeCategory === 'security') && (
                <>
                  <div className="glass-panel rounded-xl p-6 glass-panel-hover transition-all">
                    <div className="w-10 h-10 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 flex items-center justify-center text-cyber-cyan mb-4">
                      <Cloud className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-white text-base mb-1">Cloud Infrastructure & AWS</h4>
                    <p className="text-slate-400 text-xs leading-relaxed mb-4">
                      Hands-on multi-tier architecture design in AWS VPC, EC2, S3, IAM granular policies, Route53, and cost/resilience optimization.
                    </p>
                    <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                      <span className="px-2 py-0.5 rounded bg-slate-800/80 text-cyan-300">AWS IAM</span>
                      <span className="px-2 py-0.5 rounded bg-slate-800/80 text-cyan-300">VPC Peering</span>
                      <span className="px-2 py-0.5 rounded bg-slate-800/80 text-cyan-300">S3 Security</span>
                      <span className="px-2 py-0.5 rounded bg-slate-800/80 text-cyan-300">CloudWatch</span>
                    </div>
                  </div>

                  <div className="glass-panel rounded-xl p-6 glass-panel-hover transition-all">
                    <div className="w-10 h-10 rounded-lg bg-cyber-emerald/10 border border-cyber-emerald/30 flex items-center justify-center text-cyber-emerald mb-4">
                      <ShieldAlert className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-white text-base mb-1">Cybersecurity & Forensics</h4>
                    <p className="text-slate-400 text-xs leading-relaxed mb-4">
                      CVSS vulnerability analysis, packet inspection, incident triage, BitLocker system deployments, and endpoint defense.
                    </p>
                    <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                      <span className="px-2 py-0.5 rounded bg-slate-800/80 text-emerald-300">Wireshark</span>
                      <span className="px-2 py-0.5 rounded bg-slate-800/80 text-emerald-300">CVSS v3</span>
                      <span className="px-2 py-0.5 rounded bg-slate-800/80 text-emerald-300">FTK Imager</span>
                      <span className="px-2 py-0.5 rounded bg-slate-800/80 text-emerald-300">Zero Trust</span>
                    </div>
                  </div>
                </>
              )}

              {(activeCategory === 'all' || activeCategory === 'dev') && (
                <>
                  <div className="glass-panel rounded-xl p-6 glass-panel-hover transition-all">
                    <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-4">
                      <Database className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-white text-base mb-1">Database Systems & JDBC</h4>
                    <p className="text-slate-400 text-xs leading-relaxed mb-4">
                      Two-tier client-server enterprise architecture, relational modeling, complex SQL schemas, and Java Swing interfaces with PreparedStatements.
                    </p>
                    <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                      <span className="px-2 py-0.5 rounded bg-slate-800/80 text-sky-300">MySQL Server</span>
                      <span className="px-2 py-0.5 rounded bg-slate-800/80 text-sky-300">Java JDBC</span>
                      <span className="px-2 py-0.5 rounded bg-slate-800/80 text-sky-300">Java Swing</span>
                      <span className="px-2 py-0.5 rounded bg-slate-800/80 text-sky-300">Relational DB</span>
                    </div>
                  </div>

                  <div className="glass-panel rounded-xl p-6 glass-panel-hover transition-all">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-white text-base mb-1">Software Development</h4>
                    <p className="text-slate-400 text-xs leading-relaxed mb-4">
                      Object-oriented architecture and algorithms in C, Java, Python, and modern web application logic with HTML5, CSS3, and JavaScript.
                    </p>
                    <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                      <span className="px-2 py-0.5 rounded bg-slate-800/80 text-indigo-300">Java Core</span>
                      <span className="px-2 py-0.5 rounded bg-slate-800/80 text-indigo-300">C Language</span>
                      <span className="px-2 py-0.5 rounded bg-slate-800/80 text-indigo-300">Python 3</span>
                      <span className="px-2 py-0.5 rounded bg-slate-800/80 text-indigo-300">JavaScript</span>
                    </div>
                  </div>
                </>
              )}

              {(activeCategory === 'all' || activeCategory === 'tools') && (
                <>
                  <div className="glass-panel rounded-xl p-6 glass-panel-hover transition-all">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                      <Terminal className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-white text-base mb-1">Operating Systems & CLI</h4>
                    <p className="text-slate-400 text-xs leading-relaxed mb-4">
                      Dual-environment administration across Windows 11 with WSL2, Ubuntu Server, Kali Linux security testing environments, and PowerShell scripting.
                    </p>
                    <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                      <span className="px-2 py-0.5 rounded bg-slate-800/80 text-amber-300">WSL2 / Linux</span>
                      <span className="px-2 py-0.5 rounded bg-slate-800/80 text-amber-300">Bash / Shell</span>
                      <span className="px-2 py-0.5 rounded bg-slate-800/80 text-amber-300">PowerShell LPO</span>
                      <span className="px-2 py-0.5 rounded bg-slate-800/80 text-amber-300">Kali Linux</span>
                    </div>
                  </div>

                  <div className="glass-panel rounded-xl p-6 glass-panel-hover transition-all">
                    <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 mb-4">
                      <Network className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-white text-base mb-1">Networking & Protocols</h4>
                    <p className="text-slate-400 text-xs leading-relaxed mb-4">
                      TCP/IP stack, subnets, CIDR notation, DNS hierarchy, firewall access control lists (ACLs), TLS handshakes, and network traffic modeling.
                    </p>
                    <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                      <span className="px-2 py-0.5 rounded bg-slate-800/80 text-pink-300">TCP/IP</span>
                      <span className="px-2 py-0.5 rounded bg-slate-800/80 text-pink-300">Subnetting</span>
                      <span className="px-2 py-0.5 rounded bg-slate-800/80 text-pink-300">DNS/DHCP</span>
                      <span className="px-2 py-0.5 rounded bg-slate-800/80 text-pink-300">Routing Protocols</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* SECTION 2: ACADEMICS */}
        <section id="education" className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyber-cyan mb-2">02. Academic Foundation</h2>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">University Degree &amp; Specialized Coursework</h3>
              <p className="text-slate-400 text-sm mt-2 max-w-2xl">
                Integrating computational theory, network security, enterprise database systems, and cloud management.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* UCF */}
              <div className="lg:col-span-8 glass-panel rounded-2xl p-8 border-cyber-cyan/30 relative overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400 shrink-0 font-bold font-mono">
                      UCF
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-yellow-400/10 text-yellow-300 border border-yellow-400/20 text-[11px] font-mono mb-1">
                        B.S. INFORMATION TECHNOLOGY
                      </div>
                      <h4 className="text-xl font-bold text-white">University of Central Florida</h4>
                      <p className="text-slate-400 text-xs font-mono">College of Engineering and Computer Science &bull; Orlando, FL</p>
                    </div>
                  </div>

                  <div className="sm:text-right font-mono text-xs">
                    <span className="inline-block px-3 py-1 rounded-full bg-cyber-emerald/10 border border-cyber-emerald/30 text-cyber-emerald font-semibold mb-1">
                      GPA: 3.1
                    </span>
                    <p className="text-slate-400">Senior Standing &bull; Exp: Dec 2026</p>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-slate-300 leading-relaxed font-light mb-6">
                  <p>
                    The <strong>Bachelor of Science in Information Technology</strong> at UCF prepares students to design, implement, configure, and secure mission-critical computing infrastructure.
                  </p>
                  <div className="p-4 rounded-xl bg-cyber-950/70 border border-slate-800/80 text-xs font-mono space-y-2">
                    <div className="text-cyber-cyan font-semibold flex items-center gap-2">
                      <Layers className="w-4 h-4" />
                      <span>Key Competency Tracks Studied at UCF:</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-400 pt-1">
                      <div>&bull; Network Security &amp; Privacy Architecture</div>
                      <div>&bull; Two-Tier &amp; Distributed Database Engineering</div>
                      <div>&bull; Operating System Principles &amp; WSL2/Linux</div>
                      <div>&bull; Enterprise Systems Analysis &amp; Design</div>
                      <div>&bull; Discrete Structures &amp; Algorithmics</div>
                      <div>&bull; Technical Communication &amp; IT Project Mgmt</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800/80 text-xs font-mono">
                  <a href="https://www.ucf.edu/degree/information-technology-bs/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-cyber-cyan hover:underline">
                    <span>View UCF Official Degree Catalog</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-slate-500">Accredited by ABET</span>
                </div>
              </div>

              {/* EFSC & High School */}
              <div className="lg:col-span-4 space-y-6">
                <div className="glass-panel rounded-2xl p-6 border-emerald-500/30">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      ASSOCIATE DEGREE (A.S.)
                    </span>
                    <span className="text-xs font-mono text-slate-400">May 2023</span>
                  </div>
                  <h4 className="font-bold text-white text-base mb-1">Eastern Florida State College</h4>
                  <p className="text-xs text-cyber-emerald font-mono mb-2">Computer Programming and Analysis</p>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    Completed core software foundations, object-oriented application design (Java, C#, C++, Python), relational data design, and client-side web development.
                  </p>
                  <div className="text-[11px] font-mono text-slate-400 border-t border-slate-800/80 pt-3">
                    <a href="https://www.easternflorida.edu/academics/computer-programming-and-analysis/" target="_blank" rel="noopener noreferrer" className="text-cyber-cyan hover:underline inline-flex items-center gap-1">
                      <span>EFSC Curriculum Catalog</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="glass-panel rounded-2xl p-6 border-slate-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      BACCALAURÉAT
                    </span>
                    <span className="text-xs font-mono text-slate-400">July 2019</span>
                  </div>
                  <h4 className="font-bold text-white text-sm">Lycée Polyvalent de Cachan</h4>
                  <p className="text-xs text-slate-400 font-mono">Cachan, France</p>
                  <p className="text-slate-400 text-xs mt-2">
                    French High School Diploma with scientific and technical concentration. Bilingual fluency in French and English.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: CERTIFICATIONS */}
        <section id="credentials" className="py-16 bg-cyber-900/40 border-y border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <h2 className="text-xs font-mono uppercase tracking-widest text-cyber-cyan mb-2">03. Validated Competency</h2>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Verified Certifications &amp; Digital Badges</h3>
              </div>
              <p className="text-slate-400 text-xs font-mono mt-2 md:mt-0">Click any credential to verify directly on Credly or edX</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="https://www.credly.com/badges/a5a0310a-7a22-44f0-96bf-ec8ed261aae7/linked_in_profile" target="_blank" rel="noopener noreferrer" className="glass-panel rounded-2xl p-6 glass-panel-hover transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                      <CloudCog className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-cyber-emerald/10 text-cyber-emerald border border-cyber-emerald/30 font-semibold">
                      VERIFIED BADGE
                    </span>
                  </div>
                  <span className="text-xs font-mono text-amber-400">AWS Academy</span>
                  <h4 className="text-lg font-bold text-white group-hover:text-cyber-cyan transition-colors mt-1 mb-2">
                    Cloud Architecting
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    Demonstrated competency in designing highly available, cost-effective, decoupled, and secure cloud environments on Amazon Web Services.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-cyber-cyan transition-colors">
                  <span>Issuer: Amazon Web Services</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>

              <a href="https://www.credly.com/badges/d9fb8645-05a0-434b-a8a6-154af4f26179/linked_in_profile" target="_blank" rel="noopener noreferrer" className="glass-panel rounded-2xl p-6 glass-panel-hover transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:scale-105 transition-transform">
                      <Shield className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-cyber-emerald/10 text-cyber-emerald border border-cyber-emerald/30 font-semibold">
                      VERIFIED BADGE
                    </span>
                  </div>
                  <span className="text-xs font-mono text-orange-400">AWS Academy</span>
                  <h4 className="text-lg font-bold text-white group-hover:text-cyber-cyan transition-colors mt-1 mb-2">
                    Cloud Foundations
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    Validated foundational knowledge of AWS cloud security principles, compliance frameworks, billing, storage, compute, and networking fundamentals.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-cyber-cyan transition-colors">
                  <span>Issuer: Amazon Web Services</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>

              <a href="https://courses.edx.org/certificates/e45aa3ed6553463681b3da7a0de2196d" target="_blank" rel="noopener noreferrer" className="glass-panel rounded-2xl p-6 glass-panel-hover transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 group-hover:scale-105 transition-transform">
                      <Award className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-cyber-emerald/10 text-cyber-emerald border border-cyber-emerald/30 font-semibold">
                      VERIFIED CERTIFICATE
                    </span>
                  </div>
                  <span className="text-xs font-mono text-red-400">HarvardX / edX</span>
                  <h4 className="text-lg font-bold text-white group-hover:text-cyber-cyan transition-colors mt-1 mb-2">
                    CS50x: Computer Science
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    Completed rigorous 12-week intensive computer science program covering memory management, low-level pointers in C, Python, algorithms, data structures, and web development.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-cyber-cyan transition-colors">
                  <span>Issuer: Harvard University</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 4: PROJECTS */}
        <section id="projects" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyber-cyan mb-2">04. Engineering Portfolio</h2>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Featured Systems &amp; Security Projects</h3>
            </div>

            {/* Project 0: CNT 4714 Project 3 */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border-cyber-cyan/40 relative overflow-hidden">
              <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                <div className="space-y-4 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono font-semibold">
                      ENTERPRISE DATABASE ARCHITECTURE
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-cyber-emerald/10 border border-cyber-emerald/30 text-cyber-emerald text-xs font-mono">
                      CNT 4714 FALL 2026
                    </span>
                  </div>

                  <h4 className="text-2xl font-bold text-white tracking-tight">
                    Two-Tier Client-Server Database System with Dual GUIs &amp; RBAC Telemetry
                  </h4>

                  <p className="text-slate-300 text-sm leading-relaxed font-light">
                    Engineered an enterprise-grade two-tier client-server relational database management architecture in Java Swing utilizing JDBC. Features role-based access control (RBAC) across root and restricted client users (<code className="text-cyber-cyan">client1</code>, <code className="text-cyber-cyan">client2</code>), paired with an automated background telemetry subsystem (<code className="text-cyber-cyan">project3app</code>) logging query execution counts into a segregated auditing schema (<code className="text-cyber-cyan">operationslog</code>) accessed by a dedicated accounting console (<code className="text-cyber-cyan">theaccountant</code>).
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-slate-400 pt-2">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyber-emerald" />
                      <span>PreparedStatement Sanitization &amp; Injection Defense</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyber-emerald" />
                      <span>Pre-Socket Properties Credential Validation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyber-emerald" />
                      <span>Dual GUI: Client Console + Specialized Audit App</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyber-emerald" />
                      <span>Multi-Schema Segregation (project3, bikedb, opslog)</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2 font-mono text-[11px]">
                    <span className="px-2.5 py-1 rounded bg-slate-800 text-cyan-300 border border-slate-700">Java Swing GUI</span>
                    <span className="px-2.5 py-1 rounded bg-slate-800 text-cyan-300 border border-slate-700">JDBC 9.0</span>
                    <span className="px-2.5 py-1 rounded bg-slate-800 text-cyan-300 border border-slate-700">MySQL Server</span>
                    <span className="px-2.5 py-1 rounded bg-slate-800 text-cyan-300 border border-slate-700">Fine-Grained RBAC</span>
                  </div>
                </div>

                <div className="w-full lg:w-72 shrink-0 bg-cyber-950/80 p-5 rounded-xl border border-slate-800 text-center font-mono space-y-3">
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider">Project Telemetry</div>
                  <div className="text-3xl font-extrabold text-cyber-cyan">100 / 100</div>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    Tested across 43 verified execution states &amp; transaction logging runs.
                  </p>
                  <button onClick={() => setModalOpen('project3')} className="w-full py-2.5 rounded bg-cyber-cyan text-cyber-950 text-xs font-bold hover:bg-cyan-300 transition-all flex items-center justify-center space-x-1.5 shadow-md shadow-cyber-cyan/10">
                    <Scan className="w-4 h-4" />
                    <span>View System Architecture &amp; RBAC Matrix</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Project 0.5: CNT 4714 Project 2 */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border-cyber-emerald/40 relative overflow-hidden">
              <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                <div className="space-y-4 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-cyber-emerald/10 border border-cyber-emerald/30 text-cyber-emerald text-xs font-mono font-semibold">
                      CONCURRENT SYSTEMS &amp; REGULATORY TELEMETRY
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono">
                      CNT 4714 PROJECT 2
                    </span>
                  </div>

                  <h4 className="text-2xl font-bold text-white tracking-tight">
                    Multithreaded Banking &amp; Regulatory Currency Transaction Simulator
                  </h4>

                  <p className="text-slate-300 text-sm leading-relaxed font-light">
                    Architected a high-throughput, multi-agent concurrent banking simulator in Java utilizing <code className="text-cyber-cyan">java.util.concurrent.locks.ReentrantLock</code> and explicit condition signaling. Orchestrated 19 concurrent thread agents over shared accounts, enforcing mutual exclusion, deadlock avoidance, and automated Money Laundering Suppression Act compliance.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-slate-400 pt-2">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyber-emerald" />
                      <span>Explicit ReentrantLock Mutual Exclusion (No Monitors)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyber-emerald" />
                      <span>Automated CTR Flagging (Withdrawals &gt; $90, Deposits &gt; $450)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyber-emerald" />
                      <span>Multi-Account Simultaneous Deadlock-Free Atomic Audits</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyber-emerald" />
                      <span>Real-time transactions.tsv Regulatory Ledger</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2 font-mono text-[11px]">
                    <span className="px-2.5 py-1 rounded bg-slate-800 text-emerald-300 border border-slate-700">Java Concurrency</span>
                    <span className="px-2.5 py-1 rounded bg-slate-800 text-emerald-300 border border-slate-700">ReentrantLocks &amp; Conditions</span>
                    <span className="px-2.5 py-1 rounded bg-slate-800 text-emerald-300 border border-slate-700">ThreadPoolExecutor</span>
                  </div>
                </div>

                <div className="w-full lg:w-72 shrink-0 bg-cyber-950/80 p-5 rounded-xl border border-slate-800 text-center font-mono space-y-3">
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider">Concurrency Metrics</div>
                  <div className="text-3xl font-extrabold text-cyber-emerald">750+ Txs</div>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    Verified across 19 cooperating agents with zero deadlocks or lost updates.
                  </p>
                  <button onClick={() => setModalOpen('project2')} className="w-full py-2.5 rounded bg-cyber-emerald text-cyber-950 text-xs font-bold hover:bg-emerald-300 transition-all flex items-center justify-center space-x-1.5 shadow-md shadow-cyber-emerald/10">
                    <Cpu className="w-4 h-4" />
                    <span>View Concurrency Architecture &amp; Telemetry</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Project 1: AI Gateway */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border-cyber-cyan/30 relative overflow-hidden">
              <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                <div className="space-y-4 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono font-semibold">
                      CLOUD SECURITY INFRASTRUCTURE
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-cyber-emerald/10 border border-cyber-emerald/30 text-cyber-emerald text-xs font-mono">
                      ZERO TRUST
                    </span>
                  </div>

                  <h4 className="text-2xl font-bold text-white tracking-tight">
                    Hardened Multi-Tenant AI Gateway &amp; Zero-Trust Reverse Proxy
                  </h4>

                  <p className="text-slate-300 text-sm leading-relaxed font-light">
                    Designed a production-ready asynchronous API reverse proxy for multi-tenant microservices. Integrates automated PII redaction (Presidio Engine), token-bucket rate limiting via Redis, structured audit logging, and prompt-injection inspection.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 font-mono text-[11px]">
                    <span className="px-2.5 py-1 rounded bg-slate-800 text-cyan-300 border border-slate-700">Python 3.11</span>
                    <span className="px-2.5 py-1 rounded bg-slate-800 text-cyan-300 border border-slate-700">FastAPI</span>
                    <span className="px-2.5 py-1 rounded bg-slate-800 text-cyan-300 border border-slate-700">Redis</span>
                    <span className="px-2.5 py-1 rounded bg-slate-800 text-cyan-300 border border-slate-700">Docker</span>
                  </div>
                </div>

                <div className="w-full lg:w-72 shrink-0 bg-cyber-950/80 p-5 rounded-xl border border-slate-800 text-center font-mono space-y-3">
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider">Gateway Latency</div>
                  <div className="text-3xl font-extrabold text-cyber-cyan">&lt; 14ms</div>
                  <button onClick={() => setModalOpen('gateway')} className="w-full py-2.5 rounded bg-cyber-800 border border-cyber-cyan/40 text-cyber-cyan text-xs font-bold hover:bg-cyber-700 transition-all flex items-center justify-center space-x-1.5">
                    <Eye className="w-4 h-4" />
                    <span>Architecture Deep Dive</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Project 2: Nile Dot Com */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border-slate-800 relative">
              <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                <div className="space-y-4 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono font-semibold">
                      ENTERPRISE JAVA APPLICATION
                    </span>
                  </div>

                  <h4 className="text-2xl font-bold text-white tracking-tight">
                    Nile Dot Com E-Store Application &amp; Automated Ledger System
                  </h4>

                  <p className="text-slate-300 text-sm leading-relaxed font-light">
                    Constructed a standalone Java GUI desktop application managing shopping cart states, item lookups, automated subtotaling with tax calculation, and synchronized transaction recording in an audit-ready CSV ledger.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 font-mono text-[11px]">
                    <span className="px-2.5 py-1 rounded bg-slate-800 text-sky-300 border border-slate-700">Java Swing</span>
                    <span className="px-2.5 py-1 rounded bg-slate-800 text-sky-300 border border-slate-700">AWT Event Dispatch</span>
                    <span className="px-2.5 py-1 rounded bg-slate-800 text-sky-300 border border-slate-700">CSV Ledger</span>
                  </div>
                </div>

                <div className="w-full lg:w-72 shrink-0 bg-cyber-950/80 p-5 rounded-xl border border-slate-800 text-center font-mono space-y-3">
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider">Design Paradigm</div>
                  <div className="text-lg font-bold text-white">MVC Architecture</div>
                </div>
              </div>
            </div>

            {/* Project 3: Harvard CS50 */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border-slate-800 relative">
              <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                <div className="space-y-4 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-semibold">
                      HARVARD CS50x FINAL CAPSTONE
                    </span>
                  </div>

                  <h4 className="text-2xl font-bold text-white tracking-tight">
                    World Capitals Interactive Assessment Engine
                  </h4>

                  <p className="text-slate-300 text-sm leading-relaxed font-light">
                    Interactive global geography assessment engine developed as the capstone for Harvard's CS50x. Implements randomized question queues, multiple difficulty tiers, real-time timers, and scoring models.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 font-mono text-[11px]">
                    <span className="px-2.5 py-1 rounded bg-slate-800 text-red-300 border border-slate-700">JavaScript</span>
                    <span className="px-2.5 py-1 rounded bg-slate-800 text-red-300 border border-slate-700">HTML5 / CSS3</span>
                    <span className="px-2.5 py-1 rounded bg-slate-800 text-red-300 border border-slate-700">DOM Engine</span>
                  </div>
                </div>

                <div className="w-full lg:w-72 shrink-0 bg-cyber-950/80 p-5 rounded-xl border border-slate-800 text-center font-mono space-y-3">
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider">Repository</div>
                  <a href="https://github.com/zongo270/my-cs50-project" target="_blank" rel="noopener noreferrer" className="w-full py-2.5 rounded bg-cyber-800 border border-red-500/40 text-red-300 text-xs font-bold hover:bg-cyber-700 transition-all flex items-center justify-center space-x-1.5">
                    <Github className="w-4 h-4" />
                    <span>Inspect Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: EXPERIENCE */}
        <section id="experience" className="py-16 bg-cyber-900/30 border-t border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyber-cyan mb-2">05. Professional Track Record</h2>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Field Engineering &amp; Operational Roles</h3>
            </div>

            <div className="relative border-l-2 border-slate-800 ml-4 md:ml-8 pl-6 md:pl-8 space-y-12">
              <div className="relative group">
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-cyber-950 border-2 border-cyber-cyan group-hover:bg-cyber-cyan transition-colors"></div>

                <div className="glass-panel rounded-2xl p-6 sm:p-8 border-cyber-cyan/30">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <span className="text-xs font-mono text-cyber-cyan font-semibold">Cybastion Cybersecurity</span>
                      <h4 className="text-xl font-bold text-white">Cybersecurity Engineering Intern</h4>
                    </div>
                    <div className="text-xs font-mono text-slate-400 sm:text-right">
                      <span className="px-2 py-0.5 rounded bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/20">Abidjan, Côte d'Ivoire</span>
                      <div className="mt-1">July 2025 &ndash; August 2025</div>
                    </div>
                  </div>

                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5" />
                      <span><strong>Vulnerability Management &amp; CVSS:</strong> Executed vulnerability scans across endpoints and analyzed risks prioritizing CVSS v3 levels.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5" />
                      <span><strong>Intrusion Analysis:</strong> Triaged centralized logs to identify Indicators of Compromise (IoCs), brute force, and phishing attempts.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5" />
                      <span><strong>Secure Baselines:</strong> Automated Local Policy Object (LPO) USB device restrictions via PowerShell, managing BitLocker encryption keys.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5" />
                      <span><strong>Forensics &amp; Packet Inspection:</strong> Executed device image captures with FTK Imager and performed deep packet analysis using Wireshark.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-cyber-950 border-2 border-slate-600 group-hover:border-white transition-colors"></div>

                <div className="glass-panel rounded-2xl p-6 sm:p-8 border-slate-800">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <span className="text-xs font-mono text-slate-400 font-semibold">Cora Supermarché</span>
                      <h4 className="text-lg font-bold text-white">Logistics &amp; Customer Inventory Associate</h4>
                    </div>
                    <div className="text-xs font-mono text-slate-400 sm:text-right">
                      <span>Cachan, France</span>
                      <div className="mt-1">September 2020 &ndash; October 2020</div>
                    </div>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                      <span>Managed shelf rotation, inventory tracking, and customer inquiries in French.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: CONTACT */}
        <section id="contact" className="py-20 relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-cyber-cyan/30 bg-cyber-cyan/5 text-cyber-cyan text-xs font-mono mb-4">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>COMMUNICATION CONSOLE READY</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Initiate Engineering Contact
            </h3>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8 font-light">
              Open to Cloud Security Engineering, Cloud Architecture, DevOps, and Enterprise Systems roles.
            </p>

            <div className="glass-panel rounded-2xl p-8 max-w-3xl mx-auto border-cyber-cyan/30 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
                <div className="p-4 rounded-xl bg-cyber-950/80 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <span className="text-slate-500 text-[10px] block mb-1">PERSONAL UPLINK</span>
                    <span className="text-slate-200 select-all font-semibold break-all">keouksa@gmail.com</span>
                  </div>
                  <button onClick={() => copyToClipboard('keouksa@gmail.com', 'email1')} className="mt-3 px-2.5 py-1.5 rounded bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan hover:bg-cyber-cyan hover:text-cyber-950 transition-all flex items-center justify-center gap-1.5">
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedKey === 'email1' ? 'Copied! ✓' : 'Copy Email'}</span>
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-cyber-950/80 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <span className="text-slate-500 text-[10px] block mb-1">UCF ACADEMIC UPLINK</span>
                    <span className="text-slate-200 select-all font-semibold break-all">se337943@ucf.edu</span>
                  </div>
                  <button onClick={() => copyToClipboard('se337943@ucf.edu', 'email2')} className="mt-3 px-2.5 py-1.5 rounded bg-cyber-emerald/10 border border-cyber-emerald/30 text-cyber-emerald hover:bg-cyber-emerald hover:text-cyber-950 transition-all flex items-center justify-center gap-1.5">
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedKey === 'email2' ? 'Copied! ✓' : 'Copy Email'}</span>
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-cyber-950/80 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <span className="text-slate-500 text-[10px] block mb-1">TELEPHONY / DIRECT</span>
                    <span className="text-slate-200 select-all font-semibold">(321) 417-4036</span>
                  </div>
                  <button onClick={() => copyToClipboard('3214174036', 'phone')} className="mt-3 px-2.5 py-1.5 rounded bg-sky-500/10 border border-sky-500/30 text-sky-400 hover:bg-sky-500 hover:text-cyber-950 transition-all flex items-center justify-center gap-1.5">
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedKey === 'phone' ? 'Copied! ✓' : 'Copy Phone'}</span>
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-slate-800 text-xs font-mono">
                <a href="https://www.linkedin.com/in/serge-antoine-keou-ketchiozo-66b428137/" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-lg border border-slate-700 hover:border-cyber-cyan text-slate-300 hover:text-white transition-all flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-cyber-cyan" />
                  <span>LinkedIn Profile</span>
                </a>
                <a href="https://github.com/zongo270" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-lg border border-slate-700 hover:border-cyber-emerald text-slate-300 hover:text-white transition-all flex items-center gap-2">
                  <Github className="w-4 h-4 text-cyber-emerald" />
                  <span>GitHub Account</span>
                </a>
                <button onClick={() => setModalOpen('resume')} className="px-5 py-2.5 rounded-lg border border-slate-700 hover:border-yellow-400 text-slate-300 hover:text-white transition-all flex items-center gap-2">
                  <FileText className="w-4 h-4 text-yellow-400" />
                  <span>View / Print Resume</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-900 bg-cyber-950 py-8 text-center text-xs font-mono text-slate-500 z-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>&copy; 2026 Serge-Antoine Keou Ketchiozo. All system rights reserved.</div>
          <div className="flex items-center space-x-6 text-slate-400">
            <span>Orlando, FL 32817</span>
            <span>UCF Senior B.S. IT</span>
            <span className="text-cyber-cyan">Status: Available for Hire</span>
          </div>
        </div>
      </footer>

      {/* MODAL 1: PROJECT 3 */}
      {modalOpen === 'project3' && (
        <div className="fixed inset-0 z-50 bg-cyber-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="glass-panel max-w-4xl w-full rounded-2xl border border-cyber-cyan/40 p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono text-cyber-cyan uppercase tracking-wider">CNT 4714 Project 3 Architecture</span>
                <h3 className="text-xl font-bold text-white mt-1">Enterprise Two-Tier Client-Server Database System</h3>
              </div>
              <button onClick={() => setModalOpen(null)} className="text-slate-400 hover:text-white p-2">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-mono font-semibold text-slate-200 flex items-center gap-2">
                <GitMerge className="w-4 h-4 text-cyber-cyan" />
                <span>Multi-Tier Topological Breakdown</span>
              </h4>
              <div className="bg-cyber-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-3">
                <div className="p-3 bg-slate-900/80 rounded border border-slate-700/80">
                  <span className="text-cyber-cyan font-bold">[1. Client Layer]</span><br />
                  &bull; <strong>SQLClientApp:</strong> Main Java GUI for general users with dynamic properties dropdowns.<br />
                  &bull; <strong>TheAccountantApp:</strong> Specialized console restricted exclusively to theaccountant user.
                </div>
                <div className="p-3 bg-slate-900/80 rounded border border-slate-700/80">
                  <span className="text-cyber-emerald font-bold">[2. Application / Helper Layer]</span><br />
                  &bull; <strong>ResultSetTableModel:</strong> Bridges JDBC result sets to Swing JTable.<br />
                  &bull; <strong>OperationsLogger:</strong> Background service using application-level credentials (project3app).
                </div>
                <div className="p-3 bg-slate-900/80 rounded border border-slate-700/80">
                  <span className="text-yellow-400 font-bold">[3. Database Tier (MySQL Server)]</span><br />
                  &bull; <strong>project3, bikedb, operationslog:</strong> Schemas with fine-grained access control.
                </div>
              </div>
            </div>

            <div className="text-right pt-2">
              <button onClick={() => setModalOpen(null)} className="px-5 py-2 rounded bg-slate-800 text-white font-mono text-xs hover:bg-slate-700 transition-colors">
                Close Architecture View
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: PROJECT 2 */}
      {modalOpen === 'project2' && (
        <div className="fixed inset-0 z-50 bg-cyber-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="glass-panel max-w-4xl w-full rounded-2xl border border-cyber-emerald/40 p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono text-cyber-emerald uppercase tracking-wider">CNT 4714 Project 2 Concurrency Architecture</span>
                <h3 className="text-xl font-bold text-white mt-1">Synchronized Multithreaded Banking &amp; Regulatory Simulator</h3>
              </div>
              <button onClick={() => setModalOpen(null)} className="text-slate-400 hover:text-white p-2">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-3 font-mono text-xs text-slate-300">
              <div className="p-3 bg-slate-900/80 rounded border border-slate-700/80">
                <span className="text-cyber-emerald font-bold">[19 Cooperating Agents]</span><br />
                &bull; 5 Depositors (never block, signal conditions)<br />
                &bull; 10 Withdrawers (block on insufficient funds)<br />
                &bull; 2 Transfer Agents &amp; 2 Auditors (hold dual account locks simultaneously)
              </div>
              <div className="p-3 bg-slate-900/80 rounded border border-slate-700/80">
                <span className="text-cyber-cyan font-bold">[Regulatory Engine]</span><br />
                &bull; Automated Money Laundering Suppression Act (1994) CTR logging into <code className="text-white">transactions.tsv</code>.
              </div>
            </div>

            <div className="text-right pt-2">
              <button onClick={() => setModalOpen(null)} className="px-5 py-2 rounded bg-slate-800 text-white font-mono text-xs hover:bg-slate-700 transition-colors">
                Close Concurrency View
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: GATEWAY */}
      {modalOpen === 'gateway' && (
        <div className="fixed inset-0 z-50 bg-cyber-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="glass-panel max-w-2xl w-full rounded-2xl border border-cyber-cyan/40 p-6 sm:p-8 space-y-5 relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-lg font-bold text-white font-mono">AI Gateway Architecture Blueprint</h3>
              <button onClick={() => setModalOpen(null)} className="text-slate-400 hover:text-white p-1">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-3 font-mono text-xs text-slate-300">
              <div className="bg-cyber-950 p-4 rounded-xl border border-slate-800 leading-relaxed text-slate-400 space-y-1">
                <div>[Incoming Request] &rarr; TLS 1.3 Termination</div>
                <div>&nbsp;&nbsp;&darr;</div>
                <div>[Rate Limiter] &rarr; Redis Token Bucket</div>
                <div>&nbsp;&nbsp;&darr;</div>
                <div>[PII Anonymization] &rarr; Presidio Regex &amp; NER Masking</div>
                <div>&nbsp;&nbsp;&darr;</div>
                <div>[Prompt Defense] &rarr; Heuristic Filter</div>
                <div>&nbsp;&nbsp;&darr;</div>
                <div>[Model Dispatch] &rarr; Azure / AWS Bedrock</div>
              </div>
            </div>
            <div className="text-right">
              <button onClick={() => setModalOpen(null)} className="px-4 py-2 rounded bg-slate-800 text-white font-mono text-xs hover:bg-slate-700">Dismiss</button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 4: RESUME */}
      {modalOpen === 'resume' && (
        <div id="resume-modal" className="fixed inset-0 z-50 bg-cyber-950/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
          <div className="bg-white text-slate-900 max-w-4xl w-full rounded-xl p-6 sm:p-10 shadow-2xl relative max-h-[92vh] overflow-y-auto font-sans">
            <div className="no-print flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
              <span className="text-xs font-mono font-bold uppercase text-slate-500 tracking-wider">Serge-Antoine Keou Ketchiozo &bull; Official Resume</span>
              <div className="flex items-center space-x-3">
                <button onClick={() => window.print()} className="px-3.5 py-1.5 rounded bg-slate-900 text-white text-xs font-mono font-medium hover:bg-slate-800 flex items-center gap-1.5 shadow">
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / Save PDF</span>
                </button>
                <button onClick={() => setModalOpen(null)} className="p-1.5 text-slate-500 hover:text-black">
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="space-y-6 text-slate-800 text-xs sm:text-sm">
              <div className="text-center border-b border-slate-200 pb-4">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">SERGE-ANTOINE KEOU KETCHIOZO</h1>
                <div className="flex flex-wrap justify-center gap-3 text-xs text-slate-600 mt-2 font-mono">
                  <span>Orlando, FL 32817</span>
                  <span>&bull;</span>
                  <span>(321) 417-4036</span>
                  <span>&bull;</span>
                  <a href="mailto:keouksa@gmail.com" className="text-blue-600 hover:underline">keouksa@gmail.com</a>
                  <span>&bull;</span>
                  <a href="mailto:se337943@ucf.edu" className="text-blue-600 hover:underline">se337943@ucf.edu</a>
                </div>
              </div>

              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">Education</h2>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between items-baseline font-bold text-slate-900">
                      <span>UNIVERSITY OF CENTRAL FLORIDA &mdash; Orlando, FL</span>
                      <span className="text-xs font-mono text-slate-600">Expected Dec 2026</span>
                    </div>
                    <div className="text-xs italic text-slate-700">Bachelor of Science in Information Technology (GPA: 3.1)</div>
                  </div>
                  <div>
                    <div className="flex justify-between items-baseline font-bold text-slate-900">
                      <span>EASTERN FLORIDA STATE COLLEGE &mdash; Melbourne, FL</span>
                      <span className="text-xs font-mono text-slate-600">Completed May 2023</span>
                    </div>
                    <div className="text-xs italic text-slate-700">Associate in Science in Computer Programming and Analysis</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="no-print mt-6 text-center border-t border-slate-200 pt-4">
              <button onClick={() => setModalOpen(null)} className="px-6 py-2 rounded bg-slate-900 text-white font-mono text-xs hover:bg-slate-800">
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
