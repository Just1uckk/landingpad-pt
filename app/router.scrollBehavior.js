export default function (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  }

  const findEl = async (hash, x) => {
    return document.querySelector(hash) ||
      new Promise((resolve) => {
        if (x > 50) {
          return resolve()
        }
        setTimeout(() => {
          resolve(findEl(hash, ++x || 1))
        }, 100)
      })
  }

  if (to.hash) {
    findEl(to.hash).then((el) => {
      el.scrollIntoView({ behavior: 'smooth' })
    })
  } else return { x: 0, y: 0 }
}
