import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      {
        title: "Datenschutzerklärung – E&K Umzug · Transport · Entrümpelung",
      },
      {
        name: "description",
        content:
          "Datenschutzerklärung von E&K Umzugs-, Transport- und Dienstleistungsservice zum Umgang mit personenbezogenen Daten gemäß DSGVO.",
      },
      {
        property: "og:title",
        content: "Datenschutzerklärung – E&K Umzug",
      },
      {
        property: "og:description",
        content: "Informationen zum Umgang mit personenbezogenen Daten (DSGVO).",
      },
    ],
    links: [{ rel: "canonical", href: "/datenschutz" }],
  }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
        <h1 className="font-display text-4xl font-extrabold uppercase tracking-wide md:text-5xl">
          Datenschutzerklärung
        </h1>

        <div className="mt-8 space-y-6 text-base leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-bold tracking-wide">
              1. Datenschutz auf einen Blick
            </h2>
            <p className="mt-2">
              Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges
              Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich
              und entsprechend der gesetzlichen Datenschutzvorschriften (DSGVO)
              sowie dieser Datenschutzerklärung.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold tracking-wide">
              2. Verantwortliche Stelle
            </h2>
            <p className="mt-2">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              <br />
              E&K Umzugs-, Transport- und Dienstleistungsservice
              <br />
              Inhaber: Enes Karakaya
              <br />
              Industriestraße 59, 21107 Hamburg
              <br />
              Telefon: 0151 290 43 558
              <br />
              E-Mail: info@eundktransport.de
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold tracking-wide">
              3. Erhebung und Speicherung personenbezogener Daten
            </h2>
            <p className="mt-2">
              Sie können unsere Website grundsätzlich ohne Offenlegung Ihrer
              Identität nutzen. Personenbezogene Daten (z. B. Name, Adresse,
              Telefonnummer) werden nur erhoben, wenn Sie uns diese im Rahmen
              einer Anfrage per Telefon, E-Mail oder WhatsApp freiwillig
              mitteilen. Diese Daten verwenden wir ausschließlich zur
              Bearbeitung und Abwicklung Ihrer Anfrage sowie zur
              Vertragsdurchführung.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold tracking-wide">
              4. Server-Log-Dateien
            </h2>
            <p className="mt-2">
              Der Provider der Website erhebt und speichert automatisch
              Informationen in sogenannten Server-Log-Dateien, die Ihr Browser
              automatisch übermittelt. Diese sind: Browsertyp und -version,
              verwendetes Betriebssystem, Referrer-URL, Hostname des
              zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse.
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
              nicht vorgenommen. Die Verarbeitung erfolgt auf Grundlage von
              Art. 6 Abs. 1 lit. f DSGVO zum Zweck der technischen
              Bereitstellung der Website.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold tracking-wide">
              5. Kontakt per Telefon, E-Mail und WhatsApp
            </h2>
            <p className="mt-2">
              Wenn Sie uns per Telefon, E-Mail oder WhatsApp kontaktieren,
              werden Ihre Angaben einschließlich der von Ihnen dort
              angegebenen Kontaktdaten gespeichert, um Ihre Anfrage zu
              bearbeiten und mögliche Anschlussfragen zu beantworten. Diese
              Daten geben wir nicht ohne Ihre Einwilligung weiter. Die
              Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
              DSGVO.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold tracking-wide">
              6. Ihre Rechte
            </h2>
            <p className="mt-2">
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung,
              Löschung, Einschränkung der Verarbeitung sowie Datenübertragbarkeit
              (Art. 15–20 DSGVO). Zudem steht Ihnen ein Beschwerderecht bei der
              zuständigen Aufsichtsbehörde zu. Die zuständige Aufsichtsbehörde
              für Hamburg ist der Hamburgische Beauftragte für Datenschutz und
              Informationsfreiheit, Ludwig-Erhard-Str. 22, 20459 Hamburg.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold tracking-wide">
              7. Widerspruch gegen Werbung
            </h2>
            <p className="mt-2">
              Der Nutzung von im Impressum veröffentlichten Kontaktdaten zur
              Übersendung von nicht ausdrücklich angeforderter Werbung und
              Informationsmaterialien wird hiermit widersprochen. Die Betreiber
              der Seiten behalten sich ausdrücklich rechtliche Schritte im Fall
              der unverlangten Zusendung von Werbeinformationen vor.
            </p>
          </section>
        </div>

        <p className="mt-12">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-brand px-4 py-2 font-semibold text-brand-foreground transition-colors hover:bg-brand/90"
          >
            Zurück zur Startseite
          </a>
        </p>
      </div>
    </div>
  );
}
