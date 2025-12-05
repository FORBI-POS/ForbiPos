"use client";

import Link from "next/link";
import { MessageCircle, Phone, Mail } from "lucide-react";

export function CTA() {
    return (
        <section className="bg-blue-600 py-24 dark:bg-blue-900">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Ready to transform your retail business?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
                    Get in touch with us today. We'll visit your location and set up FORBI-POS tailored to your business needs.
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <Link
                        href="https://wa.me/917025800254"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 rounded-full bg-white px-8 py-3 text-base font-semibold text-blue-600 transition-all hover:bg-blue-50 hover:shadow-lg"
                    >
                        <MessageCircle className="h-4 w-4" />
                        WhatsApp Us
                    </Link>
                    <Link
                        href="tel:+917025800254"
                        className="flex items-center gap-2 rounded-full bg-white px-8 py-3 text-base font-semibold text-blue-600 transition-all hover:bg-blue-50 hover:shadow-lg"
                    >
                        <Phone className="h-4 w-4" />
                        Call Us
                    </Link>
                    <Link
                        href="mailto:forbisolutions@gmail.com"
                        className="flex items-center gap-2 rounded-full border-2 border-white bg-transparent px-8 py-3 text-base font-semibold text-white transition-all hover:bg-white hover:text-blue-600"
                    >
                        <Mail className="h-4 w-4" />
                        Email Us
                    </Link>
                </div>
            </div>
        </section>
    );
}
