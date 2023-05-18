import React, { useContext } from 'react';
import { UserContext } from './Wrapper';

const Form = () => {
    const { setName } = useContext(UserContext);
    return (
        <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
    );
}

export default Form;