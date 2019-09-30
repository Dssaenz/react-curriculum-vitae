import React from 'react'
import Styled from 'styled-components'

const StyledH2 = Styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    letter-spacing: .8px;
    margin: 1em 0 0 0;
    color: #008079;
`

const H2Styled = ({ name }) => <StyledH2>{name}</StyledH2>

export default H2Styled