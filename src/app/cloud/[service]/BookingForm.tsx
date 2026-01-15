'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Script from 'next/script';
import { createRazorpayOrder, verifyPaymentAndBook } from '@/app/actions/cloud';
import { Loader2, ArrowRight, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function BookingForm({ service }: { service: any }) {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

    const numericPrice = parseInt(service.price.replace(/[^\d]/g, ''));

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: null, message: '' });

        const formData = new FormData(e.currentTarget);
        const userName = formData.get('name') as string;
        const userEmail = formData.get('email') as string;
        const requirements = formData.get('requirements') as string;

        try {
            // 1. Create Razorpay Order
            const orderResult = await createRazorpayOrder(numericPrice);
            if (!orderResult.success || !orderResult.order) {
                throw new Error(orderResult.error || 'Failed to initiate order');
            }

            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: orderResult.order.amount,
                currency: orderResult.order.currency,
                name: "avrxt Cloud",
                description: `Booking: ${service.title}`,
                order_id: orderResult.order.id,
                handler: async (response: any) => {
                    try {
                        setStatus({ type: 'success', message: 'Payment successful. Finalizing booking...' });

                        const verifyResult = await verifyPaymentAndBook(
                            {
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_signature: response.razorpay_signature,
                            },
                            {
                                serviceId: service.id,
                                serviceName: service.title,
                                userName,
                                userEmail,
                                requirements,
                                amount: numericPrice
                            }
                        );

                        if (verifyResult.success) {
                            setStatus({ type: 'success', message: 'Project booked successfully! Redirecting...' });
                            setTimeout(() => {
                                router.push('/cloud/success');
                            }, 2000);
                        } else {
                            throw new Error(verifyResult.error || 'Verification failed');
                        }
                    } catch (err: any) {
                        setStatus({ type: 'error', message: err.message });
                        setIsSubmitting(false);
                    }
                },
                prefill: {
                    name: userName,
                    email: userEmail,
                },
                theme: {
                    color: "#000000",
                },
                modal: {
                    ondismiss: function () {
                        setIsSubmitting(false);
                    }
                }
            };

            const rzp = new (window as any).Razorpay(options);
            rzp.open();
        } catch (error: any) {
            setStatus({ type: 'error', message: error.message || 'Something went wrong' });
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                    <div>
                        <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-2 block">Full_Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="John Doe"
                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-white/30 transition-all font-mono"
                        />
                    </div>

                    <div>
                        <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-2 block">Email_Endpoint</label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="john@example.com"
                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-white/30 transition-all font-mono"
                        />
                    </div>

                    <div>
                        <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-2 block">Project_Requirements</label>
                        <textarea
                            name="requirements"
                            required
                            placeholder="Briefly describe your project goals..."
                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-white/30 transition-all font-mono h-32"
                        />
                    </div>
                </div>

                {status.message && (
                    <div className={cn(
                        "p-4 rounded-xl text-[10px] font-mono uppercase tracking-widest text-center",
                        status.type === 'success' ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"
                    )}>
                        {status.message}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-black font-black py-4 rounded-xl text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:scale-[1.02] transition-all active:scale-[0.98] disabled:opacity-50"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Processing_
                        </>
                    ) : (
                        <>
                            Initialize Booking ({service.price})
                            <ArrowRight className="w-4 h-4" />
                        </>
                    )}
                </button>

                <div className="flex items-center justify-center gap-2 text-zinc-600 text-[9px] uppercase tracking-widest">
                    <ShieldCheck className="w-3 h-3" /> Encrypted Transaction via Razorpay
                </div>
            </form>
        </>
    );
}
