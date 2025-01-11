import { IBackgroundColorsPalette, PaletteColor } from './types/colors.types'

export const BACKGROUNDCOLORSPALETTE: IBackgroundColorsPalette = {
  [PaletteColor.RED]: {
    baseBgGradientColor_1: '#FAA613',
    baseBgGradientColor_2: '#E3725D',
    circlesColors: [
      'rgba(139, 0, 2, 0.8)',
      'rgba(139, 0, 2, 0)',
      'rgba(175, 6, 0, 0.8)',
      'rgba(175, 6, 0, 0)',
      'rgba(157, 173, 131, 0.8)',
      'rgba(157, 173, 131, 0)',
      'rgba(243, 163, 97, 0.8)',
      'rgba(243, 163, 97, 0)',
      'rgba(255, 252, 208, 0.8)',
      'rgba(255, 252, 208, 0)'
    ],
    cursorGradientColor1: 'rgba(255, 252, 208, 0.8)',
    cursorGradientColor2: 'rgba(255, 252, 208, 0)'
  },
  [PaletteColor.GREEN]: {
    baseBgGradientColor_1: '#69AD54',
    baseBgGradientColor_2: '#003C00',
    circlesColors: [
      'rgba(185, 239, 0, 0.8)',
      'rgba(185, 239, 0, 0)',
      'rgba(51, 146, 3, 0.8)',
      'rgba(51, 146, 3, 0)',
      'rgba(255, 238, 0, 0.8)',
      'rgba(255, 238, 0, 0)',
      'rgba(15, 1, 103, 0.8)',
      'rgba(15, 1, 103, 0)',
      'rgba(45, 244, 201, 0.8)',
      'rgba(45, 244, 201, 0)'
    ],
    cursorGradientColor1: 'rgba(197, 255, 0, 0.8)',
    cursorGradientColor2: 'rgba(197, 255, 0, 0)'
  },
  [PaletteColor.BLUE]: {
    baseBgGradientColor_1: '#2222DD',
    baseBgGradientColor_2: '#C8F8FF',
    circlesColors: [
      'rgba(15, 1, 103, 0.8)',
      'rgba(15, 1, 103, 0)',
      'rgba(222, 96, 254, 0.8)',
      'rgba(222, 96, 254, 0)',
      'rgba(255, 193, 0, 0.8)',
      'rgba(255, 193, 0, 0)',
      'rgba(15, 1, 103, 0.8)',
      'rgba(15, 1, 103, 0)',
      'rgba(200, 248, 255, 0.8)',
      'rgba(200, 248, 255, 0)'
    ],
    cursorGradientColor1: 'rgba(130, 35, 136, 0.8)',
    cursorGradientColor2: 'rgba(130, 35, 136, 0)'
  },
  [PaletteColor.PURPLE]: {
    baseBgGradientColor_1: '#6c00a2',
    baseBgGradientColor_2: '#001152',
    circlesColors: ['#1271ffcc', '#1271ff00', '#dd4affcc', '#dd4aff00', '#64dcffcc', '#64dcff00', '#c83232cc', '#c8323200', '#b4b432cc', '#b4b43200'],
    cursorGradientColor1: 'rgba(140, 100, 255, 0.8)',
    cursorGradientColor2: 'rgba(140, 100, 255, 0)'
  }
}
