"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "How secure is my data?",
        answer: "We use industry-standard encryption and security protocols to ensure your business data is safe and protected at all times.",
    },
    {
        question: "Can I use FORBI on multiple devices?",
        answer: "Yes! FORBI is a cloud-based solution that works on any device with a web browser - desktop, tablet, or mobile.",
    },
    {
        question: "Is there a free trial available?",
        answer: "Yes, we offer a 14-day free trial on all plans so you can explore the features before committing.",
    },
    {
        question: "Can I import my existing product data?",
        answer: "Absolutely. We provide easy-to-use Excel import tools to help you migrate your product catalog and customer data quickly.",
    },
    {
        question: "What kind of support do you offer?",
        answer: "We offer email and chat support for all plans, with priority phone support available for Yearly and Lifetime plans.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-white dark:bg-black">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="mx-auto mt-4 text-lg text-gray-600 dark:text-gray-400">
                        Have questions? We're here to help.
                    </p>
                </div>

                <div className="mt-12 space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex w-full items-center justify-between px-6 py-4 text-left focus:outline-none"
                            >
                                <span className="text-lg font-medium text-gray-900 dark:text-white">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`h-5 w-5 text-gray-500 transition-transform ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-4 text-gray-600 dark:text-gray-400">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
