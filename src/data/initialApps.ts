import { AppItem, BadgeDef } from "../types";

export const DEFAULT_APPS: AppItem[] = [
  {
    name: "الأباكوس — سوروبان",
    desc: "أباكوس تفاعلي 13 عمودًا مع تمارين الجمع والطرح للمستوى الأول وتتبع النتيجة.",
    url: "https://special-fishstick-seven.vercel.app/",
    cat: "الرياضيات",
    age: "الصف 1–3",
    icon: "🧮",
    paid: false,
    paidPass: ""
  },
  {
    name: "النَّجمة الصَّغيرة تتعلَّم الحروف",
    desc: "12 حرفًا عربيًا بأشكالها الموضعيَّة مع نطق صوتي وتمييز صوتي للأطفال.",
    url: "https://literate-goggles-rho.vercel.app/",
    cat: "اللغة العربية",
    age: "4–6 سنوات",
    icon: "⭐",
    paid: false,
    paidPass: ""
  },
  {
    name: "تعلُّم العدِّ واحداً واحداً وعشرة عشرة",
    desc: "تطبيق تفاعلي لتعلم العد بطريقتين: واحداً واحداً وعشرة عشرة مع تمارين ممتعة.",
    url: "https://fun-learning-child-counting-stages.vercel.app/",
    cat: "الرياضيات",
    age: "4–7 سنوات",
    icon: "🔢",
    paid: false,
    paidPass: ""
  },
  {
    name: "مغامرة نجمة في الغابة السِّحريَّة",
    desc: "قصة تفاعلية متشعبة من 11 مشهداً وخمس نهايات مختلفة، مع دروس أخلاقية مضمَّنة وخيارات يتحكم بها الطفل.",
    url: "https://ideal-pancake-4wb4.vercel.app/",
    cat: "الألعاب",
    age: "6–10 سنوات",
    icon: "🌟",
    paid: false,
    paidPass: ""
  },
  {
    name: "عالم الاختراعات — تاريخ اختراع القلم الجاف",
    desc: "رحلة تفاعلية في عالم الاختراعات واكتشاف تاريخ اختراع القلم الجاف بأسلوب مشوق.",
    url: "https://glowing-computing-machine-n75c.vercel.app/",
    cat: "العلوم والتكنولوجيا",
    age: "الصف 3–5",
    icon: "✏️",
    paid: false,
    paidPass: ""
  },
  {
    name: "لعبة المطابقة اللغوية البسيطة",
    desc: "لعبة تفاعلية لمطابقة الكلمات مع صورها تنمي المفردات اللغوية لدى الأطفال.",
    url: "https://super-duper-lamp-wine.vercel.app/",
    cat: "اللغة العربية",
    age: "6–9 سنوات",
    icon: "🎯",
    paid: false,
    paidPass: ""
  },
  {
    name: "دورة الماء في الطبيعة",
    desc: "شرح تفاعلي لمراحل دورة الماء: التبخر والتكاثف والتساقط، مع أسئلة وصور متحركة.",
    url: "https://psychic-umbrella-six.vercel.app/",
    cat: "العلوم والتكنولوجيا",
    age: "الصف 3–5",
    icon: "💧",
    paid: false,
    paidPass: ""
  },
  {
    name: "الجهاز الهضمي",
    desc: "استكشف أجزاء الجهاز الهضمي ووظائفه بطريقة تفاعلية مع رسوم توضيحية وأسئلة.",
    url: "https://fun-learning-digestive-system.vercel.app/",
    cat: "العلوم والتكنولوجيا",
    age: "الصف 4–5",
    icon: "🫀",
    paid: false,
    paidPass: ""
  },
  {
    name: "لعبة مطابقة بسيطة",
    desc: "لعبة مطابقة تفاعلية للأطفال تنمي التركيز والذاكرة البصرية بأسلوب ممتع.",
    url: "https://special-memory-tau.vercel.app/",
    cat: "الألعاب",
    age: "6–10 سنوات",
    icon: "🃏",
    paid: false,
    paidPass: ""
  },
  {
    name: "من أنا؟",
    desc: "لعبة تخمين بستة تصنيفات، اختر الإجابة بالإيموجي مع نطق صوتي وبطاقات معلوماتية وكونفيتي.",
    url: "https://bookish-guide.vercel.app/",
    cat: "الألعاب",
    age: "6–12 سنوات",
    icon: "🎯",
    paid: false,
    paidPass: ""
  },
  {
    name: "تعلم الحروف نطقاً",
    desc: "تطبيق الحروف بالإيموجي مع التحقق الصوتي — مصمَّم للأطفال 4–5 سنوات بصوت هادئ وتكرار مريح.",
    url: "https://reimagined-lamp-peach.vercel.app/",
    cat: "اللغة العربية",
    age: "4–5 سنوات",
    icon: "🌸",
    paid: false,
    paidPass: ""
  },
  {
    name: "تعلم الحروف بمواضعها وحركاتها",
    desc: "تعلم الحروف العربية بأشكالها الموضعية المختلفة وحركاتها بطريقة تفاعلية وممتعة.",
    url: "https://vigilant-parakeet-nu.vercel.app/",
    cat: "اللغة العربية",
    age: "5–7 سنوات",
    icon: "📝",
    paid: false,
    paidPass: ""
  },
  {
    name: "تعلم الضرب بالجمع المتكرر والشبكة",
    desc: "تجميع بصري بالنقاط، جمع متكرر، وشبكة الضرب مع كونفيتي واحتفالات تشجيعية.",
    url: "https://cuddly-octo-adventure.vercel.app/",
    cat: "الرياضيات",
    age: "7–9 سنوات",
    icon: "✖️",
    paid: false,
    paidPass: ""
  },
  {
    name: "تركيب الكلمات والجمل",
    desc: "تطبيق تفاعلي لتعلم تركيب الكلمات والجمل العربية بأسلوب ممتع ومحفز للأطفال.",
    url: "https://solid-palm-tree-uw9a.vercel.app/",
    cat: "اللغة العربية",
    age: "الصف 2–4",
    icon: "📖",
    paid: false,
    paidPass: ""
  },
  {
    name: "تعلم العد والجمع والطرح والأشكال الهندسية",
    desc: "سحب وإفلات وأشكال SVG وتعليم الأعداد والعمليات الحسابية الأساسية للأطفال.",
    url: "https://probable-journey-six.vercel.app/",
    cat: "الرياضيات",
    age: "4–7 سنوات",
    icon: "🔺",
    paid: false,
    paidPass: ""
  },
  {
    name: "تحدي الهمزة",
    desc: "سبع مراحل تفاعلية لإتقان كتابة الهمزة المتوسطة بأسلوب ميزان القوة، مع تغذية راجعة صوتية.",
    url: "https://scaling-spoon-nu.vercel.app/",
    cat: "اللغة العربية",
    age: "الصفوف 3–5",
    icon: "📝",
    paid: false,
    paidPass: ""
  },
  {
    name: "تمارين نحوية — كان وأخواتها",
    desc: "تمارين تفاعلية لتعلم كان وأخواتها والإعراب بأسلوب مبسط وممتع للمتعلمين.",
    url: "https://glowing-froyo-595e54.netlify.app/",
    cat: "اللغة العربية",
    age: "الصف 4–5",
    icon: "✏️",
    paid: false,
    paidPass: ""
  },
  {
    name: "اختبار الحساب السريع",
    desc: "اختبار رياضيات تفاعلي تشويقي يشمل العمليات الأساسية مع تقييم فوري ونقاط إنجاز.",
    url: "https://warm-dieffenbachia-2751c9.netlify.app/",
    cat: "الرياضيات",
    age: "7–12 سنوات",
    icon: "🔢",
    paid: false,
    paidPass: ""
  },
  {
    name: "مغامرة الحيوانات",
    desc: "ثلاث مراحل: الحيوانات الأليفة والمتوحشة، طريقة الحركة، والغذاء — بواجهة قوس قزح وأسئلة مشوِّقة.",
    url: "https://ideal-pancake-4wb4.vercel.app/",
    cat: "العلوم والتكنولوجيا",
    age: "6–8 سنوات",
    icon: "🦁",
    paid: false,
    paidPass: ""
  },
  {
    name: "الجهاز التنفسي",
    desc: "استكشف أجزاء الجهاز التنفسي ووظائفه بطريقة تفاعلية مع رسوم توضيحية وأسئلة تقييمية.",
    url: "https://fictional-telegram-pink.vercel.app/",
    cat: "العلوم والتكنولوجيا",
    age: "الصف 4–5",
    icon: "🫁",
    paid: false,
    paidPass: ""
  },
  {
    name: "لعبة مطابقة الاعداد",
    desc: "لعبة مطابقة الاعداد بين الكتابة الحرفية و الكتابة الرقمية للاعداد .",
    url: "https://fun-learning-number-matching-game.vercel.app/",
    cat: "الرياضيات",
    age: "الصف 4–5",
    icon: "🧩",
    paid: false,
    paidPass: ""
  },
  {
    name: "تعلم الحروف العربية",
    desc: "تعلم الحروف العربية بالأصوات نطقا",
    url: "https://fun-learning-arabic-letters-for-kid.vercel.app/",
    cat: "اللغة العربية",
    age: "6–8 سنوات",
    icon: "🔤",
    paid: false,
    paidPass: ""
  },
  {
    name: "تعلم وحدات السعة",
    desc: "تطبيق تفاعلي لتعلم وحدات قياس السعة (اللتر والميليتر) والتحويل بينها مع تمارين وأنشطة تطبيقية.",
    url: "https://measuring-liquid-capacity.vercel.app/",
    cat: "الرياضيات",
    age: "الصف 3–5",
    icon: "🧪",
    paid: false,
    paidPass: ""
  },
  {
    name: "عالم الأعداد الكبيرة",
    desc: "رحلة تفاعلية في عالم الأعداد الكبيرة والمنازل وجدول المراتب والقراءة والمقارنة.",
    url: "https://fun-learning-the-big-nembers.vercel.app/",
    cat: "الرياضيات",
    age: "الصف 4–5",
    icon: "🔢",
    paid: false,
    paidPass: ""
  },
  {
    name: "الكسور والأعداد العشرية",
    desc: "تطبيق تعليمي تفاعلي ممتع لتعلم الكسور والأعداد العشرية والتحويلات والعمليات الحسابية.",
    url: "https://bookish-happiness-hahg.vercel.app/",
    cat: "الرياضيات",
    age: "الصف 4–5",
    icon: "➗",
    paid: false,
    paidPass: ""
  }
];

