import { Button, Link } from './styles'
import { ThemeContext } from '../../contexts/theme-context'
import { useContext } from 'react'

export function ButtonBackHome() {

    const { theme, changeTheme } = useContext(ThemeContext)

    return (
        <Button theme={theme}>
            <Link href="#">voltar para o início</Link>
        </Button>
    )
}