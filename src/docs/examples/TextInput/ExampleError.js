import React from 'react';
import TextInput from 'ps-react/TextInput';

/** Required TextBox with error */
export default class ExampleError extends React.Component {
    render() {
        return (
            <TextInput
                htmlId="Example-optional"
                label="First Name"
                name="fistname"
                onChange={() => { }}
                required
                error="First name is required."
            />
        )
    }
}
