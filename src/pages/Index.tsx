import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const PHOTOS = {
  hero: "https://cdn.poehali.dev/projects/9dc9de5f-a017-4616-93e9-0b254e693b52/files/d4eab05f-601d-4178-8ddb-82e87bce1341.jpg",
  cocktail: "https://cdn.poehali.dev/projects/9dc9de5f-a017-4616-93e9-0b254e693b52/files/4c525069-1755-4377-bf4d-442ad82e7b7b.jpg",
  bar: "https://cdn.poehali.dev/projects/9dc9de5f-a017-4616-93e9-0b254e693b52/files/590e9548-babd-463f-89ed-ceb989efda66.jpg",
};

const GALLERY = [
  { src: PHOTOS.hero, label: "За работой" },
  { src: PHOTOS.cocktail, label: "Авторский коктейль" },
  { src: PHOTOS.bar, label: "Атмосфера" },
  { src: PHOTOS.cocktail, label: "Крупный план" },
  { src: PHOTOS.hero, label: "Вечер в баре" },
];

const experience = [
  {
    emoji: "🪩",
    name: "Ночной клуб",
    period: "2022 — н.в.",
    role: "Бармен",
    points: [
      "Приготовление коктейлей по ТТК и авторских позиций",
      "Работа в режиме высокой нагрузки в прайм-тайм",
      "Поддержание атмосферы и настроения гостей",
      "Контроль кассы и инвентаризация",
    ],
  },
  {
    emoji: "🎤",
    name: "Бар-Караоке",
    period: "2020 — 2022",
    role: "Бармен / Старший смены",
    points: [
      "Ведение барной стойки и коктейльной карты",
      "Обучение стажёров и контроль качества",
      "Работа с POS-системами Айко и Квик Ресто",
      "Приготовление авторских настоек и морсов",
    ],
  },
  {
    emoji: "🍹",
    name: "Лаунж-бар",
    period: "2018 — 2020",
    role: "Бармен",
    points: [
      "Коктейльная карта и сезонные позиции",
      "Работа с гостями, создание атмосферы",
      "Инвентаризация и заказ расходников",
    ],
  },
];

const skills = [
  { emoji: "🍸", label: "Коктейли по ТТК и авторская импровизация" },
  { emoji: "🫙", label: "Настойки и морсы собственного приготовления" },
  { emoji: "💻", label: "POS-системы: Айко, Квик Ресто" },
  { emoji: "📋", label: "Инвентаризация без паники" },
  { emoji: "💬", label: "Коммуникабельность — мой второй напиток" },
  { emoji: "⚡", label: "Стрессоустойчивость в прайм-тайм" },
  { emoji: "🤝", label: "Командная работа и обучение стажёров" },
];

function useInView(threshold = 0.12) {
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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="h-[1px] w-8" style={{ background: "#e05044" }} />
      <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: "#e05044" }}>{children}</span>
    </div>
  );
}

