import type { LandingLocale } from "@/contexts/landing-locale";

export type ProblemCard = {
  code: string;
  title: string;
  body: string;
};

export type FeatureCard = {
  title: string;
  body: string;
};

export type UseCaseCard = {
  tag: string;
  title: string;
  body: string;
};

export type LandingCopy = {
  meta: { documentTitle: string };
  nav: {
    demo: string;
    api: string;
    useCases: string;
    github: string;
    getStarted: string;
  };
  hero: {
    pill: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    getApiAccess: string;
    viewDocumentation: string;
    apiStatusLabel: string;
    metaLine: string;
    codeRequest: string;
    codeResponse: string;
  };
  problem: {
    eyebrow: string;
    title: string;
    cards: ProblemCard[];
  };
  solution: {
    eyebrow: string;
    title: string;
    body: string;
    features: FeatureCard[];
  };
  demo: {
    eyebrow: string;
    title: string;
    subtitle: string;
    requestLabel: string;
    encoding: string;
    placeholder: string;
    charCount: (n: number) => string;
    analyzing: string;
    analyze: string;
    computing: string;
    responseLabel: string;
    ok: string;
    riskLabel: string;
  };
  demoInterpretation: {
    chest: string;
    stroke: string;
    dyspnoea: string;
    fever: string;
    headache: string;
    none: string;
  };
  code: {
    eyebrow: string;
    title: string;
    subtitle: string;
    copy: string;
    copied: string;
  };
  useCases: {
    eyebrow: string;
    title: string;
    cards: UseCaseCard[];
  };
  why: {
    eyebrow: string;
    title: string;
    body: string;
  };
  cta: {
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    emailPlaceholder: string;
    requestAccess: string;
    sending: string;
    readDocs: string;
    toastSuccessTitle: string;
    toastSuccessDescription: string;
    toastErrorTitle: string;
    toastErrorDescription: string;
  };
  footer: {
    tagline: string;
    docs: string;
    api: string;
    contact: string;
    usagePolicy: string;
    summaryHr: string;
  };
};

