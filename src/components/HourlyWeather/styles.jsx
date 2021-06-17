import styled from "styled-components"
import { device } from "../../utils/responsive"

export const Wrapper = styled.div`
    width: 100%;
    margin: auto;
    padding: 20px 0;
    color: white;
    margin-top: 30px;
    border-top: 2px solid #ffffff1a;
    display: flex;
    justify-content: space-around;
    
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

export const HourWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;
`

export const Title = styled.p`
    font-size: 16px;
    color: #ffffffcf;
`

export const WeatherIcon = styled.img`
    margin: auto;
    margin-top: 10px;
    width: 30px;
`

export const Temp = styled.p`
    font-size: 16px;
    margin-top: 10px;
    font-weight: bold;
    color: #fff;
`