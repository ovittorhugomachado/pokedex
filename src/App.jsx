
import './App.css'
import { getPokemon, getPokemonsData } from './services/pokeApi'
import { MainHome } from './components/main'
import { ThemeProvider } from './contexts/theme-context'
import { GlobalStyle } from './globalStyle'
import { ButtonToggleTheme } from './components/button-toggle-theme'
import { Logo } from './components/logo'



function App() {
console.log(getPokemon(10, 10))
console.log(getPokemonsData('metapod'))
 
  return (
    <ThemeProvider>
      <GlobalStyle />

      <Logo />
      <ButtonToggleTheme />
      <MainHome />

    </ThemeProvider>
  )
}

export default App