/* eslint-disable no-mixed-operators */
import { useEffect, useState } from "react"
import { getCurrentWeatherByCity, getCurrentWeatherByLatLng } from "../../api/requests"
import { weatherIconUtils } from "../../utils/WeatherIconUtils.js"

import { Wrapper, Time, City, Temp, WrapTemp, WrapperMinMaxTemp, Description, FeelsLike, WeatherIcon } from "./styled"

const CurrentWeather = () => {
    const [loading, setLoading] = useState(true)
    const [city] = useState("Paris")
    const [currentWeather, setCurrentWeather] = useState(null)
    const [theme, setTheme] = useState(null)
    const [isSunny, setIsSunny] = useState(true)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
                getCurrentWeatherByLatLng(position.coords.latitude, position.coords.longitude)
                    .then(res => setCurrentWeather(res))
                    .finally(() => setLoading(false))
            },
            (err) => {
                getCurrentWeatherByCity(city)
                    .then(res => setCurrentWeather(res))
                    .finally(() => setLoading(false))
            }
        )
    }, [city])

    useEffect(() => {
        if (currentWeather !== null) {
            const currentDate = Date.now() / 1000
            const isNight = (currentDate > currentWeather.sunrise || currentDate < currentWeather.sunset)
            setTheme(weatherIconUtils(currentWeather.weatherId, isNight))
            setIsSunny((currentWeather.weatherId === 800
                || currentWeather.weatherId === 511
                || (currentWeather.weatherId >= 600 && currentWeather.weatherId <= 622))
                && !isNight
            )
        }
    }, [currentWeather])

    useEffect(() => {
        if (theme !== null) {
            document.body.style.backgroundImage = `linear-gradient(${theme.colors[0]}, ${theme.colors[1]})`
        }
    }, [theme])

    return (
        <div>
            {!loading && (
                <Wrapper colors={theme.colors} isSun={isSunny} >
                    <Time>Maintenant</Time>
                    <div className="content">
                        <WrapTemp>
                            <City>{currentWeather.city}</City>
                            <Temp>{currentWeather.temp}°</Temp>
                            <WrapperMinMaxTemp>
                                <div className="min-max-temp">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                    </svg>
                                    <p>{currentWeather.maxTemp}°</p>
                                </div>
                                <div className="min-max-temp">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                    <p>{currentWeather.minTemp}°</p>
                                </div>
                            </WrapperMinMaxTemp>
                        </WrapTemp>
                        <div className="icon-content">
                            <WeatherIcon src={theme.icon} isSun={isSunny} />
                        </div>
                    </div>
                    <Description>{currentWeather.description}</Description>
                    <FeelsLike>Ressenti de {currentWeather.feelsLike}°</FeelsLike>
                </Wrapper>
            )}
        </div>
    )
}

export default CurrentWeather
