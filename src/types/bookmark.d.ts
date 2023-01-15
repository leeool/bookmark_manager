interface Bookmark {
  name: string
  url: string
  description?: string
  image: IUseImage | null
}

interface IUseImage {
  fileData: string
  fileName: string
}
