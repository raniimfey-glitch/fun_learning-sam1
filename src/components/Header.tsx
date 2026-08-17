import React, { useState, useRef, useEffect } from "react";
import { Moon, Sun, User, Trophy, Bot, Menu, ChevronDown, Check, BookOpen, Star, Smartphone, Tablet, Monitor, Globe } from "lucide-react";
import { UserProfile, ViewportMode, Language } from "../types";
import { translations } from "../utils/i18n";

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
  viewportMode?: ViewportMode;
  onViewportChange?: (mode: ViewportMode) => void;
  lang: Language;
  onLanguageChange: (newLang: Language) => void;
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
  viewportMode = "full",
  onViewportChange,
  lang,
  onLanguageChange,
}) => {
  const t = translations[lang];
  const [tapCount, setTapCount] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [showViewportMenu, setShowViewportMenu] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showReadingSubmenu, setShowReadingSubmenu] = useState(true);
  const [showLangSubmenu, setShowLangSubmenu] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  const tapCountRef = useRef(0);
  const tapTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleLogoClick = () => {
    if (onGoHome) {
      onGoHome();
    }
    
    // Clear any previous timer reset
    if (tapTimerRef.current) {
      clearTimeout(tapTimerRef.current);
    }

    tapCountRef.current += 1;
    if (tapCountRef.current >= 5) {
      tapCountRef.current = 0;
      setTapCount(0);
      onOpenAdmin();
    } else {
      setTapCount(tapCountRef.current);
      // Give the user 2.5 seconds between rapid taps
      tapTimerRef.current = setTimeout(() => {
        tapCountRef.current = 0;
        setTapCount(0);
      }, 2500);
    }
  };

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (menuRef.current && !menuRef.current.contains(target)) {
        setShowMenu(false);
      }
      if (viewportRef.current && !viewportRef.current.contains(target)) {
        setShowViewportMenu(false);
      }
      if (langRef.current && !langRef.current.contains(target)) {
        setShowLangMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const languageOptions: { code: Language; name: string; flag: string; nativeName: string }[] = [
    { code: "ar", name: "العربية", flag: "🇩🇿", nativeName: "العربية" },
    { code: "en", name: "English", flag: "🇬🇧", nativeName: "English" },
    { code: "fr", name: "Français", flag: "🇫🇷", nativeName: "Français" },
  ];

  const currentLangObj = languageOptions.find((l) => l.code === lang) || languageOptions[0];

  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-[#1aab8a] via-[#12977c] to-[#0d8060] dark:from-[#0e2a22] dark:to-[#0a2018] shadow-md transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo with secret 5-tap gesture */}
        <div
          onClick={handleLogoClick}
          className="flex items-center gap-2.5 cursor-pointer select-none group transition-transform active:scale-95"
          title={t.headerAdminHint}
        >
          <div className="w-11 h-11 bg-white/20 border border-white/30 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors backdrop-blur-sm">
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
            </svg>
          </div>
          <div className="flex flex-col text-start">
            <span className="text-white font-bold text-base md:text-lg leading-tight font-tajawal">
              {t.brandName}
            </span>
            <span className="text-white/80 text-xs font-medium">{t.brandSubtitle}</span>
          </div>
        </div>

        {/* Header Right Actions */}
        <div className="flex items-center gap-2">
          {/* Language Switcher Button (زر اختيار اللغة العلوي) */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 dark:bg-black/35 dark:hover:bg-black/50 border border-white/30 text-white text-xs font-bold backdrop-blur-sm transition-all shadow-xs active:scale-95 cursor-pointer"
              title={t.languageSelect}
              aria-label={t.languageSelect}
              aria-expanded={showLangMenu}
            >
              <Globe className="w-3.5 h-3.5 text-amber-300" />
              <span className="text-[11px] font-extrabold flex items-center gap-1">
                <span>{currentLangObj.flag}</span>
                <span className="hidden xs:inline sm:inline">{currentLangObj.nativeName}</span>
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-white/80 transition-transform duration-200 ${
                  showLangMenu ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Language Dropdown Menu */}
            {showLangMenu && (
              <div className="absolute left-0 sm:right-0 sm:left-auto mt-2 w-44 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-2 z-50 animate-fade-in font-tajawal text-slate-800 dark:text-slate-100">
                <div className="px-2 py-1 mb-1 text-[11px] font-bold text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-700/60 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>{t.languageSelect}:</span>
                </div>

                {languageOptions.map((langOpt) => {
                  const isSelected = langOpt.code === lang;
                  return (
                    <button
                      key={langOpt.code}
                      onClick={() => {
                        onLanguageChange(langOpt.code);
                        setShowLangMenu(false);
                      }}
                      className={`w-full flex items-center justify-between p-2 rounded-xl transition-all text-xs cursor-pointer my-0.5 ${
                        isSelected
                          ? "bg-emerald-50 dark:bg-emerald-950/60 text-[#1aab8a] dark:text-emerald-300 font-bold border border-emerald-200/80 dark:border-emerald-800/80"
                          : "hover:bg-slate-100 dark:hover:bg-slate-700/60 text-slate-700 dark:text-slate-200"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base">{langOpt.flag}</span>
                        <span className="font-bold">{langOpt.nativeName}</span>
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-[#1aab8a] dark:text-emerald-400" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Single Button Responsive Viewport Selector (أداة معاينة حجم الشاشة) */}
          <div className="relative" ref={viewportRef}>
            <button
              onClick={() => setShowViewportMenu(!showViewportMenu)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-black/20 hover:bg-black/30 dark:bg-black/40 dark:hover:bg-black/50 border border-white/25 text-white text-xs font-bold backdrop-blur-sm transition-all shadow-xs active:scale-95 cursor-pointer"
              title={t.viewportLabel}
              aria-label={t.viewportLabel}
              aria-expanded={showViewportMenu}
            >
              {viewportMode === "mobile" ? (
                <Smartphone className="w-3.5 h-3.5 text-amber-300" />
              ) : viewportMode === "tablet" ? (
                <Tablet className="w-3.5 h-3.5 text-amber-300" />
              ) : (
                <Monitor className="w-3.5 h-3.5 text-white" />
              )}
              <span className="text-[11px] hidden sm:inline">
                {viewportMode === "mobile"
                  ? t.viewportMobile
                  : viewportMode === "tablet"
                  ? t.viewportTablet
                  : t.viewportFull}
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-white/80 transition-transform duration-200 ${
                  showViewportMenu ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Viewport Dropdown Menu */}
            {showViewportMenu && (
              <div className="absolute left-0 sm:right-0 sm:left-auto mt-2 w-48 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-2 z-50 animate-fade-in font-tajawal text-slate-800 dark:text-slate-100">
                <div className="px-2 py-1 mb-1 text-[11px] font-bold text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-700/60">
                  <span>{t.viewportLabel}</span>
                </div>

                {/* Option 1: Current Screen Size */}
                <button
                  onClick={() => {
                    onViewportChange?.("full");
                    setShowViewportMenu(false);
                  }}
                  className={`w-full flex items-center justify-between p-2 rounded-xl transition-all text-xs cursor-pointer ${
                    viewportMode === "full"
                      ? "bg-emerald-50 dark:bg-emerald-950/60 text-[#1aab8a] dark:text-emerald-300 font-bold border border-emerald-200/80 dark:border-emerald-800/80"
                      : "hover:bg-slate-100 dark:hover:bg-slate-700/60 text-slate-700 dark:text-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${
                      viewportMode === "full"
                        ? "bg-[#1aab8a] text-white"
                        : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                    }`}>
                      <Monitor className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-bold">{t.viewportFull}</span>
                  </div>
                  {viewportMode === "full" && <Check className="w-4 h-4 text-[#1aab8a] dark:text-emerald-400" />}
                </button>

                {/* Option 2: Tablet View */}
                <button
                  onClick={() => {
                    onViewportChange?.("tablet");
                    setShowViewportMenu(false);
                  }}
                  className={`w-full flex items-center justify-between p-2 mt-1 rounded-xl transition-all text-xs cursor-pointer ${
                    viewportMode === "tablet"
                      ? "bg-emerald-50 dark:bg-emerald-950/60 text-[#1aab8a] dark:text-emerald-300 font-bold border border-emerald-200/80 dark:border-emerald-800/80"
                      : "hover:bg-slate-100 dark:hover:bg-slate-700/60 text-slate-700 dark:text-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${
                      viewportMode === "tablet"
                        ? "bg-[#1aab8a] text-white"
                        : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                    }`}>
                      <Tablet className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-bold">{t.viewportTablet}</span>
                  </div>
                  {viewportMode === "tablet" && <Check className="w-4 h-4 text-[#1aab8a] dark:text-emerald-400" />}
                </button>

                {/* Option 3: Mobile View */}
                <button
                  onClick={() => {
                    onViewportChange?.("mobile");
                    setShowViewportMenu(false);
                  }}
                  className={`w-full flex items-center justify-between p-2 mt-1 rounded-xl transition-all text-xs cursor-pointer ${
                    viewportMode === "mobile"
                      ? "bg-emerald-50 dark:bg-emerald-950/60 text-[#1aab8a] dark:text-emerald-300 font-bold border border-emerald-200/80 dark:border-emerald-800/80"
                      : "hover:bg-slate-100 dark:hover:bg-slate-700/60 text-slate-700 dark:text-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${
                      viewportMode === "mobile"
                        ? "bg-[#1aab8a] text-white"
                        : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                    }`}>
                      <Smartphone className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-bold">{t.viewportMobile}</span>
                  </div>
                  {viewportMode === "mobile" && <Check className="w-4 h-4 text-[#1aab8a] dark:text-emerald-400" />}
                </button>
              </div>
            )}
          </div>

          {/* User Auth Button */}
          <button
            onClick={onOpenAuth}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 border border-white/30 text-white text-xs font-semibold backdrop-blur-sm transition-all shadow-sm active:scale-95"
          >
            <div className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center text-xs font-bold">
              {user.email ? user.name.charAt(0).toUpperCase() : <User className="w-3.5 h-3.5" />}
            </div>
            <span className="hidden sm:inline max-w-[90px] truncate">
              {user.email ? user.name : t.login}
            </span>
          </button>

          {/* Hamburger 3-Lines Menu */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 border border-white/30 text-white backdrop-blur-sm transition-all active:scale-95 flex items-center justify-center"
              title={t.mainMenu}
              aria-label={t.mainMenu}
            >
              <Menu className="w-5 h-5 text-white" />
            </button>

            {/* Menu Dropdown */}
            {showMenu && (
              <div className="absolute left-0 mt-2 w-64 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-3 z-50 animate-fade-in font-tajawal text-slate-800 dark:text-slate-100">
                {/* Item 0: Home Page */}
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
                  <span>{t.homeNav}</span>
                </button>

                {/* Item 1: About the Project */}
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
                  <span>{t.aboutNav}</span>
                </button>

                {/* Item 2: Language Switch in Menu */}
                <div className="border-b border-slate-100 dark:border-slate-700 pb-2 mb-2">
                  <button
                    onClick={() => setShowLangSubmenu(!showLangSubmenu)}
                    className="w-full flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors text-xs font-extrabold text-[#1aab8a] dark:text-emerald-400"
                  >
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      <span>{t.languageSelect}</span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        showLangSubmenu ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {showLangSubmenu && (
                    <div className="mt-2 space-y-1 animate-fade-in">
                      {languageOptions.map((langOpt) => {
                        const isSelected = langOpt.code === lang;
                        return (
                          <button
                            key={langOpt.code}
                            onClick={() => {
                              onLanguageChange(langOpt.code);
                              setShowMenu(false);
                            }}
                            className={`w-full flex items-center justify-between p-2 rounded-lg text-xs font-semibold transition-colors ${
                              isSelected
                                ? "bg-emerald-50 dark:bg-emerald-950/50 text-[#1aab8a] dark:text-emerald-300 font-bold border border-emerald-200 dark:border-emerald-800"
                                : "hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span>{langOpt.flag}</span>
                              <span>{langOpt.nativeName}</span>
                            </div>
                            {isSelected && <Check className="w-3.5 h-3.5 text-[#1aab8a]" />}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Item 3: Reading Mode */}
                <div className="border-b border-slate-100 dark:border-slate-700 pb-2 mb-2">
                  <button
                    onClick={() => setShowReadingSubmenu(!showReadingSubmenu)}
                    className="w-full flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors text-xs font-extrabold text-[#1aab8a] dark:text-emerald-400"
                  >
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      <span>{t.readingMode}</span>
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
                          <span>{t.nightMode}</span>
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
                          <span>{t.dayMode}</span>
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
                    className="w-full flex items-center gap-2 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700/60 transition-colors text-xs font-semibold text-slate-700 dark:text-slate-200 cursor-pointer"
                  >
                    <Bot className="w-4 h-4 text-amber-500" />
                    <span>{t.aiTutorNav}</span>
                  </button>

                  <button
                    onClick={() => {
                      setShowMenu(false);
                      onOpenJourney();
                    }}
                    className="w-full flex items-center gap-2 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700/60 transition-colors text-xs font-semibold text-slate-700 dark:text-slate-200 cursor-pointer"
                  >
                    <Trophy className="w-4 h-4 text-amber-500" />
                    <span>{t.myJourneyNav}</span>
                  </button>

                  <button
                    onClick={() => {
                      setShowMenu(false);
                      onOpenAuth();
                    }}
                    className="w-full flex items-center gap-2 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700/60 transition-colors text-xs font-semibold text-slate-700 dark:text-slate-200 cursor-pointer"
                  >
                    <User className="w-4 h-4 text-emerald-500" />
                    <span>{user.email ? user.name : t.login}</span>
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


