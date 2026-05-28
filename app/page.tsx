type CardItem = {
  title: string;
  description: string;
  href?: string;
  image?: string;
};

type CaseStudy = {
  title: string;
  clientType: string;
  summary: string;
  image: string;
  imageAlt: string;
};

const navItems = [
  { label: "Unternehmen", href: "#vision" },
  { label: "Produkte", href: "#produkte" },
  { label: "Lösungen", href: "#loesungen" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Referenzen", href: "#referenzen" },
  { label: "FAQs", href: "#faqs" },
  { label: "Kontakt", href: "#kontakt" }
];

const productMenu = [
  "Outdoor Power Stations",
  "LED Beleuchtung",
  "Smart Lighting",
  "Solar & Außenbeleuchtung"
];

const footerQuickLinks = [
  { label: "Unternehmen", href: "#vision" },
  { label: "Referenzen", href: "#referenzen" },
  { label: "FAQs", href: "#faqs" },
  { label: "Kontakt", href: "#kontakt" },
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "AGB", href: "/agb" }
];

const footerProductLinks = [
  { label: "Outdoor Power Stations", href: "#produkte" },
  { label: "LED Beleuchtung", href: "#produkte" }
];

const solutionMenu = [
  "LED Umrüstung",
  "Industrie & Lager",
  "Büro & Verwaltung",
  "Einzelhandel & Showrooms",
  "Outdoor & Mobile Energie",
  "Notstrom & Backup"
];

const partnerLogos = [
  { name: "CMCC", src: "/customer-logos/cmcc.png" },
  { name: "Schorch", src: "/customer-logos/Schorch.png" },
  { name: "Printus", src: "/customer-logos/printus.png" },
  { name: "Norma", src: "/customer-logos/Norma.png" },
  { name: "Ansmann", src: "/customer-logos/Ansmann.png" },
  { name: "BST", src: "/customer-logos/BST.png" },
  { name: "UTL", src: "/customer-logos/UTL.png" },
  { name: "ABOK", src: "/customer-logos/ABOK.png" },
  { name: "ergobag", src: "/customer-logos/ergobag.png" },
  { name: "udoq", src: "/customer-logos/udoq.png" },
  { name: "REWE", src: "/customer-logos/REWE.png" },
  { name: "toom", src: "/customer-logos/toom.png" },
  { name: "ALDI", src: "/customer-logos/ALdi.png" },
  { name: "DHL", src: "/customer-logos/DHL.png" },
  { name: "DSV", src: "/customer-logos/DSV.png" }
];

const solutionCards: CardItem[] = [
  {
    title: "Outdoor Power Stations",
    description:
      "Mobile und zuverlässige Energiespeicher für Outdoor, Baustelle, Notstrom, Camping, Events und flexible Stromversorgung.",
    image: "/solution-backgrounds/solution-card-1.jpg"
  },
  {
    title: "LED-Beleuchtung",
    description:
      "Für Einzelhändler und Eigenmarken, direkt von sorgfältig ausgewählten Fabriken in Asien, strenge Qualitätskontrolle.",
    image: "/solution-backgrounds/solution-card-2.jpg"
  },
  {
    title: "Umrüstung & Energieeinsparung",
    description:
      "Modernisierung bestehender Systeme mit Planung, Produktauswahl und koordinierter Umsetzung.",
    image: "/solution-backgrounds/solution-card-3.jpg"
  },
  {
    title: "Industrie & Lager",
    description:
      "Robuste Beleuchtungslösungen für Produktion, Logistik, Werkstätten und Hochregallager.",
    image: "/solution-backgrounds/solution-card-4.jpg"
  },
  {
    title: "Einzelhandel & Showrooms",
    description:
      "Lichtlösungen für Verkaufsflächen, Warenpräsentation, Atmosphäre und Energieeffizienz.",
    image: "/solution-backgrounds/solution-card-5.jpg"
  },
  {
    title: "Büro & Verwaltung",
    description:
      "Blendarmes, effizientes Licht für moderne Arbeitsplätze und bessere Arbeitsbedingungen.",
    image: "/solution-backgrounds/solution-card-6.jpg"
  }
];

