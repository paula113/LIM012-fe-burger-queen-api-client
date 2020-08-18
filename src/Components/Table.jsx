import React from 'react';
import './Components.scss';
import Column from './Column';

const Table = (props) => {
  const { info, columns } = props;
  return (
    <table className="tableComponent">
      <thead>
        <tr>
          {info.map((info, index) => <th key={index}>{info}</th>)}
        </tr>
      </thead>
      <tbody>
        {columns.map((column) => <Column key={column._id} info={column} />)}
      </tbody>
    </table>
  );
};

export default Table;
