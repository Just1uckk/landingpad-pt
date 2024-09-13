import staticPages from "../staticPages.json";
import {
  getPageRoutes,
  getBlogRoutes,
  // getAccommodationRoutes,
  getSeoRoutes
} from "../getRoutes";
import SitemapServices from './services'

const BaseSitemap = [
  {
    path: '/page-sitemap.xml',
    routes: async () => {
      return await getPageRoutes();
    }
  },
  {
    path: '/blog-sitemap.xml',
    exclude: staticPages,
    routes: async () => {
      return await getBlogRoutes();
    }
  },
  // {
  //   path: '/accommodation-sitemap.xml',
  //   exclude: staticPages,
  //   routes: async () => {
  //     return await getAccommodationRoutes();
  //   }
  // },
  {
    path: '/seo-pages-sitemap.xml',
    exclude: staticPages,
    routes: async () => {
      return await getSeoRoutes();
    }
  },
  ...SitemapServices,

]
export default BaseSitemap
