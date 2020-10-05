import React from 'react';
import './Components.scss';

export default function Pagination(props) {
  const {
    page, setPage,
  } = props;
  const mapPages = Array.from(Array(page.total).keys());
  return (
    <div className="paginationComponent">
      {
        page.current === 1
          ? (
            mapPages.map((item) => {
              switch (item) {
                case (mapPages.length - 1):
                  return <button key={item} type="button" onClick={() => setPage((pages) => ({ ...pages, current: (page.current + 1) }))}>»</button>;
                default:
                  return <button key={item} type="button" onClick={() => setPage((pages) => ({ ...pages, current: (item + 1) }))}>{item + 1}</button>;
              }
            })

          )
          : (
            mapPages.map((item) => {
              switch (item) {
                case 0:
                  return <button key={item} type="button" onClick={() => setPage((pages) => ({ ...pages, current: (page.current - 1) }))}>«</button>;
                case (mapPages.length - 1):
                  return <button key={item} type="button" onClick={() => setPage((pages) => ({ ...pages, current: (page.current + 1) }))}>»</button>;
                default:
                  return <button key={item} type="button" onClick={() => setPage((pages) => ({ ...pages, current: (item + 1) }))}>{item + 1}</button>;
              }
            })
          )

      }

    </div>
  );
}
//
