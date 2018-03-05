import React from 'react';
import './person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}> {props.children}, I am {props.name} and I am {props.age} years old! </p>
            <p>
                <input type="text" onChange={props.change} value={props.name} />
            </p>
        </div>
    )
}

export default person;
