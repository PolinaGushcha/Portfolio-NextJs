import React, { ReactNode } from 'react'

interface IButtom {
  icon?: ReactNode
  text?: string
  click: () => void
}

export const Button: React.FC<IButtom> = ({ icon, text, click }) => {
  return (
    <div onClick={click}>
      {icon}
      <p>{text}</p>
    </div>
  )
}
