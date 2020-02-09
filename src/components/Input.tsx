import React, { useState } from 'react'

export const Input = () => {
  // TS wil infer yuor useState types via its initial value set
  const [name, setName] = useState('') // Type inference
  // const [name, setName] = useState<string>('') // type: string
  // const [name, setName] = useState<string | null>(null) // union type: string or null
  return <input value={name} onChange={e => setName(e.target.value)} />
}
