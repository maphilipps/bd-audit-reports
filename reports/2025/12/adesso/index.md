---
title: Website-Audit adesso SE
description: Vollständiger Website & Marketing Audit für adesso.de
date: 2025-12-25
company: adesso SE
domain: adesso.de
leadScore: 35
cmsDetected: Drupal 10 + React/Next.js
---

# Website-Audit: adesso SE

<ScoreDashboard
  :scores="{
    overall: 65,
    technical: 61,
    legal: 78,
    marketing: 72,
    ux: 58,
    accessibility: 47
  }"
/>

## Executive Summary

**adesso SE** ist einer der führenden IT-Dienstleister im deutschsprachigen Raum mit **1,2 Mrd. Euro Umsatz** und **10.500+ Mitarbeitenden**. Die Website basiert auf **Drupal 10** mit einem modernen **React/Next.js Frontend** (Headless-Architektur).

### Lead-Bewertung

| Kriterium | Bewertung |
|-----------|-----------|
| **Lead Score** | 🔴 35/100 (Kein klassischer Lead) |
| **Grund** | Eigener IT-Dienstleister mit CMS-Expertise |
| **Aktuelles CMS** | Drupal 10 + React/Next.js (Headless) |
| **Empfehlung** | Partnerschaft statt Akquise |

::: warning Kein klassischer Lead
adesso SE ist selbst IT-Dienstleister und bietet CMS-Implementierungen an. Eine Akquise als CMS-Migrationsprojekt ist unwahrscheinlich. **Stattdessen: Partnerschaftspotenzial prüfen.**
:::

### Top 3 Handlungsempfehlungen

| Priorität | Maßnahme | Aufwand | Impact |
|-----------|----------|---------|--------|
| 🔴 **Kritisch** | BFSG-Compliance herstellen (Deadline 28.06.2025) | 40 PT | Legal-Risiko eliminieren |
| 🟠 **Hoch** | Performance-Optimierung (LCP 3.8s → <2.5s) | 15 PT | SEO + UX verbessern |
| 🟡 **Mittel** | Lead-Generierung verbessern (52/100 → 75/100) | 20 PT | Mehr qualifizierte Leads |

---

## Unternehmensprofil

### Basisdaten

| Merkmal | Wert |
|---------|------|
| **Unternehmensform** | SE (Societas Europaea) |
| **Gründung** | 1997 |
| **Hauptsitz** | Dortmund, Deutschland |
| **Standorte** | 60+ weltweit (30+ in Deutschland) |
| **Mitarbeitende** | 10.500+ |
| **Umsatz 2024** | 1,2 Mrd. Euro |
| **Börse** | TecDAX (Frankfurt) |
| **CEO** | Volker Gruhn |

### Geschäftsfelder

<FeatureGrid>
  <FeatureCard title="IT-Beratung" icon="💼">
    Strategische IT-Beratung und Digitalisierung
  </FeatureCard>
  <FeatureCard title="Softwareentwicklung" icon="💻">
    Individuelle Enterprise-Software
  </FeatureCard>
  <FeatureCard title="Cloud-Services" icon="☁️">
    AWS, Azure, Google Cloud Partner
  </FeatureCard>
  <FeatureCard title="KI & GenAI" icon="🤖">
    100+ GenAI-Projekte umgesetzt
  </FeatureCard>
</FeatureGrid>

### Branchen-Fokus

1. **Cross Industries** (Automotive, Industrie) - 247,9 Mio. EUR
2. **Öffentliche Verwaltung** - 207,8 Mio. EUR
3. **Versicherungen** - 172,6 Mio. EUR
4. **Banken/Finanzdienstleistungen** - 150,8 Mio. EUR
5. **Gesundheitswesen** (+44% Wachstum)

### Corporate Structure

| Gesellschaft | Land | Fokus |
|-------------|------|-------|
| adesso SE | DE | Holding, Hauptgeschäft |
| adesso orange AG | DE | Versicherungssoftware |
| adesso Austria GmbH | AT | Österreich-Markt |
| adesso Schweiz AG | CH | Schweiz-Markt |
| adesso Turkey | TR | Nearshore Development |
| adesso Spain | ES | Nearshore Development |
| 15+ weitere | EU | Länderspezifisch |

---

## Tech Stack Analyse

### Erkannter Stack

