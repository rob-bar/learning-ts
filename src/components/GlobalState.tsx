import React, { useReducer, createContext } from 'react'

const initialValues = {
  rValue: true,
  turnOn: () => {},
  turnOff: () => {},
}

export const globalContext = createContext(initialValues)

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

export const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues)

  return (
    <globalContext.Provider
      value={{
        rValue: state.rValue,
        turnOn: () => dispatch({ type: 'one' }),
        turnOff: () => dispatch({ type: 'two' }),
      }}
    >
      {children}
    </globalContext.Provider>
  )
}
