import React from "react";
import { Star, CheckCircle, Lock, ArrowLeft, ArrowRight } from "lucide-react";
import { AppItem, ReviewItem, Language } from "../types";
import { normalizeCategory } from "../data/initialApps";
import { translations, getCategoryLabel, getAppName, getAppDesc, getAppAge } from "../utils/i18n";

interface AppCardProps {
  app: AppItem;
  index: number;
  isFav: boolean;
  isDone: boolean;
  isVisited?: boolean;
  isUnlocked: boolean;
  reviews: ReviewItem[];
  onToggleFav: (index: number) => void;
  onToggleDone: (index: number) => void;
  onOpenPreview: (index: number) => void;
  onOpenUnlock: (index: number) => void;
  onOpenRating: (index: number) => void;
  lang: Language;
}

export const AppCard: React.FC<AppCardProps> = ({
  app,
  index,
  isFav,
  isDone,
  isVisited,
  isUnlocked,
  reviews,
  onToggleFav,
  onToggleDone,
  onOpenPreview,
  onOpenUnlock,
  onOpenRating,
  lang,
}) => {
  const t = translations[lang];
  const isPaid = !!(app.paid && app.paidPass && app.paidPass.trim() !== "");
  const isPlaceholder = !app.url || app.url === "رابط_هنا" || app.url === "#";

  // Calculate rating average
  const ratingCount = reviews.length;
  const ratingAvg =
    ratingCount > 0
      ? Math.round((reviews.reduce((acc, r) => acc + r.stars, 0) / ratingCount) * 10) / 10
      : 0;

  const handleAction = () => {
    if (isPlaceholder) return;
    onOpenPreview(index);
  };

  return (
    <div
      onClick={handleAction}
      className={`glass-card rounded-2xl p-4 sm:p-5 flex flex-col justify-between relative cursor-pointer group transition-all duration-200 hover:-translate-y-1 hover:shadow-xl border-2 ${
        isDone
          ? "bg-emerald-50/90 dark:bg-emerald-950/80 border-emerald-500"
          : isPaid
          ? "bg-white dark:bg-slate-900/95 border-amber-400 dark:border-amber-500/80 hover:border-amber-500"
          : "bg-white dark:bg-slate-900/95 border-slate-200/90 dark:border-slate-700 hover:border-emerald-500"
      }`}
    >
      {/* Top Card Header */}
      <div>
        <div className="flex items-start justify-between gap-2.5 mb-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100/90 dark:bg-emerald-900/60 flex items-center justify-center text-2xl shrink-0 group-hover:scale-105 transition-transform shadow-sm">
              {app.icon || "📱"}
            </div>
            <div>
              <div className="flex items-center gap-1.5 flex-wrap mb-1">
                <span className="inline-block px-2.5 py-0.5 text-xs font-bold rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700">
                  {getCategoryLabel(app.cat, lang)}
                </span>
                {isPaid ? (
                  <span className="inline-block px-2.5 py-0.5 text-xs font-bold rounded-full bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-200 border border-amber-300 dark:border-amber-700">
                    💎 {t.paid}
                  </span>
                ) : (
                  <span className="inline-block px-2.5 py-0.5 text-xs font-bold rounded-full bg-teal-100 dark:bg-teal-950 text-teal-900 dark:text-teal-200 border border-teal-300 dark:border-teal-700">
                    ✨ {t.free}
                  </span>
                )}
              </div>
              <h3 className="font-extrabold text-slate-900 dark:text-amber-300 text-base sm:text-lg leading-snug font-tajawal">
                {getAppName(app, lang)}
              </h3>
            </div>
          </div>

          {/* Fav action */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFav(index);
            }}
            className={`p-1.5 rounded-full transition-colors shrink-0 ${
              isFav ? "text-amber-500 bg-amber-50 dark:bg-amber-950/60" : "text-slate-400 dark:text-slate-400 hover:text-amber-400"
            }`}
            title={isFav ? t.toastFavRemoved : t.toastFavAdded}
          >
            <Star className="w-5 h-5 fill-current" />
          </button>
        </div>

        {/* Rating Stars & Dedicated Rating Button */}
        <div className="flex items-center justify-between gap-1.5 mb-3 pt-0.5">
          <div className="flex items-center gap-1 text-sm">
            <div className="flex text-amber-400">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="text-sm">
                  {s <= Math.round(ratingAvg) ? "★" : "☆"}
                </span>
              ))}
            </div>
            <span className="text-slate-700 dark:text-amber-200 text-xs font-extrabold">
              {ratingCount > 0 ? `(${ratingAvg})` : ""}
            </span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenRating(index);
            }}
            className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/80 border border-amber-300 dark:border-amber-600 text-amber-900 dark:text-amber-200 hover:bg-amber-100 text-xs font-extrabold transition-all active:scale-95 shadow-xs"
            title={t.ratingTitle}
          >
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{t.rate}</span>
          </button>
        </div>

        {/* App Description - High Contrast Bright Text in Dark Mode */}
        <p className="text-sm sm:text-base text-slate-800 dark:text-emerald-50 font-bold leading-relaxed mb-3">
          {getAppDesc(app, lang)}
        </p>
      </div>

      {/* Card Footer */}
      <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-2 text-xs">
        <span className="text-slate-700 dark:text-emerald-300 font-extrabold text-xs">{getAppAge(app, lang)}</span>

        <div className="flex items-center gap-2">
          {/* Mark Done Button */}
          {!isPlaceholder && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleDone(index);
              }}
              className={`px-2.5 py-1 rounded-full border text-xs font-bold transition-all flex items-center gap-1 ${
                isDone
                  ? "bg-emerald-600 border-emerald-600 text-white"
                  : isVisited
                  ? "border-emerald-300 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40"
                  : "border-slate-200 dark:border-slate-700 text-slate-500 bg-slate-50 dark:bg-slate-800/40 hover:text-slate-700"
              }`}
              title={
                isDone
                  ? t.completed
                  : isVisited
                  ? t.markDone
                  : t.toastMustPreviewFirst
              }
            >
              <CheckCircle className="w-3.5 h-3.5" />
              <span>{isDone ? t.completed : t.markDone}</span>
            </button>
          )}

          {/* Status / Action Button */}
          {isPlaceholder ? (
            <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 text-xs font-bold">
              ⏳ {t.comingSoon}
            </span>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenPreview(index);
              }}
              className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#1aab8a] to-[#0d8060] text-white text-xs font-bold flex items-center gap-1 shadow-2xs hover:brightness-110 active:scale-95 transition-all"
            >
              <span>{t.preview}</span>
              {lang === "ar" ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

