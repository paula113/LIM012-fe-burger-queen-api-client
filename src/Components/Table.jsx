import React from 'react';
import './Components.scss';
import Column from './Column';

const Table = (props) => {
  const {
    table, arrayData, putData, deleteBy,
  } = props;
  // if(page.totalPages){
  //   return (
  //     <table className="tableComponent">
  //       <thead>
  //         <tr>
  //           {head.map((headInfo, i) => <th key={i} >{headInfo}</th>)}
  //         </tr>
  //       </thead>
  //       <tbody>
  //         ERROR
  //       </tbody>
  //     </table>
  //   );
  // }
  console.log(table);
  console.log(arrayData);
  return (
    <table className="tableComponent">
      <thead>
        <tr>
          {(table.head).map((element) => <th key={element}>{element}</th>)}
        </tr>
      </thead>
      <tbody>
        {arrayData
          ? arrayData.map((data) => <Column type={table.type} key={data.id} data={data} putData={putData} deleteBy={deleteBy} />)
          : <span>UPS! Somthing happend</span>}
      </tbody>
    </table>
  );
};

export default Table;
