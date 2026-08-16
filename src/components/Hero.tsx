import React from "react";
import { Sparkles, GraduationCap, Award, BookOpen } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="pt-4 pb-3 px-4 max-w-5xl mx-auto">
      <div className="glass-card rounded-3xl p-6 md:p-8 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-amber-500/10 dark:from-slate-900/95 dark:via-emerald-950/60 dark:to-slate-900/95 border-2 border-[#1aab8a]/30 dark:border-emerald-500/40 shadow-lg text-center relative overflow-hidden">
        {/* Decorative background glows */}
        <div className="absolute -top-12 -right-12 w-44 h-44 bg-[#1aab8a]/15 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-44 h-44 bg-amber-400/15 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 space-y-3.5">
          {/* Platform Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#1aab8a] to-[#0d8060] text-white text-xs sm:text-sm font-extrabold shadow-md">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 animate-pulse" />
            <span>مَنَصَّةُ التَّطْبِيقَاتِ التَّعْلِيمِيَّةِ التَّفَاعُلِيَّةِ</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight font-tajawal">
            تَعلَّم اليوم بطريقة <span className="text-[#1aab8a] dark:text-amber-300 drop-shadow-sm">ممتعة وشيِّقة</span>
          </h1>

          {/* Platform Description Container for High Contrast */}
          <div className="bg-white/60 dark:bg-slate-900/90 border border-emerald-500/20 dark:border-emerald-500/40 p-4 sm:p-5 rounded-2xl max-w-2xl mx-auto shadow-sm">
            <p className="text-sm sm:text-base md:text-lg text-slate-900 dark:text-amber-50 leading-relaxed font-extrabold">
              بوابة تعليمية رقمية مستقلة متكاملة ، تقدم تطبيقات تعليمية تفاعلية باللغة العربية موجهة لمتعلمي رياض الاطفال وكل مستويات المرحلة الإبتدائية ،وفق مناهج وزارة التربية الوطنية الجزايرية
            </p>
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1.5">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white dark:bg-slate-800 border-2 border-emerald-500/30 dark:border-emerald-500/50 text-emerald-950 dark:text-emerald-200 text-xs sm:text-sm font-extrabold shadow-sm">
              <GraduationCap className="w-4 h-4 text-[#1aab8a] dark:text-emerald-400" />
              <span>مناهج ابتدائيَّة متوافقة</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white dark:bg-slate-800 border-2 border-amber-500/30 dark:border-amber-500/50 text-amber-950 dark:text-amber-200 text-xs sm:text-sm font-extrabold shadow-sm">
              <Award className="w-4 h-4 text-amber-500" />
              <span>تطبيقات تفاعليَّة شَيِّقة</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white dark:bg-slate-800 border-2 border-teal-500/30 dark:border-teal-500/50 text-teal-950 dark:text-teal-200 text-xs sm:text-sm font-extrabold shadow-sm">
              <BookOpen className="w-4 h-4 text-teal-600 dark:text-teal-300" />
              <span>لغة عربيَّة فصيحة</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};



