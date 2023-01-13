import React from "react"
import Error from "../Helpers/Error"

import styles from "./InputFile.module.scss"

type DataContent = {
  fileData: string
  fileName: string
}

interface IInputFile {
  id: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  accept: string
  error: string | null
  data: DataContent | null
}

const InputFile = ({ id, onChange, accept, error, data }: IInputFile) => {
  return (
    <div>
      <label
        htmlFor={id}
        className={`${styles.imageUpload} ${data && styles.success} ${
          error && styles.erro
        }`}
      >
        {error ? (
          <Error error={error}></Error>
        ) : (
          <p>{data ? data.fileName : "Selecione uma imagem (opcional)"}</p>
        )}
        <input type="file" id={id} hidden onChange={onChange} accept={accept} />
      </label>
    </div>
  )
}

export default InputFile
