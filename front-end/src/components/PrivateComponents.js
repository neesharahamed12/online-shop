import React from "react";
import {Navigate,Outlet} from 'react-router-dom';

const PerivateComponent =()=>{
    const auth = localStorage.getItem('user');

    return auth?<Outlet />:<Navigate to ="/signup" />

}
export default PerivateComponent;