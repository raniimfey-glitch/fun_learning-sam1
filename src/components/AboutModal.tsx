import React from "react";
import { X, Sparkles, UserCheck, Target, GraduationCap } from "lucide-react";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in font-tajawal">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="relative bg-gradient-to-r from-[#1aab8a] via-teal-600 to-[#0d8060] p-6 text-white shrink-0">
          <button
            onClick={onClose}
            className="absolute left-4 top-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all active:scale-95 cursor-pointer"
            title="إغلاق"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-2xl shadow-inner backdrop-blur-sm shrink-0">
              ✦
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/20 text-white text-xs font-bold mb-1 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>عَنْ المَشْرُوعِ</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
                مَنَصَّةُ " التّعلّم الممتع " fun learning
              </h2>
            </div>
          </div>
        </div>

        {/* Modal Body / Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-right text-slate-800 dark:text-slate-100">
          {/* Section 1: Who am I? (من أنا؟) */}
          <div className="bg-emerald-50/80 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-700/80 rounded-2xl p-5 space-y-2.5 transition-all shadow-xs">
            <div className="flex items-center gap-2.5 text-[#1aab8a] dark:text-emerald-300 font-black text-lg">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center shrink-0">
                <UserCheck className="w-5 h-5 text-[#1aab8a] dark:text-emerald-300" />
              </div>
              <h3>مَنْ أَنَا؟</h3>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-slate-800 dark:text-emerald-50 font-bold">
              أَنَا <strong className="text-slate-900 dark:text-amber-300 font-black">سَمِيرَة عَبْد الصَّدُوق</strong>، أُسْتَاذَةٌ فِي الطَّوْرِ الِابْتِدَائِيِّ بِـ <span className="inline-block px-2 py-0.5 rounded-md bg-emerald-200 dark:bg-emerald-900 text-emerald-900 dark:text-emerald-100 font-black text-sm">16 سَنَةً</span> مِنَ الخِبْرَةِ المَيْدَانِيَّةِ. أَعْرِفُ جَيِّداً مَا يَحْتَاجُهُ المُتَعَلِّمُ دَاخِلَ القِسْمِ — وَمَا يُفَضِّلُهُ خَارِجَهُ.
            </p>
          </div>

          {/* Section 2: Why this project? (لماذا هذا المشروع؟) */}
          <div className="bg-teal-50/80 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-700/80 rounded-2xl p-5 space-y-2.5 transition-all shadow-xs">
            <div className="flex items-center gap-2.5 text-teal-800 dark:text-teal-300 font-black text-lg">
              <div className="w-9 h-9 rounded-xl bg-teal-100 dark:bg-teal-900 flex items-center justify-center shrink-0">
                <Target className="w-5 h-5 text-teal-600 dark:text-teal-300" />
              </div>
              <h3>لِمَاذَا هَذَا المَشْرُوعُ؟</h3>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-slate-800 dark:text-teal-50 font-bold">
              لَاحَظْتُ أَنَّ أَغْلَبَ التَّطْبِيقَاتِ التَّعْلِيمِيَّةِ إِمَّا بِالفَرَنْسِيَّةِ أَوْ الإِنْجِلِيزِيَّةِ، وَإِمَّا لَا تَتَوَافَقُ مَعَ مَنَاهِجِ وِزَارَةِ التَّرْبِيَةِ الوَطَنِيَّةِ الجَزَائِرِيَّةِ. قَرَّرْتُ أَنْ أَبْنِيَ مَا يَحْتَاجُهُ مُتَعَلِّمُونَا بِنَفْسِي، بِلُغَتِهِم، وَوَفْقَ مُقَرَّرَاتِهِم.
            </p>
          </div>

          {/* Section 3: What distinguishes fun learning? (ما الذي يميز منصة " التّعلّم الممتع " fun learning؟) */}
          <div className="bg-amber-50/80 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-700/80 rounded-2xl p-5 space-y-2.5 transition-all shadow-xs">
            <div className="flex items-center gap-2.5 text-amber-800 dark:text-amber-300 font-black text-lg">
              <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-900 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 text-amber-600 dark:text-amber-300" />
              </div>
              <h3>مَا الَّذِي يُمَيِّزُ مَنَصَّةَ " التَّعَلُّم المُمْتِع " fun learning؟</h3>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-slate-800 dark:text-amber-50 font-bold">
              كُلُّ تَطْبِيقٍ بُنِيَ مِنْ دَاخِلِ القِسْمِ، لَا مِنْ وَرَاءِ شَاشَةٍ. كُلُّ تَمْرِينٍ مَرَّ عَلَى مُتَعَلِّمِينَ حَقِيقِيِّينَ قَبْلَ أَنْ يُنْشَرَ.
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-800 flex justify-center shrink-0">
          <button
            onClick={onClose}
            className="px-8 py-2.5 rounded-full bg-gradient-to-r from-[#1aab8a] to-[#0d8060] hover:brightness-110 text-white font-bold text-sm shadow-md transition-all active:scale-95 cursor-pointer"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
};
