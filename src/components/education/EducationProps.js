import React, { Component } from 'react'

class EducationProps extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { school, study, dateOfStudy } = this.props
        return (
            <div className="education-submitted">
                <div>{school}</div>
                <div>{study}</div>
                <div>{dateOfStudy}</div>
            </div>
        )
    }
}

export default EducationProps
