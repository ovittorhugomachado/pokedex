import { Button } from './style'
import { ThemeContext } from '../../contexts/theme-context'
import { useContext } from 'react'

export function ButtonShowMore() {

    const { theme } = useContext(ThemeContext)

    return (
        <Button theme={theme}>Carregar mais</Button>
    )
}