import React, { useState } from "react";
import { X, Bot, Send, Sparkles, Loader2 } from "lucide-react";
import { AppItem } from "../types";

interface AiTutorModalProps {
  isOpen: boolean;
  onClose: () => void;
  apps: AppItem[];
}

export const AiTutorModal: React.FC<AiTutorModalProps> = ({ isOpen, onClose, apps }) => {
  const [prompt, setPrompt] = useState("");
  const [chat, setChat] = useState<{ role: "user" | "ai"; text: string }[]>([
    {
      role: "ai",
      text: "مرحباً بك! 👋 أنا مساعد التَّعلُّم الذَّكيّ في منصَّة رنيم فاي. يمكنني إرشادك وتوجيهك لاختيار أفضل التَّطبيقات التَّعليميَّة المناسبة لطفلك ومساعدتك في المناهج والمفاهيم الدِّراسيَّة. ماذا تحبّ أن تسأل اليوم؟"
    }
  ]);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || loading) return;

    const userText = prompt.trim();
    setPrompt("");
    setChat((prev) => [...prev, { role: "user", text: userText }]);
    setLoading(true);

    try {
      const res = await fetch("/api/ai-tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userText, appsContext: apps })
      });
      const data = await res.json();
      setChat((prev) => [
        ...prev,
        { role: "ai", text: data.reply || "شكراً لسؤالك! يمكنك تجربة أحد التطبيقات في قسم الرياضيات أو اللغة العربية." }
      ]);
    } catch {
      setChat((prev) => [
        ...prev,
        {
          role: "ai",
          text: "مرحباً! يبدو أنَّ هناك بطءً في الاتِّصال بالسِّيرفر. يمكنك استعراض قائمة التَّطبيقات التَّفاعليَّة مباشرةً عبر شريط التَّصنيفات والبحث بالأعلى!"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/75 backdrop-blur-md flex items-center justify-center p-3 md:p-6 animate-fade-in">
      <div className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[82vh] border border-slate-200 dark:border-slate-800">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1aab8a] via-[#12977c] to-[#0d8060] p-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Bot className="w-4 h-4 text-amber-200" />
            </div>
            <div>
              <h3 className="font-bold text-sm md:text-base font-tajawal flex items-center gap-1.5">
                <span>مساعد التَّعلُّم المُمْتِع الذَّكيّ</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              </h3>
              <p className="text-[10px] text-white/80">إرشاد تعليمي للطلبة وأولياء الأمور</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50/50 dark:bg-slate-950/50 text-xs">
          {chat.map((msg, i) => (
            <div
              key={i}
              className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.role === "ai" && (
                <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 text-[10px] font-bold">
                  🤖
                </div>
              )}
              <div
                className={`max-w-[82%] p-3 rounded-2xl leading-relaxed whitespace-pre-wrap ${
                  msg.role === "user"
                    ? "bg-[#1aab8a] text-white rounded-tl-none font-medium shadow-sm"
                    : "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-tr-none border border-slate-200 dark:border-slate-700 shadow-sm"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex gap-2 justify-start items-center text-slate-400 text-xs py-2">
              <Loader2 className="w-4 h-4 animate-spin text-[#1aab8a]" />
              <span>جاري التفكير وصياغة الإجابة...</span>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <form onSubmit={handleSend} className="p-3 border-t border-slate-100 dark:border-slate-800 flex gap-2 bg-white dark:bg-slate-900">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="اسأل عن أفضل تطبيق لمادة معينة أو سن طفلك..."
            className="flex-1 px-3.5 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[#1aab8a]"
          />
          <button
            type="submit"
            disabled={loading || !prompt.trim()}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#1aab8a] to-[#0d8060] text-white font-bold text-xs flex items-center gap-1 hover:brightness-110 disabled:opacity-50"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
