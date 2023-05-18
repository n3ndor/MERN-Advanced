import React, { useContext } from 'react';
import { UserContext } from './Wrapper';

const Navbar = () => {
    const { name } = useContext(UserContext);
    return (
        <div className="navbar">
            Hi, {name}!
        </div>
    );
}

export default Navbar;
