"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-slate-50/50 border-y border-slate-100">
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-[-10%] w-[400px] h-[400px] rounded-full bg-accent-primary/5 blur-[120px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-[-10%] w-[400px] h-[400px] rounded-full bg-accent-secondary/5 blur-[120px] -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-accent-secondary font-bold tracking-widest uppercase text-xs sm:text-sm mb-3"
          >
            {t.process.badge}
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-3"
          >
            {t.process.title_part1}
            <span className="text-gradient">{t.process.title_accent}</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs sm:text-sm font-bold tracking-widest uppercase text-slate-500"
          >
            {t.process.subheading}
          </motion.p>
        </div>

        {/* Timeline Grid */}
      <div className="relative pl-8 lg:pl-0 flex flex-col lg:grid lg:grid-cols-4 gap-8 lg:gap-6 lg:gap-8">
          
          {/* Mobile Vertical Line */}
          <div className="absolute left-[24px] top-6 bottom-6 w-[2px] bg-slate-200 md:hidden">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full bg-gradient-to-b from-accent-primary to-accent-secondary"
            />
          </div>

          {/* Desktop Horizontal Connector Line — rendered once, behind all cards */}
          <div className="absolute top-0 left-[12.5%] right-[12.5%] h-[2px] bg-slate-200 hidden md:block" style={{ zIndex: 0 }}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary"
            />
          </div>

          {t.process.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative group min-w-0"
            >
              {/* Number Badge */}
              <div className="absolute left-0 md:left-1/2 top-6 md:top-0 -translate-y-1/2 -translate-x-[24px] md:-translate-x-1/2 w-8 h-8 rounded-full bg-gradient-duo text-white font-black text-sm flex items-center justify-center shadow-lg shadow-accent-primary/25 z-20 group-hover:scale-115 transition-transform duration-300">
                {step.number}
              </div>

              {/* Card Wrapper */}
              <div className="glass p-6 sm:p-8 pt-10 md:pt-10 rounded-3xl bg-white border border-slate-100/80 shadow-sm hover:shadow-xl hover:border-accent-primary/30 transition-all duration-300 flex flex-col items-start md:items-center text-left md:text-center h-full relative z-10">
                {/* Small card light effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-duo opacity-0 transition-opacity duration-500 rounded-t-3xl" />
                
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-3 md:mt-2 transition-colors duration-300 group-hover:text-slate-950">
                  {step.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
