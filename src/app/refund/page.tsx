import Reveal from '@/components/Reveal';

export default function Refund() {
    const lastUpdated = "January 15, 2026";

    return (
        <main className="max-w-3xl mx-auto px-6 pt-40 pb-32">
            <Reveal className="active">
                <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-4 font-mono">// Refund Policy v1.0</p>
                <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-12 text-white">Refund Policy_</h1>

                <div className="space-y-12">
                    <p className="italic text-zinc-500">Last updated: {lastUpdated}</p>

                    <section className="legal-section">
                        <h2 className="text-white font-mono text-lg font-bold uppercase tracking-widest border-l-2 border-zinc-800 pl-4 mb-4">01. Service Delivery</h2>
                        <p className="text-zinc-400 leading-relaxed text-sm">Most services provided by <span className="text-white font-semibold">AVRXT</span> are digital in nature. Once a service (such as Website Redesign or Bot Development) has been initiated and work has commenced, the initial deposit is <span className="text-white font-bold text-red-400">non-refundable</span>.</p>
                    </section>

                    <section className="legal-section">
                        <h2 className="text-white font-mono text-lg font-bold uppercase tracking-widest border-l-2 border-zinc-800 pl-4 mb-4">02. Refund Eligibility</h2>
                        <p className="text-zinc-400 leading-relaxed text-sm">Refunds are only eligible if requested within <span className="text-white font-semibold">24 hours</span> of placing an order AND if work has not yet started. For subscription-based maintenance services, cancellations will stop future billing but previous payments are non-refundable.</p>
                    </section>

                    <section className="legal-section">
                        <h2 className="text-white font-mono text-lg font-bold uppercase tracking-widest border-l-2 border-zinc-800 pl-4 mb-4">03. Cancellation Period</h2>
                        <p className="text-zinc-400 leading-relaxed text-sm">Users may cancel their service requests at any time. If work is in progress, the client is liable for the hours already invested. Partial refunds may be issued at our sole discretion based on the project's milestones.</p>
                    </section>

                    <section className="legal-section">
                        <h2 className="text-white font-mono text-lg font-bold uppercase tracking-widest border-l-2 border-zinc-800 pl-4 mb-4">04. Processing Time</h2>
                        <p className="text-zinc-400 leading-relaxed text-sm">Approved refunds will be processed via the original payment method within <span className="text-white font-semibold">7-10 business days</span>. Please note that payment gateway fees may be deducted from the final refund amount.</p>
                    </section>
                </div>
            </Reveal>
        </main>
    );
}
