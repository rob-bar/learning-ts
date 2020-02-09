import React from 'react'

// Lesson 6
// type Props = {
//   // onClick(): string; // method returns string
//   // onClick(): void; // method returns nothing
//   // onClick(text: string): void; // method with params
//   // onClick: () => void; // function returns nothing
//   onClick: (text: string) => void; // function with params
// }

// Lesson 7 events
// type Props = {
//   // onClick: (e: React.MouseEvent) => void // Basic mouse event
//   // Basic input event
//   // onChange?: (e: React.FormEvent<HTMLInputElement>) => void
//   onClick: (e: React.MouseEvent<HTMLButtonElement>) => void // Button event
// }

type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

// use React.Fc to type components that use children props
const Button: React.FC<Props> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>
}

export default Button
