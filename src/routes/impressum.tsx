import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – E&K Umzug · Transport · Entrümpelung" },
      {
        name: "description",
        content:
          "Impressum und Anbieterkennzeichnung nach §5 TMG von E&K Umzugs-, Transport- und Dienstleistungsservice, Inhaber Enes Karakaya, Hamburg.",
      },
      { property: "og:title", content: "Impressum – E&K Umzug" },
      { property: "og:description", content: "Anbieterkennzeichnung nach §5 TMG." },
    ],
    links: [{ rel: "canonical", href: "/impressum" }],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
        <h1 className="font-display text-4xl font-extrabold uppercase tracking-wide md:text-5xl">
          Impressum
        </h1>

        <div className="mt-8 space-y-6 text-base leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-bold tracking-wide">
              Angaben nach § 5 TMG
            </h2>
            <p className="mt-2">
              E&K Umzugs-, Transport- und Dienstleistungsservice
              <br />
              Inhaber: Enes Karakaya
              <br />
              Industriestraße 59
              <br />
              21107 Hamburg
              <br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold tracking-wide">
              Kontakt
            </h2>
            <p className="mt-2">
              Telefon:{" "}
              <a
                href="tel:+4915129043558"
                className="text-brand-red hover:underline"
              >
                0151 290 43 558
              </a>
              <br />
              E-Mail:{" "}
              <a
                href="mailto:info@eundktransport.de"
                className="text-brand-red hover:underline"
              >
                info@eundktransport.de
              </a>
              <br />
              Internet:{" "}
              <a
                href="https://www.eundktransport.de"
                className="text-brand-red hover:underline"
              >
                www.eundktransport.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold tracking-wide">
              Umsatzsteuer
            </h2>
            <p className="mt-2">
              Einzelunternehmen. Es wird gemäß § 19 Abs. 1 UStG die
              Kleinunternehmerregelung angewendet, daher wird keine
              Umsatzsteuer ausgewiesen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold tracking-wide">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p className="mt-2">
              Enes Karakaya
              <br />
              Industriestraße 59, 21107 Hamburg
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold tracking-wide">
              Haftungsausschluss
            </h2>
            <p className="mt-2">
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
              Haftung für die Inhalte externer Links. Für den Inhalt der
              verlinkten Seiten sind ausschließlich deren Betreiber
              verantwortlich.
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
