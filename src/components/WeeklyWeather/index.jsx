import { useEffect, useState } from "react"
import { getWeeklyWeatherByLatLng, getWeeklyWeatherByCity } from "../../api/requests"
import { weatherIconUtils } from "../../utils/WeatherIconUtils"

import { Wrapper, DayWrapper, DayName, WeatherWrapper, WeatherIcon, Humidity, TempWrapper, TempMax, TempMin } from "./styles"

const WeeklyWeather = ({ city, geolocation }) => {
    const [loading, setLoading] = useState(true)
    const [weeklyWeather, setWeeklyWeather] = useState(null)
    const [icons, setIcon] = useState(null)
    const [raining, setRaining] = useState(null)

    useEffect(() => {
        if (geolocation !== null) {
            getWeeklyWeatherByLatLng(geolocation.lat, geolocation.lng)
                .then(res => setWeeklyWeather(res))
                .finally(() => setLoading(false))
        } else {
            getWeeklyWeatherByCity(city)
                .then(res => setWeeklyWeather(res))
                .finally(() => setLoading(false))
        }
    }, [city, geolocation])

    useEffect(() => {
        if (weeklyWeather !== null) {
            const icons = []
            const raining = []
            for (let i = 0; i < weeklyWeather.length; i++) {
                icons.push(weatherIconUtils(weeklyWeather[i].weatherId, false).icon)
                raining.push((weeklyWeather[i].weatherId >= 300 && weeklyWeather[i].weatherId <= 531 && weeklyWeather[i].weatherId !== 511))
            }
            setIcon(icons)
            setRaining(raining)
        }
    }, [weeklyWeather])

    return (
        <div>
            {!loading && (
                <Wrapper>
                    {
                        weeklyWeather.map((item, index) => (
                            <DayWrapper key={index}>
                                <DayName>{item.day}</DayName>
                                <WeatherWrapper>
                                    <WeatherIcon src={icons[index]} />
                                    <Humidity raining={raining[index]}>{item.humidity}%</Humidity>
                                </WeatherWrapper>
                                <TempWrapper>
                                    <TempMax>{item.maxTemp}</TempMax>
                                    <TempMin>{item.minTemp}</TempMin>
                                </TempWrapper>
                            </DayWrapper>
                        ))
                    }
                </Wrapper>
            )}
        </div>
    )
}

export default WeeklyWeather