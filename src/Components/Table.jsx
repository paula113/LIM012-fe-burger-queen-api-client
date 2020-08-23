import React from 'react';
import './Components.scss';
import Column from './Column';

const Table = (props) => {
  const { head, arrayData, putData, deleteBy, page } = props;
  if(page === 0 ){
    return (
      <table className="tableComponent">
        <thead>
          <tr>
            {head.map((headInfo, i) => <th key={i} >{headInfo}</th>)}
          </tr>
        </thead>
        <tbody>
          ERROR
        </tbody>
      </table>
    );
  }
  return (
    <table className="tableComponent">
      <thead>
        <tr>
          {head.map((headInfo, i) => <th key={i} >{headInfo}</th>)}
        </tr>
      </thead>
      <tbody>
        {arrayData.map((data) => <Column key={data._id} data={data} putData={putData} deleteBy={deleteBy}/>)}
      </tbody>
    </table>
  );
};

export default Table;
