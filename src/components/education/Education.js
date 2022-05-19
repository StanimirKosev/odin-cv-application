import React, { Component } from 'react'
import EducationProps from './EducationProps'

class Education extends Component {
    constructor(props) {
        super(props)

        this.state = {
            school: '',
            schoolSubmit: '',
            study: '',
            studySubmit: '',
            dateOfStudy: '',
            dateOfStudySubmit: '',
            showForm: false,
        }
    }

    handleChangeSchool = (e) => {
        this.setState({
            school: e.target.value,
        })
    }

    handleChangeStudy = (e) => {
        this.setState({
            study: e.target.value,
        })
    }

    handleChangeDate = (e) => {
        this.setState({
            dateOfStudy: e.target.value,
        })
    }

    submitEducation = (e) => {
        e.preventDefault()
        this.setState({
            schoolSubmit: this.state.school,
            studySubmit: this.state.study,
            dateOfStudySubmit: this.state.dateOfStudy,
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
            school,
            schoolSubmit,
            study,
            studySubmit,
            dateOfStudy,
            dateOfStudySubmit,
            showForm,
        } = this.state
        return (
            <div>
                {showForm ? (
                    <form onSubmit={this.submitEducation}>
                        <div>Educational Experience:</div>
                        <label htmlFor="school">School Name:</label>
                        <input
                            type="text"
                            id="school"
                            value={school}
                            onChange={this.handleChangeSchool}
                        />
                        <label htmlFor="study">Title of Study:</label>
                        <input
                            type="text"
                            id="study"
                            value={study}
                            onChange={this.handleChangeStudy}
                        />
                        <input
                            type="date"
                            value={dateOfStudy}
                            onChange={this.handleChangeDate}
                        />
                        <button type="submit">Submit</button>
                    </form>
                ) : null}
                <button type="button" onClick={this.toggleForm}>
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
}

export default Education
