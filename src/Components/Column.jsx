import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const Column = (prop) => {
  const { info } = prop;
  const arrayInfo = Object.values(info);
  return (
    <tr>
      {arrayInfo.map((information, index) => <td key={index}>{information}</td>)}
      <td>
        <FontAwesomeIcon icon={faTrash} />
        <FontAwesomeIcon icon={faEdit} />
      </td>
    </tr>
  );
};

export default Column;
