import React from 'react';
import TextInput from 'ps-react/TextInput';

/** Text input with optional */
export default function ExampleOptional() {
    return (
        <TextInput  
            htmlId="username" 
            label="First name"
            name="username" 
            onChange={() => {}}
        /> 
    )
}