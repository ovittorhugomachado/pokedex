import './App.css'
import { ThemeProvider } from './contexts/theme-context'
import { GlobalStyle } from './globalStyle'
import { ButtonToggleTheme } from './components/button-toggle-theme'
import { Logo } from './components/logo'
import { AppRoutes } from './pages/routes'

function App() {

    return (
        <ThemeProvider>
            <GlobalStyle />
            <Logo />
            <ButtonToggleTheme />
            <AppRoutes />
        </ThemeProvider>
    )
}

export default App