import { Card, Name } from "./style";

export function PokemonCard({}) {
    return (
        <Card>
            <img width={120} src={image} alt={name} />
            <Name theme={theme}>{name}</Name>
        </Card>
    )
}