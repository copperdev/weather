import { useCallback, useEffect, useState } from "react"
import CurrentWeather from "../components/CurrentWeather"
import HourlyWeather from "../components/HourlyWeather"
import WeeklyWeather from "../components/WeeklyWeather"
import DetailsWeather from "../components/DetailsWeather"
import { getWeathers } from "../api/requests"
import "./index.css"

const App = () => {
    const [loading, setLoading] = useState(true)
    const [city] = useState("Paris")
    const [geolocation, setGeolocation] = useState(null)
    const [currentWeather, setCurrentWeather] = useState(null)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => setGeolocation({ lat: position.coords.latitude, lng: position.coords.longitude }))
    }, [city])

    const requestApi = useCallback(async () => {
        await getWeathers(geolocation, city)
            .then(res => setCurrentWeather(res))
    }, [city, geolocation])

    useEffect(() => {
        requestApi()
            .finally(() => setLoading(false))
    }, [requestApi])

    return loading ? null : (
        <>
            <CurrentWeather weather={currentWeather} />
            <HourlyWeather weather={currentWeather.hours} />
            <WeeklyWeather weather={currentWeather.days} />
            <DetailsWeather weather={currentWeather} />
        </>
    )
}

export default App
