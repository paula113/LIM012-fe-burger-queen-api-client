import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const Column = (props) => {
  const { info } = props;
  const arrayInfo = Object.values(info);
  return (
    <tr>
      {arrayInfo.map((info, index) => <td key={index}>{info}</td>)}
      <td>
        <FontAwesomeIcon icon={faTrash} />
        <FontAwesomeIcon icon={faEdit} />
      </td>
    </tr>
  );
};

export default Column;
