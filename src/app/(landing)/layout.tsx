'use client';



import { Navbar } from "@/components/layout/Navbar";

export default function LandingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Navbar />
            <main className="relative min-h-screen">
                {children}
            </main>
        </div>
    );
}
