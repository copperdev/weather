import { useEffect, useState } from "react"
import CurrentWeather from "../components/CurrentWeather"
import HourlyWeather from "../components/HourlyWeather"
import WeeklyWeather from "../components/WeeklyWeather"
import "./index.css"

const App = () => {
    const [city] = useState("Paris")
    const [geolocation, setGeolocation] = useState(null)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => setGeolocation({ lat: position.coords.latitude, lng: position.coords.longitude }))
    }, [city])

    return (
        <>
            <CurrentWeather city={city} geolocation={geolocation} />
            <HourlyWeather city={city} geolocation={geolocation} />
            <WeeklyWeather city={city} geolocation={geolocation} />
        </>
    )
}

export default App
