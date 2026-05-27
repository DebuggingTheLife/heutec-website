type CardItem = {
  title: string;
  description: string;
};

type CaseStudy = {
  title: string;
  clientType: string;
  challenge: string;
  solution: string;
  result: string;
  imageAlt: string;
};

const navItems = [
  { label: "Unternehmen", href: "#unternehmen" },
  { label: "Produkte", href: "#produkte" },
  { label: "Lösungen", href: "#loesungen" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Referenzen", href: "#referenzen" },
  { label: "Blog", href: "#blog" },
  { label: "Kontakt", href: "#kontakt" }
];

const productMenu = ["Outdoor Power Stations", "LED Beleuchtung", "Smart Lighting", "Solar & Außenbeleuchtung"];
const serviceMenu = ["Lichtplanung", "Projektmanagement", "Installation & Montage", "Finanzierung", "Technische Beratung"];
const partnerLogos = ["Retail Chain", "DIY Market", "Discount Retail", "Industrial Client", "Facility Management", "Energy Partner", "Logistics Partner"];

const solutionCards: CardItem[] = [
  { title: "LED-Beleuchtung im Großhandel", description: "Für Einzelhändler und Eigenmarken, direkt von sorgfältig ausgewählten Fabriken in Asien, strenge Qualitätskontrolle." },
  { title: "Outdoor Power Stations", description: "Mobile und zuverlässige Energiespeicher für Outdoor, Baustelle, Notstrom, Camping, Events und flexible Stromversorgung." },
  { title: "LED Umrüstung & Energieeinsparung", description: "Komplette Modernisierung bestehender Beleuchtungssysteme mit Planung, Produktauswahl und Installationskoordination." },
  { title: "Industrie & Lager", description: "Robuste Beleuchtungslösungen für Produktion, Logistik, Werkstätten und Hochregallager." },
  { title: "Einzelhandel & Showrooms", description: "Lichtlösungen für Verkaufsflächen, Warenpräsentation, Atmosphäre und Energieeffizienz." },
  { title: "Büro & Verwaltung", description: "Blendarmes, effizientes Licht für moderne Arbeitsplätze und bessere Arbeitsbedingungen." }
];

const productCategories = [
  {
    title: "LED Beleuchtung",
    description: "Innovative LED-Leuchten für Innen- und Außenbereiche, darunter Deckenleuchten, LED-Strips, Unterbauleuchten, Solarleuchten, dekorative Lichtlösungen und technische Leuchten.",
    points: ["Für Handel, DIY, Discount und gewerbliche Projekte", "Energieeffizient und langlebig", "Moderne Designs und flexible Sortimente", "Geeignet für Retail- und Projektgeschäft"],
    imageAlt: "Bildplatzhalter für moderne LED-Leuchten im gewerblichen Sortiment"
  },
  {
    title: "Outdoor Power Stations",
    description: "Mobile Energiespeicher für Outdoor, Backup, Baustellen und flexible Stromversorgung. Entwickelt für zuverlässige Leistung im Alltag, unterwegs und in Notfallsituationen.",
    points: ["LiFePO4-Technologie", "Lange Lebensdauer", "Mobile und stationäre Anwendung", "Für Freizeit, Gewerbe, Backup und Energieunabhängigkeit"],
    imageAlt: "Bildplatzhalter für Outdoor Power Stations und portable Energiespeicher"
  }
];

const benefits = ["Bis zu 90% Energieeinsparung", "Weniger Wartung und längere Lebensdauer", "Mehr Flexibilität durch mobile Energie", "Nachhaltige Produkte für moderne Unternehmen"];
const retrofitSteps = ["Initiale Analyse der bestehenden Beleuchtung", "Lichtberechnung und Planung", "Produktsauswahl passend zum Objekt", "Kosten-Nutzen-Betrachtung", "Lieferung und Installationskoordination", "Finanzierung und After-Sales-Service"];

const caseStudies: CaseStudy[] = [
  { title: "Retail Store LED Upgrade", clientType: "Einzelhandel", challenge: "Hohe Stromkosten und uneinheitliche Warenpräsentation.", solution: "120 LED-Panels installiert und Beleuchtung auf Verkaufszonen abgestimmt.", result: "65% weniger Energieverbrauch und sichtbar bessere Produktpräsentation.", imageAlt: "Bildplatzhalter für LED-Modernisierung in einem Retail Store" },
  { title: "Warehouse Lighting Project", clientType: "Lager & Logistik", challenge: "Unzureichende Ausleuchtung in Arbeits- und Kommissionierbereichen.", solution: "80 High-Bay-Leuchten ersetzt und Montageablauf koordiniert.", result: "Mehr Sicherheit, bessere Sicht und geringere Wartungskosten.", imageAlt: "Bildplatzhalter für LED-Hallenbeleuchtung in einem Lager" },
  { title: "Outdoor Energy Backup", clientType: "Mobile Arbeit", challenge: "Flexible Stromversorgung für wechselnde Einsatzorte erforderlich.", solution: "Portable Power Station Lösung für mobile Arbeit und Backup bereitgestellt.", result: "Zuverlässige Notstromreserve und flexible Energieversorgung vor Ort.", imageAlt: "Bildplatzhalter für portable Energiespeicher im Außeneinsatz" },
  { title: "Office Lighting Modernization", clientType: "Bürogebäude", challenge: "Blendung, veraltete Leuchten und steigende Betriebskosten.", solution: "Blendarmes Arbeitsplatzlicht geplant und bestehende Leuchten modernisiert.", result: "Mehr Arbeitskomfort und niedrigere laufende Kosten.", imageAlt: "Bildplatzhalter für moderne LED-Bürobeleuchtung" }
];

const services: CardItem[] = [
  { title: "Lichtplanung", description: "Professionelle Planung für effiziente und normgerechte Beleuchtung." },
  { title: "Outdoor Energy Storage", description: "Mobile Stromversorgung und Energiespeicherlösungen für Handel und Gewerbe." },
  { title: "Technische LED-Leuchten", description: "Hochwertige LED-Produkte für gewerbliche Anwendungen." },
  { title: "Projektmanagement", description: "Koordination von Planung, Lieferung, Installation und Abnahme." },
  { title: "Installation & Montage", description: "Umsetzung mit erfahrenen Partnern und möglichst geringer Unterbrechung des Betriebs." },
  { title: "Finanzierung", description: "Flexible Finanzierungsmodelle für Investitionen in energieeffiziente Produkte und Projekte." },
  { title: "Fördermittelberatung", description: "Unterstützung bei der Prüfung möglicher Förderprogramme für Energieeffizienz." },
  { title: "After-Sales & Support", description: "Technische Unterstützung, Ersatzteile und langfristige Betreuung." }
];

const whyUs = ["Umweltfreundliche Qualitätsprodukte", "Erfahrung mit Energiespeichern und LED-Beleuchtung", "Großhandelsfähigkeit und Projektkompetenz", "Alles aus einer Hand: Produkte, Planung, Finanzierung und Umsetzung", "Flexible Lösungen für Handel und Gewerbe", "Zuverlässige Kommunikation und langfristige Partnerschaft"];

const processSteps = [
  { title: "Erstgespräch", text: "Wir klären Ziele, Objekt, Sortiment oder Projektumfang." },
  { title: "Bedarfsanalyse", text: "Bestehende Situation, technische Anforderungen und Einsparpotenziale werden bewertet." },
  { title: "Produkt- und Projektkonzept", text: "Wir entwickeln eine passende Lösung aus Produkten, Planung und Umsetzung." },
  { title: "Angebot und Finanzierung", text: "Sie erhalten ein klares Angebot mit möglichen Finanzierungsoptionen." },
  { title: "Lieferung und Installation", text: "Produkte, Logistik und Montagepartner werden koordiniert." },
  { title: "Abnahme und Betreuung", text: "Nach der Umsetzung begleiten wir Support, Ersatzteile und nächste Schritte." }
];

const financingCards = ["Projektfinanzierung", "Leasingmodelle", "Investitionsplanung", "Förderprogramme prüfen"];
const sustainabilityPillars = ["Energieeffizienz", "Langlebige Produkte", "Verantwortungsvolle Lösungen"];
const testimonials = [
  { role: "Einkäufer einer Handelskette", quote: "Die Kombination aus Sortiment, technischer Beratung und klarer Kommunikation hat unsere Produktauswahl deutlich erleichtert." },
  { role: "Facility Manager", quote: "Für unsere LED-Umrüstung war wichtig, dass Planung, Lieferung und Montagekoordination sauber zusammenlaufen. Genau das wurde geliefert." },
  { role: "Industrie-Projektleiter", quote: "Die Lösung war technisch nachvollziehbar, wirtschaftlich geplant und im laufenden Betrieb gut umsetzbar." }
];

const faqs = [
  { question: "Bieten Sie nur Produkte oder auch komplette Projekte an?", answer: "Wir bieten beides: Energiespeicher- und LED-Produkte im Großhandel sowie komplette Projektlösungen von Planung bis Installation." },
  { question: "Können Sie LED-Umrüstungen inklusive Installation übernehmen?", answer: "Ja, wir koordinieren Planung, Produktauswahl, Lieferung und Montage mit erfahrenen Partnern." },
  { question: "Welche Produkte liefern Sie im Großhandel?", answer: "Outdoor Power Stations sowie LED-Leuchten, technische Beleuchtung, dekorative Lichtlösungen und Solar- und Außenbeleuchtung." },
  { question: "Gibt es Finanzierungsmöglichkeiten?", answer: "Ja, wir können gewerblichen Kunden verschiedene Finanzierungsoptionen für Produkte und Projekte anbieten." },
  { question: "Arbeiten Sie mit Handelsketten und Projektkunden?", answer: "Ja, wir beliefern sowohl Handelspartner als auch gewerbliche Projektkunden." },
  { question: "Können Outdoor Power Stations auch für gewerbliche Anwendungen genutzt werden?", answer: "Ja, sie eignen sich für mobile Arbeit, Backup, Events, Baustellen und flexible Stromversorgung." }
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="section-shell flex h-24 items-center justify-between gap-5">
        <a href="#" className="flex items-center gap-3" aria-label="Startseite">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-warm text-sm font-black text-ink">LOGO</span>
          <span><span className="block text-xl font-semibold tracking-tight">HeuTec GmbH</span><span className="block text-xs uppercase tracking-[0.22em] text-slate-500">Energy · LED · Projects</span></span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-700 lg:flex">
          {navItems.map((item) => <a key={item.href} href={item.href} className="transition hover:text-signal">{item.label}</a>)}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#kontakt" className="hidden rounded-full bg-warm px-6 py-3 text-sm font-bold text-ink shadow-sm transition hover:bg-ink hover:text-white sm:inline-flex">Projektanfrage stellen</a>
          <details className="relative lg:hidden">
            <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-slate-300" aria-label="Menü öffnen"><span className="hamburger-lines" /></summary>
            <div className="absolute right-0 mt-3 w-72 rounded-3xl border border-line bg-white p-5 shadow-soft"><nav className="grid gap-3 text-sm font-semibold text-slate-700">{navItems.map((item) => <a key={item.href} href={item.href} className="rounded-full px-3 py-2 hover:bg-mist">{item.label}</a>)}</nav></div>
          </details>
        </div>
      </div>
    </header>
  );
}

