import React from 'react'

export default function ExperienceProps({
    company,
    position,
    task,
    dateStart,
    dateEnd,
}) {
    return (
        <div className="exp-submitted">
            <div className="submitted-text">{company}</div>
            <div className="submitted-text">{position}</div>
            <div className="submitted-text">{task}</div>
            <div className="submitted-text">{dateStart}</div>
            <div className="submitted-text">{dateEnd}</div>
        </div>
    )
}