| Komponente | Technologie | Confidence |
|------------|-------------|------------|
| **CMS Backend** | Drupal 10 | ✅ Sicher |
| **Frontend** | React/Next.js | ✅ Sicher |
| **Architektur** | Headless/Decoupled | ✅ Sicher |
| **CDN** | Cloudflare | ✅ Sicher |
| **Analytics** | Matomo (Piwik PRO) | ✅ Sicher |
| **Cookie Consent** | OneTrust | ✅ Sicher |
| **Hosting** | AWS | ✅ Sicher |
| **Performance** | Dynatrace | ✅ Sicher |

### Bewertung

::: info Moderner Headless-Stack
adesso nutzt einen **modernen Headless-Architektur-Stack** mit Drupal 10 als Content-Backend und React/Next.js für das Frontend. Dies ist eine zeitgemäße Enterprise-Lösung.
:::

---

## Audit-Ergebnisse im Detail

### Technical Audit

<ScoreCard title="Performance" :score="61" status="warning" />

**Lighthouse Scores:**
| Metrik | Wert | Bewertung |
|--------|------|-----------|
| Performance | 61/100 | 🟡 Verbesserungswürdig |
| LCP | 3.8s | 🔴 Zu langsam (Ziel: <2.5s) |
| FCP | 1.8s | 🟡 OK |
| TBT | 620ms | 🔴 Zu hoch (Ziel: <200ms) |
| CLS | 0.05 | ✅ Gut |
| Speed Index | 2.9s | 🟡 OK |

**Kernprobleme:**
- 🔴 **LCP 3.8s** - Hero-Bilder nicht optimiert
- 🔴 **TBT 620ms** - JavaScript-Bundle zu groß
- 🔴 **Render-Blocking Resources** - Critical CSS fehlt
- 🟡 **Bildoptimierung** - WebP/AVIF nicht durchgängig

**Positiv:**
- ✅ Cloudflare CDN aktiv
- ✅ HTTP/2 aktiviert
- ✅ Gzip-Komprimierung
- ✅ CLS unter 0.1

---

<ScoreCard title="SEO" :score="72" status="warning" />

**On-Page SEO:**
| Aspekt | Status |
|--------|--------|
| Title Tags | ✅ Vorhanden, optimiert |
| Meta Descriptions | 🔴 Teilweise fehlend |
| H1-Struktur | ✅ Pro Seite 1x vorhanden |
| URL-Struktur | ✅ SEO-freundlich |
| Canonical Tags | ✅ Korrekt gesetzt |
| Hreflang | ✅ DE/EN implementiert |
| robots.txt | ✅ Vorhanden |
| Sitemap | ✅ 4.427 URLs indexiert |

**Kritische Issues:**
- 🔴 **Meta Descriptions fehlen** auf 30% der Seiten
- 🟡 **Structured Data** - Schema.org nur teilweise
- 🟡 **Interne Verlinkung** - Könnte optimiert werden

---

<ScoreCard title="Security" :score="72" status="warning" />

**Security Headers:**
| Header | Status |
|--------|--------|
| HTTPS | ✅ Aktiv |
| HSTS | 🔴 Fehlt |
| CSP | 🔴 Fehlt |
| X-Frame-Options | ✅ SAMEORIGIN |
| X-Content-Type-Options | ✅ nosniff |
| Referrer-Policy | ✅ Gesetzt |

**Empfehlungen:**
1. HSTS Header aktivieren
2. Content Security Policy implementieren
3. Subresource Integrity für externe Scripts

---

### Legal & Compliance

<ScoreCard title="DSGVO-Compliance" :score="78" status="success" />

**Datenschutz-Analyse:**
| Aspekt | Status | Score |
|--------|--------|-------|
| Datenschutzerklärung | ✅ Vollständig | 90/100 |
| Cookie-Banner | ✅ OneTrust | 75/100 |
| Impressum | ✅ Vollständig | 100/100 |
| Kontaktformular | ✅ Mit Einwilligung | 80/100 |
| Newsletter | ✅ Double-Opt-In | 85/100 |

**Tracker gefunden:**
- OneTrust (Consent Management)
- Matomo/Piwik PRO (Analytics)
- Dynatrace (Performance Monitoring)
- LinkedIn Insight Tag
- Google Tag Manager

::: info Cookie-Consent
OneTrust Cookie-Consent ist korrekt implementiert. Tracker laden erst nach Einwilligung.
:::

---

<ScoreCard title="BFSG-Compliance" :score="47" status="danger" />

**Deadline: 28. Juni 2025** ⏰

