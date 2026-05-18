"use client";

import { motion } from "framer-motion";
import { Award, Code2, Users2, Zap } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { icon: Award, label: t.about.stats.experience, value: t.about.stats.exp_value },
    { icon: Users2, label: t.about.stats.collab, value: t.about.stats.collab_value },
    { icon: Zap, label: t.about.stats.perf, value: t.about.stats.perf_value },
    { icon: Code2, label: t.about.stats.reliability, value: t.about.stats.rel_value },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent-secondary font-bold tracking-widest uppercase text-sm mb-4 md:text-center lg:text-left">
              {t.about.badge}
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight text-slate-900 md:text-center lg:text-left">
              {t.about.title_part1} <br />
              <span className="text-slate-400">{t.about.title_accent}</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed md:text-center lg:text-left">
              {t.about.description1}
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-4 sm:p-6 rounded-2xl bg-white border border-slate-100 hover:border-accent-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl group relative overflow-hidden min-w-0"
                >
                  <div className="absolute top-0 left-0 w-1 h-0 bg-accent-primary group-hover:h-full transition-all duration-500" />
                  <stat.icon className={`w-5 h-5 sm:w-6 sm:h-6 mb-2 sm:mb-3 ${i % 2 === 0 ? 'text-accent-primary' : 'text-accent-secondary'} group-hover:scale-110 transition-transform`} />
                  <div className="text-base sm:text-2xl font-bold text-slate-900 mb-1 break-words leading-tight">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest font-medium leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="w-full min-h-[350px] lg:min-h-0 lg:aspect-square rounded-3xl sm:rounded-[2.5rem] overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl relative z-10 p-6 sm:p-12 flex flex-col justify-center items-center text-center group">
              {/* Dynamic background lighting */}
              <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.15),transparent_50%)] group-hover:scale-110 transition-transform duration-1000 ease-out" />
              <div className="absolute bottom-[-50%] right-[-50%] w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_50%)] group-hover:scale-110 transition-transform duration-1000 ease-out" />
              
              {/* Quote Icon */}
              <div className="relative mb-6 sm:mb-8 z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-lg">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-accent-primary drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>

              <div className="relative z-10 flex flex-col items-center">
                <h4 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 sm:mb-6 text-white leading-snug tracking-tight drop-shadow-md">
                  "{t.about.quote}"
                </h4>
                
                <div className="w-16 h-1.5 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full mb-6 sm:mb-8 group-hover:w-32 transition-all duration-500 ease-out" />
                
                <p className="text-slate-300 font-medium text-base sm:text-lg leading-relaxed max-w-sm">
                  {t.about.subquote}
                </p>
              </div>

              {/* Floating accents */}
              <div className="absolute top-6 left-6 w-3 h-3 rounded-full bg-accent-primary/50 blur-sm group-hover:bg-accent-primary transition-colors duration-500" />
              <div className="absolute bottom-6 right-6 w-4 h-4 rounded-full bg-accent-secondary/50 blur-sm group-hover:bg-accent-secondary transition-colors duration-500" />
            </div>

            {/* Decorative elements */}
            <div className="hidden lg:block absolute -top-8 -right-8 w-40 h-40 bg-accent-primary/10 border border-accent-primary/20 rounded-3xl -z-0 rotate-12 blur-sm group-hover:rotate-45 transition-all duration-700" />
            <div className="hidden lg:block absolute -bottom-10 -left-10 w-56 h-56 bg-accent-secondary/10 border border-accent-secondary/20 rounded-full -z-0 blur-md opacity-70 group-hover:scale-110 transition-all duration-700" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
