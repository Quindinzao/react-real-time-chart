import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      background: string
      backgroundChart: string
      text: string
      link: string
  
      primary: string
      secondary: string
      terciary: string
  
      gray_300: string
      gray_400: string
      gray_700: string
    }
  }
}