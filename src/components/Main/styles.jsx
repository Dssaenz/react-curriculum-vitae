import styled from 'styled-components'

export const MainStyled = styled.div`
    display: grid;
    grid-template-columns: minmax( auto, 1024pxpx);
    justify-content: center;
    padding: 1em;
`

export const MainContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 2rem;
    grid-row-gap: 0.5em;
    @media only screen and (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`