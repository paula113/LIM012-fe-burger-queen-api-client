import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const Column = (prop) => {
  // const token = localStorage.getItem('token');
  const {
    data, putData, deleteBy, type,
  } = prop;
  // delete products.image;
  const headers = Object.values(data);

  return (
    <tr>
      {type === 'users' ? headers.map((dataHeader) => <td key={dataHeader}>{dataHeader}</td>)
        : (
          <>
            <td><img src={data.image} alt="" /></td>
            {headers.map((header) => <td key={header}>{header}</td>)}
          </>
        )}
      <td>
        <FontAwesomeIcon icon={faTrash} onClick={() => { deleteBy(data); }} />
        <FontAwesomeIcon icon={faEdit} onClick={() => putData(data)} />
      </td>
    </tr>
  );
};

export default Column;
