import React from 'react';
import './Components.scss';
import Column from './Column';

const Table = (props) => {
  const { head, arrayData } = props;
  return (
    <table className="tableComponent">
      <thead>
        <tr>
          {head.map((headInfo) => <th>{headInfo}</th>)}
        </tr>
      </thead>
      <tbody>
        {arrayData.map((data) => <Column key={data._id} data={data}/>)}
      </tbody>
    </table>
  );
};

export default Table;
