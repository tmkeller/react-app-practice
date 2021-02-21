import React from 'react';
import Form from "./Form";
import "./style.css";

export default function Card( props ) {
    return (
        <div className="myCards" >
            <h2>Name: { props.data.name }</h2>
            <Form data={ props.data } onChange={ props.onChange } />
            <hr/>
        </div>
    )
}