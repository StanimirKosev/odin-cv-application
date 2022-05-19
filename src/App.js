import React, { Component } from 'react'
import Information from './components/generalInfo/Information'
import Education from './components/education/Education'
import Experience from './components/experience/Experience'
import './main.css'

class App extends Component {
    render() {
        return (
            <div className="app">
                <Information />
                <Education />
                <Experience />
            </div>
        )
    }
}

export default App
