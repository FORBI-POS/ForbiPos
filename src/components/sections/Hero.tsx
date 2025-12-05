"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail } from "lucide-react";
import { HeroScrollDemo } from "../demos/hero-scroll-demo";

export function Hero() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Content */}
            <div className="relative z-10 flex min-h-screen w-full flex-col mt-50 items-center justify-center py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-6xl"
                        >
                            Smart Retail Management <br />
                            <span className="text-blue-400">Powered by Intelligence</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="mx-auto mt-6 max-w-2xl text-lg text-white/80"
                        >
                            Effortlessly manage sales, inventory, and billing in minutes.
                            The complete solution for modern retail businesses.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-10 flex flex-wrap justify-center gap-4"
                        >
                            <Link
                                href="https://wa.me/917025800254"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-2 rounded-full bg-green-600 px-8 py-3 text-base font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/50"
                            >
                                <MessageCircle className="h-4 w-4" />
                                WhatsApp Us
                            </Link>
                            <Link
                                href="tel:+917025800254"
                                className="flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3 text-base font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/50"
                            >
                                <Phone className="h-4 w-4" />
                                Call Us
                            </Link>
                            <Link
                                href="mailto:forbisolutions@gmail.com"
                                className="flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                            >
                                <Mail className="h-4 w-4" />
                                Email Us
                            </Link>
                        </motion.div>
                    </div>
<HeroScrollDemo/>
                </div>
            </div>
        </div>
    );
}
