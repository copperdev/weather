import { hourFormat } from "../../utils/Utils"

import { Wrapper, Row, Title, Detail, Info } from "./styles"

const DetailsWeather = ({ weather }) => (
    <Wrapper>
        <Row>
            <Detail>
                <Title>Levé du soleil</Title>
                <Info>{hourFormat(weather.sunrise * 1000)}</Info>
            </Detail>

            <Detail>
                <Title>Couché du soleil</Title>
                <Info>{hourFormat(weather.sunset * 1000)}</Info>
            </Detail>
        </Row>

        <Row>
            <Detail>
                <Title>Visibilité</Title>
                <Info>{weather.visibility}m</Info>
            </Detail>

            <Detail>
                <Title>Humidité</Title>
                <Info>{weather.humidity}%</Info>
            </Detail>
        </Row>

        <Row>
            <Detail>
                <Title>Vent</Title>
                <Info>{weather.wind} km/h</Info>
            </Detail>

            <Detail>
                <Title>Pression</Title>
                <Info>{weather.pressure} hPa</Info>
            </Detail>
        </Row>
    </Wrapper>
)

export default DetailsWeather