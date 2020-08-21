import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const Column = (prop) => {
  const token = localStorage.getItem('token');
  const { info, put } = prop;
  const arrayInfo = Object.values(info);
  const toEdit = {
    roles: { admin: true },
  };
  return (
    <tr>
      {arrayInfo.map((information) => <td key={information._id}>{information}</td>)}
      <td>
        <FontAwesomeIcon icon={faTrash} />
        <FontAwesomeIcon icon={faEdit} onClick={() => put('email')} />
      </td>
    </tr>
  );
};

export default Column;
