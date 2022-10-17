import { Cardholder, CreditCard } from "phosphor-react";
import { PaymentMethodInput } from "../../PaymentMethodInput";
import { PaymentMethodOptionContainer } from "./styles";


export function PaymentMethodOption() {

    return (
        <PaymentMethodOptionContainer>
            <PaymentMethodInput
                icon={<CreditCard size={22} />}
                title="Cartão de crédito"
            />
            <PaymentMethodInput
                icon={<Cardholder size={22} />}
                title="cartão de débito"
            />
            <PaymentMethodInput
                icon={<Cardholder size={22} />}
                title="dinheiro"
            />
        </PaymentMethodOptionContainer>
    )
}