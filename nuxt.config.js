import redirectSSL from "redirect-ssl";
import BaseSitemap from "./utils/sitemap/sitemapList/index";

const isMetaRobotsNoIndex = process.env.NODE_ENV === "development" ? {name: "robots", content: "noindex"} : {};

export default {
  head: {
    title: "LandingPad",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      {charset: "utf-8"},
      {name: "viewport", content: "width=device-width, initial-scale=1"},
      {hid: "description", name: "description", content: ""},
      {name: "format-detection", content: "telephone=no"},
      isMetaRobotsNoIndex
    ],
    link: [
      {rel: "icon", type: "image/x-icon", href: "/favicon.png"}
    ]
  },
  loading: {
    color: "var(--primary)"
  },
  css: ["~assets/scss/index.scss"],
  plugins: [
    {src: "~/plugins/google-maps.js"},
    {src: "~plugins/api.js"},
    {src: "~plugins/lodash.js"},
    {src: "~plugins/markdownIt.js"},
    {src: "~plugins/portal.js"},
    {src: "~plugins/directives/click-outside.js", mode: "client"}
  ],
  components: true,
  buildModules: [
    "@nuxtjs/eslint-module",
  ],
  modules: [
    'portal-vue/nuxt',
    "@nuxtjs/gtm",
    "@nuxtjs/google-gtag",
    "@nuxtjs/strapi",
    "@nuxtjs/axios",
    "@nuxtjs/i18n",
    "@nuxtjs/style-resources",
    "@nuxtjs/toast",
    "@nuxtjs/sitemap"
  ],
  env: {
    GOOGLE_API_KEY: process.env.VUE_APP_GOOGLE_API_KEY,
    VUE_APP_BASE_API_URL: process.env.VUE_APP_BASE_API_URL,
    VUE_APP_BASE_STRAPI_URL: process.env.VUE_APP_BASE_STRAPI_URL,
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    GTM_ID: process.env.GTM_ID,
    VUE_APP_INSTAGRAM_ACCESS_TOKEN: process.env.VUE_APP_INSTAGRAM_ACCESS_TOKEN,
    VUE_APP_INSTAGRAM_ACCOUNT_LINK: process.env.VUE_APP_INSTAGRAM_ACCOUNT_LINK
  },
  styleResources: {
    scss: ["~assets/scss/global-variables.scss"]
  },
  strapi: {
    entities: [],
    url: process.env.VUE_APP_BASE_STRAPI_URL
  },
  axios: {
    baseURL: process.env.VUE_APP_BASE_API_URL
  },
  toast: {
    position: "top-right",
    register: [
      {
        name: "default_error",
        message: "Oops...Something went wrong",
        options: {
          type: "error",
          duration: 5000
        }
      }
    ]
  },
  "google-gtag": {
    id: process.env.GOOGLE_ANALYTICS_ID,
    debug: true
  },
  gtm: {
    id: process.env.GTM_ID,
    pageTracking: true,
  },
  serverMiddleware: [
    redirectSSL.create({enabled: process.env.NODE_ENV === "production"}),
    "~/server-middleware/index",
    {path: '/', handler: '~/server-middleware/redirect.js'},
  ],
  router: {
    middleware: ['feedback'],
  },
  server: {
    port: process.env.VUE_APP_PORT,
    host: "0.0.0.0"
  },
  sitemap: {
    xmlNs: 'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    path: '/sitemap.xml',
    defaults: {
      changefreq: 'weekly',
      lastmod: new Date()
    },
    sitemaps: [
      ...BaseSitemap,
    ]
  },
  build: {
    transpile: [/^vue2-google-maps($|\/)/],
  }
};
