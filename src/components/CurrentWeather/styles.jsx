import styled from "styled-components"
import { device } from "../../utils/responsive"

export const Wrapper = styled.div`
    width: 100%;
    margin: auto;
    padding: 10px 0;
    color: white;

    body {
        background-image: linear-gradient(#ecb324, #ed7301);
    }

    .content {
        margin-top: 50px;
    }

    .icon-content {
        position: absolute;
        top: 90px;
        right: ${props => props.isSun ? "-145px" : "-125px"};
        background-color: #ffffff1a;
        padding: ${props => props.isSun ? "40px" : "80px 130px 80px 40px"};
        border-radius: 100%;
    }

    @media ${device.tablet} { 
        width: 95%;
    }
    @media ${device.laptop} { 
        width: 70%;

        .content {
            display: flex;
            justify-content: space-between;
            margin-top: 50px;
        }

        .icon-content {
            position: relative;
            top: 0px;
            left: 20px;
            padding: 60px;
        }
    }
    @media ${device.desktop} { 
        width: 60%;
    }
    @media ${device.desktopL} { 
        width: 50%;
    }
`

export const Time = styled.p`
    margin-top: 10px;
    font-size: 25px;
    text-align: center;
`

export const City = styled.p`
    font-size: 25px;
`

export const Temp = styled.h1`
    margin-top: 30px;
    font-size: 90px;
    font-weight: bold;
`

export const WrapTemp = styled.div`
    padding-left: 20px;
    width: 120px;
`
export const WrapperMinMaxTemp = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    color: #ffffffcf;
    .min-max-temp {
        display: flex;
        justify-content: space-between;
        items-align: center;
    }
    svg {
        width: 20px;
        margin: 2px;
    }
`

export const WeatherIcon = styled.img`
    width: ${props => props.isSun ? "230px" : "140px"};
`

export const Description = styled.p`
    padding-left: 20px;
    margin-top: 40px;
    font-size: 28px;
    @media ${device.laptop} { 
        margin-top: -50px;
    }
`

export const FeelsLike = styled.p`
    padding-left: 20px;
    margin-top: 10px;
    font-size: 18px;
    color: #ffffffcf;
`