import React from 'react'

export default function InformationProps({ name, email, phone }) {
    return (
        <div className="info-submitted">
            <div className="submitted-text">{name}</div>
            <div className="submitted-text">{email}</div>
            <div className="submitted-text">{phone}</div>
        </div>
    )
}
