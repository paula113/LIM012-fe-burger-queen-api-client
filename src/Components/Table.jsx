import React from 'react';
import './Components.scss';
import Column from './Column';

const Table = (props) => {
  const { table , arrayData, putData, deleteBy} = props;
  //if(page.totalPages){
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
  return (
    <table className="tableComponent">
      <thead>
        <tr>
          {(table.head).map((element, i) => <th key={i} >{element}</th>)}
        </tr>
      </thead>
      <tbody>
        {arrayData.map((data) => <Column type={table.type}key={data._id} data={data} putData={putData} deleteBy={deleteBy}/>)}
      </tbody>
    </table>
  );
};

export default Table;
