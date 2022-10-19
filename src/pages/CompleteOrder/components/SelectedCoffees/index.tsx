import { Button } from "../../../../components/Button";
import { TitleText } from "../../../../components/Typograph";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
    return(
        <SelectedCoffeesContainer>
            <TitleText size="xs" color="subtitle">Cafés selecionados</TitleText>

            <DetailsContainer>
                <CoffeeCartCard/>
                <CoffeeCartCard/>
                <CoffeeCartCard/>

                <ConfirmationSection/>
                <Button text="Confirmar pedido"/>
            </DetailsContainer>
        </SelectedCoffeesContainer>
    )
}