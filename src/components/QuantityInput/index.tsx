import { Minus, Plus } from "phosphor-react";
import { IconWrapper, QuantityContainer } from "./stryles";

interface QuantityInputProps {
    size?: "small" | "medium" 
    OnIncrease: () => void
    OnDecrease: () => void
    quantity: number
}

export function QuantityInput({ size = "medium", OnIncrease, OnDecrease, quantity }: QuantityInputProps) {
    return (
        <QuantityContainer size={size}>
            <IconWrapper disabled={quantity === 0} onClick={OnDecrease}>
                <Minus size={14} weight="fill"/>
            </IconWrapper>
            <input type="number"  readOnly value={quantity}/>
            <IconWrapper onClick={OnIncrease}>
                <Plus size={14} weight="fill"/>
            </IconWrapper>
        </QuantityContainer>
    )
}