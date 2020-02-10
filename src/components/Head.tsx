import React from 'react'

type Props = {
  title: string
  isActive?: boolean
  type3?: Array<string>
  type4?: string[] // same as type3 but shorthand
}

export const Head = ({ title, isActive = true }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      {isActive && <p>Active</p>}
    </div>
  )
}
