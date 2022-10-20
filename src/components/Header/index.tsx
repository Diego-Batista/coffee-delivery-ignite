import { HeaderButtonsBase, HeaderButtonsContainer, HeaderContainer } from "./styles";
import { MapPin, ShoppingCart} from "phosphor-react";
import coffeeLogoImg from '../../assets/coffee-delivery-logo.svg';
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Header() {
    const { cartQuantity } = useCart()
    return (
        <HeaderContainer>
            <div className="container">
                <NavLink to="/">
                    <img src={coffeeLogoImg} alt="" />
                </NavLink>

                <HeaderButtonsContainer>
                    <HeaderButtonsBase variant="purple">
                        <MapPin size={20} weight="fill" />
                        Porto Alegre, RS
                    </HeaderButtonsBase>
                    <NavLink to="/completeOrder">
                        <HeaderButtonsBase variant="yellow">
                            {cartQuantity >= 1 && <span>{cartQuantity}</span>}
                            <ShoppingCart size={20} weight="fill" />
                        </HeaderButtonsBase>
                       
                    </NavLink>
                </HeaderButtonsContainer>
            </div>
        </HeaderContainer>
    )
}