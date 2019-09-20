import React from 'react'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'
import Info from '../components/Info'
import About from '../components/About'
import Certificates from '../components/Certificates'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Skills from '../components/Skills'
import useGetData from '../hooks/useGetData'

const App = () => {
    
    const mydata = useGetData();
    console.log(mydata)

    return mydata.length === 0 ? <h1>Cargando...</h1> : (
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
                <Skills />
            </Info>
        </Main>
    )
};

export default App