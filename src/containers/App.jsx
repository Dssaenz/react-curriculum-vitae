import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Main from '../components/Main/Main'
import Sidebar from '../components/Sidebar/Sidebar'
import Info from '../components/Info/Info'
import About from '../components/About/About'
import Certificates from '../components/Certificates/Certificates'
import Experience from '../components/Experience/Experience'
import Education from '../components/Education/Education'
import Skills from '../components/Skills/Skills'
import useGetData from '../hooks/useGetData'
import { CubeGrid } from 'styled-loaders-react'

const GlobalStyles = createGlobalStyle`
    body {
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
        background: #F5F5F5;
    }
`

const App = () => {
    
    const mydata = useGetData();
    
    return mydata.length === 0 ? <CubeGrid color='black' /> : (
        <Main>
            <GlobalStyles />
            <Sidebar>
                <About 
                    avatar={mydata.avatar}
                    name={mydata.name}
                    profession={mydata.profession}
                    bio={mydata.bio}
                    address={mydata.address}
                    social={mydata.social}
                />
            </Sidebar>
            <Info>
                <Education 
                    data={mydata.education}
                />
                <Experience 
                    data={mydata.experience}
                />
                <Certificates 
                    data={mydata.certificate}
                />
                <Skills
                    data={mydata.skills}
                />
            </Info>
        </Main>
    )
};

export default App