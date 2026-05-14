import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const PHOTO_URL =
  "https://cdn.poehali.dev/projects/9dc9de5f-a017-4616-93e9-0b254e693b52/files/85d89036-f0dd-4815-806e-d41037743805.jpg";

const skills = [
  { name: "Классическая миксология", level: 95 },
  { name: "Авторские коктейли", level: 90 },
  { name: "Flair бартендинг", level: 80 },
  { name: "Работа с гостями", level: 98 },
  { name: "Управление запасами", level: 85 },
  { name: "Кофе & напитки", level: 88 },
];

const experience = [
  {
    period: "2022 — н.в.",
    role: "Старший бармен",
    place: "Sky Lounge Bar, Москва",
    desc: "Авторское меню коктейлей, обучение стажёров, работа на мероприятиях VIP-уровня до 200+ гостей.",
  },
  {
    period: "2019 — 2022",
    role: "Бармен",
    place: "Neon Club, Санкт-Петербург",
    desc: "Коктейльная карта, барная стойка в прайм-тайм, ивенты и тематические вечеринки.",
  },
  {
    period: "2017 — 2019",
    role: "Помощник бармена",
    place: "Bistro 18, Москва",
    desc: "Старт карьеры: базовые техники, работа со скоростью и качеством сервиса.",
  },
];

const contacts = [
  { icon: "Phone", label: "Телефон", value: "+7 (999) 123-45-67" },
  { icon: "Mail", label: "Email", value: "bar@example.com" },
  { icon: "MapPin", label: "Город", value: "Москва" },
  { icon: "Instagram", label: "Instagram", value: "@bartender_pro" },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, inView };
}

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-body text-sm font-medium text-white/80">{name}</span>
        <span className="text-neon font-body text-sm font-semibold">{level}%</span>
      </div>
      <div className="h-[2px] bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full bg-neon rounded-full transition-all duration-1000 ease-out"
          style={{
            width: inView ? `${level}%` : "0%",
            transitionDelay: `${delay}ms`,
            boxShadow: "0 0 12px rgba(163, 230, 53, 0.6)",
          }}
        />
      </div>
    </div>
  );
}

function SectionTitle({ children, num }: { children: React.ReactNode; num: string }) {
  return (
    <div className="relative mb-12">
      <span className="section-number">{num}</span>
      <h2 className="font-display text-5xl md:text-6xl font-light text-white relative z-10">
        {children}
        <span className="text-neon">.</span>
      </h2>
      <div className="mt-3 w-16 h-[1px] bg-neon" style={{ boxShadow: "0 0 8px rgba(163,230,53,0.8)" }} />
    </div>
  );
}

