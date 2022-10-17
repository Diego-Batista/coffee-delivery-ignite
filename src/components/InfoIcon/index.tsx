import { ReactNode } from "react";
import { Container } from "./styles";

interface TextIconProps {
    text?: string | ReactNode
    icon?: ReactNode
    iconBg: string
}

export function InfoIcon({ text, icon, iconBg}: TextIconProps) {
    return (
        <Container iconBg={iconBg}>
            <div >
                {icon}
            </div>
            {typeof text === "string" ? <p>{text}</p>  : text}       
        </Container>
    )
}