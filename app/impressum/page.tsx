import Link from "next/link";

export const metadata = {
  title: "Impressum | HeuTec GmbH"
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-mist text-ink">
      <section className="section-shell py-16 lg:py-24">
        <Link href="/" className="text-sm font-bold text-signal hover:text-warm">
          Zurück zur Startseite
        </Link>
        <div className="mt-10 max-w-4xl rounded-[2rem] border border-line bg-white p-8 shadow-soft sm:p-12">
          <p className="eyebrow">Rechtliche Angaben</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Impressum</h1>

          <div className="mt-10 grid gap-8 leading-8 text-slate-700">
            <section>
              <h2 className="text-2xl font-semibold text-ink">Verantwortlich</h2>
              <p className="mt-4">
                HeuTec GmbH
                <br />
                Yonghong Ouyang
                <br />
                Ludwig-Erhard-Straße 4
                <br />
                41564 Kaarst, Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink">Kontakt</h2>
              <p className="mt-4">
                Telefon: +49 2131 7529006
                <br />
                E-Mail: info@heutec-gmbh.de
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink">Registereintrag</h2>
              <p className="mt-4">
                Eintragung im Handelsregister
                <br />
                Registergericht: Amtsgericht Neuss
                <br />
                Registernummer: HRB18805
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink">Umsatzsteuer-ID</h2>
              <p className="mt-4">
                Umsatzsteuer-Identifikationsnummer
                <br />
                DE308432444
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink">Wirtschafts-Identifikationsnummer</h2>
              <p className="mt-4">
                Wirtschafts-Identifikationsnummer
                <br />
                32064004
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink">EORI-Nummer</h2>
              <p className="mt-4">DE515488647738399</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink">Elektrogeräte entsorgen</h2>
              <p className="mt-4">
                WEEE Nummer DE 83851418
                <br />
                Lucid Nummer DE5458406021041
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
