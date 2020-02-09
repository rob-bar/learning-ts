import React from 'react'

type Props = {
  title: string
  isActive?: boolean
}

export const Head = ({ title, isActive = true }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      {isActive && <p>Active</p>}
    </div>
  )
}
