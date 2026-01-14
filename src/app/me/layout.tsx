import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "@avrxt | Personal Links & Profile",
    description: "Connect with avrxt - Full Stack Developer. Find all my social links, music, and resources in one place.",
    icons: {
        icon: "https://cdn.avrxt.in/assets/logo-02.png",
    },
};

export default function MeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
