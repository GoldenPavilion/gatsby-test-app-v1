import React, { useEffect, useState } from 'react';
import { FaBars, Fatimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

const NavBar = () => {
    
    const [click, setClick] = useState(false)
    const [scroll, setScroll] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    useEffect(() => {
        changeNav()
        window.addEventListener("scroll", changeNav)
    }, [])

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