import styled from 'styled-components';
import {DiScala} from "react-icons/Di";

export const Nav = styled.nav`
    background: ${({ active }) => active ? "#fff" : "linear-gradient(to bottom, rgba(255, 255, 255,0.9) 0%, rgba(255, 255, 255, 0) 100%)"};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 999;

    @media screen and (max-width: 960px) {
        background: ${({ click }) => (click ? "#fff" : "transparent")};
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%
    max-width: 1000px;
`

export const NavLogo = styled(Link)`
    color: #141414;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
`

export const NavIcon = styled(DiScala)`
    margin: 0 0.5rem 0 2rem;
`