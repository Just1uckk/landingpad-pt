export default gtag => ({
  gtagEvent(eventName, eventOption) {
    gtag('event', eventName, eventOption)
  }
})
