import Url from 'url-parse'

export default (req, res, next) => {
  const url = new Url(req.url)
  if (url.pathname.match(/[A-Z]/) || url.pathname.match(/(^|[^:])\/{2,}/)) {
    url.set('pathname',url.pathname.replace(/\/+/g, "/").toLowerCase())
    redirect(res,url.href)
    return;
  }
  if(url.pathname.length>1 && url.pathname.endsWith('/')) {
    url.set('pathname', url.pathname.slice(0,-1))
    redirect(res, url.href)
    return
  }
  next()
}

function redirect(res, location) {
  res.writeHead(301, {
    location
  })
  res.end()
}
