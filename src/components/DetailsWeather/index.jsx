import { useEffect, useState } from "react"
import { getCurrentWeatherByLatLng, getCurrentWeatherByCity } from "../../api/requests"
import { hourFormat } from "../../utils/Utils"

import { Wrapper, Row, Title, Detail, Info } from "./styles"

const DetailsWeather = ({ city, geolocation }) => {
    const [loading, setLoading] = useState(true)
    const [detailsWeather, setDetailsWeather] = useState(null)

    useEffect(() => {
        if (geolocation !== null) {
            getCurrentWeatherByLatLng(geolocation.lat, geolocation.lng)
                .then(res => setDetailsWeather(res))
                .finally(() => setLoading(false))
        } else {
            getCurrentWeatherByCity(city)
                .then(res => setDetailsWeather(res))
                .finally(() => setLoading(false))
        }
    }, [city, geolocation])

    return (
        <div>
            {!loading && (
                <Wrapper>
                    <Row>
                        <Detail>
                            <Title>Levé du soleil</Title>
                            <Info>{hourFormat(detailsWeather.sunrise * 1000)}</Info>
                        </Detail>

                        <Detail>
                            <Title>Couché du soleil</Title>
                            <Info>{hourFormat(detailsWeather.sunset * 1000)}</Info>
                        </Detail>
                    </Row>

                    <Row>
                        <Detail>
                            <Title>Visibilité</Title>
                            <Info>{detailsWeather.visibility}m</Info>
                        </Detail>

                        <Detail>
                            <Title>Humidité</Title>
                            <Info>{detailsWeather.humidity}%</Info>
                        </Detail>
                    </Row>

                    <Row>
                        <Detail>
                            <Title>Vent</Title>
                            <Info>{detailsWeather.wind} km/h</Info>
                        </Detail>

                        <Detail>
                            <Title>Pression</Title>
                            <Info>{detailsWeather.pressure} hPa</Info>
                        </Detail>
                    </Row>
                </Wrapper>
            )}
        </div>
    )
}

export default DetailsWeather