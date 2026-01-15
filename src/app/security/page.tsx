import Reveal from '@/components/Reveal';

export default function Security() {
    const lastUpdated = "January 15, 2026";

    return (
        <main className="max-w-3xl mx-auto px-6 pt-40 pb-32">
            <Reveal className="active">
                <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-4 font-mono">// Security Protocol v2.4</p>
                <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-12 text-white">Security_</h1>

                <div className="space-y-12">
                    <p className="italic text-zinc-500">Last updated: {lastUpdated}</p>

                    <section className="legal-section">
                        <h2 className="text-white font-mono text-lg font-bold uppercase tracking-widest border-l-2 border-zinc-800 pl-4 mb-4">01. Infrastructure Integrity</h2>
                        <p className="text-zinc-400 leading-relaxed text-sm">We leverage industry-standard infrastructure including <span className="text-white font-semibold">Vercel, AWS, and Cloudflare</span> to ensure the highest level of uptime and security. All traffic is encrypted via <span className="text-white font-semibold">TLS 1.3</span> protocol.</p>
                    </section>

                    <section className="legal-section">
                        <h2 className="text-white font-mono text-lg font-bold uppercase tracking-widest border-l-2 border-zinc-800 pl-4 mb-4">02. Data Protection</h2>
                        <p className="text-zinc-400 leading-relaxed text-sm">Sensitive user data, including subscription emails and intake metadata, are stored in encrypted databases with strict <span className="text-white font-semibold">Identity and Access Management (IAM)</span> policies. We do not store full credit card details on our servers; all payments are handled by secure, PCI-compliant processors.</p>
                    </section>

                    <section className="legal-section">
                        <h2 className="text-white font-mono text-lg font-bold uppercase tracking-widest border-l-2 border-zinc-800 pl-4 mb-4">03. Vulnerability Reporting</h2>
                        <p className="text-zinc-400 leading-relaxed text-sm">If you discover a potential security vulnerability, we encourage you to report it to <span className="text-white font-bold">security@mail.avrxt.in</span>. We practice responsible disclosure and will work with you to resolve any issues promptly.</p>
                    </section>

                    <section className="legal-section">
                        <h2 className="text-white font-mono text-lg font-bold uppercase tracking-widest border-l-2 border-zinc-800 pl-4 mb-4">04. Incident Response</h2>
                        <p className="text-zinc-400 leading-relaxed text-sm">In the event of a documented security breach, we are committed to notifying affected users within <span className="text-white font-semibold">72 hours</span> as per standard security protocols and local regulations.</p>
                    </section>
                </div>
            </Reveal>
        </main>
    );
}
