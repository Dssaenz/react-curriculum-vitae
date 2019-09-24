import React from 'react'
import Social from '../Social/Social'
import { AboutContent, AboutAvatar, AvatarImage, AboutName, AboutH2, AboutProfession, AboutDesc, AboutLocation, AboutSocial } from './styles'

const About = props => (
    <AboutContent>
        <div className='About-container'>
            <AboutAvatar>
                <figure>
                    <AvatarImage src={props.avatar} alt={props.name} />
                </figure>
            </AboutAvatar>
            <AboutName>
                <AboutH2>{props.name}</AboutH2>
            </AboutName>
            <div className='About-profession'>
                <AboutProfession>{props.profession}</AboutProfession>
            </div>
            <div className='About-desc'>
                <AboutDesc>{props.bio}</AboutDesc>
            </div>
            <div className='About-location'>
                <AboutLocation>{props.address}</AboutLocation>
            </div>
            <div className='About-social'>
                <Social social={props.social} />
            </div>
        </div>
    </AboutContent>
);

export default About