export const BADGES_LIST: BadgeDef[] = [
  { id: "first", icon: "🌱", label: "أوَّل خطوة", req: 1 },
  { id: "three", icon: "🔥", label: "ثلاثة تطبيقات", req: 3 },
  { id: "five", icon: "⭐", label: "بطل الخمسة", req: 5 },
  { id: "ten", icon: "🏆", label: "نجم العشرة", req: 10 },
  { id: "twenty", icon: "💎", label: "سفير التَّعلُّم", req: 20 },
];

export const BUILTIN_CATEGORIES = [
  "اللغة العربية",
  "الرياضيات",
  "العلوم والتكنولوجيا",
  "المدنية",
  "الاسلامية",
  "الألعاب"
];

export const normalizeCategory = (cat: string): string => {
  if (!cat) return "";
  const trimmed = cat.trim();
  if (trimmed === "all") return "all";
  if (trimmed === "لغة عربية" || trimmed === "اللغة العربية") return "اللغة العربية";
  if (trimmed === "رياضيات" || trimmed === "الرياضيات") return "الرياضيات";
  if (trimmed === "علوم" || trimmed === "العلوم" || trimmed === "العلوم والتكنولوجيا") return "العلوم والتكنولوجيا";
  if (trimmed === "ألعاب" || trimmed === "الألعاب") return "الألعاب";
  if (trimmed === "مدنية" || trimmed === "المدنية" || trimmed === "تربية مدنية" || trimmed === "التربية المدنية") return "المدنية";
  if (trimmed === "إسلامية" || trimmed === "الاسلامية" || trimmed === "الإسلامية" || trimmed === "تربية إسلامية") return "الاسلامية";
  return trimmed;
};
