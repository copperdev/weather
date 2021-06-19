import { useCallback, useEffect, useState } from "react"
import { searchCity } from "../../api/requests.js"
import { checkLength } from "../../utils/Utils.js"
import { Wrapper, Content, Header, Title, SearchInput, WrapperCity, Name, Description } from "./styles.jsx"

const SelectCity = ({ setShowModal, setCity, setShowCity }) => {
    const [text, setText] = useState("")
    const [cities, setCities] = useState([])

    const onHandlerChange = ({ target }) => {
        setText(target.value)
    }

    const requestApi = useCallback(async (city) => {
        await searchCity(city)
            .then(res => setCities(res))
    }, [])

    useEffect(() => {
        if (!checkLength(text)) {
            requestApi(text)
        } else {
            setCities([])
        }
    }, [text, requestApi])

    return (
        <Wrapper onClick={() => setShowModal(false)}>
            <Content onClick={(e) => e.stopPropagation()}>
                <Header>
                    <Title>Rechercher une ville</Title>
                    <svg onClick={() => setShowModal(false)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </Header>
                <SearchInput resultLength={cities.length} placeholder="Paris" onChange={onHandlerChange} />
                {
                    cities.map((city, index) => (
                        <WrapperCity onClick={() => { setCity(city.name); setShowCity(true); setShowModal(false) }} key={city.id}>
                            <Name>{city.name}</Name>
                            <Description>{city.context}</Description>
                        </WrapperCity>
                    ))
                }
            </Content>
        </Wrapper>
    )
}

export default SelectCity