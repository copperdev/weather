import { useEffect, useState } from "react"
import { weatherIconUtils } from "../../utils/WeatherIconUtils"

import { Wrapper, DayWrapper, DayName, WeatherWrapper, WeatherIcon, Humidity, TempWrapper, TempMax, TempMin } from "./styles"

const WeeklyWeather = ({ weather }) => {
    const [icons, setIcon] = useState(null)
    const [raining, setRaining] = useState(null)

    useEffect(() => {
        if (weather !== null) {
            const icons = []
            const raining = []
            weather.forEach(item => {
                icons.push(weatherIconUtils(item.weatherId, false).icon)
                raining.push((item.weatherId >= 300 && item.weatherId <= 531 && item.weatherId !== 511))
            })
            setIcon(icons)
            setRaining(raining)
        }
    }, [weather])

    return (icons === null && raining === null) ? null : (
        <Wrapper>
            {
                weather.map((item, index) => (
                    <DayWrapper key={index}>
                        <DayName>{item.day}</DayName>
                        <WeatherWrapper>
                            <WeatherIcon src={icons[index]} />
                            <Humidity raining={raining[index]}>{item.humidity}%</Humidity>
                        </WeatherWrapper>
                        <TempWrapper>
                            <TempMax>{item.maxTemp}°</TempMax>
                            <TempMin>{item.minTemp}°</TempMin>
                        </TempWrapper>
                    </DayWrapper>
                ))
            }
        </Wrapper>
    )
}

export default WeeklyWeather