export default axios => ({
  sendToEmail(payload) {
    return axios.post('api/email/send', payload)
  }
})
