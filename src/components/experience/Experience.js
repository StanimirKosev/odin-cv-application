import React, { Component } from 'react'
import ExperienceProps from './ExperienceProps'

class Experience extends Component {
    constructor(props) {
        super(props)

        this.state = {
            company: '',
            companySubmit: '',
            position: '',
            positionSubmit: '',
            task: '',
            taskSubmit: '',
            dateStart: '',
            dateStartSubmit: '',
            dateEnd: '',
            dateEndSubmit: '',
            showForm: false,
        }
    }

    handleChangeCompany = (e) => {
        this.setState({
            company: e.target.value,
        })
    }

    handleChangePosition = (e) => {
        this.setState({
            position: e.target.value,
        })
    }

    handleChangeTask = (e) => {
        this.setState({
            task: e.target.value,
        })
    }

    handleChangeDateStart = (e) => {
        this.setState({
            dateStart: e.target.value,
        })
    }

    handleChangeDateEnd = (e) => {
        this.setState({
            dateEnd: e.target.value,
        })
    }

    submitExperience = (e) => {
        e.preventDefault()
        this.setState({
            companySubmit: this.state.company,
            positionSubmit: this.state.position,
            taskSubmit: this.state.task,
            dateStartSubmit: this.state.dateStart,
            dateEndSubmit: this.state.dateEnd,
            showForm: !this.state.showForm,
        })
    }

    toggleForm = () => {
        this.setState({
            showForm: !this.state.showForm,
        })
    }

    render() {
        const {
            company,
            companySubmit,
            position,
            positionSubmit,
            task,
            taskSubmit,
            dateStart,
            dateStartSubmit,
            dateEnd,
            dateEndSubmit,
            showForm,
        } = this.state
        return (
            <div>
                {showForm ? (
                    <form onSubmit={this.submitExperience}>
                        <div>Educational Experience:</div>
                        <label htmlFor="company">Company Name:</label>
                        <input
                            type="text"
                            id="company"
                            value={company}
                            onChange={this.handleChangeCompany}
                        />
                        <label htmlFor="position">Position Title:</label>
                        <input
                            type="text"
                            id="school"
                            value={position}
                            onChange={this.handleChangePosition}
                        />
                        <label htmlFor="task">Main Task of Job:</label>
                        <input
                            type="text"
                            id="task"
                            value={task}
                            onChange={this.handleChangeTask}
                        />
                        <input
                            type="date"
                            value={dateStart}
                            onChange={this.handleChangeDateStart}
                        />
                        <input
                            type="date"
                            value={dateEnd}
                            onChange={this.handleChangeDateEnd}
                        />
                        <button type="submit">Submit</button>
                    </form>
                ) : null}
                <button type="button" onClick={this.toggleForm}>
                    + Educational Experience
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
}

export default Experience
