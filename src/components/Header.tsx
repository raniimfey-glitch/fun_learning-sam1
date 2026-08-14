import React, { useState, useRef, useEffect } from "react";
import { Moon, Sun, User, Trophy, Bot, Menu, ChevronDown, Check, BookOpen, Star } from "lucide-react";
import { UserProfile } from "../types";

interface HeaderProps {
  user: UserProfile;
  isDark: boolean;
  onToggleDark: () => void;
  onOpenAuth: () => void;
  onOpenJourney: () => void;
  onOpenAdmin: () => void;
  onOpenAiTutor: () => void;
  onOpenAbout?: () => void;
  onGoHome?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  user,
  isDark,
  onToggleDark,
  onOpenAuth,
  onOpenJourney,
  onOpenAdmin,
  onOpenAiTutor,
  onOpenAbout,
  onGoHome,
}) => {
  const [tapCount, setTapCount] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [showReadingSubmenu, setShowReadingSubmenu] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleLogoClick = () => {
    if (onGoHome) {
      onGoHome();
    }
    const newCount = tapCount + 1;
    if (newCount >= 5) {
      setTapCount(0);
      onOpenAdmin();
    } else {
      setTapCount(newCount);
      setTimeout(() => setTapCount(0), 2000);
    }
  };

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-[#1aab8a] via-[#12977c] to-[#0d8060] dark:from-[#0e2a22] dark:to-[#0a2018] shadow-md transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo with secret 5-tap gesture */}
        <div
          onClick={handleLogoClick}
          className="flex items-center gap-2.5 cursor-pointer select-none group transition-transform active:scale-95"
          title="رنيم فاي | التَّعلُّم المُمْتِع (اضغط 5 مرَّات للوحة التَّحكُّم)"
        >
          <div className="w-10 h-10 bg-white/20 border border-white/30 rounded-xl flex items-center justify-center text-white text-xl shadow-inner group-hover:bg-white/30 transition-colors backdrop-blur-sm">
            ✦
          </div>
          <div className="flex flex-col text-right">
            <span className="text-white font-bold text-base md:text-lg leading-tight drop-shadow-sm font-tajawal">
              رنيم فاي
            </span>
            <span className="text-white/80 text-xs font-medium">التَّعلُّم المُمْتِع</span>
          </div>
        </div>

        {/* Header Right Actions */}
        <div className="flex items-center gap-2">
          {/* User Auth Button */}
          <button
            onClick={onOpenAuth}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 border border-white/30 text-white text-xs font-semibold backdrop-blur-sm transition-all shadow-sm active:scale-95"
          >
            <div className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center text-xs font-bold">
              {user.email ? user.name.charAt(0).toUpperCase() : <User className="w-3.5 h-3.5" />}
            </div>
            <span className="hidden sm:inline max-w-[90px] truncate">
              {user.email ? user.name : "دخول"}
            </span>
          </button>

          {/* Hamburger 3-Lines Menu at far left (اقصى اليسار) */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 border border-white/30 text-white backdrop-blur-sm transition-all active:scale-95 flex items-center justify-center"
              title="القائمة الرئيسية"
              aria-label="القائمة"
            >
              <Menu className="w-5 h-5 text-white" />
            </button>

            {/* Menu Dropdown */}
            {showMenu && (
              <div className="absolute left-0 mt-2 w-64 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-3 z-50 text-right animate-fade-in font-tajawal text-slate-800 dark:text-slate-100">
                {/* Item 0: Home Page (الصفحة الرئيسية) */}
                <button
                  onClick={() => {
                    setShowMenu(false);
                    if (onGoHome) {
                      onGoHome();
                    } else {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className="w-full flex items-center gap-2 p-2.5 mb-1.5 rounded-xl bg-slate-100 dark:bg-slate-700/60 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all text-xs font-bold text-slate-800 dark:text-slate-100 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4 text-[#1aab8a] dark:text-emerald-400 shrink-0" />
                  <span>الواجهة الرَّئيسيَّة 🏠</span>
                </button>

                {/* Item 1: About the Project (عن المشروع) */}
                <button
                  onClick={() => {
                    setShowMenu(false);
                    if (onOpenAbout) {
                      onOpenAbout();
                    } else {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className="w-full flex items-center gap-2.5 p-2.5 mb-2 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/50 dark:to-teal-950/40 hover:from-emerald-100 hover:to-teal-100 border border-emerald-200 dark:border-emerald-800/80 transition-all text-xs font-bold text-[#1aab8a] dark:text-emerald-300 shadow-2xs cursor-pointer"
                >
                  <div className="w-5 h-5 rounded-md bg-[#1aab8a]/15 dark:bg-emerald-400/20 border border-[#1aab8a]/40 dark:border-emerald-400/40 flex items-center justify-center shrink-0">
                    <Star className="w-3.5 h-3.5 fill-[#1aab8a] text-[#1aab8a] dark:fill-emerald-400 dark:text-emerald-400" />
                  </div>
                  <span>عن المَشْروعِ</span>
                </button>

                {/* Item 2: Reading Mode (وضعية القراءة) */}
                <div className="border-b border-slate-100 dark:border-slate-700 pb-2 mb-2">
                  <button
                    onClick={() => setShowReadingSubmenu(!showReadingSubmenu)}
                    className="w-full flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors text-xs font-extrabold text-[#1aab8a] dark:text-emerald-400"
                  >
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      <span>وضعية القراءة</span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        showReadingSubmenu ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Submenu for Reading Mode options */}
                  {showReadingSubmenu && (
                    <div className="mt-2 space-y-1 animate-fade-in">
                      {/* Night Mode Option */}
                      <button
                        onClick={() => {
                          if (!isDark) onToggleDark();
                        }}
                        className={`w-full flex items-center justify-between p-2 rounded-lg text-xs font-semibold transition-colors ${
                          isDark
                            ? "bg-emerald-50 dark:bg-emerald-950/50 text-[#1aab8a] dark:text-emerald-300 font-bold border border-emerald-200 dark:border-emerald-800"
                            : "hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Moon className="w-4 h-4 text-indigo-500" />
                          <span>الوضع اللّيليّ</span>
                        </div>
                        {isDark && <Check className="w-3.5 h-3.5 text-[#1aab8a]" />}
                      </button>

                      {/* Day Mode Option */}
                      <button
                        onClick={() => {
                          if (isDark) onToggleDark();
                        }}
                        className={`w-full flex items-center justify-between p-2 rounded-lg text-xs font-semibold transition-colors ${
                          !isDark
                            ? "bg-emerald-50 dark:bg-emerald-950/50 text-[#1aab8a] dark:text-emerald-300 font-bold border border-emerald-200 dark:border-emerald-800"
                            : "hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Sun className="w-4 h-4 text-amber-500" />
                          <span>الوضع النّهاريّ</span>
                        </div>
                        {!isDark && <Check className="w-3.5 h-3.5 text-[#1aab8a]" />}
                      </button>
                    </div>
                  )}
                </div>

                {/* Additional Quick Access Items in the Menu */}
                <div className="space-y-1">
                  <button
                    onClick={() => {
                      setShowMenu(false);
                      onOpenAiTutor();
                    }}
                    className="w-full flex items-center gap-2 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700/60 transition-colors text-xs font-semibold text-slate-700 dark:text-slate-200"
                  >
                    <Bot className="w-4 h-4 text-amber-500" />
                    <span>مساعد التَّعلُّم الذَّكيّ</span>
                  </button>

                  <button
                    onClick={() => {
                      setShowMenu(false);
                      onOpenJourney();
                    }}
                    className="w-full flex items-center gap-2 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700/60 transition-colors text-xs font-semibold text-slate-700 dark:text-slate-200"
                  >
                    <Trophy className="w-4 h-4 text-amber-500" />
                    <span>رحلتي في التَّعلُّم</span>
                  </button>

                  <button
                    onClick={() => {
                      setShowMenu(false);
                      onOpenAuth();
                    }}
                    className="w-full flex items-center gap-2 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700/60 transition-colors text-xs font-semibold text-slate-700 dark:text-slate-200"
                  >
                    <User className="w-4 h-4 text-emerald-500" />
                    <span>{user.email ? user.name : "تسجيل الدَّخول"}</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};


