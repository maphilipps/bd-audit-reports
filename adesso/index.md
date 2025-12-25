---
title: "Website Audit: adesso SE"
description: "Vollständiger 8-Phasen Audit von adesso.de - IT-Beratung & Softwareentwicklung"
domain: adesso.de
audit_date: 2025-12-25
lead_score: 78
cms_detected: FirstSpirit 5.x
recommendation: Drupal 11
effort_pt: 340
budget: 408000
---

# Website Audit: adesso SE

<ScoreDashboard :scores="{
  overall: 65,
  technical: 58,
  legal: 82,
  marketing: 78,
  ux: 72,
  accessibility: 52
}" />

## Executive Summary

**adesso SE** ist einer der führenden IT-Dienstleister in Deutschland mit über 10.000 Mitarbeitern und ca. 1,2 Mrd. EUR Umsatz. Das Unternehmen betreibt mit **adesso.de** eine umfangreiche Corporate Website auf Basis von **FirstSpirit CMS**.

### Quick Facts

| Attribut | Wert |
|----------|------|
| **Domain** | adesso.de |
| **CMS** | FirstSpirit 5.x (Headless/CaaS) |
| **CDN** | Akamai |
| **Sprachen** | DE, EN |
| **Seiten** | 500+ |
| **Lead Score** | 78/100 🟢 |

### Kritische Erkenntnisse

::: danger 🔴 Performance kritisch
**Lighthouse Score: 25/100** - Die Website lädt extrem langsam mit LCP von 9.8 Sekunden. Massive JavaScript-Bundles (3.1 MB) blockieren das Rendering.
:::

::: warning 🟡 BFSG-Deadline beachten
**28.06.2025** - Das Barrierefreiheitsstärkungsgesetz tritt in Kraft. 43 WCAG-Verstöße wurden gefunden, Compliance-Rate liegt bei ca. 40%.
:::

::: tip 🟢 Starke Marke
**Brand Score: 82/100** - Sehr professionelles Corporate Design mit hoher Wiedererkennbarkeit. "IT gets emotional" ist ein distinktiver Claim.
:::

## Scores im Detail

### Technical Score: 58/100

| Bereich | Score | Status |
|---------|-------|--------|
| Performance (Lighthouse) | 25 | 🔴 |
| Accessibility | 52 | 🔴 |
| SEO | 72 | 🟡 |
| Security | 72 | 🟡 |
| Mobile | 68 | 🟡 |

**Hauptprobleme:**
- 🔴 LCP: 9.8s (Ziel: <2.5s)
- 🔴 TBT: 1,740ms (Ziel: <200ms)
- 🔴 JavaScript: 3.1 MB blockieren Rendering
- 🔴 43 WCAG-Verstöße (Kontraste, ARIA, Tastatur)

### Legal Score: 82/100

| Bereich | Score | Status |
|---------|-------|--------|
| Impressum | 100 | 🟢 |
| DSGVO/Cookie | 85 | 🟢 |
| BFSG | 40 | 🔴 |

**Status:**
- ✅ Impressum vollständig und TMG-konform
- ✅ Usercentrics Cookie-Consent implementiert
- ⚠️ BFSG-Compliance nicht erreicht (Deadline 28.06.2025)

### Marketing Score: 78/100

| Bereich | Score | Status |
|---------|-------|--------|
| Brand Identity | 82 | 🟢 |
| Content Strategy | 75 | 🟡 |
| Trust Signals | 80 | 🟢 |
| Conversion | 72 | 🟡 |

**Highlights:**
- ✅ Starke Orange-Markenfarbe (hoch wiedererkennbar)
- ✅ Corporate Font "adesso Sans" schafft Eigenständigkeit
- ✅ Authentische Mitarbeiter-Bildsprache
- ⚠️ Keine Ansprechpartner auf Branchenseiten
- ⚠️ Lead-Generierung könnte stärker sein

### UX Score: 72/100

| Bereich | Score | Status |
|---------|-------|--------|
| Navigation | 78 | 🟢 |
| Mobile UX | 68 | 🟡 |
| Forms | 70 | 🟡 |
| Search | 75 | 🟡 |

**Erkenntnisse:**
- ✅ Klare Mega-Menu Navigation
- ✅ Elasticsearch-Suche mit Autocomplete
- ⚠️ Mobile Performance langsam
- ⚠️ Formulare ohne Inline-Validierung

## Tech Stack

### Erkannte Technologien

| Kategorie | Technologie | Confidence |
|-----------|-------------|------------|
| **CMS** | FirstSpirit 5.x | 95% |
| **Server** | Apache 2.4.x | 95% |
| **CDN** | Akamai | 95% |
| **Analytics** | Google Analytics 4 | 95% |
| **Tag Manager** | Google Tag Manager | 95% |
| **Consent** | Usercentrics | 95% |
| **Search** | Elasticsearch | 85% |
| **Chat** | Userlike | 95% |

### Frontend Stack

| Library | Version | Status |
|---------|---------|--------|
| jQuery | 3.7.1 | 🟢 Aktuell |
| Bootstrap | 4.x | 🟡 Veraltet (5.x verfügbar) |
| Slick Carousel | 1.8.1 | 🟢 Aktuell |
| AOS | 2.3.4 | 🟢 Aktuell |

## Unternehmensinfo

### adesso SE auf einen Blick

