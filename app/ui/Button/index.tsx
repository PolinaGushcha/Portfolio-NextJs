import React from 'react'

import { IButtom } from './types'

export const Button: React.FC<IButtom> = ({ icon, text, click }) => {
  return (
    <div onClick={click}>
      {icon}
      <p>{text}</p>
    </div>
  )
}
