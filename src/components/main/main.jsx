
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';


import { ContainerMain, ContainerTitle, RotatingImage, InputName, DivInputName } from "./styles"
export function Main() {
 

    const isHidden = true;
    return (
        <ContainerMain>
            <DivInputName>
                <InputName id="name" type="text" placeholder="Buscar pelo nome" />
                <a href="#"><FontAwesomeIcon icon={faCaretRight} size='2x' color='#FFCC01'/></a>
            </DivInputName>
            
            <ContainerTitle hidden={isHidden}>
                <RotatingImage src="../src/assets/images/logo-loading.png" alt="Logo carregando" />
                Carregando
            </ContainerTitle>
        </ContainerMain>
    )
}