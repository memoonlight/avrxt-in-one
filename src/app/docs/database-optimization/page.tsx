import DocWrapper from '@/components/DocWrapper';

export default function DatabaseOptimization() {
    return (
        <DocWrapper
            title="Database Management Guide"
            category="Technical Guide"
            date="December 9, 2025"
        >
            <section className="space-y-12 text-lg text-gray-300">
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold font-mono text-[#f8f8f8]">⚙️ Designing a Database Correctly</h2>
                    <p className="text-gray-400 leading-relaxed">Database design is the blueprint for how information is stored, organized, and managed. A good design is crucial for performance, scalability, and integrity.</p>

                    <div className="space-y-8 mt-8">
                        <div className="border-l-2 border-cyan-500/30 pl-6">
                            <h3 className="text-2xl font-semibold font-mono text-cyan-400 mb-3">1. Requirements Analysis</h3>
                            <ul className="list-disc ml-6 space-y-2 text-sm text-gray-400">
                                <li><span className="text-white">Identify Entities:</span> MAJOR objects (Customers, Products).</li>
                                <li><span className="text-white">Identify Attributes:</span> Characteristics (Name, Email).</li>
                                <li><span className="text-white">Identify Relationships:</span> Interaction cardinality.</li>
                            </ul>
                        </div>

                        <div className="border-l-2 border-cyan-500/30 pl-6">
                            <h3 className="text-2xl font-semibold font-mono text-cyan-400 mb-3">2. Normalization</h3>
                            <p className="text-sm text-gray-400 leading-relaxed mb-4">Eliminate redundancy and improve integrity via structuring:</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="p-4 bg-white/[0.02] border border-[#333] rounded-lg text-xs">
                                    <span className="text-white font-bold block mb-1">1NF</span>
                                    Atomic values, no repeats.
                                </div>
                                <div className="p-4 bg-white/[0.02] border border-[#333] rounded-lg text-xs">
                                    <span className="text-white font-bold block mb-1">2NF</span>
                                    Full dependency on PK.
                                </div>
                                <div className="p-4 bg-white/[0.02] border border-[#333] rounded-lg text-xs">
                                    <span className="text-white font-bold block mb-1">3NF</span>
                                    No transitive dependencies.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border border-[#333] my-12" />

                <div className="space-y-6">
                    <h2 className="text-4xl font-bold font-mono text-[#f8f8f8]">🚀 Optimizing a Database</h2>
                    <p className="text-gray-400 leading-relaxed">Maximize performance and efficiency through tuning engine, schema, and queries.</p>

                    <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-green-500/5 to-transparent border border-green-500/20 rounded-xl">
                            <h4 className="text-green-400 font-bold mb-3 flex items-center gap-2">Query Efficiency</h4>
                            <ul className="list-disc ml-6 space-y-3 text-sm">
                                <li>Use <code className="text-white bg-white/10 px-1 rounded">EXPLAIN</code> to analyze execution plans.</li>
                                <li>Avoid <code className="text-white bg-white/10 px-1 rounded">SELECT *</code>; only retrieve required columns.</li>
                                <li>Optimize JOINs by indexing condition columns.</li>
                            </ul>
                        </div>

                        <div className="p-6 bg-gradient-to-r from-blue-500/5 to-transparent border border-blue-500/20 rounded-xl">
                            <h4 className="text-blue-400 font-bold mb-3 flex items-center gap-2">Schema & Hardware</h4>
                            <ul className="list-disc ml-6 space-y-3 text-sm">
                                <li><span className="text-white">Strategic Indexing:</span> Balance read speed vs write complexity.</li>
                                <li><span className="text-white">Memory Allocation:</span> Tune buffer pools (PostgreSQL shared_buffers).</li>
                                <li><span className="text-white">I/O Throughput:</span> Utilize high-speed SSDs.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border border-[#333] my-12" />

                <div className="space-y-6">
                    <h2 className="text-4xl font-bold font-mono text-[#f8f8f8]">🛠️ Maintenance Protocols</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white/[0.02] border border-[#333] rounded-xl">
                            <h4 className="text-yellow-500 font-bold mb-2">Backups</h4>
                            <p className="text-xs text-gray-500 leading-relaxed">Full, differential, and incremental schedules. Regular recovery testing.</p>
                        </div>
                        <div className="p-6 bg-white/[0.02] border border-[#333] rounded-xl">
                            <h4 className="text-yellow-500 font-bold mb-2">Security</h4>
                            <p className="text-xs text-gray-500 leading-relaxed">Least privilege access, regular patching, and activity auditing.</p>
                        </div>
                    </div>
                </div>
            </section>
        </DocWrapper>
    );
}
