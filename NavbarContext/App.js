// The Context API in React is a mechanism to share data across 
// the component tree without passing it manually through props. 
// It's useful when certain data needs to be accessible 
// by many components at different nesting levels, 
// serving as a global state manager.

import React from 'react';
import Wrapper from './Wrapper';
import Navbar from './Navbar';
import FormWrapper from './FormWrapper';

function App() {
    return (
        <Wrapper>
            <Navbar />
            <FormWrapper />
        </Wrapper>
    );
}

export default App;