import React from 'react';
import './Components.scss';
import Column from './Column';

const Table = (props) => {
  const { info } = props;
  return (
    <table className="tableComponent">
      <thead>
        <tr>
          {info.map((infot, index) => <th key={index}>{infot}</th>)}
        </tr>
      </thead>
      <tbody>
        {/* {columns.map((column) => <Column key={column._id} info={column} put={put}/>)} */}
      </tbody>
    </table>
  );
};

export default Table;
