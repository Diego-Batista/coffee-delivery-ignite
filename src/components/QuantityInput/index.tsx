import { Minus, Plus } from "phosphor-react";
import { IconWrapper, QuantityContainer } from "./stryles";

interface QuantityInputProps {
    size?: "small" | "medium" 
}

export function QuantityInput({ size = "medium" }: QuantityInputProps) {
    return (
        <QuantityContainer size={size}>
            <IconWrapper>
                <Minus size={14} weight="fill"/>
            </IconWrapper>
            <input type="number"  readOnly value={1}/>
            <IconWrapper>
                <Plus size={14} weight="fill"/>
            </IconWrapper>
        </QuantityContainer>
    )
}