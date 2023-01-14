import React, { ChangeEvent } from "react"

type TypesData = {
  regex: RegExp
  message: string
}

interface Types {
  [key: string]: TypesData
}

const types: Types = {
  url: {
    regex:
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
    message: "Utilize um link válido"
  }
}

const UseForm = (type: string | null) => {
  const [value, setValue] = React.useState<string>("")
  const [error, setError] = React.useState<string | null>(null)

  const validate = (value: string) => {
    if (!type) return true
    else if (value.length === 0) {
      setError("Preencha este campo")
      return false
    } else if (type && types[type] && !types[type].regex.test(value)) {
      setError(types[type].message)
      return false
    } else {
      setError(null)
      return true
    }
  }

  type ChangeEventType = React.ChangeEvent<HTMLInputElement>

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (target instanceof HTMLInputElement) {
      if (error) validate(target.value)
      setValue(target.value)
      setError(null)
    }
  }

  return {
    value,
    onChange,
    error,
    onBlur: () => validate(value),
    validate: () => validate(value)
  }
}

export default UseForm
