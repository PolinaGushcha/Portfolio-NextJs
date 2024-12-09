import { BACKGROUNDCOLORSPALETTE, IBackgroundColorsPalette } from '@constants/color.constants'
import { makeAutoObservable } from 'mobx'

class ColorsStore {
  colors: [string, string, string[], string, string] = BACKGROUNDCOLORSPALETTE.purple
  color = 'purple' as keyof IBackgroundColorsPalette

  constructor() {
    makeAutoObservable(this)
  }

  handleSetColors = (color: string) => {
    switch (color) {
      case 'red':
        this.colors = BACKGROUNDCOLORSPALETTE.red
        this.color = 'red'
        break
      case 'green':
        this.colors = BACKGROUNDCOLORSPALETTE.green
        this.color = 'green'
        break
      case 'blue':
        this.colors = BACKGROUNDCOLORSPALETTE.blue
        this.color = 'blue'
        break
      case 'purple':
        this.colors = BACKGROUNDCOLORSPALETTE.purple
        this.color = 'purple'
        break
    }
  }
}

export default new ColorsStore()
