import React, { useState } from "react";
import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {

    //let [isActive, setActive] = useState(false);

    let isActive:boolean = true;

    let activeStyle = {
        color: "red",
    };

    let noStyle = {
        color: "black",
    };    

    return (
        <>
            <nav>
                <NavLink 
                    to="/"
                    style={({isActive}) =>
                        isActive ? activeStyle : noStyle
                    }>Home</NavLink>
                <NavLink 
                    to="/Misdemeanours"
                    style={({isActive}) =>
                        isActive ? activeStyle : noStyle
                    }>Misdemeanours</NavLink>
                <NavLink 
                    to="/Confess"
                    style={({isActive}) =>
                        isActive ? activeStyle : noStyle
                    }>Confess To Us</NavLink>
            </nav>
            <Outlet />
        </>
    )
}

export default Layout