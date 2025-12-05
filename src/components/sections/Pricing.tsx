"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
    {
        name: "Monthly",
        price: "₹799",
        period: "/month",
        description: "Perfect for small businesses starting out.",
        features: [
            "All Core Features",
            "Single User Access",
            "Basic Support",
            "Cloud Backup",
        ],
        cta: "Contact for Monthly Plan",
        popular: false,
    },
    {
        name: "Yearly",
        price: "₹8,000",
        period: "/year",
        description: "Best value for growing businesses.",
        features: [
            "All Core Features",
            "Multi-User Access (up to 3)",
            "Priority Support",
            "Advanced Analytics",
            "Save ₹1,588 per year",
        ],
        cta: "Contact for Yearly Plan",
        popular: true,
    },
    {
        name: "Lifetime",
        price: "₹25,000",
        period: "one-time",
        description: "One-time payment for lifetime access.",
        features: [
            "All Core Features",
            "Unlimited Users",
            "Premium Support",
            "Custom Features",
            "Lifetime Updates",
        ],
        cta: "Contact for Lifetime Plan",
        popular: false,
    },
];

export function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-gray-50 dark:bg-black/50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
                        Choose the plan that fits your business needs. We'll come to you for installation and setup.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-12">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative flex flex-col rounded-2xl border p-8 shadow-sm ${plan.popular
                                ? "border-blue-600 bg-white ring-2 ring-blue-600 dark:bg-gray-900"
                                : "border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-blue-600 px-3 py-1 text-center text-sm font-medium text-white">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {plan.name}
                                </h3>
                                <p className="mt-4 flex items-baseline text-gray-900 dark:text-white">
                                    <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                                    <span className="ml-1 text-sm font-semibold text-gray-500 dark:text-gray-400">
                                        {plan.period}
                                    </span>
                                </p>
                                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                    {plan.description}
                                </p>
                            </div>

                            <ul className="mb-8 space-y-4 flex-1">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start">
                                        <Check className="h-5 w-5 flex-shrink-0 text-blue-500" />
                                        <span className="ml-3 text-sm text-gray-600 dark:text-gray-300">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="https://wa.me/917025800254"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`block w-full rounded-lg px-6 py-3 text-center text-sm font-semibold transition-colors ${plan.popular
                                    ? "bg-blue-600 text-white hover:bg-blue-700"
                                    : "bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/30"
                                    }`}
                            >
                                {plan.cta}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
