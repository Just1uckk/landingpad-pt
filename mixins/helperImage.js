export const helperImage = {
  methods: {
    getFullImageUrl(imageUrl) {
      if(imageUrl.includes('http')) {
        return imageUrl;
      }
      return process.env.VUE_APP_BASE_STRAPI_URL + imageUrl
    }
  }
}
