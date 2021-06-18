/* eslint-disable no-mixed-operators */
import { useEffect, useState } from "react"
import { weatherIconUtils } from "../../utils/WeatherIconUtils.js"

import { Wrapper, Time, City, Temp, WrapTemp, WrapperMinMaxTemp, Description, FeelsLike, WeatherIcon } from "./styles"

const CurrentWeather = ({ weather }) => {
    const [theme, setTheme] = useState(null)
    const [isSunny, setIsSunny] = useState(true)

    useEffect(() => {
        if (weather !== null) {
            const isNight = (weather.currentDate < weather.sunrise || weather.currentDate > weather.sunset)
            setTheme(weatherIconUtils(weather.weatherId, isNight))
            setIsSunny((weather.weatherId === 800
                || weather.weatherId === 511
                || (weather.weatherId >= 600 && weather.weatherId <= 622))
                && !isNight
            )
        }
    }, [weather])

    useEffect(() => {
        if (theme !== null) {
            const metaThemeColor = document.querySelector("meta[name=theme-color]")
            metaThemeColor.setAttribute("content", theme.colors[0])
            document.body.style.backgroundImage = `linear-gradient(${theme.colors[0]}, ${theme.colors[1]})`
        }
    }, [theme])

    return theme === null ? null : (
        <Wrapper colors={theme.colors} isSun={isSunny} >
            <Time>Maintenant</Time>
            <div className="content">
                <WrapTemp>
                    <City>{weather.city}</City>
                    <Temp>{weather.temp}°</Temp>
                    <WrapperMinMaxTemp>
                        <div className="min-max-temp">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg>
                            <p>{weather.maxTemp}°</p>
                        </div>
                        <div className="min-max-temp">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                            <p>{weather.minTemp}°</p>
                        </div>
                    </WrapperMinMaxTemp>
                </WrapTemp>
                <div className="icon-content">
                    <WeatherIcon src={theme.icon} isSun={isSunny} />
                </div>
            </div>
            <Description>{weather.description}</Description>
            <FeelsLike>Ressenti de {weather.feelsLike}°</FeelsLike>
        </Wrapper>
    )
}

export default CurrentWeather
