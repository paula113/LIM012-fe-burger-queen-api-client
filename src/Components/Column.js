import React, { Component } from 'react'

export default class Column extends Component {
    render() {
        const { info } = this.props
        return (
                <tr >
                    {info.map((info) => <td>{info}</td>)}
                </tr>
            )
    }
}
