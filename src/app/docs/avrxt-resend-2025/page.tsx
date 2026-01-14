'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, CheckCircle, BarChart, Globe, Inbox, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Reveal from '@/components/Reveal';

export default function ResendGuide() {
    const [activeTab, setActiveTab] = useState<'node' | 'supabase' | 'django' | 'python'>('node');

    return (
        <div className="bg-[#000000] text-[#ffffff] min-h-screen font-sans selection:bg-white selection:text-black">
            <header className="sticky top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
                <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-8">
                        <Link href="/"><img src="https://cdn.avrxt.in/assets/logo.png" alt="Logo" className="h-8 w-auto" /></Link>
                        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-400">
                            <Link href="#reimagining" className="hover:text-white transition-colors">The Vision</Link>
                            <Link href="#overview" className="hover:text-white transition-colors">Overview</Link>
                            <Link href="#no-inbox" className="hover:text-white transition-colors">No-Inbox Flow</Link>
                            <Link href="#comparison" className="hover:text-white transition-colors">AWS vs Resend</Link>
                            <Link href="#api" className="hover:text-white transition-colors">API</Link>
                        </div>
                    </div>
                    <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">December 21 2025</div>
                </nav>
            </header>

            <main className="max-w-6xl mx-auto px-6">

                <section className="py-24">
                    <Reveal>
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-gray-500">
                            Rethinking Email<br />Infrastructure.
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
                            Resend is the email platform for developers. We’ve removed the friction of traditional SMTP providers and replaced it with a world-class API and React-based templating.
                        </p>
                    </Reveal>
                </section>

                <section id="reimagining" className="py-20 border-t border-white/5">
                    <Reveal className="max-w-4xl space-y-8">
                        <h2 className="text-4xl font-bold tracking-tight">Resend.com: Reimagining Email for Developers</h2>
                        <p className="text-gray-400 leading-relaxed text-lg">In today’s fast-moving digital world, email remains one of the most important ways to communicate with users. But building and maintaining reliable email delivery is notoriously difficult.</p>

                        <div className="border border-white/10 rounded-xl overflow-hidden bg-zinc-900/50 my-12 group">
                            <img src="https://avrxt.in/assets/resend-screenshot.webp" alt="Resend Dashboard" className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]" />
                            <p className="p-3 text-[10px] text-zinc-500 font-mono uppercase tracking-widest border-t border-white/5">Preview: Resend Dashboard</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 my-12">
                            {[
                                { icon: '📦', title: 'SDKs for Popular Languages', desc: 'Node.js, Python, Go, Ruby, or .NET support.' },
                                { icon: '📬', title: 'Transactional & Marketing', desc: 'Unified dashboard for OTPs and broadcasts.' },
                                { icon: '🧪', title: 'Test Mode & Webhooks', desc: 'Experiment safely without sending real emails.' },
                                { icon: '✨', title: 'React-Based Templating', desc: 'Build emails using modern React components.' },
                            ].map(feat => (
                                <div key={feat.title} className="p-6 bg-zinc-900/40 border border-white/5 rounded-xl transition-all hover:bg-zinc-900/60 hover:border-white/10">
                                    <p className="font-bold text-white mb-2">{feat.icon} {feat.title}</p>
                                    <p className="text-sm text-zinc-400 leading-relaxed">{feat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </section>

                <section id="no-inbox" className="py-20 border-t border-white/5">
                    <Reveal className="space-y-12">
                        <h2 className="text-4xl font-bold tracking-tight">Email Without an Inbox</h2>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                                <p>Traditional providers are built for humans. <span className="text-white font-bold">Resend is built for machines.</span></p>
                                <p>Resend acts as a high-speed proxy. For inbound mail, it uses <span className="text-white">Webhooks</span>. Instead of logging into an inbox, Resend catches SMTP traffic and sends a clean <span className="text-blue-400">JSON payload</span> directly to your server.</p>
                            </div>
                            <div className="p-8 bg-zinc-900/60 border border-white/10 rounded-3xl font-mono text-[11px] backdrop-blur-xl">
                                <div className="text-zinc-600 mb-4">// Webhook JSON Example</div>
                                <pre className="text-emerald-400">
                                    {`{
  "from": "user@example.com",
  "to": "dev@yourbrand.com",
  "subject": "System Inquiry",
  "text": "How do I reset my API key?",
  "attachments": [{"name": "logs.txt"}]
}`}
                                </pre>
                            </div>
                        </div>
                    </Reveal>
                </section>

                <section id="api" className="py-20 border-t border-white/5">
                    <Reveal className="space-y-12">
                        <div className="mb-12">
                            <h2 className="text-4xl font-bold mb-4">API Architecture</h2>
                            <p className="text-gray-400 max-w-2xl text-lg">Integrate across different stacks with specialized SDKs or a clean SMTP interface.</p>
                        </div>

                        <div className="bg-zinc-900/40 border border-white/10 rounded-2xl overflow-hidden">
                            <div className="flex overflow-x-auto border-b border-white/5 bg-black/40">
                                {[
                                    { id: 'node', label: 'Node/Next.js' },
                                    { id: 'supabase', label: 'Supabase' },
                                    { id: 'django', label: 'Django/SMTP' },
                                    { id: 'python', label: 'Python' }
                                ].map(tab => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id as any)}
                                        className={cn(
                                            "px-6 py-4 text-xs font-mono uppercase tracking-widest transition-all",
                                            activeTab === tab.id ? "text-white bg-white/5 border-b border-white" : "text-zinc-500 hover:text-zinc-300"
                                        )}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>

                            <div className="p-8 font-mono text-sm leading-relaxed overflow-x-auto min-h-[300px]">
                                {activeTab === 'node' && (
                                    <div className="animate-in fade-in duration-300">
                                        <pre className="text-blue-400">import <span className="text-white">{"{ Resend }"}</span> from &apos;resend&apos;;</pre>
                                        <pre className="text-white">const resend = new Resend(&apos;re_xxxxxxxxx&apos;);</pre>
                                        <pre className="mt-4 text-purple-400">await resend.emails.send({"{"}</pre>
                                        <pre className="ml-4 text-white">from: &apos;Acme &lt;onboarding@resend.dev&gt;&apos;,</pre>
                                        <pre className="ml-4 text-white">to: [&apos;delivered@resend.dev&apos;],</pre>
                                        <pre className="ml-4 text-white">subject: &apos;Welcome to Resend&apos;,</pre>
                                        <pre className="ml-4 text-white">react: WelcomeTemplate({"{"} name: &apos;Steve&apos; {"}"}),</pre>
                                        <pre className="text-purple-400">{"}"});</pre>
                                    </div>
                                )}
                                {activeTab === 'supabase' && (
                                    <div className="animate-in fade-in duration-300">
                                        <pre className="text-zinc-500">// Supabase Edge Function</pre>
                                        <pre className="text-white">serve(async (req) =&gt; {"{"}</pre>
                                        <pre className="ml-4 text-white">await fetch(&apos;https://api.resend.com/emails&apos;, {"{"}</pre>
                                        <pre className="ml-8 text-white">method: &apos;POST&apos;,</pre>
                                        <pre className="ml-8 text-white">headers: {"{"} &apos;Authorization&apos;: `Bearer $RE_KEY` {"}"},</pre>
                                        <pre className="ml-8 text-white">body: JSON.stringify({"{"} from: &apos;...&apos;, to: &apos;...&apos; {"}"})</pre>
                                        <pre className="ml-4 text-white">{"}"})</pre>
                                        <pre className="text-white">{"}"})</pre>
                                    </div>
                                )}
                                {activeTab === 'django' && (
                                    <div className="animate-in fade-in duration-300">
                                        <pre className="text-zinc-500"># Configuration for Django (SMTP)</pre>
                                        <pre className="text-white">EMAIL_BACKEND = &apos;django.core.mail.backends.smtp.EmailBackend&apos;</pre>
                                        <pre className="text-white">RESEND_SMTP_HOST = &apos;smtp.resend.com&apos;</pre>
                                    </div>
                                )}
                                {activeTab === 'python' && (
                                    <div className="animate-in fade-in duration-300">
                                        <pre className="text-blue-400">import <span className="text-white">resend</span></pre>
                                        <pre className="text-white">resend.api_key = &quot;re_xxxxxxxxx&quot;</pre>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Reveal>
                </section>

                <footer className="py-24 border-t border-white/5 text-center">
                    <img src="https://cdn.avrxt.in/assets/logo.png" alt="Logo" className="h-6 w-auto mx-auto grayscale opacity-20 mb-6" />
                    <p className="text-zinc-400 font-bold mb-2">Best Regards @avrxt</p>
                    <p className="text-[10px] font-mono text-zinc-800 uppercase tracking-widest italic">Infrastructure Node: avrxt-resend-2025</p>
                </footer>

            </main>
        </div>
    );
}
