import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const Column = (prop) => {
  // const token = localStorage.getItem('token');
  const { data , putData, deleteBy, type} = prop;
  // delete products.image;
  const headers =  Object.values(data);

  return (
    <tr>
      {type === 'users' ? headers.map((data) => 
      <td key={data}>{data}</td>) 
      :(
        <React.Fragment>
          <td><img src={data.image}/></td>
        {headers.map((header) =>
        <td key={data}>{header}</td>)}
        </React.Fragment>)}
      <td>
        <FontAwesomeIcon icon={faTrash} onClick={() => { deleteBy(data) }}/>
        <FontAwesomeIcon icon={faEdit} onClick={() => putData(data) }/>
      </td>
    </tr>
  );
};

export default Column;
