import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit} from '@fortawesome/free-solid-svg-icons'

export default class Column extends Component {
    render() {
        const { info } = this.props;
        const arrayInfo = Object.values(info);
        console.log(arrayInfo);
        return (
                <tr >
                    {arrayInfo.map((info,index) => <td key={info+index}>{info}</td>)}
                    <td><FontAwesomeIcon icon={faTrash} /><FontAwesomeIcon icon={faEdit} /></td>
                </tr>
            )
    }
}
