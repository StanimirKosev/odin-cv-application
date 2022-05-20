import React, { useState } from 'react'
import InformationProps from './InformationProps'

export default function Information() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [nameSubmit, setNameSubmit] = useState('')
    const [emailSubmit, setEmailSubmit] = useState('')
    const [phoneSubmit, setPhoneSubmit] = useState('')
    const [showForm, toggleShowForm] = useState(false)

    return (
        <div className="box">
            <div className="title">General Information</div>
            {showForm ? (
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        setNameSubmit(`Name: ${name}`)
                        setEmailSubmit(`Email: ${email}`)
                        setPhoneSubmit(`Phone Number: ${phone}`)
                        toggleShowForm(!showForm)
                    }}
                    className="info-form"
                >
                    <label htmlFor="name" className="name">
                        Add Name:
                    </label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="First and last name"
                        required
                    />
                    <label htmlFor="email" className="email">
                        Add Email:
                    </label>
                    <input
                        id="email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="...@gmail.com"
                        required
                    />
                    <label htmlFor="phone-num" className="phone">
                        Add Phone:
                    </label>
                    <input
                        id="phone-num"
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone Number"
                        required
                    />
                    <button type="submit">Submit Information</button>
                </form>
            ) : null}
            <button
                type="button"
                onClick={() => toggleShowForm(!showForm)}
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
