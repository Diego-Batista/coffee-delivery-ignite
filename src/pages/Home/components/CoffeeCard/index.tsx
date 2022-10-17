import { AddCartWrapper, CardFooter, CoffeCardContainer, Descripition, Name, Tags } from "./styles";
import { RegularText, TitleText } from "../../../../components/Typograph";
import { QuantityInput } from "../../../../components/QuantityInput";
import { ShoppingCart } from "phosphor-react";
import { formatMoney } from "../../../../utils/FormatMoney";
import { NavLink } from "react-router-dom";

export interface Coffee {
    id: number
    tags: string[]
    name: string
    description: string
    photo: string
    price: number
}

 interface CoffeeProps {
    coffee: Coffee
 }
export function CoffeeCard({ coffee}: CoffeeProps) {
    const formattedPrice = formatMoney(coffee.price)

    return (
        <CoffeCardContainer>
            <img src={`/coffees/${coffee.photo}`} alt="" />

            <Tags>
                {coffee.tags.map(tag => (
                    <span key={`${coffee.id}${tag}`}>
                        {tag}
                    </span>
                ))}
            </Tags>

            <Name>{coffee.name}</Name>
            <Descripition>
                {coffee.description}
            </Descripition>

            <CardFooter>
                <div>
                    <RegularText size="s">R$</RegularText>
                    <TitleText size="m" color="text" as="strong">{formattedPrice}</TitleText>
                </div>
                
                <AddCartWrapper>
                    <QuantityInput/>
                    
                        <button>
                            <ShoppingCart size={22} weight="fill"/>
                        </button>
                </AddCartWrapper>
            </CardFooter>
        </CoffeCardContainer>
    )
}