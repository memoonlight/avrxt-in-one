import Link from 'next/link';
import { Cloud, Zap, Globe, Smartphone, Code2, Bot, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SpotlightBox from '@/components/SpotlightBox';

export const SERVICES = [
    {
        id: 'static-web',
        title: 'Static Website',
        price: '₹5,999',
        iconName: 'Globe',
        description: '3–5 pages, responsive, basic SEO, 7 days support',
        features: ['3-5 Pages Layout', 'Responsive Design', 'Basic SEO', '7 Days Support', 'Static Hosting Setup']
    },
    {
        id: 'fullstack-web',
        title: 'Full Stack Website',
        price: '₹24,999',
        iconName: 'Layers',
        description: 'Auth, database, API integration, deployment support',
        features: ['Custom Auth System', 'Database Integration', 'API Development', 'Deployment Help', 'Scalable Arch']
    },
    {
        id: 'bot-basic',
        title: 'Discord Bot (Basic)',
        price: '₹3,999',
        iconName: 'Bot',
        description: 'Commands, moderation, logging',
        features: ['Custom Commands', 'Moderation Pack', 'Logging System', 'Node.js/Python', '24/7 Support']
    },
    {
        id: 'bot-advanced',
        title: 'Discord Bot (Advanced)',
        price: '₹9,999',
        iconName: 'Code2',
        description: 'Dashboard, DB integration, API, hosting setup',
        features: ['Web Dashboard', 'Database Logic', 'External API', 'Hosting Setup', 'Advanced Logic']
    },
    {
        id: 'api-dev',
        title: 'Custom API',
        price: '₹6,999',
        iconName: 'Zap',
        description: 'REST API, authentication, documentation',
        features: ['REST Architecture', 'Secure Auth', 'API Docs', 'Performance Optimized', 'Scale Ready']
    },
    {
        id: 'n8n-auto',
        title: 'N8N Automation',
        price: '₹4,999',
        iconName: 'Cloud',
        description: 'Workflow design, API/webhook, testing & handover',
        features: ['Workflow Design', 'Webhook Setup', 'Testing Phase', 'Full Handover', 'Automation Logic']
    }
];

const iconMap: Record<string, any> = {
    Globe, Layers, Bot, Code2, Zap, Cloud
};

export default function CloudPage() {
    return (
        <main className="max-w-6xl mx-auto px-6 py-32">
            <Reveal className="text-center mb-20 pt-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500 mb-6">
                    <Cloud className="w-3 h-3" /> System_Cloud_Layer
                </div>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 gradient-heading">
                    Premium Engineering <br />& Cloud Solutions.
                </h1>
                <p className="max-w-2xl mx-auto text-zinc-400 text-lg leading-relaxed">
                    Scalable, high-performance services tailored for modern digital needs.
                    From static footprints to complex neural bot architectures.
                </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SERVICES.map((service, idx) => {
                    const Icon = iconMap[service.iconName] || Globe;
                    return (
                        <Reveal key={service.id} style={{ transitionDelay: `${idx * 0.1}s` }}>
                            <Link href={`/cloud/${service.id}`} className="block group h-full">
                                <SpotlightBox className="h-full">
                                    <div className="p-8 flex flex-col h-full">
                                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-white/20 transition-colors">
                                            <Icon className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" />
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                                        <div className="text-2xl font-black text-white mb-4">{service.price} <span className="text-xs font-mono text-zinc-600">STARTING</span></div>

                                        <p className="text-zinc-500 text-sm mb-8 leading-relaxed">
                                            {service.description}
                                        </p>

                                        <ul className="space-y-3 mb-8 flex-grow">
                                            {service.features.map(f => (
                                                <li key={f} className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-zinc-600">
                                                    <CheckCircle2 className="w-3 h-3 text-zinc-800" /> {f}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex items-center gap-2 text-white text-[10px] font-bold uppercase tracking-widest pt-6 border-t border-white/5 group-hover:gap-4 transition-all">
                                            Select Service <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </SpotlightBox>
                            </Link>
                        </Reveal>
                    );
                })}
            </div>

            <Reveal className="mt-32 p-12 rounded-3xl border border-white/5 bg-white/[0.02] text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Custom Requirements?</h2>
                <p className="text-zinc-500 mb-8 max-w-xl mx-auto">
                    Need something specifically tailored for your business? Let's discuss your custom architecture and design.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                    Talk to Engineer
                </Link>
            </Reveal>
        </main>
    );
}
