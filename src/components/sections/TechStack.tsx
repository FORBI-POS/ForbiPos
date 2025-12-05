"use client";

import { motion } from "framer-motion";

const technologies = [
    { name: "React 18+", category: "UI Framework" },
    { name: "TypeScript", category: "Type Safety" },
    { name: "Vite", category: "Build Tool" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "shadcn/ui", category: "Components" },
    { name: "Zustand", category: "State Management" },
    { name: "React Query", category: "Data Fetching" },
    { name: "Lucide React", category: "Icons" },
];

export function TechStack() {
    return (
        <section id="tech-stack" className="py-24 bg-white dark:bg-black">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Built with Modern Technology
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
                        Powered by a robust and scalable technology stack to ensure performance and reliability.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="flex flex-col items-center justify-center rounded-xl border border-gray-100 bg-gray-50 p-6 text-center transition-colors hover:border-blue-100 hover:bg-blue-50 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-900 dark:hover:bg-blue-900/20"
                        >
                            <span className="text-lg font-semibold text-gray-900 dark:text-white">
                                {tech.name}
                            </span>
                            <span className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                {tech.category}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
