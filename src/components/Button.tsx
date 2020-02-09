import React from 'react'

// Lesson 6
// type Props = {
//   // onClick(): string; // method returns string
//   // onClick(): void; // method returns nothing
//   // onClick(text: string): void; // method with params
//   // onClick: () => void; // function returns nothing
//   onClick: (text: string) => void; // function with params
// }

type Props = {
  // onClick: (e: React.MouseEvent) => void // Basic mouse event
  // Basic input event
  // onChange?: (e: React.FormEvent<HTMLInputElement>) => void
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void // Button event
}

const Button = ({ onClick }: Props) => {
  return <button onClick={onClick}>Click me!</button>
}

export default Button
