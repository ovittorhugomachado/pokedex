
import './App.css'
import { getPokemon, getPokemonsData } from './services/pokeApi'
import { MainHome } from './components/main-home'
import { ThemeProvider } from './contexts/theme-context'
import { GlobalStyle } from './globalStyle'
import { ButtonToggleTheme } from './components/button-toggle-theme'
import { Logo } from './components/logo'
import { MainDetails } from './components/main-details'



function App() {
console.log(getPokemon(10, 10))
console.log(getPokemonsData('metapod'))
 
  return (
    <ThemeProvider>
      <GlobalStyle />

      <Logo />
      <ButtonToggleTheme />
      <MainDetails />

    </ThemeProvider>
  )
}

export default App