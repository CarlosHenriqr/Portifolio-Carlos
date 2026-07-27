import { createFileRoute } from "@tanstack/react-router";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";
import photo from "@/assets/monogram.jpg";
import { ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Carlos Henrique Ramos — Full-Stack Developer" },
      {
        name: "description",
        content:
          "Full-stack developer building internal systems, REST APIs and web solutions with Java, Spring Boot, Node.js, TypeScript and React.",
      },
      { property: "og:title", content: "Carlos Henrique Ramos — Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "Internal systems, REST APIs and scalable web products built across Java, Node.js, TypeScript and React.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Language = "en" | "pt";

const navIds = ["sobre", "stack", "projetos", "jornada", "contato"] as const;

const stack = [
  "Java",
  "Spring Boot",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "React",
  "Next.js",
  "PostgreSQL",
  "MySQL",
  "SQLite",
  "Prisma",
  "Firebase",
  "Docker",
  "Git / GitHub",
  "CI/CD",
  "Cloudflare",
];

const projectBase = [
  {
    name: "Taskio",
    tags: ["Full-Stack", "Authentication", "APIs", "Git"],
    href: "https://task-io-7d3.pages.dev/",
  },
  {
    name: "Asset Management System",
    tags: ["Full-Stack", "Security", "RBAC", "Relational Data"],
  },
  {
    name: "Aura Weather",
    tags: ["Node.js", "Express", "PostgreSQL", "Prisma", "JWT"],
    href: "https://github.com/CarlosHenriqr/Aura-Weather",
  },
  {
    name: "CORA ERP",
    tags: ["ERP", "Architecture", "Dashboards", "Integrations"],
  },
];

const translations = {
  en: {
    nav: ["About", "Stack", "Projects", "Journey", "Contact"],
    navigationLabel: "Main navigation",
    languageLabel: "Mudar idioma para português",
    heroEyebrow: "Back-end by day · Full-stack through projects",
    heroDescription:
      "Full-stack developer building internal systems, REST APIs and web solutions that turn business needs into secure, scalable products.",
    viewProjects: "View projects",
    contactCta: "Get in touch",
    photoAlt: "Carlos Henrique wearing a motorcycle helmet",
    facts: [
      ["Based", "Palhoça, SC, Brazil"],
      ["Focus", "Full-stack and REST APIs"],
      ["Now", "SVA · Intelbras"],
    ],
    aboutTitle: "About me",
    aboutParagraphs: [
      "I develop internal systems, REST APIs and web solutions focused on process optimization. My work spans Java, Spring Boot, Node.js, JavaScript, TypeScript, relational databases and service integration.",
      "I turn business requirements into functional, secure and scalable solutions. I also work with React, Firebase, Git, cloud deployment and full-stack architecture across professional and personal projects.",
    ],
    personalFacts: [
      ["Name", "Carlos Henrique Ramos"],
      ["Location", "Palhoça, SC, Brazil"],
      ["Languages", "Portuguese · English C1"],
    ],
    technologiesTitle: "Technologies",
    selectedWork: "Selected work",
    projectsTitle: "Projects",
    projectsIntro:
      "Products and platforms where I apply full-stack architecture, secure authentication, relational data modeling and service integrations.",
    decision: "Scope",
    allRepositories: "View all repositories",
    journeyTitle: "Journey",
    contactTitle: "Contact",
    contactHeading: ["Have a problem to", "solve?"],
    contactDescription:
      "I am open to discussing development opportunities and projects where APIs, data and thoughtful implementation can make a difference.",
    sendEmail: "Send email",
    callMe: "Call me",
    projects: [
      {
        name: "Taskio",
        type: "Productivity Platform",
        context:
          "A modern platform for organizing tasks, projects, priorities, deadlines and collaborative workflows through a clear, responsive interface.",
        decision:
          "Full-stack architecture, authentication, data persistence, reusable components, API integration and Git-based version control.",
      },
      {
        name: "Asset Management System",
        type: "Internal Web Platform",
        context:
          "A full-stack platform for managing company assets with a structured, optimized relational data model.",
        decision:
          "Secure authentication, encryption and role-based access control protect data and operations.",
      },
      {
        name: "Aura Weather",
        type: "REST API",
        context:
          "Centralizing weather data, favorite cities and alerts in an API consumed by a dashboard.",
        decision:
          "OpenWeatherMap integration, external response processing and structured endpoints for accurate, current weather data.",
      },
      {
        name: "CORA ERP",
        type: "ERP · In development",
        context:
          "A modular ERP planned for Brazilian small and medium-sized businesses, covering sales, finance and inventory.",
        decision:
          "Fiscal integrations, dashboards and configurable workflows are organized as independent product modules.",
      },
    ],
    journey: [
      {
        period: "Mar 2025 — Present",
        company: "Intelbras",
        role: "Back-End Development Intern · SVA",
        description:
          "Internal applications, SQL-based data flows and corporate integrations. Led the concept and planning of FLASCAL, an Innovation and Knowledge Management Hub.",
      },
      {
        period: "Jan — Dec 2024",
        company: "ICAMED Clinic",
        role: "IT Technical Support Intern",
        description:
          "Technical support for healthcare clinics, diagnosing software, hardware, operating system and connectivity issues.",
      },
    ],
  },
  pt: {
    nav: ["Sobre", "Stack", "Projetos", "Jornada", "Contato"],
    navigationLabel: "Navegação principal",
    languageLabel: "Switch language to English",
    heroEyebrow: "Back-end no dia a dia · Full-stack nos projetos",
    heroDescription:
      "Desenvolvedor full-stack que constrói sistemas internos, APIs REST e soluções web, transformando necessidades de negócio em produtos seguros e escaláveis.",
    viewProjects: "Ver projetos",
    contactCta: "Entrar em contato",
    photoAlt: "Carlos Henrique usando capacete de motociclista",
    facts: [
      ["Base", "Palhoça, SC, Brasil"],
      ["Foco", "Full-stack e APIs REST"],
      ["Agora", "SVA · Intelbras"],
    ],
    aboutTitle: "Sobre mim",
    aboutParagraphs: [
      "Desenvolvo sistemas internos, APIs REST e soluções web voltadas à otimização de processos. Minha atuação envolve Java, Spring Boot, Node.js, JavaScript, TypeScript, bancos relacionais e integração de serviços.",
      "Transformo necessidades de negócio em soluções funcionais, seguras e escaláveis. Também trabalho com React, Firebase, Git, implantação em nuvem e arquitetura full-stack em projetos profissionais e pessoais.",
    ],
    personalFacts: [
      ["Nome", "Carlos Henrique Ramos"],
      ["Local", "Palhoça, SC, Brasil"],
      ["Idiomas", "Português · Inglês C1"],
    ],
    technologiesTitle: "Tecnologias",
    selectedWork: "Trabalho selecionado",
    projectsTitle: "Projetos",
    projectsIntro:
      "Produtos e plataformas em que aplico arquitetura full-stack, autenticação segura, modelagem relacional e integração de serviços.",
    decision: "Escopo",
    allRepositories: "Ver todos os repositórios",
    journeyTitle: "Jornada",
    contactTitle: "Contato",
    contactHeading: ["Tem um problema para", "resolver?"],
    contactDescription:
      "Estou aberto a conversar sobre oportunidades de desenvolvimento e projetos em que APIs, dados e uma implementação cuidadosa façam diferença.",
    sendEmail: "Enviar e-mail",
    callMe: "Ligar",
    projects: [
      {
        name: "Taskio",
        type: "Plataforma de Produtividade",
        context:
          "Uma plataforma moderna para organizar tarefas, projetos, prioridades, prazos e fluxos colaborativos por meio de uma interface clara e responsiva.",
        decision:
          "Arquitetura full-stack, autenticação, persistência, componentes reutilizáveis, integração de APIs e versionamento com Git.",
      },
      {
        name: "Sistema de Gestão de Ativos",
        type: "Plataforma Web Interna",
        context:
          "Uma plataforma full-stack para gestão de ativos com arquitetura relacional de dados estruturada e otimizada.",
        decision:
          "Autenticação segura, criptografia e controle de acesso por perfil protegem dados e operações.",
      },
      {
        name: "Aura Weather",
        type: "API REST",
        context:
          "Centralizar dados climáticos, cidades favoritas e alertas em uma API consumida por um dashboard.",
        decision:
          "Integração OpenWeatherMap, processamento de respostas externas e endpoints estruturados para dados meteorológicos precisos e atuais.",
      },
      {
        name: "CORA ERP",
        type: "ERP · Em desenvolvimento",
        context:
          "Um ERP modular planejado para pequenas e médias empresas brasileiras, abrangendo vendas, finanças e estoque.",
        decision:
          "Integrações fiscais, dashboards e fluxos configuráveis são organizados como módulos independentes do produto.",
      },
    ],
    journey: [
      {
        period: "Mar 2025 — Atual",
        company: "Intelbras",
        role: "Estagiário de Desenvolvimento Back-End · SVA",
        description:
          "Aplicações internas, fluxos de dados em SQL e integrações corporativas. Liderança na concepção e no planejamento do FLASCAL, Hub de Inovação e Gestão do Conhecimento.",
      },
      {
        period: "Jan — Dez 2024",
        company: "Clínica ICAMED",
        role: "Estagiário de Suporte Técnico em TI",
        description:
          "Suporte técnico em clínicas de saúde, diagnosticando problemas de software, hardware, sistemas operacionais e conectividade.",
      },
    ],
  },
} as const;

function SectionLabel({ n, title }: { n: string; title: string }) {
  return (
    <Reveal className="mb-10 flex items-baseline gap-4">
      <span className="label-mono">{n} //</span>
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      <span className="hidden h-px flex-1 bg-border sm:block" />
    </Reveal>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });
  return (
    <motion.div
      style={{ scaleX: x }}
      className="fixed inset-x-0 top-0 z-[60] h-px origin-left bg-ember"
    />
  );
}

function Index() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const previousScrollY = useRef(0);
  const [headerHidden, setHeaderHidden] = useState(false);
  const [language, setLanguage] = useState<Language>("en");
  const copy = translations[language];
  const projects = projectBase.map((project, index) => ({ ...project, ...copy.projects[index] }));

  useEffect(() => {
    document.documentElement.lang = language === "en" ? "en" : "pt-BR";
  }, [language]);

  useMotionValueEvent(scrollY, "change", (currentScrollY) => {
    const previous = previousScrollY.current;
    const scrollingDown = currentScrollY > previous;

    if (currentScrollY < 80) {
      setHeaderHidden(false);
    } else if (Math.abs(currentScrollY - previous) > 2) {
      setHeaderHidden(scrollingDown);
    }

    previousScrollY.current = currentScrollY;
  });

  return (
    <div className="portfolio-shell min-h-screen">
      <ScrollProgress />

      <motion.header
        className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur-md"
        animate={{ y: headerHidden ? "-100%" : "0%" }}
        transition={reduced ? { duration: 0 } : { duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto max-w-5xl px-5">
          <div className="flex items-center justify-between py-4">
            <a
              href="#topo"
              className="min-w-0 truncate font-display text-sm font-bold tracking-[0.2em]"
            >
              CARLOS<span className="text-ember">.</span>DEV
            </a>
            <button
              type="button"
              aria-label={copy.languageLabel}
              title={copy.languageLabel}
              onClick={() => setLanguage((current) => (current === "en" ? "pt" : "en"))}
              className="group inline-flex items-center gap-2 border border-border px-3 py-1.5 font-display text-[0.65rem] tracking-[0.16em] uppercase transition-colors hover:border-ember"
            >
              <span className={language === "en" ? "text-ember" : "text-muted-foreground"}>EN</span>
              <span aria-hidden="true" className="text-border">
                /
              </span>
              <span className={language === "pt" ? "text-ember" : "text-muted-foreground"}>PT</span>
            </button>
          </div>
          <nav
            aria-label={copy.navigationLabel}
            className="scrollbar-none -mx-5 flex gap-6 overflow-x-auto border-t border-border/60 px-5 py-3 md:absolute md:top-4 md:left-1/2 md:mx-0 md:-translate-x-1/2 md:border-0 md:px-0 md:py-0"
          >
            {navIds.map((id, index) => (
              <a
                key={id}
                href={`#${id}`}
                className="story-link shrink-0 text-xs text-muted-foreground transition-colors hover:text-ember md:text-sm"
              >
                {copy.nav[index]}
              </a>
            ))}
          </nav>
        </div>
      </motion.header>

      <main id="topo" className="mx-auto max-w-5xl px-5 pb-24">
        <section className="grid items-center gap-12 py-16 md:min-h-[42rem] md:grid-cols-[1.5fr_0.75fr] lg:py-24">
          <div>
            <motion.span
              className="label-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {copy.heroEyebrow}
            </motion.span>
            <h1 className="mt-6 font-display text-6xl leading-[0.92] font-bold sm:text-8xl">
              {["Carlos", "Henrique"].map((word, i) => (
                <motion.span
                  key={word}
                  className="block overflow-hidden"
                  initial={reduced ? { opacity: 0 } : { opacity: 0, y: "40%" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  {i === 1 ? <span className="text-ember">{word}</span> : word}
                </motion.span>
              ))}
            </h1>
            <Reveal delay={0.3} className="mt-8 max-w-lg border-l border-ember/50 pl-5">
              <p className="text-base text-muted-foreground sm:text-lg">{copy.heroDescription}</p>
            </Reveal>
            <Reveal delay={0.4} className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 rounded-sm bg-ember px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                {copy.viewProjects} <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-ember hover:text-ember"
              >
                {copy.contactCta}
              </a>
            </Reveal>
          </div>

          <motion.aside
            className="self-center border-y border-border py-5"
            initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="portrait-frame aspect-square">
              <img
                src={photo}
                alt={copy.photoAlt}
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
            <dl className="mt-5 divide-y divide-border border-b border-border">
              {copy.facts.map(([k, v], index) => (
                <div key={index} className="flex items-center justify-between gap-4 py-3">
                  <dt className="label-mono">{k}</dt>
                  <dd className="text-right text-xs text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </motion.aside>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="scroll-mt-24 py-16">
          <SectionLabel n="01" title={copy.aboutTitle} />
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {copy.aboutParagraphs[0]}
              </p>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                {copy.aboutParagraphs[1]}
              </p>
            </Reveal>
            <Stagger className="divide-y divide-border border-y border-border">
              {copy.personalFacts.map(([k, v], index) => (
                <StaggerItem key={index} className="flex items-baseline justify-between gap-4 py-4">
                  <span className="label-mono">{k}</span>
                  <span className="text-sm">{v}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* STACK */}
        <section id="stack" className="scroll-mt-24 py-16">
          <SectionLabel n="02" title={copy.technologiesTitle} />
          <Stagger className="flex flex-wrap gap-x-8 gap-y-4">
            {stack.map((t) => (
              <StaggerItem key={t}>
                <span className="group inline-flex items-baseline gap-2 font-display text-xl font-medium sm:text-2xl">
                  <span className="h-1 w-1 rounded-full bg-ember" />
                  <span className="transition-colors group-hover:text-ember">{t}</span>
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        <section id="projetos" className="scroll-mt-24 py-20">
          <Reveal className="mb-12 grid gap-5 md:grid-cols-[1fr_1.25fr] md:items-end">
            <div>
              <span className="label-mono">03 // {copy.selectedWork}</span>
              <h2 className="mt-3 text-4xl font-bold sm:text-5xl">{copy.projectsTitle}</h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
              {copy.projectsIntro}
            </p>
          </Reveal>
          <Stagger className="border-b border-border">
            {projects.map((p, i) => (
              <StaggerItem key={projectBase[i].name}>
                <article className="rule-row group grid gap-5 px-1 py-10 md:grid-cols-[3rem_0.8fr_1.35fr_auto] md:items-start md:gap-8">
                  <span className="label-mono pt-1">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-display text-2xl font-bold transition-colors group-hover:text-ember sm:text-3xl">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-xs tracking-[0.18em] text-muted-foreground uppercase">
                      {p.type}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{p.context}</p>
                    <p className="mt-4 border-l border-ember/50 pl-4 text-sm leading-relaxed">
                      <span className="label-mono mr-2">{copy.decision}</span>
                      {p.decision}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
                      {p.tags.map((tag) => (
                        <span key={tag} className="text-xs text-muted-foreground/80">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.name} on GitHub`}
                      className="text-muted-foreground transition-colors hover:text-ember"
                    >
                      <ArrowUpRight className="h-6 w-6 shrink-0 transition-transform duration-300 hover:translate-x-1 hover:-translate-y-1" />
                    </a>
                  ) : (
                    <span className="label-mono pt-1">{language === "en" ? "Case" : "Caso"}</span>
                  )}
                </article>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-6 flex justify-end">
            <a
              href="https://github.com/CarlosHenriqr"
              target="_blank"
              rel="noreferrer"
              className="story-link inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-ember"
            >
              {copy.allRepositories} <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </section>

        {/* JORNADA */}
        <section id="jornada" className="scroll-mt-24 py-16">
          <SectionLabel n="04" title={copy.journeyTitle} />
          <Stagger className="border-b border-border">
            {copy.journey.map((j, index) => (
              <StaggerItem key={index}>
                <div className="rule-row grid gap-3 px-1 py-8 md:grid-cols-[10rem_1fr_1.2fr] md:gap-8">
                  <span className="label-mono pt-1">{j.period}</span>
                  <div>
                    <h3 className="text-xl font-bold">{j.role}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{j.company}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{j.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* CONTATO */}
        <section id="contato" className="scroll-mt-24 py-16">
          <SectionLabel n="05" title={copy.contactTitle} />
          <Reveal>
            <h3 className="max-w-2xl font-display text-5xl leading-[0.95] font-bold sm:text-7xl">
              {copy.contactHeading[0]} <span className="text-ember">{copy.contactHeading[1]}</span>
            </h3>
            <p className="mt-6 max-w-xl text-muted-foreground">{copy.contactDescription}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="mailto:carloshenriqueramos41@gmail.com"
                className="inline-flex items-center gap-2 rounded-sm bg-ember px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Mail className="h-4 w-4" /> {copy.sendEmail}
              </a>
              <a
                href="https://github.com/CarlosHenriqr"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-ember hover:text-ember"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="tel:+5548988550211"
                className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-ember hover:text-ember"
              >
                <Phone className="h-4 w-4" /> {copy.callMe}
              </a>
              <a
                href="https://www.linkedin.com/in/carlos-henrique-ramos"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-ember hover:text-ember"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-border/60 py-8">
        <div className="mx-auto max-w-5xl px-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Carlos Henrique Ramos
        </div>
      </footer>
    </div>
  );
}
