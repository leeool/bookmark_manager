import React from "react"

interface IUseImage {
  fileData: string
  fileName: string
}

const UseImage = () => {
  const [data, setData] = React.useState<IUseImage | null>(null)
  const [erro, setErro] = React.useState<string | null>(null)

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (
      target.files &&
      target.files[0] &&
      target.files[0].type.split("/")[0] === "image" &&
      target.files[0].size <= 5000000
    ) {
      const reader = new FileReader()
      const imageURL = target.files[0]

      reader.addEventListener("load", () => {
        setData({
          fileData: String(reader.result),
          fileName: target.files![0].name
        })
        setErro(null)
      })

      reader.readAsDataURL(imageURL)
    } else {
      setData(null)
      setErro("imagem inválida")
    }
  }

  return { data, erro, onChange }
}

export default UseImage
