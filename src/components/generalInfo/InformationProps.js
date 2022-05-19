import React, { Component } from 'react'

class InformationProps extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { name, email, phone } = this.props
        return (
            <div className="info-submitted">
                <div className="name">{name}</div>
                <div className="email">{email}</div>
                <div className="phone-num">{phone}</div>
            </div>
        )
    }
}

export default InformationProps
