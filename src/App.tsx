import { useEffect, useState } from "react";

const iconUrl = (name: string) => `${import.meta.env.BASE_URL}assets/icons/${name}.png`;

const PROJECTS = [
  {
    icon: "devtools",
    name: "DevTools 开发者工具集",
    desc: "30+ 免费在线工具：时间戳、二维码、图片处理、AI 生图等，打开即用、无需注册。从零设计并持续迭代的前端工程。",
    tags: ["React", "TypeScript", "Ant Design", "Docker"],
    link: "https://leiqinghe.cloud:8100",
    linkLabel: "访问",
    featured: true,
  },
  {
    icon: "aigen",
    name: "AI 生图工作台",
    desc: "文生图 + 图生图双模式，接入 GPT-Image 模型。内置出站安全守卫、限流与 HTTPS 自动续期。",
    tags: ["OpenAI API", "Express", "Nginx"],
    link: "https://leiqinghe.cloud:8100/image-gen",
    linkLabel: "体验",
  },
  {
    icon: "reader",
    name: "在线阅读器",
    desc: "私人书库与在线阅读服务，前后端分离部署，支持多格式电子书与移动端阅读。",
    tags: ["Node.js", "Docker", "自部署"],
    link: "http://101.201.56.200:8098",
    linkLabel: "访问",
  },
  {
    icon: "score",
    name: "评分计算平台",
    desc: "面向评分场景的自动化计算与统计平台，把繁琐的人工核算变成一键完成的在线服务。",
    tags: ["前端工程化", "Nginx", "容器化"],
    link: "http://101.201.56.200:8093",
    linkLabel: "访问",
  },
];

const TAGS = [
  "在线工具集",
  "AI 应用",
  "自部署服务",
  "前端工程化",
  "容器化部署",
  "HTTPS 自动化",
  "独立开发",
  "从 0 到 1",
];

const TECHS = ["React", "TypeScript", "Node.js", "Python", "Docker", "Nginx", "Vite", "Express", "PostgreSQL"];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "-60px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function LogoMark({ size = 38 }: { size?: number }) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}assets/logo.png`}
      alt="leiqinghe.cloud logo"
      width={size}
      height={size}
    />
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 font-medium">
          <LogoMark />
          <span>leiqinghe.cloud</span>
        </a>
        <div className="flex items-center gap-8">
          <nav className="hidden items-center gap-8 text-sm text-zinc-500 md:flex">
            <a href="#projects" className="transition hover:text-zinc-900">
              项目
            </a>
            <a href="#stack" className="transition hover:text-zinc-900">
              技术
            </a>
            <a href="#contact" className="transition hover:text-zinc-900">
              联系
            </a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-zinc-700"
          >
            联系我
          </a>
        </div>
      </div>
    </header>
  );
}

function WindowFrame({ alt, url }: { alt: string; url: string }) {
  const src = `${import.meta.env.BASE_URL}assets/devtools-hero.png`;
  return (
    <div className="window-frame">
      <div className="window-bar">
        <span className="window-dot" style={{ background: "#ff5f57" }} />
        <span className="window-dot" style={{ background: "#febc2e" }} />
        <span className="window-dot" style={{ background: "#28c840" }} />
        <span className="window-url">{url}</span>
      </div>
      <img src={src} alt={alt} className="block w-full" loading="lazy" />
    </div>
  );
}

