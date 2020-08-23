import React from 'react';
import './Components.scss';

export default function Pagination(props) {
  const { prev, next } = props;
  return (
    <div className="paginationComponent">
      <ul className="pagination">
        <li><a onClick={prev}>«</a></li>
        <li><a onClick={next}>»</a></li>
      </ul>
    </div>
  );
}