export default function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const heroAbout = useInView();
  const sectionSkills = useInView();
  const sectionExp = useInView();
  const sectionEdu = useInView();
  const sectionContacts = useInView();

  return (
    <div className="min-h-screen bg-[#080b0e] font-body relative overflow-x-hidden">

      {/* Animated grid background */}
      <div className="fixed inset-0 bg-grid opacity-60 pointer-events-none z-0" />

      {/* Floating orbs */}
      <div
        className="fixed top-1/4 right-10 w-64 h-64 rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(163,230,53,0.06) 0%, transparent 70%)", animation: "float 6s ease-in-out infinite" }}
      />
      <div
        className="fixed bottom-1/3 left-5 w-48 h-48 rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(163,230,53,0.04) 0%, transparent 70%)", animation: "float 8s ease-in-out infinite reverse" }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#080b0e]/90 backdrop-blur-md border-b border-neon/10" : ""}`}>
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <span className="font-display text-xl text-neon neon-text-shadow tracking-widest uppercase">
            Bar<span className="text-white">Lady</span>
          </span>
          <button
            onClick={() => setContactOpen(true)}
            className="font-body text-sm font-semibold text-[#080b0e] bg-neon px-6 py-2.5 rounded-full hover:bg-white transition-all duration-300"
            style={{ boxShadow: "0 0 20px rgba(163,230,53,0.4)" }}
          >
            Связаться
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-20 z-10">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="opacity-0-init animate-fade-in delay-100" style={{ animationFillMode: "forwards" }}>
                <p className="font-body text-xs font-semibold text-neon tracking-[0.3em] uppercase mb-4">
                  Профессиональный бармен
                </p>
              </div>
              <h1
                className="font-display text-7xl md:text-8xl lg:text-9xl font-light text-white leading-none opacity-0-init animate-fade-up delay-200"
                style={{ animationFillMode: "forwards" }}
              >
                Анна
                <br />
                <span className="text-neon neon-text-shadow italic">Иванова</span>
              </h1>
              <p
                className="mt-8 font-body text-base text-white/50 leading-relaxed max-w-sm opacity-0-init animate-fade-up delay-400"
                style={{ animationFillMode: "forwards" }}
              >
                7 лет за барной стойкой. Создаю коктейли, которые запоминаются — и атмосферу, в которую хочется возвращаться.
              </p>
              <div
                className="mt-10 flex gap-4 items-center opacity-0-init animate-fade-up delay-500"
                style={{ animationFillMode: "forwards" }}
              >
                <button
                  onClick={() => setContactOpen(true)}
                  className="group flex items-center gap-3 font-body font-semibold text-[#080b0e] bg-neon px-8 py-4 rounded-full hover:scale-105 transition-all duration-300"
                  style={{ boxShadow: "0 0 30px rgba(163,230,53,0.5)" }}
                >
                  <Icon name="MessageCircle" size={18} />
                  Связаться
                </button>
                <a href="#about" className="font-body text-sm text-white/40 hover:text-neon transition-colors duration-300 flex items-center gap-2">
                  Узнать больше
                  <Icon name="ArrowDown" size={14} />
                </a>
              </div>
              <div
                className="mt-16 grid grid-cols-3 gap-8 opacity-0-init animate-fade-up delay-600"
                style={{ animationFillMode: "forwards" }}
              >
                {[["7+", "лет опыта"], ["500+", "коктейлей"], ["50+", "мероприятий"]].map(([num, label]) => (
                  <div key={label}>
                    <div className="font-display text-4xl text-neon font-bold neon-text-shadow">{num}</div>
                    <div className="font-body text-xs text-white/40 mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo */}
            <div
              className="relative flex justify-center opacity-0-init animate-fade-in delay-300"
              style={{ animationFillMode: "forwards" }}
            >
              <div
                className="absolute w-[320px] h-[320px] lg:w-[420px] lg:h-[420px] rounded-full border border-neon/20 animate-spin-slow"
                style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
              />
              <div
                className="absolute w-[280px] h-[280px] lg:w-[370px] lg:h-[370px] rounded-full border border-neon/10"
                style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
              />
              <div className="relative z-10 w-64 h-80 lg:w-80 lg:h-[420px] animate-float" style={{ filter: "drop-shadow(0 0 40px rgba(163,230,53,0.2))" }}>
                <img
                  src={PHOTO_URL}
                  alt="Анна Иванова — бармен"
                  className="w-full h-full object-cover rounded-2xl"
                  style={{ border: "1px solid rgba(163,230,53,0.25)", boxShadow: "0 0 60px rgba(163,230,53,0.15)" }}
                />
                <div
                  className="absolute -bottom-4 -right-4 card-dark rounded-xl px-4 py-3"
                  style={{ boxShadow: "0 0 20px rgba(163,230,53,0.2)" }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-neon animate-pulse" />
                    <span className="font-body text-xs text-white/70">Открыта к предложениям</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-body text-xs tracking-widest uppercase text-white/20">scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-neon/40 to-transparent" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative z-10 py-32">
        <div ref={heroAbout.ref} className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className={`transition-all duration-1000 ${heroAbout.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
              <SectionTitle num="01">Обо мне</SectionTitle>
              <div className="space-y-5 text-white/60 font-body leading-relaxed">
                <p>Привет! Меня зовут Анна. Я профессиональный бармен с 7-летним стажем работы в лучших барах Москвы и Санкт-Петербурга.</p>
                <p>Моя страсть — создавать уникальные вкусовые сочетания и рассказывать через коктейль целую историю. Каждый напиток — это маленькое произведение искусства.</p>
                <p>Специализируюсь на авторских коктейлях, flair бартендинге и создании концепций барных меню для заведений любого формата.</p>
              </div>
            </div>
            <div className={`transition-all duration-1000 delay-300 ${heroAbout.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
              <div className="card-dark rounded-2xl p-8 space-y-4">
                {[
                  ["Специализация", "Авторская миксология"],
                  ["Стиль работы", "Flair & Classic"],
                  ["Языки", "Русский, English (B2)"],
                  ["Доступность", "Полная занятость / Ивенты"],
                ].map(([key, val]) => (
                  <div key={key} className="flex items-start justify-between py-3 border-b border-white/5 last:border-0">
                    <span className="font-body text-sm text-white/40">{key}</span>
                    <span className="font-body text-sm text-white font-medium text-right">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="relative z-10 py-32">
        <div ref={sectionSkills.ref} className="max-w-6xl mx-auto px-6">
          <div className={`transition-all duration-700 ${sectionSkills.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <SectionTitle num="02">Навыки</SectionTitle>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
            {skills.map((skill, i) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 100} />
            ))}
          </div>
          <div className={`mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-1000 delay-500 ${sectionSkills.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {["Martini", "Mojito", "Negroni", "Old Fashioned", "Cosmopolitan", "Manhattan", "Aperol Spritz", "Espresso Martini"].map((c) => (
              <div key={c} className="card-dark hover-neon rounded-xl px-4 py-3 text-center cursor-default transition-all duration-300 hover:scale-105">
                <span className="font-body text-xs text-white/60">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="relative z-10 py-32">
        <div ref={sectionExp.ref} className="max-w-6xl mx-auto px-6">
          <div className={`transition-all duration-700 ${sectionExp.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <SectionTitle num="03">Опыт работы</SectionTitle>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-neon/40 via-neon/20 to-transparent hidden md:block ml-1" />
            <div className="space-y-12">
              {experience.map((exp, i) => (
                <div
                  key={i}
                  className={`md:pl-12 relative transition-all duration-700 ${sectionExp.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="absolute left-[-3px] top-3 w-3 h-3 rounded-full bg-neon hidden md:block" style={{ boxShadow: "0 0 12px rgba(163,230,53,0.8)" }} />
                  <div className="card-dark hover-neon rounded-2xl p-7 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-display text-2xl text-white">{exp.role}</h3>
                        <p className="font-body text-sm text-neon mt-1">{exp.place}</p>
                      </div>
                      <span className="font-body text-xs text-white/30 bg-white/5 px-3 py-1.5 rounded-full whitespace-nowrap self-start">{exp.period}</span>
                    </div>
                    <p className="font-body text-sm text-white/50 leading-relaxed">{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="relative z-10 py-32">
        <div ref={sectionEdu.ref} className="max-w-6xl mx-auto px-6">
          <div className={`transition-all duration-700 ${sectionEdu.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <SectionTitle num="04">Образование</SectionTitle>
          </div>
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-1000 delay-200 ${sectionEdu.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {[
              { year: "2021", title: "Международный сертификат WSET Level 2", org: "Wine & Spirit Education Trust", icon: "Award" },
              { year: "2019", title: "Курс авторской миксологии", org: "Moscow Bartenders School", icon: "GraduationCap" },
              { year: "2017", title: "Профессиональный бармен", org: "Bartender School Russia", icon: "BookOpen" },
              { year: "2016", title: "Менеджмент в сфере гостеприимства", org: "РЭУ им. Плеханова", icon: "BookMarked" },
            ].map((edu) => (
              <div key={edu.title} className="card-dark hover-neon rounded-2xl p-6 flex gap-5 items-start transition-all duration-300 hover:scale-[1.02]">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(163,230,53,0.1)", border: "1px solid rgba(163,230,53,0.2)" }}
                >
                  <Icon name={edu.icon as "Award"} size={20} fallback="Star" />
                </div>
                <div>
                  <p className="font-body text-xs text-neon mb-1">{edu.year}</p>
                  <h3 className="font-display text-xl text-white leading-tight">{edu.title}</h3>
                  <p className="font-body text-xs text-white/40 mt-1">{edu.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section className="relative z-10 py-32">
        <div ref={sectionContacts.ref} className="max-w-6xl mx-auto px-6">
          <div className={`transition-all duration-700 ${sectionContacts.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <SectionTitle num="05">Контакты</SectionTitle>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contacts.map((c, i) => (
              <div
                key={c.label}
                className={`card-dark hover-neon rounded-2xl p-6 flex items-center gap-5 transition-all duration-700 cursor-pointer hover:scale-[1.02] ${sectionContacts.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(163,230,53,0.1)", border: "1px solid rgba(163,230,53,0.2)" }}>
                  <Icon name={c.icon as "Phone"} size={20} fallback="Contact" />
                </div>
                <div>
                  <p className="font-body text-xs text-white/30 mb-0.5">{c.label}</p>
                  <p className="font-body text-base text-white font-medium">{c.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className={`mt-16 card-dark rounded-3xl p-10 text-center transition-all duration-1000 delay-400 ${sectionContacts.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ border: "1px solid rgba(163,230,53,0.2)" }}
          >
            <h3 className="font-display text-4xl md:text-5xl text-white mb-4">
              Готовы работать вместе?
            </h3>
            <p className="font-body text-white/40 mb-8 max-w-md mx-auto">
              Свяжитесь со мной — обсудим формат сотрудничества и условия
            </p>
            <button
              onClick={() => setContactOpen(true)}
              className="inline-flex items-center gap-3 font-body font-semibold text-[#080b0e] bg-neon px-10 py-4 rounded-full hover:scale-105 hover:bg-white transition-all duration-300"
              style={{ boxShadow: "0 0 40px rgba(163,230,53,0.5)" }}
            >
              <Icon name="Send" size={18} />
              Написать сейчас
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-xl text-neon tracking-widest uppercase">
            Bar<span className="text-white">Lady</span>
          </span>
          <p className="font-body text-xs text-white/20">© 2024 Анна Иванова — Профессиональный бармен</p>
        </div>
      </footer>

      {/* CONTACT MODAL */}
      {contactOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(8,11,14,0.9)", backdropFilter: "blur(16px)" }}
          onClick={(e) => e.target === e.currentTarget && setContactOpen(false)}
        >
          <div
            className="w-full max-w-md card-dark rounded-3xl p-8 animate-fade-up"
            style={{ border: "1px solid rgba(163,230,53,0.3)", boxShadow: "0 0 60px rgba(163,230,53,0.15)", animationFillMode: "forwards" }}
          >
            <div className="flex items-start justify-between mb-8">
              <h3 className="font-display text-3xl text-white">Связаться<span className="text-neon">.</span></h3>
              <button onClick={() => setContactOpen(false)} className="text-white/30 hover:text-white transition-colors">
                <Icon name="X" size={22} />
              </button>
            </div>
            <div className="space-y-2">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href="#"
                  className="flex items-center gap-4 group p-3 rounded-xl hover:bg-white/5 transition-all duration-200"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: "rgba(163,230,53,0.1)", border: "1px solid rgba(163,230,53,0.2)" }}
                  >
                    <Icon name={c.icon as "Phone"} size={16} fallback="Contact" />
                  </div>
                  <div>
                    <p className="font-body text-[11px] text-white/30">{c.label}</p>
                    <p className="font-body text-sm text-white group-hover:text-neon transition-colors">{c.value}</p>
                  </div>
                  <Icon name="ArrowRight" size={14} className="ml-auto text-white/20 group-hover:text-neon transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
