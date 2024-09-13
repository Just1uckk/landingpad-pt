import staticPages from "../staticPages.json";
import {
  getRentRoutes,
  getBuyRoutes,
  getBuildRoutes,
  getMoveRoutes,
} from "../getRoutes";

const SitemapServices = [
  {
    path: '/rent-sitemap.xml',
    exclude: staticPages,
    routes: async () => {
      return await getRentRoutes();
    }
  },
  {
    path: '/buy-sitemap.xml',
    exclude: staticPages,
    routes: async () => {
      return await getBuyRoutes();
    }
  },
  {
    path: '/build-sitemap.xml',
    exclude: staticPages,
    routes: async () => {
      return await getBuildRoutes();
    }
  },
  {
    path: '/move-sitemap.xml',
    exclude: staticPages,
    routes: async () => {
      return await getMoveRoutes();
    }
  },
]
export default SitemapServices
