import { coffees } from "../../../../data/coffees";
import { CoffeeCard } from "../CoffeeCard";
import { IntroTitle } from "../Intro/styles";
import { CoffeeList, OurCoffeesContainer } from "./styles";

export function OurCoffees() {
    return (
        <OurCoffeesContainer className="container">
            <IntroTitle size="l" color="subtitle">
            Nossos cafés
            </IntroTitle>

            <CoffeeList>
                {coffees.map(coffee => (
                    <CoffeeCard
                        key={coffee.id}
                        coffee={coffee}
                    />
                ))}
            </CoffeeList>
        </OurCoffeesContainer>
    )
}