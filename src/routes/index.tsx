import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  MessageCircle,
  Home,
  Package,
  Truck,
  Trash2,
  Wrench,
  Map,
  UserCheck,
  Zap,
  Boxes,
  Sparkles,
  BadgeCheck,
  Clock,
  Wallet,
  CalendarCheck,
  Globe,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import logoAsset from "@/assets/ek-logo.png.asset.json";

const PHONE_DISPLAY = "0151 290 43 558";
const PHONE_TEL = "tel:+4915129043558";
const WHATSAPP = "https://wa.me/4915129043558";
const EMAIL = "info@eundktransport.de";
const WEBSITE = "www.eundktransport.de";

const services = [
  { icon: Home, title: "Umzüge privat & gewerblich" },
  { icon: Package, title: "Möbeltransport", note: "z. B. IKEA, Baumarkt etc." },
  { icon: Truck, title: "Haushaltsauflösungen" },
  { icon: Trash2, title: "Entrümpelungen" },
  { icon: Wrench, title: "Küchen- & Möbelmontage" },
  { icon: Map, title: "Transporte deutschlandweit" },
  {
    icon: UserCheck,
    title: "Transporter mit Fahrer",
    note: "auch ohne Pack- und Trageservice möglich",
  },
  { icon: Zap, title: "Express Lieferungen & Kleintransporte" },
  { icon: Boxes, title: "Weitere Dienstleistungen", note: "auf Anfrage" },
  { icon: Sparkles, title: "Wohnungsendreinigung", note: "auf Anfrage" },
];

