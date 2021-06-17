import { capitalize, DAYS_NAME } from "../utils/Utils"

export const getCurrentWeatherByLatLng = (lat, lng) => {
    return fetch(`${process.env.REACT_APP_BASE_URL_API}weather?lat=${lat}&lon=${lng}&units=metric&lang=fr&appid=${process.env.REACT_APP_WEATHER_API_KEY}`, {
	    "method": "GET"
    })
    .then(res => res.json())
    .then(res => {
        return {
            city: capitalize(res.name),
            description: capitalize(res.weather[0].description),
            weatherId: res.weather[0].id,
            temp: Math.round(res.main.temp),
            minTemp: Math.round(res.main.temp_min),
            maxTemp: Math.round(res.main.temp_max),
            feelsLike: Math.round(res.main.feels_like),
            humidity: `${Math.round(res.main.humidity)}%`,
            sunrise: res.sys.sunrise,
            sunset: res.sys.sunset
        }
    })
    .catch(err => {
        console.error(err)
    })
}

export const getCurrentWeatherByCity = (city) => {
    return fetch(`${process.env.REACT_APP_BASE_URL_API}weather?q=${city}&units=metric&lang=fr&appid=${process.env.REACT_APP_WEATHER_API_KEY}`, {
	    "method": "GET"
    })
    .then(res => res.json())
    .then(res => {
        return {
            city,
            description: capitalize(res.weather[0].description),
            weatherId: res.weather[0].id,
            temp: Math.round(res.main.temp),
            minTemp: Math.round(res.main.temp_min),
            maxTemp: Math.round(res.main.temp_max),
            feelsLike: Math.round(res.main.feels_like),
            humidity: Math.round(res.main.humidity),
            sunrise: res.sys.sunrise,
            sunset: res.sys.sunset
        }
    }) 
    .catch(err => {
        console.error(err)
    })
}

export const getWeeklyWeatherByLatLng = (lat, lng) => {
    return fetch(`${process.env.REACT_APP_BASE_URL_API}forecast/daily?lat=${lat}&lon=${lng}&units=metric&lang=fr&cnt=7&appid=${process.env.REACT_APP_WEATHER_API_KEY}`, {
        "method": "GET"
    })
    .then(res => res.json())
    .then(res => {
        const days = []
        for (let i = 1; i < res.list.length; i++) {
            days.push({
                day: DAYS_NAME[new Date(res.list[i].dt * 1000).getDay()],
                maxTemp: Math.round(res.list[i].temp.max),
                minTemp: Math.round(res.list[i].temp.min),
                weatherId: res.list[i].weather[0].id,
                humidity: res.list[i].humidity
            })
        }
        return days
    }) 
    .catch(err => {
        console.error(err)
    })
}

export const getWeeklyWeatherByCity = (city) => {
    return fetch(`${process.env.REACT_APP_BASE_URL_API}forecast/daily?q=${city}&units=metric&lang=fr&cnt=7&appid=${process.env.REACT_APP_WEATHER_API_KEY}`, {
        "method": "GET"
    })
    .then(res => res.json())
    .then(res => {
        const days = []
        for (let i = 1; i < res.list.length; i++) {
            days.push({
                day: DAYS_NAME[new Date(res.list[i].dt * 1000).getDay()],
                maxTemp: Math.round(res.list[i].temp.max),
                minTemp: Math.round(res.list[i].temp.min),
                weatherId: res.list[i].weather[0].id,
                humidity: res.list[i].humidity
            })
        }
        return days
    }) 
    .catch(err => {
        console.error(err)
    })
}