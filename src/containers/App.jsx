import React from 'react'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'
import Info from '../components/Info'
import About from '../components/About'
import Certificates from '../components/Certificates'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Skills from '../components/Skills'

const App = () => {
    return(
        <Main>
            <Sidebar>
                <About />
            </Sidebar>
            <Info>
                <Education />
                <Experience />
                <Certificates />
                <Skills />
            </Info>
        </Main>
    )
};

export default App