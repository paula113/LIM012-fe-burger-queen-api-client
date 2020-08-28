import React from 'react';
import './Components.scss';

export default function Pagination(props) {
  const { page, currentPage } = props;
  const pages = Array.from(Array(page.total).keys());
  return (
    <div className="paginationComponent">
      <ul className="pagination">
        {/* <li><a onClick={prev}>«</a></li> */}
        {pages.map((num) => <li key={num} onClick={() => currentPage(parseInt(num)+1)}>{parseInt(num)+1}</li> )}
        {/* <li><a onClick={next}>»</a></li> */}
      </ul>
    </div>
  );
}
