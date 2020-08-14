import React from 'react';
import NavBar from '../../Components/NavBar'
import {
    useRouteMatch
  } from "react-router-dom";

export default function Home() {
    let { path, url } = useRouteMatch();
        return (
            <div>
                <NavBar url={url} path={path}> </NavBar>
           </div>
        )
}
