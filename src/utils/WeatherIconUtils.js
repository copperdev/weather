import Thunderstorm from "../assets/icon/weather/ic_weather_16.svg"
import Drizzle from "../assets/icon/weather/ic_weather_9.svg"
import DrizzleNight from "../assets/icon/weather/ic_weather_21.svg"
import Rain from "../assets/icon/weather/ic_weather_8.svg"
import Snow from "../assets/icon/weather/ic_snow.svg"
import Sun from "../assets/icon/weather/ic_sun.svg"
import Moon from "../assets/icon/weather/ic_moon.svg"
import Clouds from "../assets/icon/weather/ic_weather_1.svg"
import Sky from "../assets/icon/weather/ic_sky.svg"

export const weatherIconUtils = (weatherId, isNight) => {
    switch(weatherId) {
        case 200:
        case 201:
        case 202:
        case 210:
        case 211:
        case 212:
        case 221:
        case 230:
        case 231:
        case 232:
            return isNight ? {
                colors: ["#181722", "#02000f"],
                icon: Thunderstorm
            } : {
                colors: ["#302951", "#100f18"],
                icon: Thunderstorm
            }
        case 500:
        case 501:
        case 502:
        case 503:
        case 504:
            return isNight ? {
                colors: ["#090254", "#04030f"],
                icon: DrizzleNight
            } : {
                colors: ["#4e6497", "#213b76"],
                icon: Drizzle
            }
        case 300:
        case 301:  
        case 302:
        case 310:   
        case 311:  
        case 312: 
        case 313: 
        case 314:
        case 321:
        case 520:
        case 521:
        case 522:
        case 531:
            return isNight ? {
                colors: ["#181722", "#02000f"],
                icon: Rain
            } : {
                colors: ["#324c8b", "#04102c"],
                icon: Rain
            }
        case 511:
        case 600:
        case 601:
        case 602:
        case 611:
        case 612:
        case 613:
        case 615:
        case 616:
        case 620:
        case 621:
        case 622:
            return isNight ? {
                colors: ["#181722", "#02000f"],
                icon: Snow
            } : {
                colors: ["#bbc6d0", "#82888d"],
                icon: Snow
            }
        case 800:
            return isNight ? {
                colors: ["#181722", "#02000f"],
                icon: Moon
            } : {
                colors: ["#ecb324", "#ed7301"],
                icon: Sun
            }
        case 801:
            return isNight ? {
                colors: ["#181722", "#02000f"],
                icon: Clouds
            } : {
                colors: ["#b3c3d2", "#51545c"],
                icon: Clouds
            }
        case 701:
        case 711:
        case 721:
        case 802:
        case 803:
        case 804:
            return isNight ? {
                colors: ["#181722", "#02000f"],
                icon: Sky
            } : {
                colors: ["#6b6e74", "#404349"],
                icon: Sky
            }
        default:
            return null
    }
}