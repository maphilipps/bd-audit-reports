import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BD-Audit Reports",
  description: "Website & Marketing Audits by adesso SE",

  // Output directory
  outDir: '../dist',

  // Base URL for GitHub Pages / Netlify
  base: '/',

  // Theme configuration
  themeConfig: {
    logo: '/adesso-logo.svg',

    nav: [
      { text: 'Dashboard', link: '/' },
      { text: 'Kunden', link: '/customers/' }
    ],

    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/adesso-se' }
    ],

    footer: {
      message: 'adesso SE - Solutions for Digital Business',
      copyright: `© ${new Date().getFullYear()} adesso SE. Alle Rechte vorbehalten.`
    },

    // Search
    search: {
      provider: 'local'
    },

    // Sidebar will be dynamically generated per customer
    sidebar: 'auto'
  },

  // Markdown configuration
  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },

  // Head tags
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#006EC7' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:site_name', content: 'BD-Audit Reports - adesso SE' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600;700&display=swap', rel: 'stylesheet' }]
  ],

  // Last updated
  lastUpdated: true,

  // Clean URLs
  cleanUrls: true
})
