import React from 'react'

const Social = props =>(
    <div className='Social'>
        {props.data &&
            <ul>
                {props.data.map((item, index) => (
                    <li key={`Social-${index}`} target='_blank'>
                        <a href={item.url}>
                            {item.name}
                        </a>
                    </li>
                    ))}
            </ul>
        }
    </div>
)

export default Social