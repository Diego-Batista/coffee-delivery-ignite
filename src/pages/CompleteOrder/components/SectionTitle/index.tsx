import { ReactNode } from "react";
import { RegularText } from "../../../../components/Typograph";
import { SectionTitleContainer } from "./styles";

interface SectionTitleProps {
    title: string
    subTitle: string
    icon: ReactNode
}

export function SectionTitle({ title, subTitle, icon}: SectionTitleProps) {
    return (
        <SectionTitleContainer>
            {icon}
            <div>
                <RegularText color="subtitle">{title}</RegularText>
                <RegularText size="s">{subTitle}</RegularText>
            </div>
        </SectionTitleContainer>
    )
}