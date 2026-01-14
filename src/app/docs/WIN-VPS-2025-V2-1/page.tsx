'use client';

import Link from 'next/link';
import { Key, Layers, Settings, Wrench, Info, Monitor, Terminal, Github, Twitter, Mail, PlayCircle, Apple, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';
import Reveal from '@/components/Reveal';

export default function WinVpsGuide() {
    return (
        <div className="bg-[#000000] text-[#f8f8f8] min-h-screen font-sans selection:bg-cyan-500 selection:text-black">
            <header className="sticky top-0 z-50 bg-[#000000]/80 backdrop-blur-md border-b border-[#333]">
                <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-3 group">
                        <img src="https://cdn.avrxt.in/assets/logo.png" alt="avrxt logo" className="h-10 w-auto transition-transform group-hover:scale-105" />
                        <span className="text-xl font-bold tracking-widest font-mono hidden sm:block group-hover:text-cyan-400 transition-colors">AVRXT</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <Link href="#troubleshooting" className="text-xs text-gray-400 hover:text-white font-mono hidden md:block">[Troubleshoot]</Link>
                        <Link href="/docs" className="text-sm border border-[#333] px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-mono">
                            /back_to_library
                        </Link>
                    </div>
                </nav>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-20">
                <Reveal className="text-center md:text-left mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/30 border border-zinc-700 mb-6">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-xs text-cyan-400 font-mono tracking-wider">SYSTEM STATUS: OPERATIONAL</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 font-mono text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
                        Windows VPS<br />
                        <span className="text-blue-500">Architecture & Access</span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-8">
                        The comprehensive technical manual for deploying, securing, and managing Windows Server environments via Remote Desktop Protocol (RDP).
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <div className="px-4 py-2 bg-gray-900 border border-gray-700 rounded text-xs font-mono text-gray-400">Host: win-server-2022</div>
                        <div className="px-4 py-2 bg-gray-900 border border-gray-700 rounded text-xs font-mono text-gray-400">Port: 3389 (Default)</div>
                        <div className="px-4 py-2 bg-gray-900 border border-gray-700 rounded text-xs font-mono text-gray-400">Protocol: RDP 10.0</div>
                    </div>
                </Reveal>

                <hr className="border-zinc-800 opacity-30 my-16" />

                <Reveal className="space-y-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4 flex items-center gap-3">
                            <Key className="text-cyan-400 w-8 h-8" /> 1. Establishing Connection
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Unlike SSH-based Linux servers, Windows VPS utilizes a graphical interface delivered via RDP. This protocol transmits screen pixels and input events securely over the network.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold font-mono text-white border-l-4 border-blue-500 pl-4">1.1 From Windows (Native)</h3>
                        <div className="grid gap-6">
                            {[
                                { step: '01', title: 'Launch MSTSC', desc: 'Press Win + R, type mstsc, and hit Enter. This launches the native Microsoft Terminal Services Client.' },
                                { step: '02', title: 'Target Configuration', desc: 'Enter the IP Address provided in your welcome email.', code: 'Computer: 192.168.x.x\nUser: Administrator' },
                                { step: '03', title: 'Credential Handshake', desc: 'Click Connect. When prompted, enter the password. You may see a certificate warning because the server uses a self-signed certificate. This is normal for new VPS instances.' },
                            ].map((item) => (
                                <div key={item.step} className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl flex gap-4 transition-all hover:scale-[1.01] hover:border-zinc-700">
                                    <div className="w-8 h-8 flex items-center justify-center bg-zinc-800 text-blue-400 rounded-full font-bold font-mono flex-shrink-0">{item.step}</div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2 text-white">{item.title}</h4>
                                        <p className="text-sm text-gray-400">{item.desc}</p>
                                        {item.code && <div className="mt-4 p-4 bg-black border-l-4 border-blue-500 rounded-r-lg font-mono text-sm text-gray-300">{item.code}</div>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>

                <hr className="border-zinc-800 opacity-30 my-16" />

                <Reveal className="space-y-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-mono mb-8 flex items-center gap-3">
                        <Layers className="text-purple-400 w-8 h-8" /> 2. Technical Use Cases
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'Web Hosting (IIS)', color: 'purple', icon: Monitor, desc: 'Host ASP.NET Core applications using IIS.', skills: ['Supports .NET 4.8 / 6.0', 'Native HTTPS binding', 'Application Pools'] },
                            { title: 'Algo Trading', color: 'green', icon: PlayCircle, desc: 'Run MT4/MT5 or cTrader 24/7.', skills: ['0ms latency to brokers', 'Uninterrupted execution', 'Auto-reboot strategies'] },
                            { title: 'Database Engine', color: 'blue', icon: Settings, desc: 'Enterprise-grade MS SQL Server storage.', skills: ['SSMS Management Studio', 'T-SQL Procedures', 'PowerBI Integration'] },
                        ].map((use) => (
                            <div key={use.title} className={cn("p-6 rounded-xl border border-zinc-800 bg-zinc-900/60 flex flex-col h-full transition-all hover:-translate-y-2", `border-t-4 border-t-${use.color}-500 hover:border-zinc-600`)}>
                                <div className={cn("mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-zinc-800", `text-${use.color}-400`)}>
                                    <use.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{use.title}</h3>
                                <p className="text-sm text-gray-400 flex-grow">{use.desc}</p>
                                <ul className="text-[10px] text-gray-500 mt-4 space-y-2 font-mono uppercase tracking-widest">
                                    {use.skills.map(s => <li key={s}>• {s}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </Reveal>

                <hr className="border-zinc-800 opacity-30 my-16" />

                <Reveal id="troubleshooting" className="space-y-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-mono mb-8 flex items-center gap-3">
                        <Wrench className="text-yellow-400 w-8 h-8" /> 4. Troubleshooting Matrix
                    </h2>

                    <div className="overflow-x-auto rounded-xl border border-zinc-800">
                        <table className="w-full text-left text-sm text-gray-400">
                            <thead className="bg-zinc-900 text-xs uppercase font-mono text-white">
                                <tr>
                                    <th className="px-6 py-4">Symptom</th>
                                    <th className="px-6 py-4">Probable Cause</th>
                                    <th className="px-6 py-4">Solution</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-800">
                                <tr className="hover:bg-zinc-900/50 transition-colors">
                                    <td className="px-6 py-4 font-bold text-red-400">RDP Refused</td>
                                    <td className="px-6 py-4">Firewall / Offline</td>
                                    <td className="px-6 py-4">Check power in panel. Ping IP. Port 3389 open.</td>
                                </tr>
                                <tr className="hover:bg-zinc-900/50 transition-colors">
                                    <td className="px-6 py-4 font-bold text-yellow-400">Auth Error</td>
                                    <td className="px-6 py-4">Wrong Pass / NLA</td>
                                    <td className="px-6 py-4">Reset pass via dashboard. Disable NLA if old client.</td>
                                </tr>
                                <tr className="hover:bg-zinc-900/50 transition-colors">
                                    <td className="px-6 py-4 font-bold text-blue-400">Sluggish</td>
                                    <td className="px-6 py-4">High RAM/CPU</td>
                                    <td className="px-6 py-4">Open Task Manager. Check Windows Update.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 p-4 bg-blue-900/10 border border-blue-500/20 rounded-lg flex gap-4">
                        <Info className="text-blue-400 flex-shrink-0 w-5 h-5" />
                        <p className="text-sm text-blue-200">
                            <strong>Pro Tip:</strong> If you lock yourself out via Firewall, use the <strong>VNC / Console Access</strong>. It bypasses network layers.
                        </p>
                    </div>
                </Reveal>

                <footer className="mt-32 pt-10 border-t border-zinc-800 text-center text-gray-500 pb-10">
                    <div className="flex justify-center items-center gap-6 mb-8">
                        <Link href="#" className="hover:text-cyan-400 transition-colors"><Github className="w-5 h-5" /></Link>
                        <Link href="#" className="hover:text-cyan-400 transition-colors"><Twitter className="w-5 h-5" /></Link>
                        <Link href="#" className="hover:text-cyan-400 transition-colors"><Mail className="w-5 h-5" /></Link>
                    </div>
                    <p className="font-mono text-[10px] mb-2 uppercase tracking-widest text-zinc-600">
                        Documentation ID: WIN-VPS-2025-V2.1
                    </p>
                    <p className="font-mono text-sm uppercase tracking-widest">
                        &copy; 2025 <span className="text-white font-bold">avrxt</span>. All systems nominal.
                    </p>
                </footer>
            </main>
        </div>
    );
}
