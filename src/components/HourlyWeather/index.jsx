import { useEffect, useState } from "react"
import { getCurrentWeatherByCity, getHourlyWeatherByLatLng } from "../../api/requests"
import { weatherIconUtils } from "../../utils/WeatherIconUtils"

import { Wrapper, HourWrapper, Title, WeatherIcon, Temp } from "./styles"

const HourlyWeather = ({ city, geolocation }) => {
    const [loading, setLoading] = useState(true)
    const [hourlyWeather, setHourlyWeather] = useState(null)
    const [icons, setIcon] = useState(null)

    useEffect(() => {
        if (geolocation !== null) {
            getHourlyWeatherByLatLng(geolocation.lat, geolocation.lng)
                .then(res => setHourlyWeather(res))
                .finally(() => setLoading(false))
        } else {
            getCurrentWeatherByCity(city)
                .then(async res => {
                    await getHourlyWeatherByLatLng(res.lat, res.lng)
                        .then(res => setHourlyWeather(res))
                })
                .finally(() => setLoading(false))
        }
    }, [city, geolocation])

    useEffect(() => {
        if (hourlyWeather !== null) {
            const icons = []
            for (let i = 0; i < hourlyWeather.length; i++) {
                icons.push(weatherIconUtils(hourlyWeather[i].weatherId, false).icon)
            }
            setIcon(icons)
        }
    }, [hourlyWeather])

    return (
        <div>
            {!loading && (
                <Wrapper>
                    {
                        hourlyWeather.map((item, index) => (
                            <HourWrapper key={index}>
                                <Title>{item.title}</Title>
                                <WeatherIcon src={icons[index]} />
                                <Temp>{item.temp}°</Temp>
                            </HourWrapper>
                        ))
                    }
                </Wrapper>
            )}
        </div>
    )
}

export default HourlyWeather