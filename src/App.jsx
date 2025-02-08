import { useContext } from 'react'
import { ThemeContext } from './contexts/theme-context'
import './App.css'
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


function App() {
  return (
<<<<<<< Updated upstream
    <ThemeProvider>
      <GlobalStyle />
      <Logo />
      <Main />
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