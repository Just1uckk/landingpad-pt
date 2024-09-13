export default (strapi) => ({
  getMovePage() {
    return strapi.find('move-page')
  },

  getRentPage() {
    return strapi.find('rent-page')
  },

  getBuyPage() {
    return strapi.find('buy-page')
  },

  getBuildPage() {
    return strapi.find('build-page')
  },

  getApartmentBySlug(slug) {
    return strapi.findOne("apartment-lists", slug);
  },
  getIntroCards() {
    return strapi.find('home-page')
  },
})
