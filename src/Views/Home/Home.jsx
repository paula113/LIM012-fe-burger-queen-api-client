import React from 'react';
import {
  useRouteMatch,
} from 'react-router-dom';
import NavBar from '../../Components/NavBar';

export default function Home() {
  const { path, url } = useRouteMatch();
  return (
    <div>
      <NavBar url={url} path={path}> </NavBar>
    </div>
  );
}