function Phone({ img, alt, className = "" }: { img: string; alt: string; className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-[42px] border-[8px] border-[#1c1c24] bg-[#1c1c24] shadow-[0_28px_70px_-18px_rgba(0,0,0,0.5)] ${className}`}
    >
      <div className="relative" style={{ aspectRatio: "19.5 / 9" }}>
        <span className="absolute left-1/2 top-2.5 z-10 h-[16px] w-[68px] -translate-x-1/2 rounded-full bg-[#1c1c24]" />
        <img
          src={img}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover object-top"
          loading="lazy"
        />
      </div>
    </div>
  );
}

function PhoneShowcase() {
  const base = `${import.meta.env.BASE_URL}assets/phones`;
  return (
    <div className="animate-float flex items-start justify-center">
      <Phone img={`${base}/aigen.png`} alt="AI 生图工作台移动端" className="z-0 hidden w-[200px] -rotate-[8deg] translate-y-12 -mr-8 sm:block" />
      <Phone img={`${base}/devtools.png`} alt="DevTools 移动端" className="z-10 w-[244px]" />
      <Phone img={`${base}/reader.png`} alt="在线阅读器移动端" className="z-0 hidden w-[200px] rotate-[8deg] translate-y-12 -ml-8 sm:block" />
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-aurora">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-24 text-center md:pt-32">
        <h1 className="reveal text-5xl leading-[1.15] font-semibold tracking-tight md:text-7xl" style={{ transitionDelay: "80ms" }}>
          把想法做成
          <br />
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 bg-clip-text text-transparent">
            能用的产品
          </span>
        </h1>
        <p
          className="reveal mx-auto mt-6 max-w-xl text-lg text-zinc-500"
          style={{ transitionDelay: "160ms" }}
        >
          从定制化网站系统、 APP 、小程序、AI 应用到自部署服务，
          享受从 0 到 1 的完整构建 —— 设计、开发、部署、运营，一个人可运维的产品线。
        </p>
        <div className="reveal mt-9 flex justify-center gap-4" style={{ transitionDelay: "240ms" }}>
          <a
            href="#projects"
            className="rounded-full bg-zinc-900 px-7 py-3 text-sm font-medium text-white transition hover:bg-zinc-700"
          >
            查看项目
          </a>
          <a
            href="#contact"
            className="rounded-full border border-zinc-300 px-7 py-3 text-sm font-medium text-zinc-700 transition hover:border-zinc-400 hover:text-zinc-900"
          >
            联系我
          </a>
        </div>
        <div className="reveal mt-16" style={{ transitionDelay: "300ms" }}>
          <PhoneShowcase />
        </div>
      </div>
    </section>
  );
}

function TagMarquee() {
  const row = [...TAGS, ...TAGS];
  return (
    <section className="border-y border-zinc-100 bg-white py-7">
      <div className="marquee-mask">
        <div className="marquee-track">
          {row.map((t, i) => (
            <span
              key={i}
              className="rounded-full border border-zinc-200 bg-zinc-50 px-5 py-1.5 text-sm whitespace-nowrap text-zinc-500"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function FocusProject() {
  return (
    <section className="focus-dark text-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="reveal max-w-2xl">
          <p className="mb-4 text-sm font-medium tracking-widest text-purple-300">焦点项目</p>
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            DevTools 开发者工具集
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-zinc-400">
            30+ 免费在线工具，打开即用、无需注册。涵盖时间戳、二维码、图片处理、
            AI 生图等高频开发场景，从零设计、持续迭代的前端工程。
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {["React", "TypeScript", "Ant Design", "AI 生图", "Docker"].map((t) => (
              <span key={t} className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-zinc-300">
                {t}
              </span>
            ))}
          </div>
          <a
            href="https://leiqinghe.cloud:8100"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-full bg-white px-7 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200"
          >
            立即体验 →
          </a>
        </div>
        <div className="reveal mt-14">
          <WindowFrame alt="DevTools 工具集首页" url="leiqinghe.cloud:8100" />
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="reveal mb-12">
          <p className="mb-3 text-sm font-medium tracking-widest text-indigo-500">全部项目</p>
          <h2 className="text-4xl font-semibold tracking-tight">每一个都真实上线，打开即用</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <div key={p.name} className="reveal" style={{ transitionDelay: `${i * 60}ms` }}>
            <div className="group flex h-full flex-col gap-4 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-7 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100">
              <div className="flex items-center justify-between">
                <img
                  src={iconUrl(p.icon)}
                  alt=""
                  className="h-14 w-14 object-contain drop-shadow-[0_6px_12px_rgba(99,102,241,0.25)]"
                />
                {p.featured && (
                  <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-500">
                    焦点项目
                  </span>
                )}
              </div>
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="flex-1 text-sm leading-relaxed text-zinc-500">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-500">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-indigo-500 opacity-70 transition group-hover:opacity-100"
              >
                {p.linkLabel} →
              </a>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FEATURES = [
  {
    title: "全栈开发",
    desc: "从界面到接口，端到端完整交付。",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="m8 6-6 6 6 6" />
        <path d="m16 6 6 6-6 6" />
      </svg>
    ),
  },
  {
    title: "AI 应用集成",
    desc: "把大模型能力接进真实可用的产品。",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />
        <path d="M19 3v4" />
        <path d="M21 5h-4" />
      </svg>
    ),
  },
  {
    title: "自部署运维",
    desc: "Docker / Nginx / HTTPS 自动化，服务常年在线。",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <rect x="2" y="4" width="20" height="7" rx="2" />
        <rect x="2" y="13" width="20" height="7" rx="2" />
        <path d="M6 7.5h.01M6 16.5h.01" />
      </svg>
    ),
  },
  {
    title: "产品化思维",
    desc: "不做 demo，做有人真的在用的东西。",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M4.5 16.5 3 21l4.5-1.5" />
        <path d="M14 4c4-1.5 6 2 4.5 6L14 14l-4-4z" />
        <path d="M10 10 6 14" />
        <path d="M14 14c-1 3-4 5-7 5.5L10 14" />
      </svg>
    ),
  },
];

function TechStack() {
  return (
    <section id="stack" className="border-y border-zinc-100 bg-gradient-to-b from-indigo-50/60 via-white to-purple-50/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="reveal mb-4 flex items-center justify-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-indigo-100 text-indigo-500">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-4 w-4">
              <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
              <circle cx="12" cy="12" r="4" />
            </svg>
          </span>
          <span className="text-sm font-medium tracking-widest text-indigo-500">我能做什么</span>
        </div>
        <div className="reveal mb-12 text-center">
          <h2 className="text-4xl font-semibold tracking-tight">一个人的完整产品线</h2>
          <p className="mx-auto mt-3 max-w-md text-zinc-500">设计、开发、部署、运营 —— 每一环都亲手打磨。</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <div key={f.title} className="reveal" style={{ transitionDelay: `${i * 60}ms` }}>
            <div className="h-full rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
              <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-indigo-50 text-indigo-500">
                {f.svg}
              </span>
              <h3 className="mb-1.5 font-semibold">{f.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-500">{f.desc}</p>
            </div>
            </div>
          ))}
        </div>
        <div className="reveal mt-12 flex flex-wrap justify-center gap-3">
          {TECHS.map((t) => (
            <span
              key={t}
              className="rounded-full border border-zinc-200 bg-white px-5 py-2 text-sm font-medium text-zinc-500 shadow-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const copyWechat = async () => {
    try {
      await navigator.clipboard.writeText("qqqqqinghe");
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      prompt("全选并复制微信号：", "qqqqqinghe");
    }
  };
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        <div className="reveal">
          <h2 className="text-4xl font-semibold tracking-tight">一起做点有意思的东西</h2>
          <p className="mx-auto mt-4 max-w-md text-zinc-500">
            无论是技术交流、项目合作，还是只是打个招呼，都欢迎联系我。
          </p>
          <div className="mt-9 flex justify-center gap-4">
            <a
              href="https://github.com/leiqinghe"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-zinc-900 px-7 py-3 text-sm font-medium text-white transition hover:bg-zinc-700"
            >
              GitHub
            </a>
            <button
              type="button"
              onClick={copyWechat}
              className="rounded-full border border-zinc-300 px-7 py-3 text-sm font-medium text-zinc-700 transition hover:border-zinc-400 hover:text-zinc-900"
            >
              {copied ? "已复制 ✓" : "微信号：qqqqqinghe"}
            </button>
          </div>
          <p className="mt-4 text-xs text-zinc-400">点击微信号自动复制</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-100">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-10 text-sm text-zinc-400">
        <span>© 2026 雷庆贺 · 用代码把想法变成现实</span>
        <span className="flex gap-5">
          <a href="https://leiqinghe.cloud:8100" target="_blank" rel="noreferrer" className="transition hover:text-zinc-700">
            DevTools
          </a>
          <a href="https://github.com/leiqinghe" target="_blank" rel="noreferrer" className="transition hover:text-zinc-700">
            GitHub
          </a>
        </span>
      </div>
    </footer>
  );
}

export default function App() {
  useReveal();
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TagMarquee />
        <FocusProject />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