const productCategories = [
  {
    title: "Outdoor Power Stations",
    description:
      "Mobile Energiespeicher für Outdoor, Backup, Baustellen und flexible Stromversorgung. Entwickelt für zuverlässige Leistung im Alltag, unterwegs und in Notfallsituationen.",
    points: [
      "LiFePO4-Technologie",
      "Lange Lebensdauer",
      "Mobile und stationäre Anwendung",
      "Für Freizeit, Gewerbe, Backup und Energieunabhängigkeit"
    ],
    image: "/solution-backgrounds/power-stations.jpg",
    imageAlt: "Bildplatzhalter für Outdoor Power Stations und portable Energiespeicher"
  },
  {
    title: "LED Beleuchtung",
    description:
      "Innovative LED-Leuchten für Innen- und Außenbereiche, darunter Deckenleuchten, LED-Strips, Unterbauleuchten, Solarleuchten, dekorative Lichtlösungen und technische Leuchten.",
    points: [
      "Für Handel, DIY, Discount und gewerbliche Projekte",
      "Energieeffizient und langlebig",
      "Moderne Designs und flexible Sortimente",
      "Geeignet für Retail- und Projektgeschäft"
    ],
    image: "/solution-backgrounds/LED light.png",
    imageAlt: "Bildplatzhalter für moderne LED-Leuchten im gewerblichen Sortiment"
  }
];

const benefits = [
  {
    title: "Bis zu 90% Energieeinsparung",
    icon: "/benefit-icons/1.png"
  },
  {
    title: "Weniger Wartung und längere Lebensdauer",
    icon: "/benefit-icons/2.png"
  },
  {
    title: "Mehr Flexibilität durch mobile Energie",
    icon: "/benefit-icons/3.png"
  },
  {
    title: "Nachhaltige Produkte für moderne Unternehmen",
    icon: "/benefit-icons/4.png"
  }
];

const retrofitSteps = [
  "Initiale Analyse der bestehenden Beleuchtung",
  "Lichtberechnung und Planung",
  "Produktsauswahl passend zum Objekt",
  "Kosten-Nutzen-Betrachtung",
  "Lieferung und Installationskoordination",
  "Finanzierung und After-Sales-Service"
];

const caseStudies: CaseStudy[] = [
  {
    title: "Logistics Center Rooftop PV Project",
    clientType: "Logistikzentrum in Nordrhein-Westfalen",
    summary:
      "Für ein neu gebautes Logistikzentrum mit rund 30.000 m² Fläche wurde eine Dach-Photovoltaikanlage im MW-Bereich umgesetzt. Das Projekt verbindet technische Planung, saubere Installation und den Wunsch, moderne Logistik langfristig energieeffizienter und klimafreundlicher zu betreiben.",
    image: "/solution-backgrounds/r1.png",
    imageAlt: "Bildplatzhalter für Photovoltaikanlage auf einem Logistikzentrum"
  },
  {
    title: "LED-Umrüstung Mönchengladbach",
    clientType: "Fabrik- und Bürokomplex",
    summary:
      "In einem 62.000 m² großen Fabrik- und Bürokomplex wurden alte Leuchtstoffröhren, teils in jahrzehntealten Leuchten, pragmatisch durch LED-T8-Röhren ersetzt. Die Lösung spart jährlich etwa 1,5 Millionen kWh Strom und zeigt, dass sinnvolle Modernisierung nicht immer große Umbauten braucht.",
    image: "/solution-backgrounds/r2.png",
    imageAlt: "Bildplatzhalter für LED-Hallenbeleuchtung in einer Fabrik"
  },
  {
    title: "Individuelle LED-Lösung für Schulrucksäcke",
    clientType: "Deutsche Markenentwicklung",
    summary:
      "Für eine bekannte deutsche Schulrucksackmarke entstand eine kompakte LED-Lösung, die Kinder an dunklen Wintertagen sichtbarer macht. Neben Lichtleistung und Laufzeit standen einfache Bedienung, robuste Qualität und ein Produktnutzen im Mittelpunkt, der im Alltag wirklich hilft.",
    image: "/solution-backgrounds/r3.png",
    imageAlt: "Bildplatzhalter für kundenspezifische LED-Produktentwicklung"
  },
  {
    title: "Direktlieferant großer deutscher Handelsgruppen",
    clientType: "B2B-Großhandel",
    summary:
      "Als direkter B2B-Lieferant mehrerer großer deutscher Handelsgruppen kennen wir die Anforderungen des europäischen Handels: verlässliche Qualität, planbare Mengen, klare Kommunikation und dauerhafte Lieferfähigkeit. Diese Erfahrung prägt auch kleinere Projekte und neue Produktentwicklungen.",
    image: "/solution-backgrounds/r4.png",
    imageAlt: "Bildplatzhalter für B2B-Lieferung an Handelsgruppen"
  }
];

