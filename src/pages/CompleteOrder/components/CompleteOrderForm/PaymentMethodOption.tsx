import { Cardholder, CreditCard } from "phosphor-react";
import { PaymentMethodInput } from "../../PaymentMethodInput";
import { PaymentMethodOptionContainer } from "./styles";
import { useFormContext } from "react-hook-form"
import { RegularText } from "../../../../components/Typograph";

export const paymentsMethods = {
    credit: {
        label: "Cartão de crédito",
        icon: <CreditCard size={16} />
    },
    debit: {
        label: "Cartão de débito",
        icon: <Cardholder size={16} />
    },
    money: {
        label: "Dinheiro",
        icon: <Cardholder size={16} />
    }
}


export function PaymentMethodOption() {
    const { register, formState: { errors } } = useFormContext()

    const paymentMethodError = errors?.paymentMethod?.message as unknown as string

    return (
        <PaymentMethodOptionContainer>
            
            {Object.entries(paymentsMethods).map(([key, {label, icon}]) => (
                <PaymentMethodInput
                    key={label}
                    id={key}
                    icon={icon}
                    label={label}
                    value={key}
                    {...register("paymentMethod")}
                />
            ))}
            {paymentMethodError && <RegularText>{paymentMethodError}</RegularText>}
        </PaymentMethodOptionContainer>
    )
}