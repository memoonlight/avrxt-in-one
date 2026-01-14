import Reveal from '@/components/Reveal';

export default function Terms() {
    const lastUpdated = "December 20, 2025";

    return (
        <main className="max-w-3xl mx-auto px-6 pt-40 pb-32">
            <Reveal className="active">
                <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-4 font-mono">// Terms of Service v3.1</p>
                <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-12 text-white">Terms & Conditions_</h1>

                <div className="space-y-12">
                    <p className="italic text-zinc-500">Last updated: {lastUpdated}</p>

                    <section className="legal-section">
                        <h2 className="text-white font-mono text-lg font-bold uppercase tracking-widest border-l-2 border-zinc-800 pl-4 mb-4">01. VPN & Proxy Restrictions</h2>
                        <p className="text-zinc-400 leading-relaxed text-sm">Accessing our API or Intake terminals via high-risk VPNs or proxy nodes is strictly monitored. We reserve the right to <span className="text-white font-bold underline decoration-zinc-800">permanently block detected malicious IPs without notice</span> to protect the ecosystem.</p>
                    </section>

                    <section className="legal-section">
                        <h2 className="text-white font-mono text-lg font-bold uppercase tracking-widest border-l-2 border-zinc-800 pl-4 mb-4">02. Ad-Blocking Optimization</h2>
                        <p className="text-zinc-400 leading-relaxed text-sm">avrxt.in is a non-commercial environment with no third-party ads. Ad-blockers may break site optimization and custom API functions. We recommend whitelisting this site for full technical functionality.</p>
                    </section>

                    <section className="legal-section">
                        <h2 className="text-white font-mono text-lg font-bold uppercase tracking-widest border-l-2 border-zinc-800 pl-4 mb-4">03. API Development State</h2>
                        <p className="text-zinc-400 leading-relaxed text-sm">Our API is in a development stage. Users may experience errors or latency. Unauthorized hacking or scraping attempts are punishable under <span className="text-white font-semibold underline decoration-zinc-800">Section 66 of the IT Act</span>.</p>
                    </section>

                    <section className="legal-section">
                        <h2 className="text-white font-mono text-lg font-bold uppercase tracking-widest border-l-2 border-zinc-800 pl-4 mb-4">04. Jurisdiction</h2>
                        <p className="text-zinc-400 leading-relaxed text-sm">These terms are governed by national IT regulations. Any legal disputes arising shall be subject to the exclusive jurisdiction of the competent courts governing our operational node.</p>
                    </section>
                </div>
            </Reveal>
        </main>
    );
}
