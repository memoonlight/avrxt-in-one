import Reveal from '@/components/Reveal';

export default function Privacy() {
    const lastUpdated = "December 20, 2025";

    return (
        <main className="max-w-3xl mx-auto px-6 pt-40 pb-32">
            <Reveal className="active">
                <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-4 font-mono">// Data Governance v3.1</p>
                <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-12 text-white">Privacy Policy_</h1>

                <div className="space-y-12">
                    <p className="italic text-zinc-500">Last updated: {lastUpdated}</p>

                    <section className="legal-section">
                        <h2 className="text-white font-mono text-lg font-bold uppercase tracking-widest border-l-2 border-zinc-800 pl-4 mb-4">01. IP Logging & Retention</h2>
                        <p className="text-zinc-400 leading-relaxed text-sm">To ensure infrastructure security and mitigate malicious activity, we log <span className="text-white font-semibold">IP addresses</span> and browser metadata. In accordance with the <span className="text-white font-semibold">Information Technology Act</span>, these logs are used solely for diagnostics. All identifiable IP logs are <span className="text-white font-semibold">permanently deleted after 30 days</span> of retention.</p>
                    </section>

                    <section className="legal-section">
                        <h2 className="text-white font-mono text-lg font-bold uppercase tracking-widest border-l-2 border-zinc-800 pl-4 mb-4">02. Newsletter & Dual Backups</h2>
                        <p className="text-zinc-400 leading-relaxed text-sm">Subscriptions are archived in our <span className="text-white font-semibold">Internal Subscriber Database</span> and synchronized with <span className="text-white font-semibold">Resend</span>. You may opt-out at any time via the unsubscribe link provided in the footer of every mail transmission.</p>
                    </section>

                    <section className="legal-section">
                        <h2 className="text-white font-mono text-lg font-bold uppercase tracking-widest border-l-2 border-zinc-800 pl-4 mb-4">03. Third-Party Infrastructure</h2>
                        <p className="text-zinc-400 leading-relaxed text-sm">Our API is in a development stage; traffic may be routed through third-party services including <span className="text-white font-semibold">Cloudflare, AWS, or OVH</span>. These providers optimize delivery across global edge nodes. Please refer to their respective terms for data transit transparency.</p>
                    </section>

                    <section className="legal-section">
                        <h2 className="text-white font-mono text-lg font-bold uppercase tracking-widest border-l-2 border-zinc-800 pl-4 mb-4">04. DPDP Act & GDPR</h2>
                        <p className="text-zinc-400 leading-relaxed text-sm">We operate as a &quot;Data Fiduciary&quot; under the <span className="text-white font-semibold">Digital Personal Data Protection Act</span>. We process data (Email/IP) based on explicit consent. For data erasure or legal inquiries, contact: <span className="text-white font-bold">GDPR@mail.avrxt.in</span>.</p>
                    </section>
                </div>
            </Reveal>
        </main>
    );
}
