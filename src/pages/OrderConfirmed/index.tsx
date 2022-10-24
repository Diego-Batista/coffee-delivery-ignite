import { RegularText, TitleText } from "../../components/Typograph";
import { OrderConfirmedContainer, OrderDetailsConatiner } from "./styles";
import Ilustatrion from '../../assets/ilustration.svg'
import { InfoIcon } from "../../components/InfoIcon";
import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { useTheme } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderData } from "../CompleteOrder";
import { paymentsMethods } from "../CompleteOrder/components/CompleteOrderForm/PaymentMethodOption";
import { useEffect } from "react";

interface LocationType {
    state: OrderData
}

export function OrderConfirmed() {
    const { colors } = useTheme()

    const { state } = useLocation() as unknown as LocationType

    const navigate = useNavigate()

    useEffect(() => {
        if(!state) {
            navigate("/")
        }
    }, [])

    if(!state) return <></>

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
                                Entrega em <strong>{state.street}, {state.number}</strong> 
                                <br/>
                                {state.district} - {state.city}, {state.uf}
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
                                <strong>{paymentsMethods[state.paymentMethod].label}</strong>
                            </RegularText>
                        }
                    />
                </OrderDetailsConatiner>

                <img src={Ilustatrion} alt="" />
            </section>
        </OrderConfirmedContainer>
    )
}