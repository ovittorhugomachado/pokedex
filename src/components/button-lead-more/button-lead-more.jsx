import { Button, Link } from './styles'
import { ThemeContext } from '../../contexts/theme-context'
import { useContext } from 'react'

export function ButtonLeadMore() {

    const { theme, changeTheme } = useContext(ThemeContext)

    return (
        <Button theme={theme}>
            <Link theme={theme} href="#">Carregar mais</Link>
        </Button>
    )
}