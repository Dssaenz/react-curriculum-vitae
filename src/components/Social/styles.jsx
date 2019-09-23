import styled from 'styled-components'

export const SocialStyle = styled.div`
    margin: 0 auto;
    display: block;
`

export const SocialUl = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`

export const SocialLi = styled.li`
    display: inline;
    margin: 0 1em 0 0;
`

export const  SocialAnchor = styled.a`
    color: #212121;
    text-decoration: none;
    font-size: 1.2em;
`

export const SocialIcon = styled.i`
    color: ${props => props.theme.color};
`

export const facebook = {
    color: '#3b5998'
}

export const twitter = {
    color: '#38A1F3'
}

export const linkedin = {
    color: '#0E76A8'
}

export const github = {
    color: '#333'
}