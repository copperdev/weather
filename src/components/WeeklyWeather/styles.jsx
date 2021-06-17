import styled from "styled-components"
import { device } from "../../utils/responsive"

export const Wrapper = styled.div`
    width: 100%;
    margin: auto;
    padding: 10px 0;
    color: white;
    border-top: 2px solid #ffffff1a;
    
    @media ${device.tablet} { 
        width: 95%;
    }
    @media ${device.laptop} { 
        width: 70%;
    }
    @media ${device.desktop} { 
        width: 60%;
    }
    @media ${device.desktopL} { 
        width: 50%;
    }
`

export const DayWrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const DayName = styled.p`
    width: 15%;
    font-size: 18px;
`

export const WeatherWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const WeatherIcon = styled.img`
    width: 30px;
`

export const Humidity = styled.p`
    color: #ffffffcf;
    margin-left: 10px;
    visibility: ${props => props.raining ? "visible" : "hidden"};
`

export const TempWrapper = styled.div`
    display: flex;
    font-weight: bold;
`

export const TempMax = styled.p``

export const TempMin = styled.p`
    margin-left: 10px;
    color: #ffffffcf;
`