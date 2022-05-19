import React, { Component } from 'react'
import InformationProps from './InformationProps'

class Information extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            nameSubmit: '',
            email: '',
            emailSubmit: '',
            phone: '',
            phoneSubmit: '',
            showForm: false,
        }
    }

    handleChangeName = (e) => {
        this.setState({
            name: e.target.value,
        })
    }

    handleChangeEmail = (e) => {
        this.setState({
            email: e.target.value,
        })
    }

    handleChangePhone = (e) => {
        this.setState({
            phone: e.target.value,
        })
    }

    submitInfo = (e) => {
        e.preventDefault()
        this.setState({
            nameSubmit: this.state.name,
            emailSubmit: this.state.email,
            phoneSubmit: this.state.phone,
            showForm: !this.state.showForm, // hide form on submission
        })
    }

    formToggle = () => {
        this.setState({
            showForm: !this.state.showForm,
        })
    }

    render() {
        const {
            name,
            email,
            phone,
            nameSubmit,
            emailSubmit,
            phoneSubmit,
            showForm,
        } = this.state
        return (
            <div>
                {showForm ? (
                    <form onSubmit={this.submitInfo}>
                        <div>Personal Information</div>
                        <label htmlFor="name">Add Name:</label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={this.handleChangeName}
                        />
                        <label htmlFor="email">Add Email:</label>
                        <input
                            id="email"
                            type="text"
                            value={email}
                            onChange={this.handleChangeEmail}
                        />
                        <label htmlFor="phone-num">Add Phone:</label>
                        <input
                            id="phone-num"
                            type="text"
                            value={phone}
                            onChange={this.handleChangePhone}
                        />
                        <button type="submit">Submit</button>
                    </form>
                ) : null}
                <button type="button" onClick={this.formToggle}>
                    + General Information
                </button>
                <InformationProps
                    name={nameSubmit}
                    email={emailSubmit}
                    phone={phoneSubmit}
                />
            </div>
        )
    }
}

export default Information
