import { useCallback, useEffect, useState } from "react"
import CurrentWeather from "../components/CurrentWeather"
import HourlyWeather from "../components/HourlyWeather"
import WeeklyWeather from "../components/WeeklyWeather"
import DetailsWeather from "../components/DetailsWeather"
import SelectCity from "../components/SelectCity"
import { getWeathers } from "../api/requests"
import "./index.css"

const App = () => {
    const [loading, setLoading] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [city, setCity] = useState("Paris")
    const [showCity, setShowCity] = useState(false)
    const [geolocation, setGeolocation] = useState(null)
    const [currentWeather, setCurrentWeather] = useState(null)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => setGeolocation({ lat: position.coords.latitude, lng: position.coords.longitude }))
    }, [])

    const requestApi = useCallback(async () => {
        await getWeathers(geolocation, city, showCity)
            .then(res => setCurrentWeather(res))
    }, [city, geolocation, showCity])

    useEffect(() => {
        requestApi()
            .finally(() => setLoading(false))
    }, [requestApi])

    return loading ? null : (
        <>
            <CurrentWeather weather={currentWeather} setShowModal={setShowModal} />
            <HourlyWeather weather={currentWeather.hours} />
            <WeeklyWeather weather={currentWeather.days} />
            <DetailsWeather weather={currentWeather} />
            {showModal && <SelectCity setShowModal={setShowModal} setCity={setCity} setShowCity={setShowCity} />}
        </>
    )
}

export default App
