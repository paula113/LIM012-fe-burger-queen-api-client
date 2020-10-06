import React from 'react';
import './Components.scss';
import Column from './Column';

const Table = (props) => {
  const {
    table, arrayData, putData, deleteBy, setUpdateIcon,
  } = props;
  return (
    <table className="tableComponent">
      <thead>
        <tr>
          {(table.head).map((element) => <th key={element}>{element}</th>)}
        </tr>
      </thead>
      <tbody>
        {arrayData
          ? arrayData.map((data) => (
            <Column
              type={table.type}
              key={data._id}
              data={data}
              putData={putData}
              deleteBy={deleteBy}
              setUpdateIcon={setUpdateIcon}
            />
          ))
          : <span>UPS! Somthing wrong happend</span>}
      </tbody>
    </table>
  );
};

export default Table;
