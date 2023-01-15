const regex = /https?:\/\//

const normalizeUrl = (url: string) => {
  if (url && !regex.test(url)) {
    return "https://" + url
  }
  return url
}

export default normalizeUrl