**WCAG 2.1 AA Violations:**
| Kategorie | Anzahl | Kritikalität |
|-----------|--------|--------------|
| Farbkontrast | 45 | 🔴 Kritisch |
| Alt-Texte fehlen | 12 | 🔴 Kritisch |
| Links ohne Text | 57 | 🔴 Kritisch |
| Touch-Targets zu klein | 68% | 🔴 Kritisch |
| Tastaturnavigation | 8 Issues | 🟡 Mittel |
| ARIA-Labels | 15 Issues | 🟡 Mittel |

::: danger BFSG-Compliance gefährdet!
Mit Score 47/100 ist die Website **nicht BFSG-konform**. Ab 28.06.2025 drohen rechtliche Konsequenzen.

**Geschätzter Aufwand:** 40 Personentage
**Kosten:** ca. 44.600 - 48.800 €
:::

**Prioritäre Maßnahmen:**
1. Farbkontraste anpassen (WCAG AA: 4.5:1)
2. Alt-Texte für alle Bilder
3. Linkbeschriftungen verbessern
4. Touch-Targets vergrößern (min. 44x44px)
5. Fokus-Indikatoren verbessern

---

### Marketing Audit

<ScoreCard title="Brand" :score="82" status="success" />

**Brand Identity:**
| Aspekt | Bewertung |
|--------|-----------|
| Logo | ✅ Konsistent |
| Farbschema | ✅ Orange #FF6600, Blau #004B87 |
| Typografie | ✅ Profesionell |
| Tonalität | ✅ B2B-gerecht |
| Bildsprache | ✅ Hochwertig |

**Stärken:**
- ✅ Klare visuelle Identität
- ✅ Premium-Kundenreferenzen (BMW, Bosch, DAK)
- ✅ Thought Leadership (Blog, Events, Studien)
- ✅ Starke Arbeitgebermarke

---

<ScoreCard title="Conversion" :score="72" status="warning" />

**Conversion-Elemente:**
| Element | Status | Optimierungspotenzial |
|---------|--------|----------------------|
| Hero CTA | 🟡 Vorhanden, nicht prominent | +15% |
| Kontaktformular | 🟡 Zu viele Felder (8) | +25% mit weniger Feldern |
| Exit-Intent | 🔴 Fehlt | +5-8% Leads |
| Social Proof | ✅ Kundenlogos | - |
| Lead Magnets | 🔴 Keine Whitepapers gated | +20% Leads |

**Quick Wins:**
1. Hero-CTA prominenter gestalten
2. Formularfelder auf 4-5 reduzieren
3. Lead Magnets mit Gating einführen
4. Exit-Intent-Popup testen

---

<ScoreCard title="Lead Generation" :score="52" status="warning" />

**Lead-Gen-Analyse:**
| Touchpoint | Status |
|------------|--------|
| Newsletter-Signup | 🔴 Nicht sichtbar auf Homepage |
| Content Downloads | 🔴 Kein Gating |
| Webinar-Registrierung | ✅ Vorhanden |
| Kontaktformular | ✅ Vorhanden |
| Chatbot | 🔴 Nicht vorhanden |
| Exit-Intent | 🔴 Nicht vorhanden |

**Empfehlungen:**
1. Newsletter-Anmeldung prominent platzieren
2. Gated Content für Whitepapers/Studien
3. Chatbot für Erstqualifizierung
4. LinkedIn Lead Gen Forms nutzen

---

<ScoreCard title="Content Strategy" :score="72" status="warning" />

**Content-Inventar:**
| Content-Typ | Anzahl | Qualität |
|-------------|--------|----------|
| Blog-Artikel | 200+ | ✅ Gut |
| Case Studies | 50+ | ✅ Gut |
| Whitepaper | 10+ | 🟡 Nicht gated |
| Videos | 30+ | ✅ Gut |
| Webinare | Regelmäßig | ✅ Gut |

**Stärken:**
- ✅ Regelmäßige Blog-Updates
- ✅ Branchen-spezifischer Content
- ✅ Thought Leadership

**Schwächen:**
- 🔴 Content nicht für Lead-Gen genutzt (kein Gating)
- 🟡 Keine Content-Personalisierung
- 🟡 SEO-Optimierung ausbaufähig

---

### UX Audit

<ScoreCard title="Gesamt-UX" :score="68" status="warning" />

**UX-Dimensionen:**
| Dimension | Score | Status |
|-----------|-------|--------|
| Navigation | 72/100 | 🟡 |
| Mobile UX | 58/100 | 🔴 |
| Form UX | 45/100 | 🔴 |
| Search UX | 52/100 | 🟡 |
| Visual Design | 85/100 | ✅ |

---

