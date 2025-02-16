import { DivInputName, InputName, ButtonSearch } from "./styles"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { FaSearch } from "react-icons/fa";

export function InputSearch() {
    const { theme } = useContext(ThemeContext)

    return (
        <>
            <InputName theme={theme} id="name" type="select" placeholder="selecionar tipo" />
            <ButtonSearch>
                <FaSearch style={ {color: theme.title} } />
            </ButtonSearch>
        </>
            

    )
}
