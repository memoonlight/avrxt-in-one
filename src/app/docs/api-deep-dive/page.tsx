import DocWrapper from '@/components/DocWrapper';

export default function ApiDeepDive() {
    return (
        <DocWrapper
            title="What is an API? The Digital Contract"
            category="Technical Deep Dive"
            date="December 10, 2025"
        >
            <section className="space-y-8 text-lg text-gray-300">
                <h2 className="text-4xl font-bold font-mono text-[#f8f8f8]">1. The Core Definition of an API</h2>
                <p className="text-gray-400 leading-relaxed">
                    An API, or Application Programming Interface, is essentially a set of definitions and protocols that allows two software applications to communicate with each other. It acts as an intermediary, a digital contract defining the rules for interaction.
                </p>

                <p className="leading-relaxed">
                    Think of an API like a waiter in a restaurant. You (the client) tell the waiter (the API) what you want to order (the request). The waiter takes your request to the kitchen (the server), which processes it, and then the waiter brings back your meal (the response).
                </p>

                <h3 className="text-2xl font-semibold font-mono text-cyan-400 mt-10">Key Components of an API Contract:</h3>
                <ul className="list-disc ml-6 space-y-3">
                    <li><span className="text-white font-bold">Endpoints:</span> The specific locations (URLs) where resources can be accessed.</li>
                    <li><span className="text-white font-bold">Methods (Verbs):</span> The actions to be performed on the resource (GET, POST, PUT, DELETE).</li>
                    <li><span className="text-white font-bold">Data Format:</span> The language used for communication (usually JSON or XML).</li>
                    <li><span className="text-white font-bold">Protocols:</span> The rules governing the transfer (e.g., HTTP).</li>
                </ul>

                <div className="border border-[#333] my-12" />

                <h2 className="text-4xl font-bold font-mono text-[#f8f8f8]">2. Real-Life Example: An E-commerce Order Process</h2>
                <p className="text-gray-400 leading-relaxed">
                    Let&apos;s visualize how APIs enable a common action like placing an order on an e-commerce website or mobile app.
                </p>

                <div className="space-y-6">
                    <div className="p-6 bg-white/[0.02] border border-[#333] rounded-xl">
                        <h4 className="text-white font-bold mb-2">Workflow Steps:</h4>
                        <ol className="list-decimal ml-6 space-y-4 text-sm">
                            <li><span className="text-white">Client Initiates Order:</span> HTTP POST to <code className="text-cyan-400">/api/v1/orders</code></li>
                            <li><span className="text-white">API Gateway & Auth:</span> Validates JWT and routes to Order Service.</li>
                            <li><span className="text-white">Order Service Logic:</span> Checks inventory via internal API.</li>
                            <li><span className="text-white">Persistence:</span> Updates the <code className="text-purple-400">orders</code> database table.</li>
                            <li><span className="text-white">Confirmation:</span> Returns success response to the client.</li>
                        </ol>
                    </div>

                    <div className="flex flex-col items-center mt-8">
                        <span className="text-[#666666] font-mono text-xs uppercase mb-4">Visualizing the API Workflow:</span>
                        <img
                            src="https://static.avrxt.in/dec_10-api-work-flow.png"
                            alt="API Workflow Diagram"
                            className="rounded-xl border border-[#333] max-w-full"
                        />
                    </div>
                </div>

                <div className="border border-[#333] my-12" />

                <h2 className="text-4xl font-bold font-mono text-[#f8f8f8]">3. Different Types of APIs</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-6 border border-[#333] bg-white/[0.02] rounded-xl hover:border-cyan-500 transition-colors">
                        <span className="text-xl text-green-400 font-bold font-mono block mb-2">REST</span>
                        <p className="text-sm text-gray-400 leading-relaxed">The most common type of Web API. It is Stateless and uses standard HTTP methods.</p>
                    </div>
                    <div className="p-6 border border-[#333] bg-white/[0.02] rounded-xl hover:border-cyan-500 transition-colors">
                        <span className="text-xl text-green-400 font-bold font-mono block mb-2">GraphQL</span>
                        <p className="text-sm text-gray-400 leading-relaxed">Allows clients to specify exactly what data they need, eliminating over-fetching.</p>
                    </div>
                    <div className="p-6 border border-[#333] bg-white/[0.02] rounded-xl hover:border-cyan-500 transition-colors">
                        <span className="text-xl text-green-400 font-bold font-mono block mb-2">WebSockets</span>
                        <p className="text-sm text-gray-400 leading-relaxed">Provides persistent, bi-directional, real-time communication channels.</p>
                    </div>
                    <div className="p-6 border border-[#333] bg-white/[0.02] rounded-xl hover:border-cyan-500 transition-colors">
                        <span className="text-xl text-green-400 font-bold font-mono block mb-2">SOAP</span>
                        <p className="text-sm text-gray-400 leading-relaxed">Highly structured, relies on XML, common in enterprise legacy systems.</p>
                    </div>
                </div>

                <div className="border border-[#333] my-12" />

                <h2 className="text-4xl font-bold font-mono text-[#f8f8f8]">4. Performance Optimization</h2>
                <div className="space-y-6">
                    <p className="text-gray-400 leading-relaxed">Optimizing API calls is critical for application speed and reducing hosting costs. Latency is the enemy of the modern application.</p>
                    <div className="p-6 border border-l-4 border-l-blue-500 bg-blue-500/5 rounded-xl">
                        <h4 className="text-white font-bold mb-2">Caching Strategy</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">Use <code className="text-blue-400">ETag</code> and <code className="text-blue-400">Cache-Control</code> headers to reduce redundant data transfer.</p>
                    </div>
                    <div className="p-6 border border-l-4 border-l-red-500 bg-red-500/5 rounded-xl">
                        <h4 className="text-white font-bold mb-2">Rate Limiting</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">Implement limits to prevent abuse and ensure stability across all nodes.</p>
                    </div>
                </div>
            </section>
        </DocWrapper>
    );
}
