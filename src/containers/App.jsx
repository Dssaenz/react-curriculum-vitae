import React from 'react'
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

const App = () => {
    
    const mydata = useGetData();
    console.log(mydata)
    
    return mydata.length === 0 ? <CubeGrid color='black' /> : (
        <Main>
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