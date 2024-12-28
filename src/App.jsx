import './App.css'
import { getPokemon } from './services/pokeApi'
import { Logo } from './components/logo/logo'
import { Main } from './components/main/main'
import { ButtonBackHome } from './components/button-back-home/button-back-home'
function App() {

  return (
    <>
      <Logo />
      <Main />
      <ButtonBackHome />
    </>
  )
}

export default App
