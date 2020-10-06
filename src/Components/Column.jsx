import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const Column = (prop) => {
  const {
    data, putData, deleteBy, type,
  } = prop;
  const headers = Object.values(data);

  return (
    <tr>
      <td className="td-icon">
        <FontAwesomeIcon className="delete" icon={faTrash} onClick={() => { deleteBy(data); }} />
      </td>
      {type === 'users' ? headers.map((dataHeader) => <td key={dataHeader}>{dataHeader}</td>)
        : (
          <>
            <td><img src={data.image} alt="" /></td>
            {headers.map((header) => <td key={header}>{header}</td>)}
          </>
        )}
      <td className="td-icon">
        <FontAwesomeIcon
          className="edit"
          icon={faEdit}
          onClick={() => {
            putData(data);
          }}
        />
      </td>
    </tr>
  );
};

export default Column;
