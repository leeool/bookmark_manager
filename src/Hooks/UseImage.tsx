import React from "react"

interface IUseImage {
  fileData: string
  fileName: string
}

const UseImage = () => {
  const [data, setData] = React.useState<IUseImage | null>(null)
  const [erro, setErro] = React.useState<string | null>(null)

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (target.files && target.files[0]) {
      try {
        if (target.files[0].type.split("/")[0] !== "image")
          throw new Error("Tipo de arquivo não suportado.")
        if (target.files[0].size > 5000000)
          throw new Error(
            `O arquivo ${target.files[0].name} é muito grande. Max: 5MB`
          )

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
      } catch (e) {
        setData(null)
        if (e instanceof Error) setErro(e.message)
      }
    }
  }

  return { data, erro, onChange }
}

export default UseImage
