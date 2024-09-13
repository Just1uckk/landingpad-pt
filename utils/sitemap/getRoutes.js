import axios from "axios";
import staticPages from "./staticPages.json";

export const getPageRoutes = () => {
  return staticPages.map((post) => {
    return {
      url: post,
      changefreq: 'weekly',
      priority: 1,
      lastmod: new Date(),
    };
  });
};

export const getBlogRoutes = async () => {
  const data = await axios.get(
    process.env.VUE_APP_BASE_STRAPI_URL + '/articles');
  return data.data.map((post) => {
    return {
      url: `/blog/${post.slug}`,
      changefreq: 'weekly',
      priority: 0.64,
      lastmod: post.updated_at,
    };
  });
};

// export const getAccommodationRoutes = async () => {
//   const data = await axios.get(
//     process.env.VUE_APP_BASE_STRAPI_URL + '/accommodation-articles');
//   return data.data.map((post) => {
//     return {
//       url: `/accommodation/${post.slug}`,
//       changefreq: 'weekly',
//       priority: 0.64,
//       lastmod: post.updated_at,
//     };
//   });
// };

export const getSeoRoutes = async () => {
  const data = await axios.get(
    process.env.VUE_APP_BASE_STRAPI_URL + '/seo-lists');
  return data.data.map((post) => {
    return {
      url: `/${post.slug}`,
      changefreq: 'weekly',
      priority: 0.5,
      lastmod: post.updated_at,
    };
  });
};

export const getMoveRoutes = async () => {
  const data = await axios.get(
    process.env.VUE_APP_BASE_STRAPI_URL + '/services');
  return data.data.map((post) => {
    return {
      url: `/move/${post.slug}`,
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: post.updated_at,
    };
  });
};


// services


export const getRentRoutes = async () => {
  const data = await axios.get(
    process.env.VUE_APP_BASE_STRAPI_URL + '/apartments/rent');
  return data.data.apartment_lists.map((post) => {
    return {
      url: `/rent/${post.slug}`,
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: post.updated_at,
    };
  });
};

export const getBuildRoutes = async () => {
  const data = await axios.get(
    process.env.VUE_APP_BASE_STRAPI_URL + '/apartments/build');
  return data.data.apartment_lists.map((post) => {
    return {
      url: `/build/${post.slug}`,
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: post.updated_at,
    };
  });
};

export const getBuyRoutes = async () => {
  const data = await axios.get(
    process.env.VUE_APP_BASE_STRAPI_URL + '/apartments/build');
  return data.data.apartment_lists.map((post) => {
    return {
      url: `/build/${post.slug}`,
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: post.updated_at,
    };
  });
};

