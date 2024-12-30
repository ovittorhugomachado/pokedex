import { DivInputName, InputName } from "./styles"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

 export function InputSearch() {
    const { theme, changeTheme } = useContext(ThemeContext)

    return(
        <DivInputName theme={theme}>
                <InputName theme={theme} id="name" type="text" placeholder="Buscar pelo nome" />
                <a href="#"><FontAwesomeIcon icon={faChevronRight} color={theme.button}/></a>
            </DivInputName>
    )
 }
 