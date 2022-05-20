import React from 'react'
import Information from './components/generalInfo/Information'
import Education from './components/education/Education'
import Experience from './components/experience/Experience'
import './main.css'

export default function App() {
    return (
        <div className="app">
            <Information />
            <Education />
            <Experience />
        </div>
    )
}
