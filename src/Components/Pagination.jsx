import React from 'react';
import './Components.scss';

export default function Pagination() {
  return (
    <div className="paginationComponent">
      <ul className="pagination">
        <li><a href="#">«</a></li>
        <li><a href="?page=1">1</a></li>
        <li><a className="active" href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#">6</a></li>
        <li><a href="#">7</a></li>
        <li><a href="#">»</a></li>
      </ul>
    </div>
  );
}
