import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";
import Americano from '../../../../../public/coffees/americano.png'
import { RegularText } from "../../../../components/Typograph";
import { QuantityInput } from "../../../../components/QuantityInput";
import { Trash } from "phosphor-react";

export function CoffeeCartCard() {
    return(
        <CoffeeCartCardContainer>
            <div>
                 <img src={Americano} alt="" />
                 <div>
                    <RegularText color="subtitle">Expresso Tradicional</RegularText>

                    <ActionsContainer>
                        <QuantityInput size="small" />
                        <RemoveButton>
                            <Trash size={22} />
                            Remover
                        </RemoveButton>
                    </ActionsContainer>
                 </div>
            </div>

            <p>
            R$ 9,90
            </p>
        </CoffeeCartCardContainer>
    )
}