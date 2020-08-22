import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const Column = (prop) => {
  // const token = localStorage.getItem('token');
  const { data } = prop;
  console.log(data);
  const arrayData = Object.values(data);
  // const toEdit = {
  //   roles: { admin: true },
  // };
  return (
    <tr>
      {arrayData.map((data) => <td >{data}</td>)}
      <td>
        <FontAwesomeIcon icon={faTrash} />
        <FontAwesomeIcon icon={faEdit} />
      </td>
    </tr>
  );
};

export default Column;
