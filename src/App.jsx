import { useContext, useEffect } from 'react'
import { ThemeContext } from './contexts/theme-context'
import './App.css'
<<<<<<< HEAD
import { getPokemon, getPokemonsData } from './services/pokeApi'
import { Logo } from './components/header/header'
import { MainHome } from './components/main-home/main-home'
import { ThemeProvider } from './contexts/theme-context'
import { GlobalStyle } from './globalStyle'
import { ButtonLeadMore } from './components/buttons/button-primary/button-primary'
=======
import { getPokemon } from './services/pokeApi'
import { Logo } from './components/logo/logo'
import { Main } from './components/main/main'
import { ButtonBackHome } from './components/button-back-home/button-back-home'
<<<<<<< Updated upstream
import { ThemeProvider } from './contexts/theme-context'
import { GlobalStyle } from './globalStyle'
import { ButtonLeadMore } from './components/button-lead-more/button-lead-more'
=======
import ThemeTogglerButton from './components/theme-toggler-button/theme-toggler-button'
import { ThemeProvider } from './contexts/theme-context'
function App() {
>>>>>>> Stashed changes
>>>>>>> 035ca8c8ce361772a9a2891746178e3bed5809ba


function App() {
console.log(getPokemon(10, 10))
console.log(getPokemonsData('metapod'))
 
  return (
<<<<<<< Updated upstream
    <ThemeProvider>
      <GlobalStyle />
      <Logo />
      <MainHome />
      <ButtonLeadMore />
    </ThemeProvider>
  );
=======
    <>
      <ThemeProvider>
        <Logo />
        <ThemeTogglerButton />
        <Main />
        <ButtonBackHome />
      </ThemeProvider>
    </>
  )
>>>>>>> Stashed changes
}



export default App;