function PlaceholderImage({ alt, className = "" }: { alt: string; className?: string }) {
  return <div role="img" aria-label={alt} className={`image-placeholder ${className}`}><div className="image-beam image-beam-one" /><div className="image-beam image-beam-two" /><div className="image-blocks"><span /><span /><span /></div><p>{alt}</p></div>;
}

function SectionHeader({ eyebrow, title, text, centered = false }: { eyebrow?: string; title: string; text?: string; centered?: boolean }) {
  return <div className={centered ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>{eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}<h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h2>{text ? <p className="mt-6 text-lg leading-8 text-slate-600">{text}</p> : null}</div>;
}

function Hero() {
  return (
    <section className="hero-section">
      <PlaceholderImage alt="Bildplatzhalter: moderne LED-Beleuchtung in einer Gewerbe- oder Industriehalle" className="absolute inset-0 min-h-full rounded-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/82 to-ink/30" />
      <div className="section-shell relative z-10 flex min-h-[calc(100vh-96px)] items-center py-20 text-white"><div className="max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-warm">Großhandel · Energieeffizienz · Projektmanagement</p>
        <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">Energiespeicher und LED Beleuchtung</h1>
        <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-200">Umweltfreundliche Qualitätsprodukte, energieeffiziente Beleuchtung und flexible Stromversorgung für Handel, Industrie und Gewerbe.</p>
        <ul className="mt-8 grid gap-3 text-lg font-semibold text-white">{["Bis zu 90% weniger Energieverbrauch", "Outdoor Power Stations, LED Beleuchtung und Projektlösungen", "Full-Service-Projektmanagement von Planung bis Installation", "Finanzierungsmöglichkeiten für gewerbliche Projekte"].map((point) => <li key={point} className="flex items-center gap-3"><span className="h-3 w-3 rounded-full bg-warm" />{point}</li>)}</ul>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row"><a href="#kontakt" className="rounded-full bg-warm px-8 py-4 text-center font-bold text-ink">Projektanfrage stellen</a><a href="#produkte" className="rounded-full border border-white/60 px-8 py-4 text-center font-bold text-white transition hover:border-warm hover:text-warm">Produkte entdecken</a></div>
      </div></div>
    </section>
  );
}

function LogoCarousel() {
  return <section className="border-b border-slate-200 bg-white py-8" aria-labelledby="logo-title"><div className="section-shell"><h2 id="logo-title" className="text-center text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Vertrauen von Handelspartnern und Projektkunden</h2><div className="logo-marquee mt-6 overflow-hidden"><div className="logo-track">{[...partnerLogos, ...partnerLogos].map((logo, index) => <div key={`${logo}-${index}`} className="logo-chip">{logo}</div>)}</div></div></div></section>;
}

function SolutionCard({ item, index }: { item: CardItem; index: number }) {
  return <article className="solution-card"><span className="icon-badge" aria-hidden="true">{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p><a href="#kontakt">Mehr erfahren</a></article>;
}

function ProductCategoryCard({ product }: { product: (typeof productCategories)[number] }) {
  return <article className="product-card"><PlaceholderImage alt={product.imageAlt} className="min-h-[320px]" /><div className="p-7 sm:p-8"><h3 className="text-3xl font-semibold">{product.title}</h3><p className="mt-5 leading-8 text-slate-600">{product.description}</p><ul className="mt-6 grid gap-3">{product.points.map((point) => <li key={point} className="flex gap-3 leading-7 text-slate-700"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-warm" />{point}</li>)}</ul></div></article>;
}

function BenefitCard({ title }: { title: string }) {
  return <article className="rounded-[2rem] bg-white p-7 shadow-soft"><div className="mb-7 h-14 w-14 rounded-2xl bg-warm/80" /><h3 className="text-2xl font-semibold">{title}</h3></article>;
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return <article className="case-card"><PlaceholderImage alt={study.imageAlt} className="min-h-[230px] rounded-b-none" /><div className="p-7"><p className="text-sm font-bold uppercase tracking-[0.18em] text-signal">{study.clientType}</p><h3 className="mt-3 text-2xl font-semibold">{study.title}</h3><dl className="mt-6 grid gap-4 text-sm leading-7"><div><dt className="font-bold text-ink">Challenge</dt><dd className="text-slate-600">{study.challenge}</dd></div><div><dt className="font-bold text-ink">Solution</dt><dd className="text-slate-600">{study.solution}</dd></div><div><dt className="font-bold text-ink">Result</dt><dd className="text-slate-600">{study.result}</dd></div></dl></div></article>;
}

function ServiceCard({ item, index }: { item: CardItem; index: number }) {
  return <article className="service-card"><span className="icon-badge" aria-hidden="true">{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>;
}

function ProcessTimeline() {
  return <div className="mt-14 grid gap-4 md:grid-cols-3 lg:grid-cols-6">{processSteps.map((step, index) => <article key={step.title} className="process-step"><span>{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>;
}

function FAQAccordion() {
  return <div className="divide-y divide-line">{faqs.map((faq) => <details key={faq.question} className="group py-7"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-semibold">{faq.question}<span className="text-3xl text-signal transition group-open:rotate-45">+</span></summary><p className="mt-5 leading-8 text-slate-600">{faq.answer}</p></details>)}</div>;
}

function CTASection() {
  return <section className="bg-warm py-16"><div className="section-shell flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center"><div><h2 className="text-4xl font-semibold tracking-tight">Planen Sie ein Energie- oder LED-Projekt?</h2><p className="mt-4 max-w-3xl text-lg leading-8 text-ink/75">Sprechen Sie mit uns über Produkte, Projektlösungen oder Finanzierungsmöglichkeiten. Wir beraten Sie gern.</p></div><div className="flex flex-col gap-3 sm:flex-row"><a href="#kontakt" className="rounded-full bg-ink px-8 py-4 font-bold text-white">Projektanfrage stellen</a><a href="#kontakt" className="rounded-full border border-ink px-8 py-4 font-bold text-ink">Kontakt aufnehmen</a></div></div></section>;
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return <div><h3 className="font-semibold text-white">{title}</h3><div className="mt-4 grid gap-3 text-sm">{items.map((item) => <a key={item} href="#" className="hover:text-warm">{item}</a>)}</div></div>;
}

function Footer() {
  return <footer className="bg-[#07101d] py-14 text-slate-300"><div className="section-shell grid gap-10 md:grid-cols-2 lg:grid-cols-5"><div className="lg:col-span-2"><div className="flex items-center gap-3"><span className="flex h-12 w-12 items-center justify-center rounded-full bg-warm text-xs font-black text-ink">LOGO</span><h2 className="text-2xl font-semibold text-white">HeuTec GmbH</h2></div><p className="mt-5 max-w-md leading-7">Anbieter für Outdoor Energy Storage, LED-Beleuchtung, Großhandel und Full-Service-Projektlösungen.</p><p className="mt-6 text-sm">Kontakt: info@heutec-gmbh.de · Deutschland</p></div><FooterColumn title="Quick Links" items={["Unternehmen", "Referenzen", "Blog", "Kontakt"]} /><FooterColumn title="Produkte" items={productMenu} /><FooterColumn title="Leistungen" items={[...serviceMenu, "Impressum", "Datenschutz", "AGB"]} /></div><div className="section-shell mt-10 border-t border-white/10 pt-6 text-sm">© 2026 HeuTec GmbH. Alle Rechte vorbehalten.</div></footer>;
}

export default function Home() {
  return <main className="min-h-screen bg-white text-ink"><Header /><Hero /><LogoCarousel />
    <section id="loesungen" className="section-shell py-20 lg:py-28"><SectionHeader eyebrow="Full-Service-Projektmanagement" title="Unsere Lösungen für Handel, Gewerbe und Industrie" text="Wir verbinden Großhandelsprodukte mit technischer Beratung, Projektplanung, Lieferung, Installationskoordination und passenden Finanzierungsoptionen." /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{solutionCards.map((item, index) => <SolutionCard key={item.title} item={item} index={index} />)}</div></section>
    <section id="produkte" className="bg-mist py-20 lg:py-28"><div className="section-shell"><SectionHeader eyebrow="Produkte" title="Outdoor Energy Storage und LED Beleuchtung im Großhandel" text="Wir liefern portable Energiespeicher und hochwertige LED-Leuchten für den gewerblichen Handel. Unser Sortiment verbindet zuverlässige Qualität, modernes Design und nachhaltige Anwendungsmöglichkeiten." /><div className="mt-12 grid gap-8 lg:grid-cols-2">{productCategories.map((product) => <ProductCategoryCard key={product.title} product={product} />)}</div></div></section>
    <section className="section-shell py-20 lg:py-28"><div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]"><div><SectionHeader title="Warum moderne Energiespeicher- und LED-Lösungen?" /><p className="mt-6 text-lg leading-8 text-slate-600">Outdoor Power Stations schaffen Unabhängigkeit und Backup-Sicherheit, LED reduziert Betriebskosten. Kombinierte Lösungen helfen Unternehmen, Effizienz, Nachhaltigkeit und Attraktivität im Retail- und Projektgeschäft zu verbessern.</p></div><div className="grid gap-5 sm:grid-cols-2">{benefits.map((benefit) => <BenefitCard key={benefit} title={benefit} />)}</div></div></section>
    <section className="bg-mist py-20 lg:py-28"><div className="section-shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]"><div><SectionHeader eyebrow="Energieeffiziente Umrüstung" title="Von der Analyse bis zur Installation" text="Wir bieten komplette LED-Retrofit- und Energiesparprojekte für gewerbliche Gebäude, Lager, Industrieflächen und Verkaufsräume." /><ul className="mt-8 grid gap-3">{retrofitSteps.map((step) => <li key={step} className="flex gap-3 text-lg font-semibold text-slate-800"><span className="mt-2 h-3 w-3 shrink-0 rounded-full bg-warm" />{step}</li>)}</ul><a href="#kontakt" className="mt-10 inline-flex rounded-full bg-signal px-8 py-4 font-bold text-white">Kostenfreie Erstberatung anfragen</a></div><PlaceholderImage alt="Bildplatzhalter für gewerbliche LED-Umrüstung in Lager, Büro oder Verkaufsfläche" className="min-h-[520px]" /></div></section>
    <section id="referenzen" className="section-shell py-20 lg:py-28"><SectionHeader title="Praxisbeispiele für effiziente Lösungen" centered /><div className="mt-12 grid gap-6 md:grid-cols-2">{caseStudies.map((study) => <CaseStudyCard key={study.title} study={study} />)}</div></section>
    <section id="leistungen" className="bg-mist py-20 lg:py-28"><div className="section-shell"><SectionHeader title="Unsere Leistungen" text="Ein modularer Serviceansatz für Handel, Gewerbe, Industrie und langfristige Projektpartner." /><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{services.map((service, index) => <ServiceCard key={service.title} item={service} index={index} />)}</div></div></section>
    <section id="unternehmen" className="section-shell py-20 lg:py-28"><div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]"><PlaceholderImage alt="Bildplatzhalter für professionelles Team bei Lichtplanung und Projektbesprechung" className="min-h-[520px]" /><div><SectionHeader title="Warum mit uns?" /><ul className="mt-8 grid gap-4">{whyUs.map((item) => <li key={item} className="flex gap-4 rounded-full bg-mist px-5 py-4 font-semibold"><span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-warm" />{item}</li>)}</ul></div></div></section>
    <section className="bg-ink py-20 text-white lg:py-28"><div className="section-shell"><SectionHeader title="In 6 Schritten zur passenden Lösung" centered /><ProcessTimeline /></div></section>
    <section className="section-shell py-20 lg:py-28"><div className="rounded-[2.5rem] bg-mist p-6 sm:p-10"><div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]"><div><SectionHeader title="Finanzierung für gewerbliche Projekte" /><p className="mt-6 text-lg leading-8 text-slate-600">Energieeffiziente Produkte und Modernisierungsprojekte müssen nicht immer sofort vollständig aus Eigenmitteln finanziert werden. Wir unterstützen gewerbliche Kunden bei passenden Finanzierungsmodellen, damit Investitionen in Energiespeicher und LED-Beleuchtung planbar und wirtschaftlich bleiben.</p><a href="#kontakt" className="mt-8 inline-flex rounded-full bg-ink px-8 py-4 font-bold text-white">Finanzierungsmöglichkeiten besprechen</a></div><div className="grid gap-5 sm:grid-cols-2">{financingCards.map((card) => <article key={card} className="rounded-[2rem] bg-white p-7 shadow-soft"><div className="mb-8 h-12 w-12 rounded-2xl bg-warm" /><h3 className="text-2xl font-semibold">{card}</h3></article>)}</div></div></div></section>
    <section className="bg-mist py-20 lg:py-28"><div className="section-shell"><SectionHeader title="Unsere Vision: Umweltfreundliche Qualität" text="Unsere Vision ist es, hochwertige und umweltfreundliche Produkte bereitzustellen, die Unternehmen helfen, Energie effizienter zu nutzen, Betriebskosten zu senken und nachhaltiger zu arbeiten." centered /><div className="mt-12 grid gap-6 md:grid-cols-3">{sustainabilityPillars.map((pillar) => <article key={pillar} className="rounded-[2rem] bg-white p-8 text-center shadow-soft"><div className="mx-auto mb-7 h-16 w-16 rounded-full bg-signal/10" /><h3 className="text-2xl font-semibold">{pillar}</h3></article>)}</div></div></section>
    <section className="section-shell py-20 lg:py-28"><SectionHeader title="Was Kunden an unserer Zusammenarbeit schätzen" centered /><div className="mt-12 grid gap-6 lg:grid-cols-3">{testimonials.map((testimonial) => <article key={testimonial.role} className="rounded-[2rem] border border-line bg-white p-8 shadow-soft"><div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-warm font-black text-ink">“</div><p className="leading-8 text-slate-600">{testimonial.quote}</p><p className="mt-6 font-bold text-ink">{testimonial.role}</p></article>)}</div></section>
    <section id="blog" className="bg-mist py-20 lg:py-28"><div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div><SectionHeader title="Häufige Fragen" /></div><FAQAccordion /></div></section>
    <section id="kontakt"><CTASection /><div className="section-shell py-20 lg:py-28"><div className="grid gap-12 rounded-[2.5rem] bg-ink p-6 text-white sm:p-10 lg:grid-cols-[0.9fr_1.1fr]"><div><p className="eyebrow text-warm">Kontakt</p><h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Projektanfrage stellen</h2><p className="mt-6 text-lg leading-8 text-slate-300">Beschreiben Sie Ihr Vorhaben, Ihr Produktsortiment oder Ihr Modernisierungsprojekt. Wir melden uns mit einer ersten Einschätzung.</p><p className="mt-8 text-slate-300">E-Mail: info@heutec-gmbh.de</p></div><form className="grid gap-4 rounded-[2rem] bg-white p-6 text-ink sm:p-8"><label className="sr-only" htmlFor="name">Name</label><input id="name" className="rounded-full border border-line px-5 py-4 outline-none focus:border-signal" placeholder="Name" /><label className="sr-only" htmlFor="company">Unternehmen</label><input id="company" className="rounded-full border border-line px-5 py-4 outline-none focus:border-signal" placeholder="Unternehmen" /><label className="sr-only" htmlFor="email">E-Mail</label><input id="email" type="email" className="rounded-full border border-line px-5 py-4 outline-none focus:border-signal" placeholder="E-Mail" /><label className="sr-only" htmlFor="message">Nachricht</label><textarea id="message" rows={5} className="resize-none rounded-3xl border border-line px-5 py-4 outline-none focus:border-signal" placeholder="Nachricht" /><button type="submit" className="rounded-full bg-warm px-8 py-4 font-bold text-ink">Anfrage senden</button></form></div></div></section>
    <Footer /><a href="#kontakt" className="fixed bottom-5 right-5 z-50 hidden rounded-full bg-warm px-5 py-3 text-sm font-bold text-ink shadow-soft md:inline-flex">Projektanfrage stellen</a>
  </main>;
}
