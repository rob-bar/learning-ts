import React from 'react'

type Props = {
  //onClick(): string; method returns string
  // onClick(): void; method returns nothing
  // onClick(text: string): void; method with params
  // onClick: () => void; function returns nothing
  onClick: (text: string) => void // function with params
}

const Button = ({ onClick }: Props) => {
  return <button onClick={() => onClick('hi')}>Click me!</button>
}

export default Button
