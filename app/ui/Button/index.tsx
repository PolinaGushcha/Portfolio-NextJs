import React from 'react'

import styles from './button.module.css'
import { IButtom } from './types'

export const Button: React.FC<IButtom> = ({ icon, text, click }) => {
  return (
    <div className={styles.buttonContainer} onClick={click}>
      {text && <p className={styles.text}>{text}</p>}
      {icon}
    </div>
  )
}
