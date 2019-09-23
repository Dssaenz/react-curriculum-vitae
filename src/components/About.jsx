import React from 'react'
import Social from './Social'

const About = props => (
    <div className='About'>
        <div className='About-container'>
            <div className='About-avatar'>
                <figure>
                    <img src={props.avatar} alt=''/>
                </figure>
            </div>
            <div className='About-name'>
                <h2>{props.name}</h2>
            </div>
            <div className='About-profession'>
                <p>{props.profession}</p>
            </div>
            <div className='About-desc'>
                <p>{props.bio}</p>
            </div>
            <div className='About-location'>
                <p>{props.address}</p>
            </div>
            <div className='About-social'>
                <Social data={props.social} />
            </div>
        </div>
    </div>
);

export default About