import { Minus, Plus } from "phosphor-react";
import { IconWrapper, QuantityContainer } from "./stryles";

export function QuantityInput() {
    return (
        <QuantityContainer>
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