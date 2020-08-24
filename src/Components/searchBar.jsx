
import React, { useState, useEffect, useRef } from 'react';
import './searchBar.scss'
import '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = (props) => {
    const [display, setDisplay] = useState(false);
    const [search, setSearch] = useState('');
    const wrapperRef = useRef(null); // devuelve un objeto ref mutable cuya propiedad (.current) se inicializa con el argumento pasado
    const { arrayData, searchUserBy } = props;

    useEffect(()=>{

        document.addEventListener('mousedown', clickOutside);
console.log('user efects search box');
        return () => {
            document.removeEventListener('mousedown', clickOutside);
        }
    },[]);

    const clickOutside = (e) =>{
        const {current: wrap} = wrapperRef;
        if (wrap && !wrap.contains(e.target)) {
            setDisplay(false)
        }

    };

    const userSelected = (value) => {
        setSearch(value);
        setDisplay(false);
    }

    return (
        <div ref={wrapperRef}>
            <div className='search-box'>
            <input 
                placeholder={'Search employee'} 
                onClick={(e) => setDisplay(!display)}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button 
                type="submit" 
                className="searchButton" 
                onClick={(e) => searchUserBy(e)}>
                <SearchIcon />
            </button>

            </div>
            { display &&  (<ul>
                {
                    arrayData
                    .filter(({email}) => email.indexOf(search) > -1)
                    .map((user, i) => <li key={i} onClick={() => userSelected(user.email)}> {user._id}  {user.email}</li>)
                }
            </ul>)}
            
        </div>
);
}

export default SearchBar