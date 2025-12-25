---
title: Website-Audit adesso SE
description: Vollständiger Website & Marketing Audit für adesso.de
date: 2025-12-25
company: adesso SE
domain: adesso.de
leadScore: 35
cmsDetected: Adobe Experience Manager (AEM)
---

# Website-Audit: adesso SE

<ScoreDashboard
  :scores="{
    overall: 35,
    technical: 54,
    legal: 62,
    marketing: 70,
    ux: 62,
    accessibility: 42
  }"
/>

## Executive Summary

**adesso SE** ist einer der führenden IT-Dienstleister im deutschsprachigen Raum mit **1,3 Mrd. Euro Umsatz** und **11.100+ Mitarbeitenden**. Die Website basiert auf **Adobe Experience Manager (AEM)** - einem Enterprise-CMS.

### Lead-Bewertung

| Kriterium | Bewertung |
|-----------|-----------|
| **Lead Score** | 🔴 35/100 (Kein Lead) |
| **Grund** | Eigener IT-Dienstleister & CMS-Anbieter |
| **Aktuelles CMS** | Adobe Experience Manager (AEM) |
| **Empfehlung** | Partnerschaft statt Akquise |

::: warning Kein klassischer Lead
adesso SE ist selbst IT-Dienstleister und bietet CMS-Implementierungen an (Magnolia, AEM, etc.). Eine Akquise als Drupal-Migrationsprojekt ist unwahrscheinlich. **Stattdessen: Partnerschaftspotenzial prüfen.**
:::

---

## Unternehmensprofil

### Basisdaten

| Merkmal | Wert |
|---------|------|
| **Unternehmensform** | SE (Societas Europaea) |
| **Gründung** | 1997 |
| **Hauptsitz** | Dortmund |
| **Standorte** | 65+ weltweit (32 in Deutschland) |
| **Mitarbeitende** | 11.100+ |
| **Umsatz 2024** | 1,297 Mrd. Euro |
| **Börse** | SDAX (seit 2022) |

### Geschäftsfelder

- **IT-Beratung** & Softwareentwicklung
- **Cloud-Services** (AWS Advanced Partner)
- **Digital Transformation**
- **Generative AI** (100+ Projekte)
- **CMS-Implementierung** (Magnolia Partner)

### Branchen-Fokus

1. Cross Industries (Industrie) - 247,9 Mio. EUR
2. Öffentliche Verwaltung - 207,8 Mio. EUR
3. Versicherungen - 172,6 Mio. EUR
4. Banken/Finanzdienstleistungen - 150,8 Mio. EUR
5. Gesundheitswesen (+44% Wachstum)

---

## Tech Stack Analyse

### Erkannter Stack

| Komponente | Technologie | Confidence |
|------------|-------------|------------|
| **CMS** | Adobe Experience Manager (AEM) | ✅ Sicher |
| **Frontend** | jQuery 3.6.0 | ✅ Sicher |
| **Web Components** | adesso Web Components v1.1.0 | ✅ Sicher |
| **Analytics** | Piwik PRO | ✅ Sicher |
| **Performance Monitoring** | Dynatrace | ✅ Sicher |
| **Hosting** | AWS (wahrscheinlich) | 🔶 Wahrscheinlich |

### Bewertung

::: info Enterprise-Stack
adesso nutzt einen typischen **Enterprise-Tech-Stack** mit Adobe AEM. Dies ist eine bewusste Entscheidung für einen Konzern dieser Größe. Eine Migration zu Drupal ist **nicht empfehlenswert**.
:::

---

## Audit-Ergebnisse

### Technical Audit

<ScoreCard title="Performance" :score="61" status="warning" />

**Kernprobleme:**
- 🔴 **Bildoptimierung:** 4.1 MB Bilder (79.5% der Gesamtgröße)
- 🔴 **jQuery 3.6.0:** Veraltetes Framework
- 🔴 **Web Components doppelt geladen:** CJS + ESM parallel
- 🟡 **DOM-Komplexität:** 3.596 Elemente

**Ladezeit-Performance:** ✅ Gut (TTFB: 22.7ms, DOM Complete: 1.1s)

---

<ScoreCard title="SEO" :score="58" status="warning" />

**Kritische Issues:**
- 🔴 **Meta Description fehlt komplett** (-15-30% CTR)
- 🔴 **Schema Markup fehlt** (Organization, Event, Breadcrumb)
- 🔴 **Sitemap nicht unter Standard-URL**
- 🟡 **Heading-Struktur inkonsistent**

**Positiv:** URL-Struktur, Multilingual (DE/EN), robots.txt

---

### Legal & Compliance

<ScoreCard title="DSGVO/Cookie" :score="62" status="warning" />

**Kritische Issues:**
- 🔴 **Piwik PRO lädt VOR Consent** (DSGVO-Verstoß)
- 🔴 **Dynatrace ohne Opt-in**
- 🔴 **Kein prominenter Ablehnen-Button**
- ✅ Datenschutzerklärung: Vorbildlich (85/100)
- ✅ Impressum: Vollständig (90/100)

---

<ScoreCard title="BFSG/Barrierefreiheit" :score="42" status="danger" />

**Deadline: 28. Juni 2025** ⏰

