import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar';

const Root = () => {
    return (
        <div>
        <NavBar></NavBar>
          <Outlet></Outlet>  
        </div>
    );
};

<NavBar></NavBar>
export default Root;<Outlet></Outlet>