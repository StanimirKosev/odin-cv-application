import React, { useState } from 'react'
import EducationProps from './EducationProps'

export default function Education() {
    const [school, setSchool] = useState('')
    const [study, setStudy] = useState('')
    const [dateOfStudy, setDateOfStudy] = useState('')
    const [schoolSubmit, setSchoolSubmit] = useState('')
    const [studySubmit, setStudySubmit] = useState('')
    const [dateOfStudySubmit, setDateOfStudySubmit] = useState('')
    const [showForm, toggleShowForm] = useState(false)

    return (
        <div className="box">
            <div className="title">Educational Experience</div>
            {showForm ? (
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        setSchoolSubmit(`School: ${school}`)
                        setStudySubmit(`Title of Study: ${study}`)
                        setDateOfStudySubmit(`Date of Study: ${dateOfStudy}`)
                        toggleShowForm(!showForm)
                    }}
                    className="education-form"
                >
                    <label htmlFor="school" className="school">
                        School Name:
                    </label>
                    <input
                        type="text"
                        id="school"
                        value={school}
                        onChange={(e) => setSchool(e.target.value)}
                        placeholder="School Name"
                        required
                    />
                    <label htmlFor="study" className="study">
                        Title of Study:
                    </label>
                    <input
                        type="text"
                        id="study"
                        value={study}
                        onChange={(e) => setStudy(e.target.value)}
                        placeholder="Title of Study"
                        required
                    />
                    <label htmlFor="dateOfStudy" className="dateOfStudy">
                        Date of Study:
                    </label>
                    <input
                        type="date"
                        id="dateOfStudy"
                        value={dateOfStudy}
                        onChange={(e) => setDateOfStudy(e.target.value)}
                        required
                    />
                    <button type="submit" className="education-submit">
                        Submit Education
                    </button>
                </form>
            ) : null}
            <button
                type="button"
                onClick={() => toggleShowForm(!showForm)}
                className="edit-btn"
            >
                + Educational Experience
            </button>
            <EducationProps
                school={schoolSubmit}
                study={studySubmit}
                dateOfStudy={dateOfStudySubmit}
            />
        </div>
    )
}
