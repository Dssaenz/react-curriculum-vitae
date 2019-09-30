import React from 'react'
import H2Styled from '../../Styles/H2Styled'
import H3Styled from '../../Styles/H3Styled'
import PStyled from '../../Styles/PStyled'

const Certificates = props => (
    <div className='Certificates'>
        <H2Styled name='Certificates' />
        <div className='Certificates-container'>
            {props.data.map((cert,index) => (
            <div className='Certificates-item' key={`Certificates-${index}`}>
                <H3Styled>{cert.name} @ {cert.institution} <span>{cert.date}</span></H3Styled>
                <PStyled name={cert.description} />
            </div>
            ))}
        </div>
    </div>
);

export default Certificates