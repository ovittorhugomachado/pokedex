import { useContext, useEffect } from 'react'
import { ThemeContext } from './contexts/theme-context'
import './App.css'
import { getPokemon, getPokemonsData } from './services/pokeApi'
import { Logo } from './components/header/header'
import { MainHome } from './components/main-home/main-home'
import { ThemeProvider } from './contexts/theme-context'
import { GlobalStyle } from './globalStyle'
import { ButtonLeadMore } from './components/buttons/button-primary/button-primary'


function App() {
console.log(getPokemon(10, 10))
console.log(getPokemonsData('metapod'))
 
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Logo />
      <MainHome />
      <ButtonLeadMore />
    </ThemeProvider>
  );
}



export default App;