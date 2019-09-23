import React from 'react'
import { ThemeProvider } from 'styled-components'
import { SocialStyle, SocialUl, SocialLi, SocialAnchor, SocialIcon, facebook, twitter, linkedin, github } from './styles'

const getColor = name => {
    if( name === 'facebook') return facebook;
    if( name === 'twitter') return twitter;
    if( name === 'linkedin') return linkedin;
    if( name === 'github') return github;
}

const Social = props => (
    <SocialStyle>
        {props.social &&
            <SocialUl>
                {props.social.map((item, index) => (
                    <SocialLi key={`Social-${index}`} target='_blank'>
                        <SocialAnchor href={item.url}>
                            <ThemeProvider theme={getColor(item.name)}>
                                <SocialIcon className={`fab fa-${item.name}`} />
                            </ThemeProvider>
                        </SocialAnchor>
                    </SocialLi>
                    ))}
            </SocialUl>
        }
    </SocialStyle>
)

export default Social