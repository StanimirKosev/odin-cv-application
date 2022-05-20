import React from 'react'

export default function EducationProps({ school, study, dateOfStudy }) {
    return (
        <div className="education-submitted">
            <div className="submitted-text">{school}</div>
            <div className="submitted-text">{study}</div>
            <div className="submitted-text">{dateOfStudy}</div>
        </div>
    )
}
