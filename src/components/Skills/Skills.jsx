import React from 'react'
import { SkillsContainer, SkillsTitle, SkillsLine, SkillsSpan } from './styles'

const Skills = props => (
    <div className='Skills'>
        <SkillsContainer>
            {props.data.map((skill, index) => (    
            <div className='Skills-item' key={`Skills-${index}`}>
                <SkillsTitle>{skill.name}</SkillsTitle>
                <SkillsLine>
                    <SkillsSpan width={skill.percentage}/>
                </SkillsLine>
            </div>
            ))}
        </SkillsContainer>
    </div>
);

export default Skills