export const landingCopy: Record<LandingLocale, LandingCopy> = {
  en: {
    meta: {
      documentTitle: "Medical MCP — Medical risk layer for AI agents",
    },
    nav: {
      demo: "Demo",
      api: "API",
      useCases: "Use cases",
      github: "GitHub",
      getStarted: "Get started",
    },
    hero: {
      pill: "Announcing MedMCP v1",
      titleLine1: "Medical risk",
      titleLine2: "for developers",
      subtitle:
        "The structured reasoning layer for AI medical agents. Turn raw symptoms into deterministic clinical risk signals at scale.",
      getApiAccess: "Get API access",
      viewDocumentation: "View documentation",
      apiStatusLabel: "API status: operational",
      metaLine: "v1.0 · MCP-compatible",
      codeRequest: "// Request",
      codeResponse: "// Response",
    },
    problem: {
      eyebrow: "// the problem",
      title: "AI medical agents are built on inconsistent reasoning",
      cards: [
        {
          code: "ERR_PROMPT_DRIFT",
          title: "Unreliable prompt parsing",
          body: "LLMs hallucinate symptoms, miss negations, and produce different outputs for identical input.",
        },
        {
          code: "ERR_NO_SCHEMA",
          title: "No shared output contract",
          body: "Every team invents its own JSON shape, making interoperability between agents impossible.",
        },
        {
          code: "ERR_RISK_DRIFT",
          title: "Inconsistent risk scoring",
          body: "Risk thresholds drift between models and prompts, eroding clinical and product trust.",
        },
        {
          code: "ERR_REGRESSION",
          title: "Hard to keep production-grade",
          body: "Prompt regressions silently break downstream triage logic with each model upgrade.",
        },
      ],
    },
    solution: {
      eyebrow: "The solution",
      title: "A standardized MCP layer for medical AI systems",
      body: "MedMCP provides a deterministic API that converts unstructured symptom input into structured clinical risk outputs — so your agents speak a shared, machine-readable medical language instead of free-form text.",
      features: [
        {
          title: "Canonical symptom schema",
          body: "Standardized SYMPTOM_* identifiers shared across every agent and integration.",
        },
        {
          title: "Deterministic output",
          body: "Same input → same structured response. No prompt drift, no model surprises.",
        },
        {
          title: "Calibrated confidence",
          body: "Numeric confidence and risk levels you can route on with simple thresholds.",
        },
      ],
    },
    demo: {
      eyebrow: "Live API simulator",
      title: "Try it. Same input, same structured output.",
      subtitle:
        "Send any symptom description. MedMCP returns a deterministic risk level, matched entities, and structured interpretation.",
      requestLabel: "request.text",
      encoding: "UTF-8",
      placeholder: "e.g. shortness of breath when climbing stairs",
      charCount: (n) => `${n} chars`,
      analyzing: "Analyzing",
      analyze: "Analyze",
      computing: "Computing structured risk signals…",
      responseLabel: "response.json",
      ok: "200 OK",
      riskLabel: "risk_level:",
    },
    demoInterpretation: {
      chest:
        "1 symptom(s) identified: chest pain. Top differential: NSTEMI (match score: 2.8).",
      stroke:
        "2 symptom(s) identified. Top differential: ischaemic stroke (match score: 3.1).",
      dyspnoea:
        "1 symptom(s) identified: dyspnoea. Top differential: pulmonary embolism (match score: 2.1).",
      fever:
        "1 symptom(s) identified: fever. Top differential: sepsis (match score: 1.2).",
      headache:
        "1 symptom(s) identified: headache. Top differential: migraine (match score: 1.4).",
      none: "No recognised symptoms identified.",
    },
    code: {
      eyebrow: "API",
      title: "One endpoint. Predictable output.",
      subtitle:
        "Drop MedMCP into any agent runtime. No SDK required, but first-class support for JS, Python, and MCP-compatible clients.",
      copy: "Copy",
      copied: "Copied",
    },
    useCases: {
      eyebrow: "// use cases",
      title: "Built for teams shipping medical AI",
      cards: [
        {
          tag: "agent.symptom_check()",
          title: "AI symptom checkers",
          body: "Replace brittle prompt chains with deterministic symptom classification.",
        },
        {
          tag: "copilot.context()",
          title: "Healthcare copilots",
          body: "Give clinical assistants a shared schema for reasoning across patient turns.",
        },
        {
          tag: "router.triage()",
          title: "Triage automation",
          body: "Route patients by structured risk_level and triage fields, not free text.",
        },
        {
          tag: "intake.prescreen()",
          title: "Telemedicine assistants",
          body: "Pre-screen intake conversations with calibrated confidence scores.",
        },
      ],
    },
    why: {
      eyebrow: "Why it matters",
      title: "Medical AI needs shared infrastructure, not more prompts.",
      body: "Without a shared medical MCP layer, every AI health agent reinvents symptom parsing and risk scoring independently — leading to inconsistent, unreliable outputs that can't be trusted in production. MedMCP is the missing standard.",
    },
    cta: {
      titleLine1: "Build on infrastructure,",
      titleLine2: "not on prompts.",
      subtitle:
        "Get early API access and start shipping deterministic medical reasoning today.",
      emailPlaceholder: "you@company.com",
      requestAccess: "Request access",
      sending: "Sending…",
      readDocs: "Read docs",
      toastSuccessTitle: "You're on the list",
      toastSuccessDescription: "We'll reach out soon.",
      toastErrorTitle: "Something went wrong",
      toastErrorDescription: "Try again in a moment.",
    },
    footer: {
      tagline:
        "Developer infrastructure for AI medical agents. MedMCP is not a medical device, diagnostic tool, or substitute for professional care.",
      docs: "Docs",
      api: "API",
      contact: "Contact",
      usagePolicy: "Usage policy",
      summaryHr: "Sažetak (HR)",
    },
  },
  hr: {
    meta: {
      documentTitle: "Medical MCP — medicinski rizik za AI agente",
    },
    nav: {
      demo: "Demo",
      api: "API",
      useCases: "Primjene",
      github: "GitHub",
      getStarted: "Započni",
    },
    hero: {
      pill: "Predstavljamo MedMCP v1",
      titleLine1: "Medicinski rizik",
      titleLine2: "za developere",
      subtitle:
        "Strukturirani sloj zaključivanja za AI medicinske agente. Pretvorite sirove simptome u determinističke kliničke signale rizika u velikoj skali.",
      getApiAccess: "Zatraži pristup API-ju",
      viewDocumentation: "Dokumentacija",
      apiStatusLabel: "Status API-ja: aktivan",
      metaLine: "v1.0 · kompatibilno s MCP",
      codeRequest: "// Zahtjev",
      codeResponse: "// Odgovor",
    },
    problem: {
      eyebrow: "// problem",
      title: "Medicinski AI agenti počivaju na nedosljednom zaključivanju",
      cards: [
        {
          code: "ERR_PROMPT_DRIFT",
          title: "Nepouzdano parsiranje upita",
          body: "LLM-ovi haluciniraju simptome, promaše negacije i daju različite odgovore na isti ulaz.",
        },
        {
          code: "ERR_NO_SCHEMA",
          title: "Nema zajedničkog ugovora o izlazu",
          body: "Svaki tim izmišlja vlastiti JSON, pa interoperabilnost između agenata nije moguća.",
        },
        {
          code: "ERR_RISK_DRIFT",
          title: "Nedosljedno bodovanje rizika",
          body: "Pragovi rizika pomiču se između modela i promptova, što ruši kliničko i produktno povjerenje.",
        },
        {
          code: "ERR_REGRESSION",
          title: "Teško održati produkcijsku razinu",
          body: "Regresije u promptovima tiho kvare trijažu nakon svakog nadogradnje modela.",
        },
      ],
    },
    solution: {
      eyebrow: "Rješenje",
      title: "Standardizirani MCP sloj za medicinske AI sustave",
      body: "MedMCP nudi deterministički API koji nestrukturirani unos simptoma pretvara u strukturirane kliničke izlaze rizika — tako da vaši agenti dijele isti, strogo čitljiv medicinski jezik umjesto slobodnog teksta.",
      features: [
        {
          title: "Kanonska shema simptoma",
          body: "Standardizirani SYMPTOM_* identifikatori dijeljeni među svim agentima i integracijama.",
        },
        {
          title: "Deterministički izlaz",
          body: "Isti ulaz → isti strukturirani odgovor. Bez prompt drifta i iznenađenja modela.",
        },
        {
          title: "Kalibrirano povjerenje",
          body: "Brojčano povjerenje i razine rizika koje možete usmjeravati jednostavnim pragovima.",
        },
      ],
    },
    demo: {
      eyebrow: "Live API simulator",
      title: "Isprobaj. Isti ulaz, isti strukturirani izlaz.",
      subtitle:
        "Pošalji bilo koji opis simptoma. MedMCP vraća determinističku razinu rizika, entitete i strukturirano tumačenje.",
      requestLabel: "request.text",
      encoding: "UTF-8",
      placeholder: "npr. zadihanost pri penjanju uz stepenice",
      charCount: (n) => `${n} znakova`,
      analyzing: "Analiziram",
      analyze: "Analiziraj",
      computing: "Računam strukturirane signale rizika…",
      responseLabel: "response.json",
      ok: "200 OK",
      riskLabel: "risk_level:",
    },
    demoInterpretation: {
      chest:
        "1 simptom: bol u prsima. Glavna diferencijacija: NSTEMI (match score: 2.8).",
      stroke:
        "2 simptoma. Glavna diferencijacija: ishemijski moždani udar (match score: 3.1).",
      dyspnoea:
        "1 simptom: dispnoja. Glavna diferencijacija: plućna embolija (match score: 2.1).",
      fever:
        "1 simptom: groznica. Glavna diferencijacija: sepsa (match score: 1.2).",
      headache:
        "1 simptom: glavobolja. Glavna diferencijacija: migrena (match score: 1.4).",
      none: "Nema prepoznatih simptoma.",
    },
    code: {
      eyebrow: "API",
      title: "Jedan endpoint. Predvidljiv izlaz.",
      subtitle:
        "Ubaci MedMCP u bilo koji agent runtime. SDK nije obavezan, ali postoji prva klasa podrške za JS, Python i MCP-klijente.",
      copy: "Kopiraj",
      copied: "Kopirano",
    },
    useCases: {
      eyebrow: "// primjene",
      title: "Za timove koji isporučuju medicinski AI",
      cards: [
        {
          tag: "agent.symptom_check()",
          title: "AI provjere simptoma",
          body: "Zamijeni krhke prompt lance determinističkom klasifikacijom simptoma.",
        },
        {
          tag: "copilot.context()",
          title: "Zdravstveni copiloti",
          body: "Kliničkim asistentima daj zajedničku shemu zaključivanja kroz konverzaciju.",
        },
        {
          tag: "router.triage()",
          title: "Automatizacija trijaže",
          body: "Usmjeravaj pacijente prema strukturiranom risk_levelu, ne slobodnom tekstu.",
        },
        {
          tag: "intake.prescreen()",
          title: "Asistenti za telemedicinu",
          body: "Predfiltriraj intake razgovore kalibriranim povjerenjem.",
        },
      ],
    },
    why: {
      eyebrow: "Zašto je važno",
      title: "Medicinski AI treba zajedničku infrastrukturu, a ne još promptova.",
      body: "Bez zajedničkog medicinskog MCP sloja svaki AI zdravstveni agent ispočetka izmišlja parsiranje simptoma i bodovanje rizika — što daje nedosljedne izlaze kojima se u produkciji ne može vjerovati. MedMCP je taj nedostajući standard.",
    },
    cta: {
      titleLine1: "Gradi na infrastrukturi,",
      titleLine2: "ne na promptovima.",
      subtitle:
        "Rani pristup API-ju i determinističko medicinsko zaključivanje već danas.",
      emailPlaceholder: "ti@tvrtka.com",
      requestAccess: "Zatraži pristup",
      sending: "Šaljem…",
      readDocs: "Dokumentacija",
      toastSuccessTitle: "Na listi si",
      toastSuccessDescription: "Javit ćemo ti se uskoro.",
      toastErrorTitle: "Nešto je pošlo po krivu",
      toastErrorDescription: "Pokušaj ponovno za trenutak.",
    },
    footer: {
      tagline:
        "Infrastruktura za developere AI medicinskih agenata. MedMCP nije medicinski uređaj, dijagnostički alat ni zamjena za stručnu skrb.",
      docs: "Dokumentacija",
      api: "API",
      contact: "Kontakt",
      usagePolicy: "Usage policy",
      summaryHr: "Sažetak (HR)",
    },
  },
};
