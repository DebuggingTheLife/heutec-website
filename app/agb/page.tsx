import Link from "next/link";

export const metadata = {
  title: "AGB | HeuTec GmbH"
};

const terms = [
  {
    title: "Allgemeines",
    text:
      "Diese AGB sind Teil aller Verträge, die wir mit unseren Kunden abschließen. Abweichende Einkaufsbedingungen der Kunden gelten nicht, auch wenn wir ihnen nicht ausdrücklich widersprechen. Falls ein Teil der getroffenen Vereinbarungen ungültig ist, bleibt der Rest weiterhin gültig. Der ungültige Teil wird so ausgelegt oder ersetzt, dass der beabsichtigte Zweck legal erreicht wird."
  },
  {
    title: "Vertragsabschluss",
    text:
      "Unsere Angebote sind unverbindlich, sofern nichts anderes vereinbart wurde. Ein Vertrag kommt erst durch unsere schriftliche Bestätigung oder spätestens durch die Lieferung zustande. Druckfehler und Irrtümer behalten wir uns vor."
  },
  {
    title: "Preise",
    text:
      "Die Preise im Katalog sind in Euro angegeben und verstehen sich ab Lager Düsseldorf, ohne Verpackung. Preisänderungen während der Gültigkeit des Katalogs oder der Preisliste sind vorbehalten. Es gelten die Preise am Tag der Auftragserteilung."
  },
  {
    title: "Lieferung",
    text:
      "Der Mindestbestellwert beträgt 200 Euro netto. Bei Bestellungen unter 250 Euro erfolgt die Lieferung auf Rechnung und Gefahr des Empfängers, ab 250 Euro liefern wir frei Haus (Ausnahme: Insel-, Auslandslieferungen, Expressgut etc.). Unter 250 Euro kann ein zusätzlicher Aufwand von 25 Euro berechnet werden. Wenn höhere Gewalt wie Materialmangel, Streiks oder behördliche Maßnahmen eintreten, können wir den Vertrag teilweise oder vollständig aufheben oder die Lieferung verzögern. Nach 8 Wochen Verzögerung kann der Käufer vom Vertrag zurücktreten, ohne Schadensersatzansprüche geltend zu machen."
  },
  {
    title: "Zahlung",
    text:
      "Rechnungen sind innerhalb von 30 Tagen netto ab Rechnungsdatum zu bezahlen. Bei Zahlungsverzug behalten wir uns das Recht vor, Verzugszinsen zu berechnen. Der Käufer kann den Kaufpreis nicht wegen eigener oder strittiger Ansprüche zurückhalten oder verrechnen. Werden uns Zweifel an der Zahlungsfähigkeit des Käufers bekannt, werden alle offenen Forderungen sofort fällig, und wir können Vorkasse verlangen oder vom Vertrag zurücktreten."
  },
  {
    title: "Rückgaben",
    text:
      "Rücksendungen mangelfreier Ware werden nur nach vorheriger schriftlicher Zustimmung von uns angenommen. Bei vereinbarten Rücksendungen berechnen wir eine Kostenbeteiligung. Die Ware muss in einwandfreiem Zustand und kostenfrei zurückgesandt werden. Sonderbestellungen sind von Rückgaben ausgeschlossen."
  },
  {
    title: "Gewährleistung",
    text:
      "Es gelten die gesetzlichen Gewährleistungsbestimmungen. Mängel müssen sofort nach Lieferung oder Entdeckung gemeldet werden. Nach 5 Tagen sind Mängelansprüche ausgeschlossen. Mangelhafte Ware ist uns kostenlos zur Prüfung zuzusenden. Bei berechtigten Beanstandungen leisten wir Nachbesserung, Umtausch oder Gutschrift. Schadenersatz ist ausgeschlossen, außer bei grober Fahrlässigkeit oder Vorsatz. Sonderbestellungen unterliegen keiner Gewährleistung, außer bei Vorsatz oder grober Fahrlässigkeit."
  },
  {
    title: "Eigentumsvorbehalt",
    text:
      "Wir behalten uns das Eigentum an der gelieferten Ware bis zur vollständigen Zahlung vor. Der Käufer darf die Ware im normalen Geschäftsbetrieb weiterverkaufen, tritt aber bereits jetzt alle Forderungen aus dem Weiterverkauf an uns ab. Bei Vertragsverstößen, insbesondere bei Zahlungsverzug, können wir die Ware zurücknehmen."
  },
  {
    title: "Anwendbares Recht",
    text: "Es gilt ausschließlich deutsches Recht, unter Ausschluss des UN-Kaufrechts."
  },
  {
    title: "Erfüllungsort/Gerichtsstand",
    text: "Erfüllungsort und Gerichtsstand sind Kaarst, Deutschland."
  },
  {
    title: "Datenverarbeitung",
    text:
      "Daten aus dem Geschäftsvorfall werden zur Vertragsabwicklung intern verarbeitet und im gesetzlich zulässigen Rahmen gespeichert."
  }
];

export default function AGBPage() {
  return (
    <main className="min-h-screen bg-mist text-ink">
      <section className="section-shell py-16 lg:py-24">
        <Link href="/" className="text-sm font-bold text-signal hover:text-warm">
          Zurück zur Startseite
        </Link>
        <div className="mt-10 max-w-4xl rounded-[2rem] border border-line bg-white p-8 shadow-soft sm:p-12">
          <p className="eyebrow">Geschäftsbedingungen</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Allgemeine Geschäftsbedingungen</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            HeuTec GmbH, Ludwig-Erhard-Straße 4, 41564 Kaarst, Deutschland
          </p>

          <div className="mt-10 grid gap-8 leading-8 text-slate-700">
            {terms.map((term) => (
              <section key={term.title}>
                <h2 className="text-2xl font-semibold text-ink">{term.title}</h2>
                <p className="mt-4">{term.text}</p>
              </section>
            ))}
            <p className="pt-4 font-semibold text-ink">Kaarst, den 09.09.2016</p>
          </div>
        </div>
      </section>
    </main>
  );
}