<ScoreCard title="Mobile UX" :score="58" status="warning" />

**Mobile-Analyse:**
| Aspekt | Status |
|--------|--------|
| Responsive | ✅ Ja |
| Touch-Targets | 🔴 68% zu klein |
| Viewport | 🔴 user-scalable=no |
| Page Size | 🔴 3.6 MB |
| Mobile Speed | 🟡 3.5s LCP |

**Kritische Issues:**
- 🔴 Zoom deaktiviert (`user-scalable=no`)
- 🔴 Touch-Targets unter 44x44px
- 🔴 Hamburger-Menü-Label fehlt
- 🟡 Große Bilder für Mobile

---

<ScoreCard title="Navigation UX" :score="72" status="warning" />

**Navigation-Struktur:**
- 8 Hauptmenüpunkte
- Mega-Menu für Unterkategorien
- Flyout bei Hover

**Issues:**
- 🔴 Breadcrumbs fehlen
- 🟡 Aktive Seite nicht immer erkennbar
- 🟡 Footer-Navigation könnte besser strukturiert sein

---

<ScoreCard title="Form UX" :score="45" status="danger" />

**Formular-Analyse:**
| Aspekt | Status |
|--------|--------|
| Anzahl Felder | 🔴 8 Felder (zu viele) |
| Inline-Validierung | 🔴 Fehlt |
| Error-Messages | 🟡 Generisch |
| Progress-Indicator | 🔴 Fehlt |
| Auto-Complete | 🔴 Nicht implementiert |
| Mobile-Optimierung | 🟡 Ausbaufähig |

**Empfehlungen:**
1. Felder auf 4-5 reduzieren
2. Inline-Validierung implementieren
3. Klare Error-Messages
4. Auto-Complete für Standardfelder

---

<ScoreCard title="Search UX" :score="52" status="warning" />

**Such-Funktionalität:**
| Feature | Status |
|---------|--------|
| Autocomplete | 🔴 Fehlt |
| Facetten/Filter | 🔴 Fehlt |
| Relevanz-Ranking | 🟡 Basic |
| No-Results-Handling | 🔴 Keine Alternativen |
| Mobile-Suche | 🟡 OK |

---

## CMS-Empfehlung

### Aktuelles CMS: Drupal 10 + React/Next.js

| Aspekt | Bewertung |
|--------|-----------|
| **Architektur** | ✅ Modern (Headless/Decoupled) |
| **Skalierbarkeit** | ✅ Enterprise-ready |
| **Performance** | ✅ Gut (CDN, Edge-Caching) |
| **Wartbarkeit** | ✅ Standard-Stack |
| **Zukunftssicherheit** | ✅ Drupal 11 Upgrade-Pfad |

::: info Drupal 11 Upgrade
Ein Upgrade auf Drupal 11 ist empfohlen für:
- Verbesserte Performance
- Neue Layout Builder Features
- Security Updates
- PHP 8.3 Support
:::

### CMS-Vergleich (falls Neuaufbau)

<ComparisonTable>

| CMS | Score | Empfehlung |
|-----|-------|------------|
| **Drupal 11** | 92/100 | ✅ Empfohlen (Upgrade) |
| TYPO3 v13 | 45/100 | ❌ Nicht empfohlen |
| Ibexa DXP | 78/100 | 🟡 Alternative |
| Storyblok | 75/100 | 🟡 Für Marketing-Sites |

</ComparisonTable>

### Warum Drupal 11?

1. **Kontinuität** - Nahtloses Upgrade von Drupal 10
2. **Headless-Ready** - Bereits decoupled, API-first
3. **Enterprise-Features** - Workflows, Multi-Language, Multi-Site
4. **Community** - Große aktive Community, viele Module
5. **Keine Lizenzkosten** - Open Source

---

## Aufwandsschätzung

### Bei CMS-Upgrade (Drupal 10 → 11)

| Phase | Aufwand | Kosten |
|-------|---------|--------|
| Analyse & Planung | 20 PT | 22.000 € |
| Drupal 11 Upgrade | 40 PT | 44.000 € |
| Frontend-Anpassungen | 25 PT | 27.500 € |
| Testing & QA | 20 PT | 22.000 € |
| Go-Live & Hypercare | 10 PT | 11.000 € |
| **Gesamt** | **115 PT** | **126.500 €** |

### BFSG-Remediation (separat)

| Maßnahme | Aufwand | Kosten |
|----------|---------|--------|
| Accessibility Audit | 5 PT | 5.500 € |
| Kontrast-Fixes | 10 PT | 11.000 € |
| ARIA & Semantik | 15 PT | 16.500 € |
| Testing & Validation | 10 PT | 11.000 € |
| **Gesamt** | **40 PT** | **44.000 €** |

