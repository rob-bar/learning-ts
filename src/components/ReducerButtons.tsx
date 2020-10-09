import React, { useReducer, useRef, useContext } from 'react'
import { useClickOutside } from './useClickOutside'
import { globalContext } from './GlobalState'

const initialState = { rValue: true }

type State = {
  rValue: boolean
}

type Action = {
  type: 'one' | 'two'
}

// type Action = { type: 'one' } | { type: 'two' }

// type Action =
//   | { type: 'one' }
//   | { type: 'two' }
//   | { type: 'three' }
//   | { type: 'four' }

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'one':
      return { rValue: true }
    case 'two':
      return { rValue: false }
    default:
      return state
  }
}

const ReducerButtons = () => {
  const [, dispatch] = useReducer(reducer, initialState)
  const ref = useRef<HTMLDivElement>(null!)
  const { rValue } = useContext(globalContext)

  useClickOutside(ref, () => {
    console.log('clicked Outside')
  })

  return (
    <div ref={ref}>
      {rValue && <h1>Visible</h1>}
      <button onClick={() => dispatch({ type: 'one' })}>Action one</button>
      <button onClick={() => dispatch({ type: 'two' })}>Action two</button>
    </div>
  )
}

export default ReducerButtons
