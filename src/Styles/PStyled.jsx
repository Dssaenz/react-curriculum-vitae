import React from 'react'
import Styled from 'styled-components'

const StyledP = Styled.p`
    color: #757575;
    font-weight: 300;
    margin: .5em, 0 1.2em 0;
`

const PStyled = ({name}) => <StyledP>{name}</StyledP>

export default PStyled