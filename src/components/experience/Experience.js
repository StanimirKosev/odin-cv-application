import React, { useState } from 'react'
import ExperienceProps from './ExperienceProps'

export default function Experience() {
    const [company, setCompany] = useState('')
    const [position, setPosition] = useState('')
    const [task, setTask] = useState('')
    const [dateStart, setDateStart] = useState('')
    const [dateEnd, setDateEnd] = useState('')
    const [companySubmit, setCompanySubmit] = useState('')
    const [positionSubmit, setPositionSubmit] = useState('')
    const [taskSubmit, setTaskSubmit] = useState('')
    const [dateStartSubmit, setDateStartSubmit] = useState('')
    const [dateEndSubmit, setDateEndSubmit] = useState('')
    const [showForm, toggleShowForm] = useState(false)

    return (
        <div className="box">
            <div className="title">Practical Experience</div>
            {showForm ? (
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        setCompanySubmit(`Company: ${company}`)
                        setPositionSubmit(`Position: ${position}`)
                        setTaskSubmit(`Main Task of Job: ${task}`)
                        setDateStartSubmit(`Date Started Working ${dateStart}`)
                        setDateEndSubmit(`Date Stopped Working ${dateEnd}`)
                        toggleShowForm(!showForm)
                    }}
                    className="experience-form"
                >
                    <label htmlFor="company" className="company">
                        Company Name:
                    </label>
                    <input
                        type="text"
                        id="company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Company Name"
                        required
                    />
                    <label htmlFor="position" className="position">
                        Position Title:
                    </label>
                    <input
                        type="text"
                        id="position"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        placeholder="Position Title"
                        required
                    />
                    <label htmlFor="task" className="task">
                        Main Task of Job:
                    </label>
                    <input
                        type="text"
                        id="task"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="Main Task of Job"
                        required
                    />
                    <label htmlFor="dateStart" className="dateStart">
                        Date Started Working:
                    </label>
                    <input
                        type="date"
                        id="dateStart"
                        value={dateStart}
                        onChange={(e) => setDateStart(e.target.value)}
                        required
                    />
                    <label htmlFor="dateStop" className="dateStop">
                        Date Stopped Working:
                    </label>
                    <input
                        type="date"
                        id="dateStop"
                        value={dateEnd}
                        onChange={(e) => setDateEnd(e.target.value)}
                        required
                    />
                    <button type="submit">Submit Experience</button>
                </form>
            ) : null}
            <button
                type="button"
                onClick={() => toggleShowForm(!showForm)}
                className="edit-btn"
            >
                + Practical Experience
            </button>
            <ExperienceProps
                company={companySubmit}
                position={positionSubmit}
                task={taskSubmit}
                dateStart={dateStartSubmit}
                dateEnd={dateEndSubmit}
            />
        </div>
    )
}
