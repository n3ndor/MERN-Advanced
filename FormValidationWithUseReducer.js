// useReducer is a hook in React that is used for state management. It is similar to useState but is more preferable in certain cases, 
// especially when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.
// useReducer allows you to handle state transitions in a more organized manner, making your code easier to understand and debug, as it abstracts the state changes into a reducer function.
// Here is a quick breakdown of how useReducer works:
// Initial state: You start by defining the initial state of your component.
// Reducer function: Then, you define a reducer function. This function accepts the current state and an action, and returns a new state. 
// The action is an object that contains information about what happened and it usually has a type property (to describe the action) and a payload property (to carry some data).
// Dispatch function: When you want to change the state, you dispatch an action using the dispatch function provided by useReducer. 
// This action is passed to the reducer function, which calculates the new state.
// Component re-renders: After the new state is returned by the reducer, the component re-renders with this new state.
// Here are some reasons why useReducer is beneficial:
// Better organization: useReducer helps keep related state logic bundled together, making the code easier to maintain.
// Predictable state updates: Since all state updates are processed through the reducer, it's easy to predict how an action will change the state.
// More efficient performance for components with complex state: When using useState, each state variable would cause a re-render.
// With useReducer, a re-render is only caused when the state object produced by the reducer changes.
// Easier testing: Reducer functions can be easily isolated and tested since they are pure functions.
// So, in essence, useReducer helps manage more complex state logic in React components, aiding maintainability and efficiency of your code.


import React, { useReducer } from 'react';

const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_FIRST_NAME':
            return {
                ...state,
                firstName: {
                    value: action.payload,
                    error: action.payload.length < 1 ? 'First name is required' : null,
                }
            }
        case 'SET_LAST_NAME':
            return {
                ...state,
                lastName: {
                    value: action.payload,
                    error: action.payload.length < 1 ? 'Last name is required' : null,
                }
            }
        case 'SET_EMAIL':
            const emailRegEx = /\S+@\S+\.\S+/;
            return {
                ...state,
                email: {
                    value: action.payload,
                    error: !emailRegEx.test(action.payload) ? 'Email is invalid' : null,
                }
            }
        default:
            return state;
    }
};

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (e, type) => {
        dispatch({ type, payload: e.target.value });
    }

    return (
        <form>
            <label>First Name</label>
            <input
                value={state.firstName.value}
                onChange={e => handleChange(e, 'SET_FIRST_NAME')}
            />
            {state.firstName.error && <p className="error">{state.firstName.error}</p>}

            <label>Last Name</label>
            <input
                value={state.lastName.value}
                onChange={e => handleChange(e, 'SET_LAST_NAME')}
            />
            {state.lastName.error && <p className="error">{state.lastName.error}</p>}

            <label>Email</label>
            <input
                value={state.email.value}
                onChange={e => handleChange(e, 'SET_EMAIL')}
            />
            {state.email.error && <p className="error">{state.email.error}</p>}
        </form>
    );
}
