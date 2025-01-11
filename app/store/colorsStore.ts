import { BACKGROUNDCOLORSPALETTE } from '@constants/color'
import { ColorSchema, PaletteColor } from '@constants/types/colors.types'
import { makeAutoObservable } from 'mobx'

class ColorsStore {
  colors: ColorSchema = BACKGROUNDCOLORSPALETTE[PaletteColor.PURPLE]
  color: PaletteColor = PaletteColor.PURPLE

  constructor() {
    makeAutoObservable(this)
  }

  handleSetColors = (color: PaletteColor) => {
    this.colors = BACKGROUNDCOLORSPALETTE[color]
    this.color = color
  }
}

const colorsStore = new ColorsStore()
export default colorsStore