export default function Index() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const heroSec = useInView(0.05);
  const expSec = useInView();
  const skillsSec = useInView();
  const eduSec = useInView();
  const gallerySec = useInView();
  const contactSec = useInView();

  return (
    <div className="min-h-screen text-white font-body overflow-x-hidden" style={{ background: "#0a0d14" }}>
      {/* BG */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(30,60,120,0.35) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-96" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 110%, rgba(220,80,60,0.1) 0%, transparent 70%)" }} />
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={scrolled ? { background: "rgba(10,13,20,0.95)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.05)" } : {}}
      >
        <div className="max-w-2xl mx-auto px-5 py-4 flex items-center justify-between">
          <span className="font-display text-lg font-semibold text-white">
            <span style={{ color: "#e05044" }}>Bar</span>lady
          </span>
          <div className="flex items-center gap-2">
            <a
              href="https://t.me/twessdy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-body text-xs font-semibold text-white px-4 py-2 rounded-full transition-all duration-200 hover:scale-105"
              style={{ background: "#e05044", boxShadow: "0 4px 20px rgba(224,80,68,0.35)" }}
            >
              <Icon name="Send" size={12} />
              Написать
            </a>
            <a
              href="tel:+79227589570"
              className="flex items-center gap-1.5 font-body text-xs font-semibold text-white border border-white/20 hover:border-white/50 px-4 py-2 rounded-full transition-all duration-200"
            >
              <Icon name="Phone" size={12} />
              Позвонить
            </a>
          </div>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-end pb-16 pt-24 z-10">
        <div className="absolute inset-0 z-0">
          <img
            src={PHOTOS.hero}
            alt="Анна Сидорова за барной стойкой"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,13,20,0.2) 0%, rgba(10,13,20,0.45) 40%, rgba(10,13,20,0.97) 100%)" }} />
        </div>

        <div ref={heroSec.ref} className="relative z-10 max-w-2xl mx-auto px-5 w-full">
          <div className={`transition-all duration-1000 ${heroSec.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: "#e05044" }}>
              Бармен · Москва
            </p>
            <h1 className="font-display font-light text-white leading-none mb-4" style={{ fontSize: "clamp(3rem, 12vw, 5rem)" }}>
              Анна<br />
              <span className="italic" style={{ color: "#c9a84c" }}>Сидорова</span>
            </h1>
            <p className="font-body text-base leading-relaxed max-w-sm mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
              Смешиваю коктейли, поднимаю настроение,<br />
              превращаю гостей в постоянных.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://t.me/twessdy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 font-body font-semibold text-white px-7 py-3.5 rounded-full hover:scale-105 transition-all duration-300"
                style={{ background: "#e05044", boxShadow: "0 8px 30px rgba(224,80,68,0.4)" }}
              >
                <Icon name="Send" size={16} />
                Связаться в Telegram
              </a>
              <a
                href="tel:+79227589570"
                className="flex items-center justify-center gap-2.5 font-body font-semibold text-white border border-white/25 hover:border-white/50 px-7 py-3.5 rounded-full transition-all duration-300"
              >
                <Icon name="Phone" size={16} />
                Позвонить сейчас
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ EXPERIENCE ═══ */}
      <section className="relative z-10 py-24">
        <div ref={expSec.ref} className="max-w-2xl mx-auto px-5">
          <SectionLabel>Опыт работы</SectionLabel>
          <h2 className="font-display font-light text-white mb-12" style={{ fontSize: "clamp(2rem, 8vw, 3rem)" }}>
            Где я работала<span style={{ color: "#e05044" }}>.</span>
          </h2>
          <div className="space-y-5">
            {experience.map((exp, i) => (
              <div
                key={i}
                className={`rounded-2xl p-6 transition-all duration-700 hover:scale-[1.01] cursor-default ${expSec.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(10px)",
                  transitionDelay: `${i * 120}ms`,
                }}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{exp.emoji}</span>
                    <div>
                      <h3 className="font-display text-xl text-white font-semibold">{exp.name}</h3>
                      <p className="font-body text-xs mt-0.5" style={{ color: "#e05044" }}>{exp.role}</p>
                    </div>
                  </div>
                  <span className="font-body text-xs px-3 py-1.5 rounded-full whitespace-nowrap flex-shrink-0" style={{ color: "rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.05)" }}>
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {exp.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5">
                      <div className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ background: "#c9a84c" }} />
                      <span className="font-body text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SKILLS ═══ */}
      <section className="relative z-10 py-24">
        <div ref={skillsSec.ref} className="max-w-2xl mx-auto px-5">
          <SectionLabel>Что я умею</SectionLabel>
          <h2 className="font-display font-light text-white mb-12" style={{ fontSize: "clamp(2rem, 8vw, 3rem)" }}>
            Навыки<span style={{ color: "#e05044" }}>.</span>
          </h2>
          <div className="grid grid-cols-1 gap-3">
            {skills.map((skill, i) => (
              <div
                key={i}
                className={`flex items-center gap-4 rounded-xl px-5 py-4 transition-all duration-600 hover:scale-[1.015] cursor-default ${skillsSec.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
                style={{
                  background: "rgba(255,255,255,0.035)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  transitionDelay: `${i * 70}ms`,
                }}
              >
                <span className="text-xl w-8 text-center flex-shrink-0">{skill.emoji}</span>
                <span className="font-body text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>{skill.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ EDUCATION ═══ */}
      <section className="relative z-10 py-24">
        <div ref={eduSec.ref} className="max-w-2xl mx-auto px-5">
          <SectionLabel>Образование</SectionLabel>
          <h2 className="font-display font-light text-white mb-12" style={{ fontSize: "clamp(2rem, 8vw, 3rem)" }}>
            Фундамент<span style={{ color: "#e05044" }}>.</span>
          </h2>
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-700 ${eduSec.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {[
              {
                emoji: "🎨",
                title: "Высшее образование",
                sub: "Графический дизайн",
                desc: "Вижу красоту в подаче напитков и оформлении бара — каждый коктейль как маленькая дизайн-работа.",
              },
              {
                emoji: "🖌️",
                title: "Художественное образование",
                sub: "Изобразительное искусство",
                desc: "Чувство формы, цвета и подачи. Помогает создавать атмосферу и запоминающийся визуал бара.",
              },
            ].map((edu) => (
              <div
                key={edu.title}
                className="rounded-2xl p-6"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <span className="text-3xl">{edu.emoji}</span>
                <h3 className="font-display text-xl text-white mt-3 mb-2">{edu.title}</h3>
                <p className="font-body text-sm mb-3" style={{ color: "#e05044" }}>{edu.sub}</p>
                <p className="font-body text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{edu.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GALLERY ═══ */}
      <section className="relative z-10 py-24">
        <div ref={gallerySec.ref} className="max-w-2xl mx-auto px-5">
          <SectionLabel>Фотогалерея</SectionLabel>
          <h2 className="font-display font-light text-white mb-12" style={{ fontSize: "clamp(2rem, 8vw, 3rem)" }}>
            В кадре<span style={{ color: "#e05044" }}>.</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {GALLERY.map((img, i) => (
              <div
                key={i}
                className={`relative group cursor-pointer overflow-hidden rounded-xl aspect-square transition-all duration-700 ${gallerySec.inView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                style={{ transitionDelay: `${i * 80}ms` }}
                onClick={() => setLightbox(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }}>
                  <span className="font-body text-xs" style={{ color: "rgba(255,255,255,0.8)" }}>{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACTS ═══ */}
      <section className="relative z-10 py-24 pb-32">
        <div ref={contactSec.ref} className="max-w-2xl mx-auto px-5">
          <SectionLabel>Контакты</SectionLabel>
          <h2 className="font-display font-light text-white mb-12" style={{ fontSize: "clamp(2rem, 8vw, 3rem)" }}>
            Давайте знакомиться<span style={{ color: "#e05044" }}>.</span>
          </h2>

          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 transition-all duration-700 ${contactSec.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {[
              { emoji: "📱", label: "Телефон", value: "+7 922 758-95-70", href: "tel:+79227589570" },
              { emoji: "✉️", label: "Email", value: "twessdy7@yandex.ru", href: "mailto:twessdy7@yandex.ru" },
              { emoji: "💬", label: "Telegram", value: "@twessdy", href: "https://t.me/twessdy" },
              { emoji: "📍", label: "Город", value: "Москва", href: undefined },
            ].map((c, i) => (
              <a
                key={c.label}
                href={c.href || "#"}
                target={c.href?.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`flex items-center gap-4 rounded-xl px-5 py-4 transition-all duration-300 ${c.href ? "hover:scale-[1.02] cursor-pointer" : "cursor-default"}`}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  transitionDelay: `${i * 60}ms`,
                  textDecoration: "none",
                }}
              >
                <span className="text-xl w-8 text-center">{c.emoji}</span>
                <div>
                  <p className="font-body text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>{c.label}</p>
                  <p className="font-body text-sm text-white font-medium">{c.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className={`flex gap-3 mb-10 flex-wrap transition-all duration-700 delay-300 ${contactSec.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <a
              href="https://t.me/twessdy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-body text-sm text-white/70 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2.5 rounded-full transition-all duration-200"
            >
              <Icon name="Send" size={14} />
              Telegram
            </a>
            <a
              href="https://vk.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-body text-sm text-white/70 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2.5 rounded-full transition-all duration-200"
            >
              <Icon name="Users" size={14} />
              ВКонтакте
            </a>
          </div>

          {/* Big CTA */}
          <div
            className={`rounded-2xl p-8 text-center transition-all duration-1000 delay-400 ${contactSec.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{
              background: "linear-gradient(135deg, rgba(224,80,68,0.12) 0%, rgba(30,60,120,0.18) 100%)",
              border: "1px solid rgba(224,80,68,0.25)",
            }}
          >
            <p className="font-body text-xs mb-2 tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>Открыта к предложениям</p>
            <h3 className="font-display text-3xl text-white mb-2">Рассмотрю вакансию</h3>
            <p className="font-body text-sm mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>
              в баре, ресторане, ночном клубе или на ивенте
            </p>
            <a
              href="https://t.me/twessdy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 font-body font-semibold text-white px-8 py-3.5 rounded-full hover:scale-105 transition-all duration-300"
              style={{ background: "#e05044", boxShadow: "0 8px 30px rgba(224,80,68,0.4)" }}
            >
              <Icon name="Send" size={16} />
              Написать мне в Telegram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-2xl mx-auto px-5 flex items-center justify-between">
          <span className="font-display text-lg font-semibold">
            <span style={{ color: "#e05044" }}>Bar</span>lady
          </span>
          <p className="font-body text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>© 2024 Анна Сидорова</p>
        </div>
      </footer>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(20px)" }}
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox}
            alt="Фото"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl"
            style={{ boxShadow: "0 0 60px rgba(224,80,68,0.15)" }}
          />
          <button
            className="absolute top-6 right-6 transition-colors"
            style={{ color: "rgba(255,255,255,0.5)" }}
            onClick={() => setLightbox(null)}
          >
            <Icon name="X" size={28} />
          </button>
        </div>
      )}
    </div>
  );
}
