import { useEffect, useState } from "react"
import { weatherIconUtils } from "../../utils/WeatherIconUtils"

import { Wrapper, HourWrapper, Title, WeatherIcon, Temp } from "./styles"

const HourlyWeather = ({ weather }) => {
    const [icons, setIcon] = useState(null)

    useEffect(() => {
        if (weather !== null) {
            const icons = []
            weather.forEach(item=> {
                icons.push(weatherIconUtils(item.weatherId, false).icon)
            })
            setIcon(icons)
        }
    }, [weather])

    return icons === null ? null : (
        <Wrapper>
            {
                weather.map((item, index) => (
                    <HourWrapper key={index}>
                        <Title>{item.title}</Title>
                        <WeatherIcon src={icons[index]} />
                        <Temp>{item.temp}°</Temp>
                    </HourWrapper>
                ))
            }
        </Wrapper>
    )
}

export default HourlyWeather