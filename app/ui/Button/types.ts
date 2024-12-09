import { ReactNode } from 'react'

export interface IButtom {
  icon?: ReactNode
  text?: string
  click: () => void
}