const services: CardItem[] = [
  {
    title: "Großhandel",
    description:
      "Zuverlässige Produktversorgung für Handel, Gewerbekunden und langfristige B2B-Partnerschaften.",
    href: "/leistungen/grosshandel"
  },
  {
    title: "Produktdesign",
    description: "Individuelle Produktlösungen von der Idee bis zum Muster.",
    href: "/leistungen/produktdesign"
  },
  {
    title: "Projektmanagement",
    description: "Koordination von Planung, Lieferung, Installation und Abnahme.",
    href: "/leistungen/projektmanagement"
  },
  {
    title: "Installation & Montage",
    description:
      "Umsetzung mit erfahrenen Partnern und möglichst geringer Unterbrechung des Betriebs.",
    href: "/leistungen/installation-montage"
  },
  {
    title: "Finanzierung",
    description:
      "Flexible Finanzierungsmodelle für Investitionen in energieeffiziente Produkte und Projekte.",
    href: "/leistungen/finanzierung"
  },
  {
    title: "After-Sales & Support",
    description: "Technische Unterstützung, Ersatzteile und langfristige Betreuung.",
    href: "/leistungen/after-sales-support"
  }
];

const whyUs = [
  "Umweltfreundliche Qualitätsprodukte",
  "Erfahrung mit Energiespeichern und LED-Beleuchtung",
  "Großhandelsfähigkeit und Projektkompetenz",
  "Alles aus einer Hand: Produkte, Planung, Finanzierung und Umsetzung",
  "Flexible Lösungen für Handel und Gewerbe",
  "Zuverlässige Kommunikation und langfristige Partnerschaft"
];

const testimonials = [
  {
    role: "Einkäufer einer Handelskette",
    quote:
      "Die Kombination aus Sortiment, technischer Beratung und klarer Kommunikation hat unsere Produktauswahl deutlich erleichtert."
  },
  {
    role: "Facility Manager",
    quote:
      "Für unsere LED-Umrüstung war wichtig, dass Planung, Lieferung und Montagekoordination sauber zusammenlaufen. Genau das wurde geliefert."
  },
  {
    role: "Industrie-Projektleiter",
    quote:
      "Die Lösung war technisch nachvollziehbar, wirtschaftlich geplant und im laufenden Betrieb gut umsetzbar."
  }
];

