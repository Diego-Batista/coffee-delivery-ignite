import { RegularText, TitleText } from "../../components/Typograph";
import { OrderConfirmedContainer, OrderDetailsConatiner } from "./styles";
import Ilustatrion from '../../assets/ilustration.svg'
import { InfoIcon } from "../../components/InfoIcon";
import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { useTheme } from "styled-components";

export function OrderConfirmed() {
    const { colors } = useTheme()
    return (
        <OrderConfirmedContainer className="container">
            <div>
                <TitleText size="l">Uhu! Pedido confirmado</TitleText>
                <RegularText size="l" color="subtitle">Agora é só aguardar que logo o café chegará até você</RegularText>
            </div>

            <section>
                <OrderDetailsConatiner>
                    <InfoIcon 
                        icon={<MapPin weight="fill" />} 
                        iconBg={colors["brand-purple"]} 
                        text={
                            <RegularText>
                                Entrega em <strong>Rua João Daniel Martinelli, 102</strong> 
                                <br/>
                                Farrapos - Porto Alegre, RS
                            </RegularText>
                        }
                />
                    <InfoIcon 
                        icon={<Clock weight="fill" />} 
                        iconBg={colors["brand-yellow"]}
                        text={
                            <RegularText>
                                Previsão de entrega 
                                <br/>
                                <strong>20 min - 30 min</strong>
                            </RegularText>
                        }
                    />
                    <InfoIcon 
                        icon={<CurrencyDollar weight="fill" />} 
                        iconBg={colors["brand-yellow-dark"]}
                        text={
                            <RegularText>
                                Pagamento na entrega 
                                <br/>
                                <strong>Cartão de Crédito</strong>
                            </RegularText>
                        }
                    />
                </OrderDetailsConatiner>

                <img src={Ilustatrion} alt="" />
            </section>
        </OrderConfirmedContainer>
    )
}