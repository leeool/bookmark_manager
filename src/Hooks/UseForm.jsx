import React from "react"

const types = {
  url: {
    regex:
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
    message: "Utilize um link válido"
  }
}

const UseForm = (type) => {
  const [value, setValue] = React.useState("")
  const [error, setError] = React.useState(null)

  const validate = (value) => {
    if (type === false) return true
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

  const onChange = ({ target }) => {
    if (error) validate(target.value)
    setValue(target.value)
    setError(null)
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
