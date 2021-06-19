export const capitalize = (value) => {
    if (value === null || value === "") {
        return ""
    }
    return value[0].toUpperCase() + value.slice(1)
}

export const strTrim = (value) => {
    return value.trim()
}

export const checkLength = (value, length = 0) => {
    return strTrim(value).length === length
}

export const hourFormat = (date) => new Date(date).toTimeString().substring(0, 5)

export const DAYS_NAME = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi", 
    "Vendredi",
    "Samedi"
]