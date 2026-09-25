import type { Locale } from "@/i18n/routing";

export type ProjectStatus = "active" | "learning" | "paused";

export type Localized = Record<Locale, string>;

export type Project = {
  slug: string;
  featured: boolean;
  placeholder: boolean;
  status: ProjectStatus;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  title: Localized;
  summary: Localized;
  overview: Localized;
  problem: Localized;
  why: Localized;
  approach: Localized;
  architecture: Localized;
  implementation: Localized;
  decisions: Localized;
  challenges: Localized;
  wentWrong: Localized;
  learned: Localized;
  results: Localized;
  limitations: Localized;
  future: Localized;
};

const TBD: Localized = {
  en: "[PROJECT DESCRIPTION HERE]",
  fa: "[توضیح پروژه را اینجا جایگزین کنید]",
};

export const projects: Project[] = [
  {
    slug: "careerpilot",
    featured: true,
    placeholder: false,
    status: "active",
    stack: [
      "Python",
      "PySide6",
      "pandas",
      "scikit-learn",
      "NumPy",
      "joblib",
      "SQLite",
      "JSON",
      "PyInstaller",
      "Linux",
    ],
    title: {
      en: "CareerPilot AI v2.0",
      fa: "CareerPilot AI نسخه ۲.۰",
    },
    summary: {
      en: "An end-to-end AI career guidance application that turns personality and skill assessment into a calibrated profile, machine-learning-based career prediction, and a personalized development roadmap.",
      fa: "یک سامانهٔ هوشمند هدایت شغلی که ارزیابی شخصیت و مهارت‌ها را به پروفایل مهارتی، پیش‌بینی شغل با یادگیری ماشین و یک مسیر رشد شخصی‌سازی‌شده تبدیل می‌کند.",
    },
    overview: {
      en: "CareerPilot AI v2.0 is a desktop career guidance application I designed and developed from scratch. The project combines a personality assessment, a structured skill-scoring pipeline, machine learning, career data, persistent local storage, localization, and a custom desktop interface into one product. Instead of stopping at a quiz result, the application takes the user's answers through multiple stages and turns them into a measurable skill profile, a predicted career, and a roadmap for progressing through that career.",
      fa: "CareerPilot AI نسخهٔ ۲.۰ یک نرم‌افزار دسکتاپ برای هدایت شغلی است که آن را از صفر طراحی و توسعه دادم. این پروژه ارزیابی شخصیت، سیستم امتیازدهی مهارت، یادگیری ماشین، داده‌های شغلی، ذخیره‌سازی محلی، چندزبانه بودن و یک رابط گرافیکی اختصاصی را در یک محصول ترکیب می‌کند. برنامه فقط یک نتیجهٔ آزمون ارائه نمی‌دهد؛ پاسخ‌های کاربر را در چند مرحله پردازش می‌کند و در نهایت یک پروفایل مهارتی، شغل پیشنهادی و مسیر رشد شغلی ارائه می‌دهد.",
    },
    problem: {
      en: "I wanted to move beyond the usual career quiz that gives a few generic job names and stops there. The real challenge was building a complete pipeline that could take human input, turn it into structured data, process it consistently, use an ML model for prediction, and then present the result in a usable application. I also wanted the system to remain understandable and inspectable rather than hiding everything behind a black box.",
      fa: "می‌خواستم از مدل معمول آزمون‌های شغلی که چند عنوان شغلی کلی نمایش می‌دهند فراتر بروم. چالش اصلی ساخت یک خط لولهٔ کامل بود که ورودی انسانی را به دادهٔ ساختاریافته تبدیل کند، آن را به‌صورت یکپارچه پردازش کند، از یک مدل یادگیری ماشین برای پیش‌بینی استفاده کند و در نهایت نتیجه را در قالب یک نرم‌افزار قابل استفاده نمایش دهد. در عین حال می‌خواستم منطق سیستم قابل بررسی و قابل فهم باقی بماند.",
    },
    why: {
      en: "CareerPilot was built as a serious learning project around applied AI. It gave me a concrete problem where I could work on data representation, feature engineering, model training, inference, software architecture, persistence, UI design, localization, and packaging instead of learning each topic in isolation.",
      fa: "CareerPilot را به‌عنوان یک پروژهٔ جدی برای یادگیری هوش مصنوعی کاربردی ساختم. این پروژه یک مسئلهٔ واقعی در اختیارم گذاشت تا داده، مهندسی ویژگی، آموزش مدل، استنتاج، معماری نرم‌افزار، ذخیره‌سازی، طراحی رابط، چندزبانه بودن و بسته‌بندی نرم‌افزار را در یک پروژهٔ واقعی تجربه کنم، نه به‌صورت جدا از هم.",
    },
    approach: {
      en: "The application starts with a personality assessment and converts the answers into structured signals. Those signals are combined with skill information and passed through the scoring layer to produce normalized skill values. The resulting skill vector is used by a trained Logistic Regression classifier to predict a career. Career-specific information is then loaded separately so the prediction can be presented with a roadmap and supporting information without mixing content data into the model itself.",
      fa: "برنامه با ارزیابی شخصیت شروع می‌شود و پاسخ‌ها را به داده‌های ساختاریافته تبدیل می‌کند. سپس این داده‌ها با اطلاعات مهارتی ترکیب می‌شوند و از لایهٔ امتیازدهی عبور می‌کنند تا مقادیر نرمال‌شدهٔ مهارت‌ها به دست بیاید. بردار مهارتی حاصل به یک مدل رگرسیون لجستیک آموزش‌دیده داده می‌شود تا شغل پیشنهادی پیش‌بینی شود. اطلاعات مربوط به هر شغل نیز جداگانه مدیریت می‌شود تا نتیجه همراه با مسیر رشد و اطلاعات تکمیلی نمایش داده شود و داده‌های محتوایی با خود مدل قاطی نشوند.",
    },
    architecture: {
      en: "Version 2.0 was organized as a multi-module desktop application instead of a single Python script. The main layers cover the application flow and UI, personality assessment, scoring and calibration, machine-learning training and prediction, career data, localization, theming, and persistent storage. SQLite handles local user data, while JSON and model artifacts keep application content and the trained model separate. The application can also be packaged as a standalone executable.",
      fa: "نسخهٔ ۲.۰ به‌جای یک اسکریپت پایتون، به‌صورت یک نرم‌افزار دسکتاپ چندماژوله سازمان‌دهی شد. لایه‌های اصلی شامل جریان برنامه و رابط کاربری، ارزیابی شخصیت، امتیازدهی و کالیبراسیون، آموزش و پیش‌بینی یادگیری ماشین، داده‌های شغلی، ترجمه، تم و ذخیره‌سازی پایدار هستند. SQLite برای داده‌های محلی کاربر استفاده می‌شود و داده‌های محتوایی و مدل آموزش‌دیده نیز از هم جدا نگه داشته می‌شوند. نرم‌افزار همچنین قابلیت بسته‌بندی به‌صورت فایل اجرایی مستقل را دارد.",
    },
    implementation: {
      en: "The ML side uses pandas, NumPy, scikit-learn, and joblib. Assessment answers are transformed into a structured skill representation, and the scoring layer includes a calibrated piecewise-linear mapping to keep the final skill values on a consistent 0–10 scale. The prediction model uses Logistic Regression and is persisted with joblib so it can be loaded again instead of retrained every time. On the application side, PySide6/Qt provides the desktop interface, SQLite stores persistent local data, and PyInstaller is used for distribution.",
      fa: "بخش یادگیری ماشین با pandas، NumPy، scikit-learn و joblib پیاده‌سازی شده است. پاسخ‌های ارزیابی به یک نمایش ساختاریافته از مهارت‌ها تبدیل می‌شوند و لایهٔ امتیازدهی شامل یک نگاشت کالیبره‌شدهٔ قطعه‌ای است تا امتیازهای نهایی روی مقیاس ثابت ۰ تا ۱۰ قرار بگیرند. مدل پیش‌بینی از Logistic Regression استفاده می‌کند و با joblib ذخیره می‌شود تا در اجراهای بعدی دوباره بارگذاری شود. در بخش نرم‌افزار نیز PySide6/Qt رابط دسکتاپ را فراهم می‌کند، SQLite داده‌های محلی را نگه می‌دارد و PyInstaller برای انتشار نسخهٔ اجرایی استفاده می‌شود.",
    },
    decisions: {
      en: "I deliberately kept the prediction model relatively simple. Logistic Regression is a good fit for a compact feature space and, more importantly for this project, gives me a model whose behavior I can reason about instead of choosing a heavier algorithm just because it sounds more advanced. I also separated the ML model from career metadata, because a prediction model and the information shown to a user should not be the same thing.",
      fa: "عمداً مدل پیش‌بینی را نسبتاً ساده نگه داشتم. Logistic Regression برای فضای ویژگی کوچک این پروژه انتخاب مناسبی است و مهم‌تر از آن، رفتار آن قابل تحلیل و بررسی است؛ به‌جای اینکه صرفاً به‌خاطر پیشرفته‌تر به نظر رسیدن، سراغ مدل سنگین‌تری بروم. همچنین مدل یادگیری ماشین را از داده‌های شغلی جدا کردم، چون مدل پیش‌بینی و اطلاعاتی که به کاربر نمایش داده می‌شود دو بخش متفاوت سیستم هستند.",
    },
    challenges: {
      en: "The hardest part was not writing individual UI components. It was making all the parts agree with each other. Scoring had to produce a stable feature vector, the training pipeline had to expect the same feature structure during inference, the model had to remain separate from career content, and the desktop application had to restore user state correctly. Building the second version also meant replacing early prototype decisions with a structure that could actually grow.",
      fa: "سخت‌ترین بخش پروژه نوشتن تک‌تک اجزای رابط کاربری نبود؛ مسئله این بود که تمام بخش‌ها با یکدیگر هماهنگ باشند. سیستم امتیازدهی باید یک بردار ویژگی پایدار تولید می‌کرد، فرآیند آموزش باید دقیقاً همان ساختار ویژگی را هنگام پیش‌بینی انتظار داشته باشد، مدل باید از محتوای شغلی جدا می‌ماند و برنامه باید وضعیت کاربر را به‌درستی بازیابی می‌کرد. ساخت نسخهٔ دوم همچنین به معنی کنار گذاشتن بخشی از تصمیم‌های نسخهٔ اولیه و ساختاری بود که واقعاً قابلیت توسعه داشته باشد.",
    },
    wentWrong: {
      en: "CareerPilot went through several iterations before reaching v2.0. Some early documentation and implementation choices no longer matched the newer architecture, and the project exposed how quickly a prototype can become difficult to maintain when responsibilities are mixed together. Rebuilding the structure made the project cleaner, but it also showed me that technical debt starts much earlier than most people expect.",
      fa: "CareerPilot قبل از رسیدن به نسخهٔ ۲.۰ چند مرحله را پشت سر گذاشت. بخشی از مستندات و تصمیم‌های فنی نسخهٔ اولیه دیگر با معماری جدید هماهنگ نبودند و پروژه نشان داد که وقتی مسئولیت‌ها با هم قاطی شوند، یک نمونهٔ اولیه خیلی سریع سخت‌تر از چیزی می‌شود که انتظار داریم. بازسازی ساختار پروژه آن را مرتب‌تر کرد، اما هم‌زمان به من نشان داد که بدهی فنی خیلی زودتر از چیزی که معمولاً تصور می‌شود شکل می‌گیرد.",
    },
    learned: {
      en: "CareerPilot changed the way I think about AI projects. The model is only one part of the system. Data design, scoring logic, feature consistency, persistence, UI, localization, packaging, and honest evaluation all matter. I also learned that making something work once is very different from designing it so that another version can be built on top of it.",
      fa: "CareerPilot نگاه من به پروژه‌های هوش مصنوعی را تغییر داد. مدل فقط یکی از بخش‌های سیستم است. طراحی داده، منطق امتیازدهی، سازگاری ویژگی‌ها، ذخیره‌سازی، رابط کاربری، ترجمه، بسته‌بندی و ارزیابی صادقانه همگی اهمیت دارند. همچنین یاد گرفتم اینکه یک پروژه یک‌بار کار کند با اینکه ساختار آن برای ساخت نسخهٔ بعدی آماده باشد، دو چیز کاملاً متفاوت است.",
    },
    results: {
      en: "CareerPilot AI v2.0 evolved from a small career-quiz prototype into a complete desktop AI application. The final system brings together assessment, calibrated skill scoring, machine-learning prediction, career roadmaps, local persistence, bilingual UI, theme support, custom desktop components, and standalone packaging. The project is still primarily a learning and portfolio project, but it now represents an end-to-end product rather than a collection of isolated experiments.",
      fa: "CareerPilot AI نسخهٔ ۲.۰ از یک نمونهٔ اولیهٔ کوچک برای آزمون شغلی به یک نرم‌افزار کامل دسکتاپ مبتنی بر هوش مصنوعی تبدیل شد. نسخهٔ فعلی ارزیابی، امتیازدهی کالیبره‌شدهٔ مهارت، پیش‌بینی با یادگیری ماشین، مسیرهای رشد شغلی، ذخیره‌سازی محلی، رابط دوزبانه، پشتیبانی از تم، اجزای اختصاصی دسکتاپ و بسته‌بندی مستقل را در یک سیستم واحد جمع می‌کند. این پروژه همچنان بیشتر یک پروژهٔ یادگیری و پورتفولیو است، اما حالا یک محصول end-to-end محسوب می‌شود، نه مجموعه‌ای از آزمایش‌های جداگانه.",
    },
    limitations: {
      en: "CareerPilot should not be treated as a scientifically validated career assessment or as a replacement for professional career counseling. Personality and skill inputs are still simplified representations of a person, and the quality of an ML prediction depends heavily on the training data. Career information and market-related values also need broader and more current datasets before the system could support stronger real-world claims.",
      fa: "CareerPilot نباید به‌عنوان یک ابزار علمی اعتبارسنجی‌شده برای انتخاب شغل یا جایگزین مشاورهٔ حرفه‌ای در نظر گرفته شود. شخصیت و مهارت‌های کاربر همچنان نمایش‌های ساده‌شده‌ای از یک فرد هستند و کیفیت پیش‌بینی مدل به داده‌های آموزشی وابستگی زیادی دارد. اطلاعات شغلی و داده‌های مرتبط با بازار کار نیز برای رسیدن به ادعاهای قوی‌تر در دنیای واقعی به داده‌های گسترده‌تر و به‌روزتر نیاز دارند.",
    },
    future: {
      en: "The next direction is making the recommendation engine stronger rather than simply adding more UI. That means improving the training dataset, expanding the career taxonomy, evaluating the model with more meaningful metrics and validation data, making career information easier to update, and eventually considering a web-based version if the core recommendation system proves useful enough to justify it.",
      fa: "مسیر بعدی پروژه بیشتر روی قوی‌تر کردن موتور پیشنهاددهی است، نه صرفاً اضافه کردن رابط‌های بیشتر. این مسیر شامل بهبود دیتاست آموزشی، گسترش دسته‌بندی مشاغل، ارزیابی مدل با معیارها و داده‌های اعتبارسنجی بهتر، ساده‌تر کردن به‌روزرسانی اطلاعات شغلی و در نهایت بررسی نسخهٔ وب در صورتی است که هستهٔ سیستم به‌اندازهٔ کافی کاربردی باشد.",
    },
  },
  {
    slug: "next-project",
    featured: true,
    placeholder: true,
    status: "paused",
    stack: ["[STACK HERE]"],
    title: {
      en: "Next project",
      fa: "پروژهٔ بعدی",
    },
    summary: {
      en: "[ONE-SENTENCE PROJECT DESCRIPTION HERE] Placeholder card so the grid stays honest until the next real repository is ready.",
      fa: "[توضیح یک‌جمله‌ای پروژه را اینجا بنویسید] کارت جایگزین تا زمانی که مخزن واقعی بعدی آماده شود.",
    },
    overview: TBD,
    problem: TBD,
    why: TBD,
    approach: TBD,
    architecture: TBD,
    implementation: TBD,
    decisions: TBD,
    challenges: TBD,
    wentWrong: TBD,
    learned: TBD,
    results: TBD,
    limitations: TBD,
    future: TBD,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}
