import React, { Component } from 'react'
import './Components.scss'


export default class Table extends Component {
    render() {
        const { info } = this.props;
        return (
            <table className="tableComponent">
                <tbody>
                    <tr>
                    {info.map((info, index) => <th key={index}>{info}</th>)}
                    </tr>
                </tbody>
            </table>
            )
    }
}
