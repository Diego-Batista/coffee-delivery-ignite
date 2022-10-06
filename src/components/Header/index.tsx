import { HeaderButtonsBase, HeaderButtonsContainer, HeaderContainer } from "./styles";
import { MapPin, ShoppingCart} from "phosphor-react";
import coffeeLogoImg from '../../assets/coffee-delivery-logo.svg';

export function Header() {
    return (
        <HeaderContainer>
            <div className="container">
                <img src={coffeeLogoImg} alt="" />

                <HeaderButtonsContainer>
                    <HeaderButtonsBase>
                        <MapPin size={20} />
                    </HeaderButtonsBase>
                </HeaderButtonsContainer>
            </div>
        </HeaderContainer>
    )
}