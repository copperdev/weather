/* eslint-disable array-callback-return */
import { capitalize, DAYS_NAME, hourFormat } from "../utils/Utils"

export const getWeathers = async (geolocation, city, showCity) => {
    const currentWeather = await getCurrentWeather(geolocation, city, showCity)
    const url = (geolocation === null || showCity)
        ? `${process.env.REACT_APP_BASE_URL_API_WEATHER}onecall?lat=${currentWeather.lat}&lon=${currentWeather.lng}&units=metric&lang=fr&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        : `${process.env.REACT_APP_BASE_URL_API_WEATHER}onecall?lat=${geolocation.lat}&lon=${geolocation.lng}&units=metric&lang=fr&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    
    try {
        const request = await fetch(url, { "method": "GET" })
        const response = await request.json()
        const hours = [], days = []
        Array.from(new Array(20)).forEach((_, index) => {
            hours.push({
                title: `${hourFormat(response.hourly[index].dt * 1000)}`,
                weatherId: response.hourly[index].weather[0].id,
                temp: Math.round(response.hourly[index].temp),
            })
        })
        response.daily.forEach(item => {
            days.push({
                day: DAYS_NAME[new Date(item.dt * 1000).getDay()],
                maxTemp: Math.round(item.temp.max),
                minTemp: Math.round(item.temp.min),
                weatherId: item.weather[0].id,
                humidity: item.humidity
            })
        })
        return {
            city: capitalize(currentWeather.city),
            description: capitalize(response.current.weather[0].description),
            weatherId: response.current.weather[0].id,
            temp: Math.round(response.current.temp),
            minTemp: Math.round(days[0].minTemp),
            maxTemp: Math.round(days[0].maxTemp),
            feelsLike: Math.round(response.current.feels_like),
            humidity: Math.round(response.current.humidity),
            pressure: response.current.pressure,
            visibility: response.current.visibility,
            wind: Math.round(response.current.wind_speed),
            sunrise: response.current.sunrise,
            sunset: response.current.sunset,
            currentDate: response.current.dt,
            lng: response.lon,
            lat: response.lat,
            hours,
            days
        }
    } catch (err) {
        console.error(err)
    }
}

export const searchCity = async (city) => {
    const url = `${process.env.REACT_APP_BASE_URL_API_CITY}?q=${city}&type=municipality&limit=4`
    try {
        const request = await fetch(url, { "method": "GET" })
        const response = await request.json()
        const cities = []
        response.features.forEach((item) => {
            cities.push({
                id: item.properties.id,
                name: item.properties.city,
                context: item.properties.context
            })
        })
        return cities
    } catch (err) {
        console.error(err)
    }
}

const getCurrentWeather = async (geolocation, city, showCity) => {
    const url = (geolocation === null || showCity)
        ? `${process.env.REACT_APP_BASE_URL_API_WEATHER}weather?q=${city}&units=metric&lang=fr&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        : `${process.env.REACT_APP_BASE_URL_API_WEATHER}weather?lat=${geolocation.lat}&lon=${geolocation.lng}&units=metric&lang=fr&appid=${process.env.REACT_APP_WEATHER_API_KEY}`

    try {
        const request = await fetch(url, { "method": "GET" })
        const response = await request.json()
        return {
            city: capitalize(response.name),
            lng: response.coord.lon,
            lat: response.coord.lat
        }
    } catch (err) {
        console.error(err)
    }
}