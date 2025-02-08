import { Button } from './styles'
import { ThemeContext } from '../../../contexts/theme-context'
import { useContext } from 'react'

export function ButtonLeadMore() {

    const { theme } = useContext(ThemeContext)

    return (
        <Button theme={theme} href='#'>Carregar mais</Button>
    )
}