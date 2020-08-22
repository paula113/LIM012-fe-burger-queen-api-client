import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const Column = (prop) => {
  // const token = localStorage.getItem('token');
  const { data , putData} = prop;
  const arrayData = Object.values(data);
  
  return (
    <tr>
      {arrayData.map((data) => <td key={data}>{data}</td>)}
      <td>
        <FontAwesomeIcon icon={faTrash} />
        <FontAwesomeIcon icon={faEdit} onClick={() => putData(data) }/>
      </td>
    </tr>
  );
};

export default Column;
