import React,{useContext} from 'react';
import {context} from '../counterContext';

export default function Counter(){
    const {counter,inc,dec} = useContext(context);
    return (
        <div>
            <button onClick = {inc}>+</button>
            <button onClick = {dec}>-</button>
            <h1>value is {counter}</h1>
        </div>
    );
}