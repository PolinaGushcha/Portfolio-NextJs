export type IBackgroundColorsPalette = Record<PaletteColor, ColorSchema>

export enum PaletteColor {
  RED = 'red',
  GREEN = 'green',
  BLUE = 'blue',
  PURPLE = 'purple'
}

export type ColorSchema = {
  baseBgGradientColor_1: string
  baseBgGradientColor_2: string
  circlesColors: string[]
  cursorGradientColor1: string
  cursorGradientColor2: string
}
