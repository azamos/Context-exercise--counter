import React, { useState } from 'react';

const context = React.createContext();
const { Provider, Consumer } = context;

 export default  function CounterContext({children}){
    const [counter, setCounter] = useState(0);
    const inc = () => {
        setCounter(counter+1);
    }
    const dec = () => {
        setCounter(counter-1);
    }
    const state = {
        counter
    };
    
    const actions = {
        inc,
        dec
    }

    return (
        <Provider value = {{...state,...actions}}>{children}</Provider>
    );
}

export {Consumer,context};