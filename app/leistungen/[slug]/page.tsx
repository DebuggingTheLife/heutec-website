import { notFound } from "next/navigation";

const servicePages = {
  grosshandel: {
    title: "Großhandel",
    eyebrow: "B2B Produktversorgung",
    intro:
      "Wir unterstützen Handelspartner und gewerbliche Kunden bei der zuverlässigen Beschaffung von Energiespeichern, LED-Produkten und ergänzenden Sortimenten.",
    sections: [
      "Auswahl geeigneter Produkte für Retail, DIY, Discount und gewerbliche Anwendungen.",
      "Koordination mit sorgfältig ausgewählten Fertigungspartnern und Qualitätskontrolle vor der Lieferung.",
      "Planbare Kommunikation, klare Dokumentation und langfristige Zusammenarbeit statt kurzfristiger Einzelgeschäfte."
    ]
  },
  produktdesign: {
    title: "Produktdesign",
    eyebrow: "Von der Idee bis zum Muster",
    intro:
      "Für Kunden mit eigenen Produktideen entwickeln wir praktische Lösungen, die technisch umsetzbar, marktfähig und für den gewerblichen Einsatz geeignet sind.",
    sections: [
      "Abstimmung von Funktion, Design, Material, Laufzeit, Bedienung und Zielpreis.",
      "Entwicklung kundenspezifischer Muster und Begleitung der technischen Optimierung.",
      "Brücke zwischen europäischen Marktanforderungen und asiatischen Fertigungsmöglichkeiten."
    ]
  },
  projektmanagement: {
    title: "Projektmanagement",
    eyebrow: "Strukturierte Umsetzung",
    intro:
      "Bei Energie- und Beleuchtungsprojekten verbinden wir Beratung, Produktauswahl, Lieferkoordination und Umsetzungspartner zu einem klar steuerbaren Ablauf.",
    sections: [
      "Projektabstimmung von der ersten Einschätzung bis zur konkreten Umsetzung.",
      "Koordination von Lieferanten, technischen Partnern, Installation und Abnahme.",
      "Transparente Kommunikation, realistische Zeitplanung und pragmatische Problemlösung im laufenden Projekt."
    ]
  },
  "installation-montage": {
    title: "Installation & Montage",
    eyebrow: "Umsetzung vor Ort",
    intro:
      "Für gewerbliche Modernisierungen unterstützen wir bei der Abstimmung geeigneter Installations- und Montagepartner, damit Projekte möglichst störungsarm umgesetzt werden können.",
    sections: [
      "Koordination lokaler Ressourcen für Beleuchtungsumbauten und technische Installationen.",
      "Praktische Planung mit Blick auf Betriebsabläufe, Zugänglichkeit und Sicherheit.",
      "Ziel ist eine saubere Umsetzung mit möglichst geringer Unterbrechung des laufenden Betriebs."
    ]
  },
  finanzierung: {
    title: "Finanzierung",
    eyebrow: "Planbare Investitionen",
    intro:
      "Energieeffiziente Produkte und Modernisierungsprojekte sollen wirtschaftlich tragfähig bleiben. Deshalb unterstützen wir gewerbliche Kunden bei passenden Finanzierungsansätzen.",
    sections: [
      "Prüfung geeigneter Finanzierungsmodelle für Produktlieferungen und Projektlösungen.",
      "Unterstützung bei Investitionsplanung, Amortisationsbetrachtung und Entscheidungsgrundlagen.",
      "Finanzierung als Baustein, um sinnvolle Modernisierung früher und planbarer möglich zu machen."
    ]
  },
  "after-sales-support": {
    title: "After-Sales & Support",
    eyebrow: "Langfristige Betreuung",
    intro:
      "Unsere Arbeit endet nicht mit der Lieferung. Für B2B-Kunden sind technische Rückfragen, Ersatzteile und verlässliche Betreuung ein wichtiger Teil der Zusammenarbeit.",
    sections: [
      "Technische Unterstützung nach Lieferung oder Projektabschluss.",
      "Koordination von Ersatzteilen, Dokumentation und Servicefragen.",
      "Langfristige Kommunikation mit dem Ziel, Probleme früh zu erkennen und pragmatisch zu lösen."
    ]
  }
} satisfies Record<
  string,
  {
    title: string;
    eyebrow: string;
    intro: string;
    sections: string[];
  }
>;

export function generateStaticParams() {
  return Object.keys(servicePages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = servicePages[slug as keyof typeof servicePages];

  return {
    title: page ? `${page.title} | HeuTec GmbH` : "Leistung | HeuTec GmbH"
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = servicePages[slug as keyof typeof servicePages];

  if (!page) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-mist text-ink">
      <section className="section-shell py-16 lg:py-24">
        <a href="/#leistungen" className="text-sm font-bold text-signal hover:text-warm">
          Zurück zu den Leistungen
        </a>
        <div className="mt-10 grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="rounded-[2rem] bg-ink p-8 text-white shadow-soft sm:p-10">
            <p className="eyebrow text-warm">{page.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{page.title}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-200">{page.intro}</p>
          </div>

          <div className="rounded-[2rem] border border-line bg-white p-8 shadow-soft sm:p-10">
            <h2 className="text-2xl font-semibold">Was wir leisten</h2>
            <div className="mt-8 grid gap-5">
              {page.sections.map((item) => (
                <article key={item} className="border-l-4 border-warm bg-mist px-5 py-4">
                  <p className="leading-7 text-slate-700">{item}</p>
                </article>
              ))}
            </div>
            <a
              href="/#kontakt"
              className="mt-10 inline-flex rounded-full bg-signal px-8 py-4 font-bold text-white hover:bg-ink"
            >
              Gespräch anfragen
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
