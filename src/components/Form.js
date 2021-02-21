import React from 'react';

export default function Form( props ) {
    return (
        <form>
            <label>Name: </label>
            <input 
                name="name" 
                type="text"
                onChange={ props.onChange }
                data-id={ props.data.id }
                value={ props.data.name }
            />
            <label>Role: </label>
            <input 
                name="role" 
                type="text"
                onChange={ props.onChange }
                data-id={ props.data.id }
                value={ props.data.role }
            />
            <label>Hobby: </label>
            <input 
                name="hobby" 
                type="text"
                onChange={ props.onChange }
                data-id={ props.data.id }
                value={ props.data.hobby }
            />
        </form>
    )
}