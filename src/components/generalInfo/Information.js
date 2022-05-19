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
            showForm: !this.state.showForm,
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
            <div className="box">
                <div className="title">General Information</div>
                {showForm ? (
                    <form onSubmit={this.submitInfo} className="info-form">
                        <label htmlFor="name" className="name">
                            Add Name:
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={this.handleChangeName}
                            placeholder="First and last name"
                        />
                        <label htmlFor="email" className="email">
                            Add Email:
                        </label>
                        <input
                            id="email"
                            type="text"
                            value={email}
                            onChange={this.handleChangeEmail}
                            placeholder="...@gmail.com"
                        />
                        <label htmlFor="phone-num" className="phone">
                            Add Phone:
                        </label>
                        <input
                            id="phone-num"
                            type="text"
                            value={phone}
                            onChange={this.handleChangePhone}
                            placeholder="Phone Number"
                        />
                        <button type="submit">Submit Information</button>
                    </form>
                ) : null}
                <button
                    type="button"
                    onClick={this.formToggle}
                    className="edit-btn"
                >
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