| Attribut | Wert |
|----------|------|
| **Rechtsform** | Societas Europaea (SE) |
| **Gründung** | 1997 |
| **Hauptsitz** | Dortmund |
| **Mitarbeiter** | 10.500+ (2024) |
| **Umsatz** | 1,2 Mrd. EUR (2023) |
| **Börse** | SDAX (ISIN: DE000A0Z23Q5) |
| **Standorte DE** | 30+ |
| **International** | CH, AT, BG, HU, TR, ES, NL, Nordic |

### Geschäftsbereiche

- 🏭 **Branchen:** Automotive, Banking, Energy, Healthcare, Insurance, Public, Retail, Telco, Utilities
- 💼 **Services:** IT Consulting, Software Development, Managed Services
- 🔧 **Technologien:** Cloud, Data & Analytics, Security, Enterprise Solutions

## Top 5 Handlungsempfehlungen

### 1. 🔴 Performance optimieren (KRITISCH)

**Problem:** Lighthouse Score 25/100, LCP 9.8s
**Lösung:**
- JavaScript Code-Splitting implementieren
- Bilder in WebP/AVIF konvertieren
- Critical CSS inline laden
- Third-Party Scripts lazy laden

**Aufwand:** 20-30 PT | **Impact:** +40 Performance Score

### 2. 🔴 BFSG-Compliance herstellen (DEADLINE)

**Problem:** 43 WCAG-Verstöße, keine Accessibility Statement
**Deadline:** 28. Juni 2025
**Lösung:**
- Kontraste anpassen (Orange abdunkeln)
- Alt-Texte für alle Bilder
- Tastaturnavigation reparieren
- Accessibility Statement veröffentlichen

**Aufwand:** 20-25 PT | **Impact:** BFSG-Konformität

### 3. 🟡 Bootstrap 5 Migration

**Problem:** Bootstrap 4.x ist veraltet
**Lösung:** Migration auf Bootstrap 5.3
**Vorteile:**
- Bessere Accessibility
- Kleinere Bundle Size
- Moderne Komponenten

**Aufwand:** 15-20 PT | **Impact:** Modernere Codebasis

### 4. 🟡 Lead-Generierung stärken

**Problem:** Keine Ansprechpartner auf Branchenseiten
**Lösung:**
- Branchenexperten mit Kontaktdaten zeigen
- Download-Angebote pro Branche
- CTAs prominenter platzieren

**Aufwand:** 10-15 PT | **Impact:** Mehr qualifizierte Leads

### 5. 🟢 CMS-Modernisierung evaluieren

**Problem:** FirstSpirit ist proprietär, teuer in Wartung
**Empfehlung:** Migration auf Drupal 11
**Vorteile:**
- Open Source (keine Lizenzkosten)
- Starke Enterprise-Features
- Headless-fähig
- Große Community

**Aufwand:** 340 PT | **Budget:** 408.000 EUR

## CMS-Empfehlung

### Vergleich: FirstSpirit vs. Drupal 11

| Kriterium | FirstSpirit (aktuell) | Drupal 11 (empfohlen) |
|-----------|----------------------|----------------------|
| **Lizenzkosten** | Hoch (proprietary) | 0 EUR (Open Source) |
| **Multi-Site** | ✅ | ✅ |
| **Multi-Language** | ✅ | ✅ |
| **Headless/API** | ✅ | ✅ |
| **Accessibility** | ⚠️ | ✅ (Core) |
| **Community** | Klein | Sehr groß |
| **Flexibilität** | Mittel | Sehr hoch |
| **Vendor Lock-in** | Hoch | Keiner |

### Migrationsstrategie

**Phase 1: MVP (180 PT)**
- Basis-Setup mit Drupal Starterkit
- Core Content-Typen
- Navigation & Suche
- Responsive Theme

**Phase 2: Features (100 PT)**
- Branchenseiten mit Paragraphs
- Formulare mit Webform
- Multi-Language (DE, EN)
- Analytics-Integration

**Phase 3: Polish (60 PT)**
- Performance-Optimierung
- Accessibility-Audit
- Content-Migration
- Go-Live & Schulung

## Kontakte

### Empfohlene Ansprechpartner

| Bereich | Kontakt | Für |
|---------|---------|-----|
| **Marketing** | marketing@adesso.de | CMS-Projekte |
| **Technology** | technology@adesso.de | Technische Strategie |
| **Sales** | sales@adesso.de | Partnerschaft |

### Zentrale

```
adesso SE
Adessoplatz 1
44269 Dortmund

Tel: +49 231 7000-7000
Web: adesso.de
```

## Social Media

| Plattform | Follower | Status |
|-----------|----------|--------|
| **LinkedIn** | 18.500+ | 🟢 Sehr aktiv |
| **XING** | 12.000+ | 🟢 Aktiv |
| **YouTube** | 4.200+ | 🟢 Aktiv |
| **Instagram** | 2.800+ | 🟡 Aktiv |
| **Facebook** | 3.500+ | 🟡 Wenig aktiv |
| **Twitter/X** | 890 | 🔴 Inaktiv |

## Nächste Schritte

1. **Präsentation erstellen:** `/bd-ppt adesso`
2. **Termin vereinbaren:** Erstgespräch mit Marketing-Team
3. **Proposal vorbereiten:** CMS-Modernisierung mit Drupal 11

---

**Audit durchgeführt am:** 25. Dezember 2025
**Agenten verwendet:** 43
**Report Version:** 1.0