const faqs = [
  {
    question: "Bieten Sie nur Produkte oder auch komplette Projekte an?",
    answer:
      "Wir bieten beides: Energiespeicher- und LED-Produkte im Großhandel sowie komplette Projektlösungen von Planung bis Installation."
  },
  {
    question: "Können Sie LED-Umrüstungen inklusive Installation übernehmen?",
    answer:
      "Ja, wir koordinieren Planung, Produktauswahl, Lieferung und Montage mit erfahrenen Partnern."
  },
  {
    question: "Welche Produkte liefern Sie im Großhandel?",
    answer:
      "Outdoor Power Stations sowie LED-Leuchten, technische Beleuchtung, dekorative Lichtlösungen und Solar- und Außenbeleuchtung."
  },
  {
    question: "Gibt es Finanzierungsmöglichkeiten?",
    answer:
      "Ja, wir können gewerblichen Kunden verschiedene Finanzierungsoptionen für Produkte und Projekte anbieten."
  },
  {
    question: "Arbeiten Sie mit Handelsketten und Projektkunden?",
    answer:
      "Ja, wir beliefern sowohl Handelspartner als auch gewerbliche Projektkunden."
  },
  {
    question: "Können Outdoor Power Stations auch für gewerbliche Anwendungen genutzt werden?",
    answer:
      "Ja, sie eignen sich für mobile Arbeit, Backup, Events, Baustellen und flexible Stromversorgung."
  }
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="section-shell flex h-24 items-center justify-between gap-5">
        <a href="#" className="flex items-center gap-3" aria-label="Startseite">
          <img
            src="/heutec-logo.png"
            alt="HeuTec GmbH Logo"
            className="h-14 w-auto max-w-[150px] object-contain"
          />
          <span>
            <span className="block text-xl font-semibold tracking-tight">HeuTec GmbH</span>
            <span className="block text-xs uppercase tracking-[0.22em] text-slate-500">
              LED · Energy · Projects
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-700 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-signal">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#kontakt"
            className="hidden rounded-full bg-warm px-6 py-3 text-sm font-bold text-ink shadow-sm transition hover:bg-ink hover:text-white sm:inline-flex"
          >
            Projektanfrage stellen
          </a>
          <details className="relative lg:hidden">
            <summary
              className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-slate-300"
              aria-label="Menü öffnen"
            >
              <span className="hamburger-lines" />
            </summary>
            <div className="absolute right-0 mt-3 w-72 rounded-3xl border border-line bg-white p-5 shadow-soft">
              <nav className="grid gap-3 text-sm font-semibold text-slate-700">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="rounded-full px-3 py-2 hover:bg-mist">
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

function PlaceholderImage({ alt, className = "" }: { alt: string; className?: string }) {
  return (
    <div role="img" aria-label={alt} className={`image-placeholder ${className}`}>
      <div className="image-beam image-beam-one" />
      <div className="image-beam image-beam-two" />
      <div className="image-blocks">
        <span />
        <span />
        <span />
      </div>
      <p>{alt}</p>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero-section">
      <img
        src="/hero-main.jpg"
        alt="Outdoor Power Station mit Solarleuchte und Solarpanel in grüner Umgebung"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,16,29,0.72)_0%,rgba(7,16,29,0.46)_46%,rgba(7,16,29,0.12)_100%)]" />
      <div className="section-shell relative z-10 flex min-h-[calc(100vh-96px)] items-center py-20 text-white">
        <div className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-warm">
            Großhandel · Energieeffizienz · Projektmanagement
          </p>
          <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Energiespeicher und LED Beleuchtung
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-200">
            Umweltfreundliche Qualitätsprodukte, energieeffiziente Beleuchtung und flexible
            Stromversorgung für Handel, Industrie und Gewerbe.
          </p>
          <ul className="mt-8 grid gap-3 text-lg font-semibold text-white">
            {[
              "Bis zu 90% weniger Energieverbrauch",
              "Outdoor Power Stations, LED Beleuchtung und Projektlösungen",
              "Full-Service-Projektmanagement von Planung bis Installation",
              "Finanzierungsmöglichkeiten für gewerbliche Projekte"
            ].map((point) => (
              <li key={point} className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-warm" />
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#referenzen" className="rounded-full bg-warm px-8 py-4 text-center font-bold text-ink">
              Referenzen
            </a>
            <a
              href="#produkte"
              className="rounded-full border border-white/60 px-8 py-4 text-center font-bold text-white transition hover:border-warm hover:text-warm"
            >
              Produkte entdecken
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoCarousel() {
  return (
    <section className="border-b border-slate-200 bg-white py-8" aria-labelledby="logo-title">
      <div className="section-shell">
        <h2 id="logo-title" className="text-center text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
          Vertrauen von Handelspartnern und Projektkunden
        </h2>
        <div className="logo-marquee mt-6 overflow-hidden">
          <div className="logo-track">
            {[...partnerLogos, ...partnerLogos].map((logo, index) => (
              <div key={`${logo.name}-${index}`} className="logo-chip">
                <img src={logo.src} alt={`${logo.name} Logo`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text,
  centered = false
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
      {text ? <p className="mt-6 text-lg leading-8 text-slate-600">{text}</p> : null}
    </div>
  );
}

function SolutionCard({ item }: { item: CardItem }) {
  return (
    <article className="solution-card" style={{ backgroundImage: item.image ? `url(${item.image})` : undefined }}>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </article>
  );
}

function ProductCategoryCard({ product }: { product: (typeof productCategories)[number] }) {
  return (
    <article className="product-card">
      {"image" in product && product.image ? (
        <img
          src={product.image}
          alt={product.imageAlt}
          className="h-[360px] w-full rounded-[2rem] object-cover object-center"
        />
      ) : (
        <PlaceholderImage alt={product.imageAlt} className="min-h-[320px]" />
      )}
      <div className="p-7 sm:p-8">
        <h3 className="text-3xl font-semibold">{product.title}</h3>
        <p className="mt-5 leading-8 text-slate-600">{product.description}</p>
        <ul className="mt-6 grid gap-3">
          {product.points.map((point) => (
            <li key={point} className="flex gap-3 leading-7 text-slate-700">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-warm" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function BenefitCard({ title, icon }: { title: string; icon: string }) {
  return (
    <article className="rounded-[2rem] bg-white p-7 shadow-soft">
      <img src={icon} alt="" aria-hidden="true" className="mb-7 h-16 w-16 rounded-2xl object-cover" />
      <h3 className="text-2xl font-semibold">{title}</h3>
    </article>
  );
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="case-card">
      <div className="h-[230px] overflow-hidden">
        <img
          src={study.image}
          alt={study.imageAlt}
          className="h-full w-full scale-[1.08] object-cover object-center"
        />
      </div>
      <div className="p-7">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-signal">{study.clientType}</p>
        <h3 className="mt-3 text-2xl font-semibold">{study.title}</h3>
        <p className="mt-6 text-sm leading-7 text-slate-600">{study.summary}</p>
      </div>
    </article>
  );
}

function ServiceCard({ item }: { item: CardItem }) {
  return (
    <article className="service-card">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      {item.href ? (
        <a href={item.href} className="mt-auto inline-flex pt-6 font-bold text-signal hover:text-warm">
          Mehr erfahren
        </a>
      ) : null}
    </article>
  );
}

function FAQAccordion() {
  return (
    <div className="divide-y divide-line">
      {faqs.map((faq) => (
        <details key={faq.question} className="group py-7">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-semibold">
            {faq.question}
            <span className="text-3xl text-signal transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-5 leading-8 text-slate-600">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

function CTASection() {
  return (
    <section className="bg-warm py-16">
      <div className="section-shell flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
        <div>
          <h2 className="text-4xl font-semibold tracking-tight">Planen Sie ein Energie- oder LED-Projekt?</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-ink/75">
            Sprechen Sie mit uns über Produkte, Projektlösungen oder Finanzierungsmöglichkeiten.
            Wir beraten Sie gern.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="#kontakt" className="rounded-full border border-ink px-8 py-4 font-bold text-ink">
            Kontakt aufnehmen
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const footerServiceLinks = services.map((service) => ({
    label: service.title,
    href: service.href ?? "#leistungen"
  }));

  return (
    <footer className="bg-[#07101d] py-14 text-slate-300">
      <div className="section-shell grid gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <img
              src="/heutec-logo.png"
              alt="HeuTec GmbH Logo"
              className="h-16 w-auto max-w-[170px] rounded-sm bg-white/95 p-2"
            />
            <h2 className="text-2xl font-semibold text-white">HeuTec GmbH</h2>
          </div>
          <p className="mt-5 max-w-md leading-7">
            Anbieter für Outdoor Energy Storage, LED-Beleuchtung, Großhandel und
            Full-Service-Projektlösungen.
          </p>
          <div className="mt-6 space-y-2 text-sm leading-6">
            <p>
              Ludwig-Erhard-Straße 4
              <br />
              41564 Kaarst, Deutschland
            </p>
            <p>Kontakt: info@heutec-gmbh.de · +49 2131 7529006</p>
            <p>Mo.-Fr., 9 - 17 Uhr</p>
            <p>Registergericht: Amtsgericht Neuss</p>
            <p>Registernummer: HRB18805</p>
            <p>UST-ID: DE308432444</p>
            <p>EORI: DE515488647738399</p>
          </div>
        </div>
        <FooterColumn title="Quick Links" items={footerQuickLinks} />
        <FooterColumn title="Produkte" items={footerProductLinks} />
        <FooterColumn title="Leistungen" items={footerServiceLinks} />
      </div>
      <div className="section-shell mt-10 border-t border-white/10 pt-6 text-sm">
        © 2026 HeuTec GmbH. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items
}: {
  title: string;
  items: Array<string | { label: string; href: string }>;
}) {
  return (
    <div>
      <h3 className="font-semibold text-white">{title}</h3>
      <div className="mt-4 grid gap-3 text-sm">
        {items.map((item) => {
          const label = typeof item === "string" ? item : item.label;
          const href = typeof item === "string" ? "#" : item.href;

          return (
            <a key={label} href={href} className="hover:text-warm">
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-ink">
      <Header />
      <Hero />
      <LogoCarousel />

      <section id="loesungen" className="section-shell py-20 lg:py-28">
        <SectionHeader
          eyebrow="Full-Service-Projektmanagement"
          title="Unsere Lösungen für Handel, Gewerbe und Industrie"
          text="Wir verbinden Großhandelsprodukte mit technischer Beratung, Projektplanung, Lieferung, Installationskoordination und passenden Finanzierungsoptionen."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutionCards.map((item) => (
            <SolutionCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section id="produkte" className="bg-mist py-20 lg:py-28">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Produkte"
            title="Outdoor Energy Storage und LED Beleuchtung im Großhandel"
            text="Wir liefern portable Energiespeicher und hochwertige LED-Leuchten für den gewerblichen Handel. Unser Sortiment verbindet zuverlässige Qualität, modernes Design und nachhaltige Anwendungsmöglichkeiten."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {productCategories.map((product) => (
              <ProductCategoryCard key={product.title} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader title="Warum moderne Energiespeicher- und LED-Lösungen?" />
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Outdoor Power Stations schaffen Unabhängigkeit und Backup-Sicherheit,
              LED reduziert Betriebskosten. Kombinierte Lösungen helfen Unternehmen, Effizienz,
              Nachhaltigkeit und Attraktivität im Retail- und Projektgeschäft zu verbessern.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <BenefitCard key={benefit.title} title={benefit.title} icon={benefit.icon} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-14 lg:py-16">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeader
              eyebrow="Energieeffiziente Umrüstung"
              title="Von der Analyse bis zur Installation"
              text="Wir bieten komplette LED-Retrofit- und Energiesparprojekte für gewerbliche Gebäude, Lager, Industrieflächen und Verkaufsräume."
            />
            <ul className="mt-8 grid gap-3">
              {retrofitSteps.map((step) => (
                <li key={step} className="flex gap-3 text-lg font-semibold text-slate-800">
                  <span className="mt-2 h-3 w-3 shrink-0 rounded-full bg-warm" />
                  {step}
                </li>
              ))}
            </ul>
            <a href="#kontakt" className="mt-10 inline-flex rounded-full bg-signal px-8 py-4 font-bold text-white">
              Kostenfreie Erstberatung anfragen
            </a>
          </div>
          <img
            src="/solution-backgrounds/energy-retrofit.jpg"
            alt="Gewerbliche LED-Umrüstung in einer modernen Lager- und Gewerbefläche"
            className="h-[clamp(360px,58vh,500px)] w-full rounded-[2rem] object-cover shadow-soft"
          />
        </div>
      </section>

      <section id="referenzen" className="section-shell py-20 lg:py-28">
        <SectionHeader title="Praxisbeispiele für effiziente Lösungen" centered />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.title} study={study} />
          ))}
        </div>
      </section>

      <section id="leistungen" className="bg-mist py-20 lg:py-28">
        <div className="section-shell">
          <SectionHeader title="Unsere Leistungen" text="Ein modularer Serviceansatz für Handel, Gewerbe, Industrie und langfristige Projektpartner." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} item={service} />
            ))}
          </div>
        </div>
      </section>

      <section id="unternehmen" className="section-shell py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <img
            src="/solution-backgrounds/hand.png"
            alt="Professionelle B2B-Partnerschaft und Projektbesprechung"
            className="h-[clamp(360px,58vh,520px)] w-full rounded-[2rem] object-cover shadow-soft"
          />
          <div>
            <SectionHeader title="Warum mit uns?" />
            <ul className="mt-8 grid gap-4">
              {whyUs.map((item) => (
                <li key={item} className="flex gap-4 rounded-full bg-mist px-5 py-4 font-semibold">
                  <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-warm" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        id="vision"
        className="relative flex min-h-[360px] items-center overflow-hidden bg-ink bg-cover bg-center py-20 text-white lg:aspect-[1721/914] lg:min-h-0 lg:py-0"
        style={{ backgroundImage: "url('/solution-backgrounds/vision.png')" }}
      >
        <div className="absolute inset-0 bg-ink/55" aria-hidden="true" />
        <div className="section-shell relative z-10 [&_p]:text-slate-100">
          <SectionHeader
            title="Wo Licht ist, entstehen Wärme, Hoffnung und Zukunft."
            text="Unsere Vision ist es, hochwertige und umweltfreundliche Produkte bereitzustellen, die Unternehmen helfen, Energie effizienter zu nutzen, Betriebskosten zu senken und nachhaltiger zu arbeiten."
            centered
          />
        </div>
      </section>

      <section className="section-shell py-20 lg:py-28">
        <SectionHeader title="Was Kunden an unserer Zusammenarbeit schätzen" centered />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article key={testimonial.role} className="rounded-[2rem] border border-line bg-white p-8 shadow-soft">
              <div className="mb-6 h-16 w-16 overflow-hidden rounded-full border border-line bg-mist shadow-sm">
                <img
                  src={`/solution-backgrounds/p${index + 1}.png`}
                  alt={`${testimonial.role} Profilbild`}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="leading-8 text-slate-600">{testimonial.quote}</p>
              <p className="mt-6 font-bold text-ink">{testimonial.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="faqs" className="bg-mist py-20 lg:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeader title="Häufige Fragen" />
          </div>
          <FAQAccordion />
        </div>
      </section>

      <section id="kontakt">
        <CTASection />
        <div className="section-shell py-20 lg:py-28">
          <div className="grid gap-12 rounded-[2.5rem] bg-ink p-6 text-white sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow text-warm">Kontakt</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Wie können wir helfen?
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Beschreiben Sie Ihr Vorhaben, Ihr Produktsortiment oder Ihr
                Modernisierungsprojekt. Wir melden uns mit einer ersten Einschätzung.
              </p>
              <p className="mt-8 text-slate-300">E-Mail: info@heutec-gmbh.de</p>
            </div>
            <form className="grid gap-4 rounded-[2rem] bg-white p-6 text-ink sm:p-8">
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input id="name" className="rounded-full border border-line px-5 py-4 outline-none focus:border-signal" placeholder="Name" />
              <label className="sr-only" htmlFor="company">
                Unternehmen
              </label>
              <input id="company" className="rounded-full border border-line px-5 py-4 outline-none focus:border-signal" placeholder="Unternehmen" />
              <label className="sr-only" htmlFor="email">
                E-Mail
              </label>
              <input
                id="email"
                type="email"
                className="rounded-full border border-line px-5 py-4 outline-none focus:border-signal"
                placeholder="E-Mail"
              />
              <label className="sr-only" htmlFor="message">
                Nachricht
              </label>
              <textarea
                id="message"
                rows={5}
                className="resize-none rounded-3xl border border-line px-5 py-4 outline-none focus:border-signal"
                placeholder="Nachricht"
              />
              <button type="submit" className="rounded-full bg-warm px-8 py-4 font-bold text-ink">
                Anfrage senden
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
      <a
        href="#kontakt"
        className="fixed bottom-5 right-5 z-50 hidden rounded-full bg-warm px-5 py-3 text-sm font-bold text-ink shadow-soft md:inline-flex"
      >
        Projektanfrage stellen
      </a>
    </main>
  );
}
