export const capitalize = (value) => {
    if (value === null || value === "") {
        return ""
    }
    return value[0].toUpperCase() + value.slice(1)
}
