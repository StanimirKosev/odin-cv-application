import React, { Component } from 'react'

class ExperienceProps extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { company, position, task, dateStart, dateEnd } = this.props
        return (
            <div>
                <div>{company}</div>
                <div>{position}</div>
                <div>{task}</div>
                <div>{dateStart}</div>
                <div>{dateEnd}</div>
            </div>
        )
    }
}

export default ExperienceProps
