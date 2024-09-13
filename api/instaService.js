export default axios => ({
  getInstagramFeed(limit = 3) {
    const params = {
      fields: "media_type,permalink,media_url",
      access_token: process.env.VUE_APP_INSTAGRAM_ACCESS_TOKEN,
      limit
    };

    return axios.get("https://graph.instagram.com/me/media", { params });
  }
})
