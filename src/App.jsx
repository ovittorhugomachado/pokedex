
import './App.css'
import { getPokemon, getPokemonsData } from './services/pokeApi'
import { Logo } from './components/header/header'
import { MainHome } from './components/main-home/main-home'
import { ThemeProvider } from './contexts/theme-context'
import { GlobalStyle } from './globalStyle'



function App() {
console.log(getPokemon(10, 10))
console.log(getPokemonsData('metapod'))
 
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Logo />
      <MainHome />

    </ThemeProvider>
  )
}

export default App