import React, { useState, createContext } from 'react';

export const UserContext = createContext();

const Wrapper = ({ children }) => {
    const [name, setName] = useState("User");
    return (
        <UserContext.Provider value={{ name, setName }}>
            {children}
        </UserContext.Provider>
    );
}

export default Wrapper;
