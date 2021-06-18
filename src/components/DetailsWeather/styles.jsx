import styled from "styled-components"
import { device } from "../../utils/responsive"

export const Wrapper = styled.div`
    width: 100%;
    margin: auto;
    padding: 30px 0px;
    color: white;
    background-color: #ffffff1a;
    border-top: 3px solid #ffffff1a;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(80px);

    @media ${device.tablet} { 
        width: 95%;
    }
    @media ${device.laptop} { 
        width: 70%;
    }
    @media ${device.desktop} { 
        width: 50%;
    }
    @media ${device.desktopL} { 
        width: 40%;
    }
`

export const Row = styled.div`
    padding: 0 20px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
`

export const Detail = styled.div`
    width: 45%;
`

export const Title = styled.p`
    font-size: 18px;
    color: #ffffffcf;
`

export const Info = styled.p`
    font-size: 20px;
    margin-top: 5px;
    color: #fff;
`