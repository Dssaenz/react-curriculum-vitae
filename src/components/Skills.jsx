import React from 'react'

const Skills = props => (
    <div className='Skills'>
        <div className='Skills-container'>
            {props.data.map((skill, index) => (    
            <div className='Skills-item' key={`Skills-${index}`}>
                <h5>{skill.name}</h5>
                <div className='Skills-line'>
                    <p>{skill.percentage}</p>
                </div>
            </div>
            ))}
        </div>
    </div>
);

export default Skills