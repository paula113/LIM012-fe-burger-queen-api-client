import React, { Component } from 'react'
import './Components.scss'
import Column from './Column';
export default class Table extends Component {
    render() {
        const { info , columns } = this.props;
        return (
            <table className="tableComponent">
                <thead>
                    <tr>
                    {info.map((info, index) => <th key={index}>{info}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {columns.map((column) => <Column key={column._id} info={column}></Column>)}
                </tbody>
            </table>
        );
    }
}
