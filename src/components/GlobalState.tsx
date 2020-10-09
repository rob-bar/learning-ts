import { createContext } from 'react'

export const initialValues = {
  rValue: true,
}

export const globalContext = createContext(initialValues)