const usps = [
  { icon: Zap, label: "Schnell" },
  { icon: Wallet, label: "Preiswert" },
  { icon: BadgeCheck, label: "Zuverlässig" },
  { icon: CalendarCheck, label: "Termintreu" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "E&K Umzug · Transport · Entrümpelung – Schnell. Preiswert. Zuverlässig." },
      {
        name: "description",
        content:
          "E&K Umzug & Transportzentrum: Umzüge privat & gewerblich, Möbeltransport, Entrümpelungen, Haushaltsauflösungen und Transporte deutschlandweit. Kostenlose Besichtigung & Angebotserstellung – ☎ 0151 290 43 558.",
      },
      { property: "og:title", content: "E&K Umzug · Transport · Entrümpelung" },
      {
        property: "og:description",
        content:
          "Schnell. Preiswert. Zuverlässig. Termintreu. Umzüge, Transporte und Entrümpelungen – kostenlose Besichtigung & Angebotserstellung.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MovingCompany",
          name: "E&K Umzug & Transportzentrum",
          url: "https://ek-umzug.de",
          telephone: "+49 151 290 43 558",
          slogan: "Schnell. Preiswert. Zuverlässig. Termintreu.",
          areaServed: "Deutschland",
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <a href="#" className="flex items-center">
            <img
              src={logoAsset.url}
              alt="E&K Umzug · Transport · Entrümpelung Logo"
              className="h-14 w-auto rounded-md object-contain"
            />
          </a>
          <nav className="hidden items-center gap-6 text-sm font-semibold md:flex">
            <a href="#leistungen" className="hover:text-brand-red">
              Leistungen
            </a>
            <a href="#warum" className="hover:text-brand-red">
              Warum E&K
            </a>
            <a href="#kontakt" className="hover:text-brand-red">
              Kontakt
            </a>
            <a href="/impressum" className="hover:text-brand-red">
              Impressum
            </a>
            <a href="/datenschutz" className="hover:text-brand-red">
              Datenschutz
            </a>
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-2 rounded-md bg-brand px-4 py-2 font-display text-lg font-bold tracking-wide text-brand-foreground transition-transform hover:scale-105"
            >
              <Phone className="h-4 w-4" />
              {PHONE_DISPLAY}
            </a>
          </nav>
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menü öffnen"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="flex flex-col gap-3 border-t border-border px-4 py-4 text-sm font-semibold md:hidden">
            <a href="#leistungen" onClick={() => setMenuOpen(false)}>
              Leistungen
            </a>
            <a href="#warum" onClick={() => setMenuOpen(false)}>
              Warum E&K
            </a>
            <a href="#kontakt" onClick={() => setMenuOpen(false)}>
              Kontakt
            </a>
            <a href="/impressum" onClick={() => setMenuOpen(false)}>
              Impressum
            </a>
            <a href="/datenschutz" onClick={() => setMenuOpen(false)}>
              Datenschutz
            </a>
            <a href={PHONE_TEL} className="font-bold text-brand-red">
              ☎ {PHONE_DISPLAY}
            </a>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="bg-ink text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="font-display text-xl font-semibold tracking-[0.2em] text-brand">
              UMZUG · TRANSPORT · ENTRÜMPELUNG
            </p>
            <h1 className="mt-4 font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-wide md:text-7xl">
              Schnell. <span className="text-brand-red">Preiswert.</span>
              <br />
              Zuverlässig. <span className="text-brand">Termintreu.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-primary-foreground/80">
              Wir nehmen Ihnen die Last ab – damit Sie sich um die wichtigen
              Dinge kümmern können!
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={PHONE_TEL}
                className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 font-display text-xl font-bold tracking-wide text-brand-foreground transition-transform hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                Jetzt anrufen
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border-2 border-brand px-6 py-3 font-display text-xl font-bold tracking-wide text-brand transition-colors hover:bg-brand hover:text-brand-foreground"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
            <div className="mt-8 inline-block rounded-lg bg-brand-red px-5 py-3">
              <p className="font-display text-lg font-bold uppercase leading-tight tracking-wide">
                Kostenlose Besichtigung
                <br />
                & Angebotserstellung
              </p>
              <p className="text-sm text-primary-foreground/80">
                (Kurzfristige Termine möglich)
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={logoAsset.url}
              alt="E&K Logo mit Transporter und Umzugshelfer"
              className="w-full max-w-md rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* USP-Leiste */}
      <section id="warum" className="bg-brand">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4">
          {usps.map((u) => (
            <div
              key={u.label}
              className="flex flex-col items-center gap-2 text-center text-brand-foreground"
            >
              <u.icon className="h-8 w-8" />
              <span className="font-display text-2xl font-bold uppercase tracking-wide">
                {u.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Leistungen */}
      <section id="leistungen" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h2 className="text-center font-display text-4xl font-extrabold uppercase tracking-wide md:text-5xl">
          Unsere <span className="text-brand-red">Leistungen</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          Vom privaten Umzug bis zur gewerblichen Haushaltsauflösung – E&K ist
          Ihr Transportzentrum für Köln und ganz Deutschland.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-lg"
            >
              <div className="rounded-lg bg-brand p-3 text-brand-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold tracking-wide">
                  {s.title}
                </h3>
                {s.note && (
                  <p className="mt-1 text-sm text-muted-foreground">{s.note}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="bg-ink text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center md:py-24">
          <h2 className="font-display text-4xl font-extrabold uppercase tracking-wide md:text-5xl">
            Jetzt <span className="text-brand">anrufen</span> oder über{" "}
            <span className="text-brand">WhatsApp</span> erreichbar
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Kostenlose Besichtigung & Angebotserstellung – kurzfristige Termine
            möglich.
          </p>
          <a
            href={PHONE_TEL}
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-brand px-8 py-4 font-display text-3xl font-extrabold tracking-wider text-brand-foreground transition-transform hover:scale-105 md:text-4xl"
          >
            <Phone className="h-8 w-8" />
            {PHONE_DISPLAY}
          </a>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border-2 border-brand px-5 py-2.5 font-semibold text-brand transition-colors hover:bg-brand hover:text-brand-foreground"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp schreiben
            </a>
            <span className="inline-flex items-center gap-2 text-primary-foreground/70">
              <Clock className="h-5 w-5" />
              Kurzfristige Termine möglich
            </span>
          </div>
          <p className="mt-6 inline-flex items-center gap-2 text-lg font-semibold text-primary-foreground/80">
            <Globe className="h-5 w-5" />
            ek-umzug.de
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary-foreground/10 bg-ink text-primary-foreground/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm md:flex-row">
          <div className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="E&K Logo"
              className="h-10 w-10 rounded-md object-contain"
            />
            <span>
              E&K Umzug & Transportzentrum · Umzug · Transport · Entrümpelung
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href={PHONE_TEL} className="hover:text-brand">
              {PHONE_DISPLAY}
            </a>
            <span>·</span>
            <span>ek-umzug.de</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