**Kritische Gaps:**
- 🔴 **45 Farb-Kontrast-Violations** (unter WCAG AA)
- 🔴 **`user-scalable=no`** deaktiviert Zoom (WCAG-Verstoß)
- 🔴 **68% Touch-Targets zu klein** (< 44x44px)
- 🔴 **12 Bilder ohne Alt-Text**
- 🔴 **57 Links ohne aussagekräftigen Text**

::: danger BFSG-Compliance gefährdet
Mit dem aktuellen Score von 42/100 ist die Website **nicht BFSG-konform**. Geschätzter Aufwand: 40-60 Stunden.
:::

---

### Marketing Audit

<ScoreCard title="Brand" :score="78" status="success" />

**Stärken:**
- ✅ Starke visuelle Identität (Blau-Palette)
- ✅ Premium-Kundenbase (BMW, Bosch, DAK, EON)
- ✅ Thought Leadership (Blog, Whitepapers, Events)
- ✅ Klare Value Proposition

**Schwächen:**
- 🟡 USPs nicht scharf differenzierend
- 🟡 Keine sichtbaren Zertifikate/Awards
- 🟡 Keine Kundentestimonials (nur Case Studies)

---

<ScoreCard title="Conversion" :score="62" status="warning" />

**Kritische Issues:**
- 🔴 **Keine Exit-Intent-Strategie** (0/100)
- 🔴 **Hero CTA fehlt** auf Homepage
- 🔴 **Formulare zu lang** (6-8 Felder)
- 🔴 **Funnel fragmentiert**

**Quick Wins:**
1. Primär-CTA auf Homepage (+10-15% Leads)
2. Exit-Intent-Popup (+5-8% Leads)
3. Formular-Felder reduzieren (+20-25% Conversion)

---

### UX Audit

<ScoreCard title="Usability" :score="62" status="warning" />

**Probleme:**
- 🔴 **Mobile:** Zoom deaktiviert, Touch-Targets zu klein
- 🔴 **Formulare:** Defekte Label-Zuordnungen
- 🔴 **Kontrast:** 43 WCAG-Violations
- 🟡 **Micro-Interactions:** Fehlende Hover-States

**Positiv:**
- ✅ Schnelle Ladezeit (236ms)
- ✅ Kein Layout Shift (CLS: 0.00)
- ✅ Gute Navigation-Struktur

---

## CMS-Empfehlung

### Aktuelles CMS: Adobe Experience Manager

| Aspekt | Bewertung |
|--------|-----------|
| **Passend für Unternehmensgröße** | ✅ Ja (Enterprise) |
| **Total Cost of Ownership** | 💰💰💰💰 (Sehr hoch) |
| **Lizenzkosten** | ~100.000-500.000 €/Jahr |
| **Technische Schulden** | jQuery, doppelte Web Components |

### Migration zu Drupal?

::: danger Nicht empfohlen
Eine Drupal-Migration ist für adesso SE **nicht sinnvoll**:

1. **Eigener IT-Dienstleister** - bieten selbst CMS-Services an
2. **AEM ist Enterprise-Standard** - passt zur Unternehmensgröße
3. **Magnolia-Partner** - haben bereits Headless-CMS-Expertise
4. **Keine klassische Akquise-Zielgruppe**
:::

### Alternative: Partnerschaft

| Option | Beschreibung |
|--------|--------------|
| **Drupal-Partnerschaft** | adesso als Drupal-Implementierungspartner gewinnen |
| **Subcontracting** | Drupal-Projekte von adesso übernehmen |
| **Co-Selling** | Gemeinsame Kundenakquise |

---

## Social Media Präsenz

| Kanal | Follower | Aktivität |
|-------|----------|-----------|
| **LinkedIn** | 10.000+ | ✅ Aktiv |
| **Instagram** | 8.190 | ✅ Aktiv (794 Posts) |
| **GitHub** | 74 Repos | ✅ Aktiv |
| **XING** | - | ✅ Aktiv |
| **YouTube** | - | ✅ Aktiv |
| **Twitter/X** | - | ✅ Aktiv |

---

## Aktuelle News (2025)

1. **GenAI Boom** - 100+ Projekte, Umsatz verdoppelt
2. **Lünendonk Platz 4** - Erstmals Top-4 in Deutschland
3. **9M 2025** - Umsatz +13%, EBITDA +17%
4. **SAP Partnerschaften** - 4 neue Zertifizierungen
5. **German Brand Awards** - 5 Auszeichnungen

---

## Handlungsempfehlung

### Für Business Developer

| Aktion | Empfehlung |
|--------|------------|
| **Lead verfolgen?** | ❌ Nein |
| **Partnerschaft prüfen?** | ✅ Ja |
| **Kontakt aufnehmen?** | Optional (Networking) |

### Ansprechpartner

- **Vorstand:** Siehe IR-Seite
- **Drupal-Interesse:** Unwahrscheinlich (Magnolia-Partner)
- **Partnerschaft:** Business Development kontaktieren

---

## Fazit

**adesso SE ist kein klassischer Akquise-Lead**, sondern ein potenzieller **Partner oder Wettbewerber**. Als einer der größten IT-Dienstleister Deutschlands haben sie eigene CMS-Expertise (Magnolia) und nutzen Adobe AEM für ihre Corporate Site.

**Die Website hat technische Defizite** (Performance, Accessibility, DSGVO-Compliance), aber diese werden intern gelöst werden.

**Empfehlung:** Partnerschaftsoptionen evaluieren statt Akquise-Versuch.
