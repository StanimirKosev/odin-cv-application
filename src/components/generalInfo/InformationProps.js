import React, { Component } from 'react'

class InformationProps extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { name, email, phone } = this.props
        return (
            <div>
                <div className="name">{name}</div>
                <div className="email">{email}</div>
                <div className="phone-num">{phone}</div>
            </div>
        )
    }
}

export default InformationProps
