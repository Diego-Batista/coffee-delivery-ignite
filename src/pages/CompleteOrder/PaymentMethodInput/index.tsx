import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { ContentContainer, PaymentMethodInputContainer } from "./styles";

type PaymentMethodOptionProps = InputHTMLAttributes<HTMLInputElement> & {
    icon: ReactNode
    label: string
}

export const PaymentMethodInput = forwardRef<HTMLInputElement, PaymentMethodOptionProps>(({icon, label, id, ...props}, ref) => {
    return (
        <PaymentMethodInputContainer >
            <input id={id} type="radio" {...props} name="paymentMethod" ref={ref}/>
            <label htmlFor={id}>
                <ContentContainer>
                    {icon}
                    {label}
                </ContentContainer>
            </label>
        </PaymentMethodInputContainer>
    )
})