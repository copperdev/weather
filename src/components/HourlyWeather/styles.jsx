import styled from "styled-components"
import { device } from "../../utils/responsive"

export const Wrapper = styled.div`
    width: 100%;
    margin: auto;
    padding: 10px 0;
    color: white;
    margin-top: 20px;
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
    padding: 10px 0px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;
`

export const Title = styled.p`
    font-size: 18px;
    color: #ffffffcf;
`

export const WeatherIcon = styled.img`
    margin-top: 10px;
    width: 40px;
`

export const Temp = styled.p`
    font-size: 20px;
    margin-top: 10px;
    font-weight: bold;
    color: #fff;
`