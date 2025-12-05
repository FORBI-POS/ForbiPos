"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BarChart3, ShoppingCart, Package, Users, FileText, CreditCard, Gift, Database, Shield } from "lucide-react";

const features = [
    {
        name: "Smart Point of Sale",
        description: "Experience lightning-fast billing with our intuitive POS interface. Support for barcode scanning, multiple payment modes, and dynamic pricing makes checkout a breeze.",
        image: "/billingPos.png",
        icon: ShoppingCart,
        color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    },
    {
        name: "Barcode Generation",
        description: "Generate and print custom barcodes for all your products instantly. Streamline your inventory management and speed up the billing process.",
        image: "/barcodegenrater.png",
        icon: Package,
        color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
    },
    {
        name: "Expense Tracking",
        description: "Keep a close eye on your business expenses. Categorize costs, track spending trends, and ensure your profitability with detailed expense reports.",
        image: "/expences.png",
        icon: CreditCard,
        color: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400",
    },
    {
        name: "Employee Management",
        description: "Manage your staff efficiently. Save and track employee details including salary information, roles, and responsibilities. Keep all your team data organized in one place.",
        image: "/employees.png",
        icon: Users,
        color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
    },
    {
        name: "Customer Credit Points",
        description: "Build customer loyalty with an integrated credit points system. Reward repeat customers, track their points balance, and encourage more purchases with attractive rewards.",
        image: "/creditpointsforcustumners.png",
        icon: Gift,
        color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
    },
    {
        name: "Database Backup & Restore",
        description: "Protect your business data with automated backup and restore capabilities. Ensure data safety and business continuity with easy-to-use backup management tools.",
        image: "/db-backupandrestore.png",
        icon: Database,
        color: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400",
    },
    {
        name: "Multi-Role User Management",
        description: "Control access and permissions with sophisticated role-based user management. Assign different roles to team members and maintain security across your organization.",
        image: "/multipleroleusermangament.png",
        icon: Shield,
        color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400",
    },
];

export function Features() {
    return (
        <section id="features" className="py-24 bg-gray-50 dark:bg-black/50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Powerful Features for Modern Retail
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
                        Discover the tools that will transform how you run your business.
                    </p>
                </div>

                <div className="space-y-24">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className={`flex flex-col gap-12 lg:items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                }`}
                        >
                            <div className="flex-1 space-y-6">
                                <div className={`inline-flex rounded-lg p-3 ${feature.color}`}>
                                    <feature.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {feature.name}
                                </h3>
                                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                            <div className="flex-1">
                                <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-900">
                                    <Image
                                        src={feature.image}
                                        alt={feature.name}
                                        width={800}
                                        height={600}
                                        className="w-full object-cover"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
