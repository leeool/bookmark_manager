import React, {
  HTMLAttributes,
  HTMLInputTypeAttribute,
  InputHTMLAttributes
} from "react"
import styles from "./Input.module.scss"
import Error from "../Helpers/Error"

type Target = HTMLInputElement | HTMLTextAreaElement

interface Input {
  type: string
  id: string
  label: string
  value: string
  error: string | null
  placeholder: string
  onBlur: () => boolean
  onChange: ({ target }: { target: EventTarget & Target }) => void
  validate: () => boolean
  // [value: string]: any
}

const Input = ({
  type,
  id,
  label,
  value,
  error,
  onBlur,
  onChange,
  placeholder
}: Input & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className={styles.input}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {error && <Error error={error} />}
    </div>
  )
}

export default Input
