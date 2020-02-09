import React, { useState, useRef } from 'react'

// Lesson 9
// export const Input = () => {
//   // TS wil infer yuor useState types via its initial value set
//   const [name, setName] = useState('') // Type inference
//   // const [name, setName] = useState<string>('') // type: string
//   // const [name, setName] = useState<string | null>(null) // union type: string or null
//   return <input value={name} onChange={e => setName(e.target.value)} />
// }

export const Input = () => {
  const [name, setName] = useState('')
  // const ref = useRef<HTMLInputElement | null>(null) // this value is also writable

  // this ref is read only
  const ref = useRef<HTMLInputElement>(null!)

  ref.current &&
    ref.current.value &&
    console.log('TCL: Input -> ref', ref.current.value)
  return (
    <input ref={ref} value={name} onChange={e => setName(e.target.value)} />
  )
}
