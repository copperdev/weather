import styled from "styled-components"
import { device } from "../../utils/responsive"

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    backdrop-filter: blur(4px);
`

export const Content = styled.div`
    width: 100%;
    background-color: white;
    margin: auto;
    margin-top: 0px;
    z-index: 1;
    border-radius: 5px;

    @media ${device.tablet} { 
        margin-top: 50px;
        width: 95%;
    }
    @media ${device.laptop} { 
        width: 40%;
    }
    @media ${device.desktop} { 
        width: 30%;
    }
    @media ${device.desktopL} { 
        width: 40%;
    }
`

export const Header = styled.div`
    width: calc(100% - 20px);
    padding: 20px 10px 10px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: space-between;

    svg {
        color: #6e6e6e;
        width: 30px;
    }
    svg:hover {
        cursor: pointer;
    }
`

export const Title = styled.p`
    font-size: 18px;
`

export const SearchInput = styled.input`
    width: calc(100% - 40px);
    margin-left: 10px;
    margin-bottom: ${props => props.resultLength === 0 ? "20px" : "0px"};
    font-size: 18px;
    padding: 10px;
    border: 0px;
    border: 1px solid #e0e0e0;
    border-radius: 5px;

    &:focus{
        border-color: #42a5f5;
        outline: none;
    }
`

export const WrapperCity = styled.div`
    margin: 0 10px;
    padding: 15px 10px;
    border-bottom: 1px solid #e0e0e0;

    &:hover {
        background-color: #e3e3e3;
        // color: white;
        cursor: pointer;
    }
`

export const Name = styled.p``

export const Description = styled.p`
    color: gray;
    // ${WrapperCity}:hover & {
    //     color: white;
    // }
`