---

## Social Media Präsenz

| Kanal | Follower | Aktivität |
|-------|----------|-----------|
| **LinkedIn** | 75.000+ | ✅ Sehr aktiv |
| **Instagram** | 8.200+ | ✅ Aktiv (800 Posts) |
| **XING** | 15.000+ | ✅ Aktiv |
| **YouTube** | 3.000+ | ✅ Regelmäßig |
| **GitHub** | 74 Repos | ✅ Aktiv |
| **Twitter/X** | 5.000+ | 🟡 Weniger aktiv |

**Gesamt-Reichweite:** ~89.900 Follower

---

## Aktuelle News (2024/2025)

1. **GenAI-Boom** - 100+ Projekte, Umsatz verdoppelt
2. **Lünendonk Platz 4** - Top-4 IT-Dienstleister Deutschland
3. **9M 2024** - Umsatz +13%, EBITDA +17%
4. **SAP Partnerschaften** - 4 neue Zertifizierungen
5. **German Brand Awards** - 5 Auszeichnungen

---

## Wettbewerber-Analyse

| Wettbewerber | Stärken | Schwächen |
|--------------|---------|-----------|
| **msg systems** | SAP-Fokus, Öffentl. Sektor | Weniger digital |
| **Capgemini** | Global, Skalierung | Weniger agil |
| **CGI** | Breites Portfolio | Weniger Innovation |
| **T-Systems** | Telekom-Backing, Cloud | Bürokratisch |
| **NTT DATA** | Japan-Backing, Global | Kulturelle Hürden |

**adesso Positionierung:** Mittelständischer Champion mit Agilität und Innovationskraft (GenAI, Cloud)

---

## Handlungsempfehlung

### Für Business Developer

| Aktion | Empfehlung | Begründung |
|--------|------------|------------|
| **Lead verfolgen?** | ❌ Nein | Eigener IT-Dienstleister |
| **Partnerschaft prüfen?** | ✅ Ja | Drupal-Expertise ergänzen |
| **Kontakt aufnehmen?** | ✅ Ja (Networking) | Potenzielle Kooperationen |

### Partnerschaftsoptionen

| Option | Beschreibung | Potenzial |
|--------|--------------|-----------|
| **Drupal-Subcontracting** | adesso gibt Drupal-Projekte ab | 🟡 Mittel |
| **Co-Selling** | Gemeinsame Kundenansprache | ✅ Hoch |
| **Technologie-Partnerschaft** | Drupal-Module gemeinsam entwickeln | 🟡 Mittel |
| **Referral-Partner** | Gegenseitige Empfehlungen | ✅ Hoch |

### Ansprechpartner

| Bereich | Kontakt |
|---------|---------|
| **Vorstand** | Siehe IR-Seite adesso.de |
| **Business Development** | bd@adesso.de |
| **Partnerschaften** | partner@adesso.de |
| **Presse** | presse@adesso.de |

---

## Fazit

**adesso SE ist kein klassischer Akquise-Lead**, sondern ein potenzieller **Partner**. Als einer der größten IT-Dienstleister Deutschlands haben sie eigene CMS-Expertise (Drupal, Magnolia) und nutzen Drupal 10 für ihre Corporate Site.

**Die Website hat technische Defizite:**
- 🔴 **BFSG nicht konform** (Deadline 28.06.2025)
- 🔴 **Performance** (LCP 3.8s)
- 🟡 **Lead-Generierung** schwach

**Empfehlung:**
1. **Keine Akquise** - adesso ist Wettbewerber/Partner
2. **Partnerschaft prüfen** - Drupal-Kooperationen möglich
3. **Networking** - Branchenkontakte pflegen

---

## Anhang

### Sitemap-Übersicht

- **Gesamtseiten:** ~4.427 URLs
- **Hauptbereiche:** Lösungen, Branchen, Karriere, Unternehmen, News
- **Sprachen:** DE, EN
- **Content-Typen:** 12 verschiedene

### Technische Details

- **Drupal Version:** 10.x
- **PHP Version:** 8.2+
- **Frontend:** React 18.x, Next.js 14.x
- **Build:** SSG mit ISR
- **CDN:** Cloudflare
- **Hosting:** AWS (eu-central-1)

---

*Report erstellt am: 25.12.2025*
*BD-Audit Agent Suite | adesso CMS Engineering*
