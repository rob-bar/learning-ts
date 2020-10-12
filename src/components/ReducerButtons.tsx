import React, { useRef, useContext } from 'react'
import styled from 'styled-components'
import { useClickOutside } from './useClickOutside'
import { globalContext } from './GlobalState'

const ReducerButtons = () => {
  const ref = useRef<HTMLDivElement>(null!)
  const context = useContext(globalContext)
  const { rValue, turnOn, turnOff } = context

  useClickOutside(ref, () => {
    console.log('clicked Outside')
  })

  return (
    <Wrapper ref={ref}>
      {rValue && <h1>Visible</h1>}
      <button onClick={turnOn}>Action one</button>
      <button onClick={turnOff}>Action two</button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: red;
`

export default ReducerButtons
