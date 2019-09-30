import  styled, { keyframes } from 'styled-components'

const move = keyframes`
    0% { background-position: 0 0; }
    100% { background-position: 50px 50px; }
`

export const SkillsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    grid-row-gap: 0.5em;
`

export const SkillsTitle = styled.p`
    font-family: 'Roboto', sans-serif;
    margin: 2em 0;
    font-weight: 600;   
`

export const SkillsLine = styled.div`
   height: 10px;
   position: relative;
   border-radius: 50px;
   background: #bbe4f8; 
`

export const SkillsSpan = styled.span`
    display: block;
    height: 100%;
    width: ${props => props.width};
    border-radius: 8px;
    background-color: #01988e;
    overflow: hidden;
    position: relative;
    box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3), inset 0 -2px 6px rgba(0, 0, 0, 0.4);
    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-image: linear-gradient(-45deg, rgba(255, 255, 255,
        0.2) 25%, transparent 25%, transparent 50%,  rgba(255, 255, 255,
        0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%,
        transparent);
        z-index: 1;
        background-size: 50px 50px;
        animation: ${move} 4s linear infinite;
        overflow: hidden;
    }
`