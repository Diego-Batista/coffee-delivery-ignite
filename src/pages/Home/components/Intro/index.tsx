import { BenefitsContainer, IntroContainer, IntroContent, IntroTitle } from "./styles"
import IntroImg from "../../../../assets/intro-img.png"
import { RegularText } from "../../../../components/Typograph"
import { InfoIcon } from "../../../../components/InfoIcon"
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"
import { useTheme } from "styled-components"

export function Intro() {
    const { colors } = useTheme();

    return (
        <IntroContainer>
            <IntroContent className="container">
                <div>
                    <section>
                        <IntroTitle size="xl">
                        Encontre o café perfeito para qualquer hora do dia
                        </IntroTitle>
                        <RegularText size="l" color="subtitle" as="h3">
                        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                        </RegularText>
                    </section>
                    <BenefitsContainer>
                        <InfoIcon text="Compra simples e segura" icon={<ShoppingCart weight="fill" />} iconBg={colors["brand-yellow-dark"]} />
                        <InfoIcon text="Embalagem mantém o café intacto" icon={<Package weight="fill" />} iconBg={colors["base-text"]} />
                        <InfoIcon text="Entrega rápida e rastreada" icon={<Timer weight="fill" />} iconBg={colors["brand-yellow"]} />
                        <InfoIcon text="O café chega fresquinho até você" icon={<Coffee weight="fill" />} iconBg={colors["brand-purple"]} />
                    </BenefitsContainer>
                </div>

                <img src={IntroImg} alt="" />
            </IntroContent>
        </IntroContainer>
    )
}