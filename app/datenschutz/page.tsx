import Link from "next/link";

export const metadata = {
  title: "Datenschutz | HeuTec GmbH"
};

const serverData = [
  "Browsertyp und -version",
  "Betriebssystem des Nutzers",
  "Internet-Service-Provider des Nutzers",
  "IP-Adresse des Nutzers",
  "Zugriffsstatus/HTTP-Statuscode",
  "Datum und Uhrzeit des Zugriffs",
  "Zeitzonendifferenz zur GMT",
  "Websites, von denen der Nutzer auf unsere Seite gelangt",
  "Websites, die über unsere Seite aufgerufen werden"
];

const rights = [
  "Auskunft",
  "Berichtigung",
  "Löschung",
  "Einschränkung der Verarbeitung",
  "Widerspruch gegen die Verarbeitung",
  "Datenübertragbarkeit"
];

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-mist text-ink">
      <section className="section-shell py-16 lg:py-24">
        <Link href="/" className="text-sm font-bold text-signal hover:text-warm">
          Zurück zur Startseite
        </Link>
        <div className="mt-10 max-w-4xl rounded-[2rem] border border-line bg-white p-8 shadow-soft sm:p-12">
          <p className="eyebrow">Datenschutz</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Datenschutzerklärung</h1>

          <div className="mt-10 grid gap-10 leading-8 text-slate-700">
            <p>
              Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. Mit den
              nachfolgenden Hinweisen möchten wir Ihnen erläutern, welche Arten von personenbezogenen
              Daten wir in welchem Umfang und zu welchen Zwecken erheben, sowie wie wir diese Daten
              während der Nutzung unseres Internetangebots verarbeiten.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-ink">I. Verantwortliche Stelle und Datenschutzbeauftragter</h2>
              <p className="mt-4">Verantwortlich für die Verarbeitung Ihrer personenbezogenen Daten ist die:</p>
              <p className="mt-4">
                HeuTec GmbH
                <br />
                Ludwig-Erhard-Straße 4, 41564 Kaarst, Deutschland
                <br />
                Tel.: +49 2131 7529006
                <br />
                E-Mail: service@heutec-gmbh.de
                <br />
                Web: www.heutec-gmbh.de
              </p>
              <p className="mt-4">
                Unseren Datenschutzbeauftragten erreichen Sie unter:
                <br />
                datenschutz@heutec-gmbh.de
                <br />
                oder per Post mit dem Zusatz „Der Datenschutzbeauftragte“.
              </p>
              <p className="mt-4">
                Bei Fragen zum Datenschutz oder zur Geltendmachung Ihrer Rechte wenden Sie sich bitte
                an unseren Datenschutzbeauftragten.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink">II. Allgemeine Informationen zur Datenverarbeitung</h2>
              <p className="mt-4">
                Im Folgenden informieren wir Sie über die Verarbeitung personenbezogener Daten bei
                Ihrem Besuch auf unserer Website. Personenbezogene Daten im Sinne der DSGVO sind alle
                Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person
                beziehen (nachfolgend „betroffene Person“). Dies umfasst etwa Name, Adresse und
                E-Mail-Adresse.
              </p>

              <h3 className="mt-8 text-xl font-semibold text-ink">Informatorische Nutzung</h3>
              <p className="mt-4">
                Wenn Sie unsere Website lediglich besuchen, ohne sich zu registrieren oder uns
                anderweitig Informationen zukommen zu lassen, erheben wir nur die Daten, die Ihr
                Browser automatisch an unseren Server übermittelt und die temporär gespeichert werden.
              </p>
              <p className="mt-4">Folgende Daten werden erfasst:</p>
              <ul className="mt-4 grid gap-2 pl-5">
                {serverData.map((item) => (
                  <li key={item} className="list-disc">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Diese Daten sind technisch notwendig, um die Website anzuzeigen und deren Sicherheit zu
                gewährleisten. Wir verwenden sie ausschließlich zu statistischen Zwecken, um technische
                Probleme zu beheben und potenzielle Angriffe abwehren zu können. Eine Zusammenführung
                dieser Daten mit anderen personenbezogenen Informationen erfolgt nicht.
              </p>
              <p className="mt-4">
                Rechtsgrundlage: Die Verarbeitung dieser Daten erfolgt auf Grundlage unseres
                berechtigten Interesses zur Sicherstellung der Funktionsfähigkeit und Sicherheit der
                Website gemäß Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden nicht zur Identifizierung
                des Nutzers verwendet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink">III. Reklamationen</h2>
              <p className="mt-4">
                Wenn Sie unser Reklamationsformular nutzen, speichern wir die von Ihnen angegebenen
                Daten zur Bearbeitung Ihrer Reklamation im Rahmen der Vertragsabwicklung. Daten, die
                nicht zwingend erforderlich sind, sind als freiwillige Angaben gekennzeichnet. Mit der
                Angabe freiwilliger Informationen, wie z.B. einer E-Mail-Adresse oder Telefonnummer,
                stimmen Sie zu, dass wir Sie über diese Kanäle zur Bearbeitung Ihrer Reklamation
                kontaktieren dürfen.
              </p>
              <p className="mt-4">
                Die verarbeiteten Daten werden gelöscht, sobald der Zweck erfüllt ist, es sei denn,
                gesetzliche Aufbewahrungspflichten stehen dem entgegen. In diesem Fall wird die
                Verarbeitung eingeschränkt.
              </p>
              <p className="mt-4">
                Rechtsgrundlage: Die Verarbeitung erfolgt auf Basis der Vertragsdurchführung gemäß Art.
                6 Abs. 1 lit. b DSGVO und, sofern erforderlich, auf Grundlage Ihrer Einwilligung gemäß
                Art. 6 Abs. 1 lit. a DSGVO.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink">IV. Online-Bewerbungen</h2>
              <p className="mt-4">
                Wenn Sie sich bei uns bewerben, verarbeiten wir Ihre personenbezogenen Daten zur
                Bearbeitung Ihrer Bewerbung. Ihre Unterlagen speichern wir in der Regel für sechs
                Monate, es sei denn, Sie erteilen uns eine ausdrückliche Einwilligung zur längeren
                Speicherung oder es kommt zu einem Beschäftigungsverhältnis.
              </p>
              <p className="mt-4">
                Im Falle einer Einstellung werden Ihre Daten gemäß § 26 Abs. 1 S. 1 BDSG in die
                Personalakte übernommen, um das Beschäftigungsverhältnis zu begründen.
              </p>
              <p className="mt-4">
                Rechtsgrundlage: Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung sowie zur
                Durchführung vorvertraglicher Maßnahmen gemäß Art. 6 Abs. 1 lit. a, b und f DSGVO
                sowie § 26 Abs. 1 S. 1 BDSG.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink">V. Teilnahme an Gewinnspielen</h2>
              <p className="mt-4">
                Wenn Sie an Gewinnspielen teilnehmen, erheben wir die für die Durchführung des
                Gewinnspiels erforderlichen Daten, wie z.B. Name und Kontaktdaten. Gegebenenfalls
                geben wir Ihre Daten an Partner weiter, um Ihnen den Gewinn zu übermitteln. Die
                Datenverarbeitung und -weitergabe variiert je nach Gewinnspiel und ist in den
                jeweiligen Teilnahmebedingungen konkret beschrieben.
              </p>
              <p className="mt-4">
                Rechtsgrundlage: Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Die Daten werden
                nach Abschluss des Gewinnspiels gelöscht.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink">VI. YouTube</h2>
              <p className="mt-4">
                Für die Einbindung von Videos nutzen wir den Anbieter YouTube (Google LLC). Dabei haben
                wir den erweiterten Datenschutzmodus aktiviert, sodass keine Daten an YouTube
                übermittelt werden, solange Sie das Video nicht abspielen. Sobald Sie ein Video
                starten, wird Ihre IP-Adresse an YouTube übermittelt und, sofern Sie eingeloggt sind,
                mit Ihrem Konto verknüpft. Weitere Informationen finden Sie in der Datenschutzerklärung
                von YouTube unter: http://www.google.de/intl/de/policies/privacy/
              </p>
              <p className="mt-4">
                Rechtsgrundlage: Unser berechtigtes Interesse an der Optimierung unseres Angebots
                gemäß Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink">VII. Ihre Rechte</h2>
              <p className="mt-4">Sie haben das Recht auf:</p>
              <ul className="mt-4 grid gap-2 pl-5">
                {rights.map((item) => (
                  <li key={item} className="list-disc">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Soweit die Verarbeitung auf Ihrer Einwilligung beruht, können Sie diese jederzeit mit
                Wirkung für die Zukunft widerrufen.
              </p>

              <h3 className="mt-8 text-xl font-semibold text-ink">
                Widerspruchsrecht bei Datenverarbeitung auf Grundlage berechtigter Interessen
              </h3>
              <p className="mt-4">
                Sie haben gemäß Art. 21 Abs. 1 DSGVO das Recht, jederzeit Widerspruch gegen die
                Verarbeitung Ihrer personenbezogenen Daten einzulegen, wenn diese auf Grundlage von
                Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt.
              </p>

              <h3 className="mt-8 text-xl font-semibold text-ink">Widerspruchsrecht gegen Direktwerbung</h3>
              <p className="mt-4">
                Sie können jederzeit Widerspruch gegen die Verarbeitung Ihrer Daten zu Werbezwecken
                einlegen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink">VIII. Beschwerderecht bei einer Aufsichtsbehörde</h2>
              <p className="mt-4">
                Sie haben das Recht, sich bei einer zuständigen Datenschutz-Aufsichtsbehörde zu
                beschweren.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink">IX. Änderungen der Datenschutzerklärung</h2>
              <p className="mt-4">
                Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen. Aktueller
                Stand: Mai 2018.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
