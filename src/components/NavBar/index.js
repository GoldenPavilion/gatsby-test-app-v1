import React, { useEffect, useState } from 'react';
import { FaBars, Fatimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

const NavBar = () => {
    
    return(
        <div>
            <IconContext.Provider value={{ color: "#141414"}}>
                <Nav active={scroll} click={click}>

                </Nav>
            </IconContext.Provider>
        </div>
    )
}

export default NavBar