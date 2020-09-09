import React, { useState, useEffect, useRef } from 'react';
import './searchBar.scss';
import '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = (props) => {
  const [display, setDisplay] = useState(false);
  const [search, setSearch] = useState('');
  const wrapperRef = useRef(null); // devuelve un objeto ref mutable cuya propiedad (.current) se inicializa con el argumento pasado
  const { arrayData, searchUserBy, table } = props;

  useEffect(() => {
    document.addEventListener('mousedown', clickOutside);
    console.log('user efects search box');
    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, []);

  const showlist = (e) => {
    setDisplay(!display);
    setSearch(e.target.value);
  };

  const clickOutside = (e) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(e.target)) {
      setDisplay(false);
    }
  };
  const list = [];
  arrayData.forEach((element) => {
    switch (table) {
      case 'users':
        list.push(element.email);
        list.push(element._id);
        return list;
      case 'products':
        list.push(element._id);
        list.push(element.name);
        return list;
      case 'orders':
        list.push(element._id);
        list.push(element.name);
        return list;
      default:
        list.push(element._id);
        return list;
    }
  });
  const userSelected = (value) => {
    setSearch(value);
    setDisplay(false);
  };

  return (
    <div className="wrapper" ref={wrapperRef}>
      <div className="search-box">
        <input
          placeholder="Search employee"
                // onClick={(e) => setDisplay(!display)}
          value={search}
                // onChange={(e) => setSearch(e.target.value)}
          onChange={(e) => showlist(e)}
        />
        <button
          type="submit"
          className="searchButton"
          onClick={(e) => searchUserBy(e)}
        >
          <SearchIcon />
        </button>

      </div>
      { display && (
      <ul className="suggestions">
        {
                    list
                      .filter((item) => item.indexOf(search) > -1)
                      .map((user, i) => (
                        <li key={i} onClick={() => userSelected(user)} tabIndex="0">
                          {' '}
                          {user}
                        </li>
                      ))
                }
      </ul>
      )}

    </div>
  );
};

export default SearchBar;
