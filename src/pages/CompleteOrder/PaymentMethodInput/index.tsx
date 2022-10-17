import { ReactNode } from "react";
import { PaymentMethodInputContainer } from "./styles";

interface PaymentMethodOptionProps {
    icon: ReactNode
    title: string
}

export function PaymentMethodInput({ icon, title}: PaymentMethodOptionProps) {
    return (
        <PaymentMethodInputContainer>
            {icon}
            {title}
        </PaymentMethodInputContainer>
    )
}